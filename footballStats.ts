//IT 505
//Joshua Dalton

interface Player { //defines player info
    name: string;
    position: string;
    yards: number;
    touchdowns: number;
}

const players: Player[] = [ //stores patriots players with stat examples
    {name: "Drake Maye", position: "QB", yards: 4200, touchdowns: 32},
    {name: "Rhamondre Stevenson", position: "RB", yards: 1100, touchdowns: 9},
    {name: "TreVeyon Henderson", position: "RB", yards: 850, touchdowns: 7},
    {name: "DeMario Douglas", position: "WR", yards: 1050, touchdowns: 6},
    {name: "Hunter Henry", position: "TE", yards: 750, touchdowns: 8}
];

function showPlayers(): void {
    console.log("Patriots Player Statistics");

    players.forEach((player) => { //go through each player with foreach
        console.log(player.name + " | " + player.position);
        console.log("Yards: " + player.yards);
        console.log("Touchdowns: " + player.touchdowns);
        console.log("");
    });
}

const sortPlayers = (): void => { 
    const sorted = [...players];

    sorted.sort((a, b) => b.yards - a.yards);

    console.log("Players Sorted By Yards:");

    sorted.forEach((player) => {
        console.log(player.name + ": " + player.yards);
    });
};

function findPlayers(minYards: number): void { //finds players who have required yards
    const filtered = players.filter((player) => player.yards >= minYards);

    console.log("Players With At Least " + minYards + " Yards:");

    filtered.forEach((player) => {
        console.log(player.name);
    });
}

function findLeader(stat: (player: Player) => number): void { //uses callback to find stat leaders
    const sorted = [...players].sort((a, b) => stat(b) - stat(a)); 

    console.log("Leader: " + sorted[0].name);
}

//runs functions
showPlayers();
sortPlayers();
findPlayers(1000);

console.log("Touchdown Leader:");
findLeader((player) => player.touchdowns);