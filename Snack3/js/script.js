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


const generatedArray = myArray.filter((nome, i)=> {
  if (i >= minNumber - 1 && i <= maxNumber - 1){
    return nome
  }
});

console.table(generatedArray)