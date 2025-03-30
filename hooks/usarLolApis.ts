import { useEffect, useState } from 'react';
import { getChampionDataById } from '../api/ChampionApi';
import { fetchChampionMastery, fetchSummonerInfo } from '../api/RiotApi';

export interface SummonerInfo {
  name: string;
  summonerLevel: number;
}

export interface ChampionMastery {
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  lastTimePlayed?: Date;
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

export function useLolData(puuid?: string, apiKey?: string): LolData {
  const [data, setData] = useState<LolData>({});


  useEffect(() => {
    async function getData() {
      if (!puuid || !apiKey) return;
      try {
        setData({ ...data, loading: true });
        // Obtener información del summoner
        const summoner: SummonerInfo = await fetchSummonerInfo(puuid);

        // Obtener champion masteries
        const masteries: ChampionMastery[] = await fetchChampionMastery(puuid);
        let topChampion: ChampionMastery | null | undefined, championName: string | null | undefined, championImageUrl: string | null | undefined;
        // Determinar el campeón con mayor maestría
        if (masteries.length > 0) {

          topChampion = masteries[0];
          topChampion.lastTimePlayed = new Date(topChampion.lastPlayTime);


          // Obtener el nombre del campeón
          let { name, imageUrl } = getChampionDataById(topChampion.championId);
          championName = name;
          championImageUrl = imageUrl;
        }
        setData(prev => ({ ...prev, championName, topChampion, summoner, masteries, championImageUrl }));
      } catch (err) {
        if (err instanceof Error) {
          setData({ error: err.message || 'Error al cargar datos' });
        } else {
          setData({ error: 'Error al cargar datos' });
        }
      } finally {
        setData(prev => ({ ...prev, loading: false }));
      }
    }
    getData();
  }, [puuid, apiKey]);

  return data as LolData;
}