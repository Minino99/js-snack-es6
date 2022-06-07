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

students.forEach((name, i) => {
let capitalName = (students[i].name).toUpperCase();
targhetteArray.push(capitalName);
});

console.table(targhetteArray)

// Esercizio 2

const goodGrades = students.filter((grades, i) => {
if (students[i].grades >= 70) {
return true;
}
});

console.table(goodGrades);


// Esercizio 3

const raccomandati = students.filter((grades, i) => {
 if (students[i].grades >= 70 && students[i].id >= 120) {
 return true;
 }
 });

 console.table(raccomandati);
 