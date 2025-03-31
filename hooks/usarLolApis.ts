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

export function useLolData(puuid?: string): LolData {
  const [data, setData] = useState<LolData>({
    loading: false,
    error: null
  });

  useEffect(() => {
    async function getData() {
      if (!puuid) return;
      try {
        setData(prev => ({ ...prev, loading: true }));
        
        // Obtener información del summoner
        const summoner = await fetchSummonerInfo(puuid);

        // Obtener champion masteries
        const masteries = await fetchChampionMastery(puuid);
        
        let topChampion: ChampionMastery | undefined, 
            championName: string | null | undefined, 
            championImageUrl: string | null | undefined;
        // Determinar el campeón con mayor maestría
        if (masteries.length > 0) {
          topChampion = masteries[0];

          // Obtener el nombre del campeón
          const { name, imageUrl } = topChampion ? getChampionDataById(topChampion.championId) : { name: null, imageUrl: null };
          championName = name;
          championImageUrl = imageUrl;
        }
        
        setData(prev => ({ 
          ...prev, 
          summoner, 
          masteries, 
          topChampion, 
          championName, 
          championImageUrl 
        }));
      } catch (err) {
        if (err instanceof Error) {
          setData(prev => ({ ...prev, error: err.message || 'Error al cargar datos' }));
        } else {
          setData(prev => ({ ...prev, error: 'Error al cargar datos' }));
        }
      } finally {
        setData(prev => ({ ...prev, loading: false }));
      }
    }
    
    getData();
  }, [puuid]);

  return data;
}