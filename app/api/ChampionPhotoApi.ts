export async function fetchChampionsData(): Promise<Record<string, any>> {
    const version = "15.6.1"; // Ajusta la versión si es necesario
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/es_ES/champion.json`
    );
    if (!response.ok) {
      throw new Error("Error al obtener datos de campeones");
    }
    const data = await response.json();
    return data.data;
  }
  
  export async function getChampionImageUrl(championId: number): Promise<string | null> {
    try {
      const champions = await fetchChampionsData();
      // Los datos de Data Dragon vienen con la propiedad "key" en cada campeón siendo un string con el ID númerico.
      const championEntry = Object.values(champions).find((champ: any) => champ.key === championId.toString());
      if (!championEntry) return null;
      
      // Construir la URL usando el identificador del campeón
      const version = "15.6.1";
      return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championEntry.id}.png`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }