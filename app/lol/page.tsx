import React from 'react';
import Image from 'next/image';
import { useLolData } from '../hooks/usarLolApis';

export default function LolPage() {
  const apiKey = process.env.API_LOL || 'No';
  const puuid = process.env.PUUID_LOL || 'No';

  const { summoner, topChampion, championName, championImageUrl, loading, error } = useLolData(puuid, apiKey);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <p>Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex-1 flex flex-col items-center">
        <Image
          className="h-fit"
          src={"/lol.webp"}
          alt={"Poster de League of Legends"}
          width={400}
          height={100}
        />
      </div>
      {summoner && (
        <div className="bg-gray-100 p-4 rounded shadow mt-4">
          <h2 className="text-xl font-bold">{summoner.name}</h2>
          <p>Nivel de cuenta: {summoner.summonerLevel}</p>
          {topChampion && (
            <div className="mt-4">
              <p>Campeón con mayor maestría: {championName}</p>
              <p>Maestría (nivel): {topChampion.championLevel}</p>
              <p>Puntos de maestría: {topChampion.championPoints}</p>
              {championImageUrl && (
                <Image
                  src={championImageUrl}
                  alt={championName || "Campeón"}
                  width={120}
                  height={120}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}