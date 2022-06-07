let students = [
  { name: "Marco", id: 213, grades: 78 },
  { name: "Paola", id: 110, grades: 96 },
  { name: "Andrea", id: 250, grades: 48 },
  { name: "Gaia", id: 145, grades: 74 },
  { name: "Luigi", id: 196, grades: 68 },
  { name: "Piero", id: 102, grades: 50 },
  { name: "Francesca", id: 120, grades: 84 },
];

// Esercizio 1

const targhetteArray = [];

students.forEach((studente, i) => {
  let capitalName = studente[i].name.toUpperCase();
  targhetteArray.push(capitalName);
});

console.table(targhetteArray);

// Esercizio 2

const goodGrades = students.filter((studente, i) => studente[i].grades >= 70);

console.table(goodGrades);

// Esercizio 3

const raccomandati = students.filter((studente, i) => studente[i].grades >= 70 && studente[i].id >= 120);

console.table(raccomandati);
