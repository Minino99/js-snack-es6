const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
const minNumber = 2;
const maxNumber = 4;
const newArray = [];

myArray.forEach((nome, i) => {
  if (i >= minNumber - 1 && i <= maxNumber - 1){
    newArray.push(nome);
  }
});

console.table(newArray)

// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i numeri minNumber e maxNumber.

const generatedArray = myArray.filter((nome, i) => i >= minNumber - 1 && i <= maxNumber - 1);

console.table(generatedArray)