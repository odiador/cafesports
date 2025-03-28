export async function fetchChampionMastery(puuid: string, apiKey: string) {
    const response = await fetch(
      `https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener la maestría del campeon");
    }
    const data = await response.json();
    return data;
  }
  
  export async function fetchSummonerInfo(puuid: string, apiKey: string) {
    const response = await fetch(
      `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener la información del summoner");
    }
    const data = await response.json();
    return data;
  }