interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: Record<string, number>;
}

interface ChampionsData {
  [key: string]: Champion;
}


export async function fetchChampionsData(): Promise<ChampionsData> {
  const version = "15.6.1";
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/es_ES/champion.json`
  );
  if (!response.ok) {
    throw new Error("Error al obtener datos de campeones");
  }
  const data = await response.json();
  return data.data as ChampionsData; // Cast seguro
}

export async function getChampionImageUrl(championId: number): Promise<string | null> {
  try {
    const champions = await fetchChampionsData();
    const championEntry = Object.values(champions).find(
      (champ) => champ.key === championId.toString()
    );

    if (!championEntry) return null;

    const version = "15.6.1";
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championEntry.id}.png`;
  } catch (error) {
    console.error(error);
    return null;
  }
}
