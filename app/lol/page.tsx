"use client";

import Image from 'next/image';
import { lolplayers, type LOLPlayerInfo } from '@/utils/consts';
import { useLolData } from '@/hooks/usarLolApis';
import Embeds from '../../components/Embeds';

export default function LolPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex-1 flex flex-col items-center mb-8">
        <Image
          className="w-80 h-fit"
          src={"/lol.webp"}
          alt={"Poster de League of Legends"}
          width={400}
          height={100}
        />
      </div>

      {/* Componente de streaming */}
      <div className="w-full max-w-3xl px-4 mx-auto mb-8">
        <Embeds live={true} />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Jugadores de League of Legends</h2>
      <LolPlayersInfo />
    </div>
  );
}

function LolPlayersInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {lolplayers.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

function PlayerCard({ player }: { player: LOLPlayerInfo }) {
  const { 
    summoner, 
    topChampion, 
    championName, 
    championImageUrl, 
    loading, 
    error 
  } = useLolData(player.puuid);

  if (loading) return (
    <div className="p-6 border rounded-lg shadow-md animate-pulse bg-gray-800">
      <div className="h-4 bg-gray-600 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-600 rounded w-1/2"></div>
    </div>
  );
  
  if (error) return (
    <div className="p-6 border border-red-400 rounded-lg bg-red-900 text-red-200">
      Error al cargar los datos: {error}
    </div>
  );

  return (
    <div className="p-6 border border-gray-700 rounded-lg shadow-md bg-gray-800 text-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="font-bold text-xl text-white">{player.gameName}</div>
        <div className="text-sm text-gray-400">#{player.tagLine}</div>
      </div>

      {summoner && (
        <div className="mb-4">
          <div className="text-sm text-gray-300">Nombre: {player.gameName}</div>
          <div className="text-sm text-gray-300">Nivel: {summoner.summonerLevel}</div>
        </div>
      )}

      {topChampion && championName && championImageUrl && (
        <div className="mt-4">
          <div className="text-md font-semibold mb-2 text-gray-200">Campeón Principal:</div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative overflow-hidden rounded">
              <Image 
                src={championImageUrl} 
                alt={championName}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-white">{championName}</div>
              <div className="text-sm text-gray-300">Nivel de maestría: {topChampion.championLevel}</div>
              <div className="text-sm text-gray-300">Puntos: {topChampion.championPoints.toLocaleString()}</div>
              {topChampion.lastPlayTime && (
                <div className="text-xs text-gray-400 mt-1">
                  Última vez jugado: {new Date(topChampion.lastPlayTime).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}