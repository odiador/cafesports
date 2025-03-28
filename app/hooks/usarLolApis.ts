import { useState, useEffect } from 'react';
import { fetchChampionMastery, fetchSummonerInfo } from '../api/RiotApi';
import { getChampionNameById } from '../api/ChampionApi';
import { getChampionImageUrl } from '../api/ChampionPhotoApi';

export interface SummonerInfo {
  name: string;
  summonerLevel: number;
}

export interface ChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
}

interface LolData {
  summoner?: SummonerInfo | null,
  masteries?: ChampionMastery[] | null,
  topChampion?: ChampionMastery | null,
  championName?: string | null,
  championImageUrl?: string | null,
  loading?: boolean,
  error?: string | null
}

export function useLolData(puuid: string, apiKey: string): LolData {
  const [data, setData] = useState<LolData>({});


  useEffect(() => {
    async function getData() {
      try {
        setData({ ...data, loading: true });
        // Obtener información del summoner
        const summoner: SummonerInfo = await fetchSummonerInfo(puuid, apiKey);

        // Obtener champion masteries
        const masteries: ChampionMastery[] = await fetchChampionMastery(puuid, apiKey);
        let topChampion, championName, championImageUrl;
        // Determinar el campeón con mayor maestría
        if (masteries.length > 0) {
          topChampion = masteries.reduce((prev, curr) =>
            curr.championPoints > prev.championPoints ? curr : prev
          );

          // Obtener el nombre del campeón
          championName = await getChampionNameById(topChampion.championId);

          // Obtener la URL de la imagen del campeón
          championImageUrl = await getChampionImageUrl(topChampion.championId);
        }
        setData({ ...data, championName, topChampion, summoner, masteries, championImageUrl});
      } catch (err: any) {
        setData({ error: err.message || 'Error al cargar datos' });
      } finally {
        setData({ ...data, loading: false });
      }
    }
    getData();
  }, [puuid, apiKey]);

  return data as LolData;
}