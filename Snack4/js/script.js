const soccerTeams = [
  {
    nome: "Real Madrid",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Milan",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Manchester City",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Napoli",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Juventus",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Inter",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Chelsea",
    punteggio: 0,
    victims: 0,
  },
  {
    nome: "Arsenal",
    punteggio: 0,
    victims: 0,
  },
];

let displayVictims = [];

for (let i = 0; i < soccerTeams.length; i++) {
  soccerTeams[i].punteggio = Math.floor(Math.random() * 100) + 1;
  soccerTeams[i].victims = Math.floor(Math.random() * 50) + 1;
  let { nome, victims } = soccerTeams[i];
  displayVictims.push({
    nome, victims,
  });
}

console.table(displayVictims)


