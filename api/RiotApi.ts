const API_URL = "https://riot-api-worker.luisc-calderonc.workers.dev";

export async function fetchChampionMastery(puuid: string) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method: "fetchChampionMastery", puuid })
    });

    if (!response.ok) {
        throw new Error("Error al obtener la maestría del campeón");
    }

    return await response.json();
}

export async function fetchSummonerInfo(puuid: string) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method: "fetchSummonerInfo", puuid })
    });

    if (!response.ok) {
        throw new Error("Error al obtener la información del summoner");
    }

    return await response.json();
}
