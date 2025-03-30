import championsData from "@/utils/champions.json";

interface Champion {
  id: string;
  name: string;
  image: string;
}

// Asegurar que championsData es un mapa correctamente tipado
const championsMap: Record<string, Champion> = championsData;

export function getChampionDataById(championId: number): { name: string | null; imageUrl: string | null } {
  const champion = championsMap[championId.toString()];

  if (!champion) return { name: null, imageUrl: null };

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/champion/${champion.image}`;

  return { name: champion.name, imageUrl };
}
