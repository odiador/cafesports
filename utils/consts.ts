const endOfVoting = Date.UTC(2025, 2, 29, 5, 0, 0, 0);
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

export { endOfVoting, votingData, groupSmallCategories };
