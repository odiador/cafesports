const endOfVoting = Date.UTC(2025, 2, 30, 5, 22, 0, 0);
const votingData = [
    { name: "Valorant", cantidad: 31 },
    { name: "League of Legends", cantidad: 19 },
    { name: "FIFA", cantidad: 11 },
    { name: "Fortnite", cantidad: 6 },
    { name: "Overwatch", cantidad: 6 },
    { name: "Counter-Strike", cantidad: 5 },
    { name: "Rocket League", cantidad: 4 },
    { name: "Minecraft", cantidad: 3 },
    { name: "Clash Royale", cantidad: 3 },
    { name: "Brawl Stars", cantidad: 3 },
    { name: "Left 4 Dead", cantidad: 2 },
    { name: "Apex Legends", cantidad: 2 },
    { name: "Rainbow Six Siege", cantidad: 1 },
    { name: "Brawlhalla", cantidad: 1 },
    { name: "Call of Duty BO6", cantidad: 1 },
    { name: "Mortal Kombat", cantidad: 1 },
    { name: "Super Smash Bros", cantidad: 1 },
    { name: "Dragon Ball Sparking Zero", cantidad: 1 },
    { name: "Gears of War", cantidad: 1 },
    { name: "PUBG", cantidad: 1 },
    { name: "Warzone", cantidad: 1 },
    { name: "Paladins", cantidad: 1 },
    { name: "Marvel Rivals", cantidad: 1 },
    { name: "Agar.io", cantidad: 1 },
    { name: "Chess", cantidad: 1 },
    { name: "Geometry Dash", cantidad: 1 },
    { name: "Fall Guys", cantidad: 1 },
    { name: "Uno", cantidad: 1 },
    { name: "Pokémon", cantidad: 1 }
];

function groupSmallCategories(data: { name: string; cantidad: number; }[], thresholdPercentage = 2) {
    const total = data.reduce((acc, item) => acc + item.cantidad, 0);
    const result = [];
    let otrosCantidad = 0;

    data.forEach((item) => {
        const percentage = (item.cantidad / total) * 100;
        if (percentage < thresholdPercentage) {
            otrosCantidad += item.cantidad;
        } else {
            result.push(item);
        }
    });

    if (otrosCantidad > 0) {
        result.push({ name: "Otros", cantidad: otrosCantidad });
    }

    return result;
}

export interface TournamentInfo {
    name: string;
    date: string;
    description: string;
    route: string;
    activeRound?: string;
}


const tournaments: TournamentInfo[] = [
    { name: "LOL", date: "martes", description: "El torneo de LOL, organizado por el programa Ingesis y CafEsports, se jugará en los laboratorios B y C los martes de 11:00 a 14:00. Participan 7 equipos de 5 jugadores cada uno, divididos en 2 bombos (A: 4 equipos, B: 3 equipos). Se enfrentan en fase de grupos, avanzando los 2 mejores de cada bombo a semifinales y luego a la final. Las partidas serán 5v5 en la Grieta del Invocador con bloqueos y durarán máx. 1 hora. Si no terminan en ese tiempo, gana el equipo con más torres destruidas o, en caso de empate, con más oro acumulado. Se permite un suplente y se exige conducta deportiva.", route: "/lol", activeRound: "Requiem vs Mancos.exe" },
    { name: "Valorant", date: "viernes", description: "El torneo de Valorant, organizado por Ingesis, se jugará en los laboratorios B y C los viernes de 11:00 a 14:00. Participan 8 equipos de 5 jugadores en un formato de eliminación directa (Bo3). En cuartos, 8 equipos compiten y 4 avanzan; en semifinales, 4 compiten y 2 avanzan; la final define al campeón. Cada equipo elige un mapa, y el tercero se selecciona al azar con baneo alterno. Se permite un suplente y, en caso de empate, se juegan rondas adicionales. Se exige conducta deportiva.", route: "/valorant", activeRound: "Valo? vs Lucidity" },
];

const aboutUs = "Somos un equipo dedicado a promover los deportes electrónicos en el departamento del Quindío. Bajo el liderazgo de Eyner Andrés Díaz y Juan Manuel Amador, CafEsports ha contado con el respaldo del Programa de Ingeniería de Sistemas y Computación de la Universidad del Quindío, lo que ha permitido fortalecer su presencia en la comunidad académica y gamer. Esta colaboración ha facilitado la organización de torneos y eventos que fomentan la participación de estudiantes y entusiastas de los eSports, contribuyendo al crecimiento y profesionalización de la escena de los deportes electrónicos en la región.";

const getLiveStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = domingo, 1 = lunes, 2 = martes, ..., 6 = sábado
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Convertir la hora actual a minutos contando desdd la medianoche 
    const currentTimeInMinutes = hour * 60 + minute;

    // Horarios de stream (en minutos contando desde la  medianoche)
    const streamStartTime = 11 * 60; // Estpo es: 11:00 AM
    const streamEndTime = 14 * 60; //  Estos es: 2:00 PM

    let isLive = false;
    let streamTitle = "";
    // Verificar si es martes (día 2 en la constante) dentro del horario de stream (11:00 AM a 2:00 PM)
    if (day === 2 && currentTimeInMinutes >= streamStartTime && currentTimeInMinutes < streamEndTime) {
        isLive = true;
        streamTitle = "Torneo de League of Legends";
    }

    // Verificar si es viernes (día 5 en la constante) dentro del horario de stream (11:00 AM a 2:00 PM)
    else if (day === 5 && currentTimeInMinutes >= streamStartTime && currentTimeInMinutes < streamEndTime) {
        isLive = true;
        streamTitle = "Torneo de Valorant";
    }
    return { isLive, streamTitle };
}

export { endOfVoting, votingData, groupSmallCategories, tournaments, getLiveStatus, aboutUs };
