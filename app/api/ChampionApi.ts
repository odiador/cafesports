export interface ChampionData {
    id: string; // Nombre del campeón, 
    key: string; // Número de ID del campeón
    name: string; // Nombre legible del campeón
    title: string;
  }
  
  // Función que obtiene el listado de campeones desde Data Dragon
  export async function fetchChampionsData(): Promise<ChampionData[]> {
    const version = "15.6.1"; // Versión de Data Dragon
    // Se puede obtener la última versión de Data Dragon desde: https://ddragon.leagueoflegends.com/api/versions.json
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/es_ES/champion.json`
    );
    if (!response.ok) {
      throw new Error("Error al obtener datos de campeones");
    }
    const data = await response.json();
    // La info se extrae en un array
    return Object.values(data.data) as ChampionData[];
  }
  
  // Función para obtener el nombre del campeón dado su id (championId)
  export async function getChampionNameById(championId: number): Promise<string | null> {
    try {
      const champions = await fetchChampionsData();
      const champion = champions.find(champ => champ.key === championId.toString());
      return champion ? champion.name : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }