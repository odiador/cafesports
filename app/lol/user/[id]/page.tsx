"use client";
import { useLolData } from "@/hooks/usarLolApis";
import { LOLPlayerInfo, lolplayers } from "@/utils/consts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const [playerInfo, setPlayerInfo] = useState<LOLPlayerInfo | null>();

    useEffect(() => {
        params.then((data) => {
            const pinfo = lolplayers.find((e) => e.id === data.id);
            setPlayerInfo(pinfo ? pinfo : null);
        });

    }, [params]);

    const apiKey = process.env.NEXT_PUBLIC_API_LOL || "No";

    const { summoner, topChampion, championName, championImageUrl, loading, error } = useLolData(playerInfo?.puuid, apiKey);

    if (playerInfo == undefined) {
        return (
            <div className="container mx-auto p-4">
                <p>Cargando info del usuario...</p>
            </div>
        );
    }

    if (playerInfo == null) {
        return (
            <div className="container mx-auto p-4">
                <p>El usuario no ha sido encontrado</p>
            </div>
        );
    }

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
            {summoner && (
                <div className="bg-black/10 p-4 rounded shadow mt-4">
                    <h2 className="text-xl font-bold">{`${playerInfo.gameName}#${playerInfo.tagLine}`}</h2>
                    <p>Nivel de cuenta: {summoner.summonerLevel}</p>
                    {topChampion && (
                        <div className="mt-4">
                            <p>Campeón con mayor maestría: {championName}</p>
                            <p>Nivel: {topChampion.championLevel}</p>
                            <p>Ultima vez jugado: {topChampion.lastTimePlayed?.toLocaleString() || ''}</p>
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
