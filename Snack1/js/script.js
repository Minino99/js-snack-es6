const raceBikes = [

  {
    nome: "Merida Scultura 400",
    peso: 9
  },

  {
    nome: "Bianchi Via Nirone 7",
    peso: 10.5
  },

  {
    nome: "Pinnarello Superleggera",
    peso: 7
  },

  {
    nome: "Giant Carbon",
    peso: 8
  },

  {
    nome: "Bianchi Giro d'Italia",
    peso: 6.75
  },

];

let bestBike = {
 nome: raceBikes[0].nome,
 peso: raceBikes[0].peso,
}

for (let i = 0; i < raceBikes.length; i++) {
  let { nome, peso } = raceBikes[i];
  if (peso < bestBike.peso) {
    bestBike = {
      nome: nome,
      peso: peso,
    };
  }
}

document.getElementById("mettiqua").innerHTML = `<h1>La bici migliore è la ${bestBike.nome} con un peso complessivo di ${bestBike.peso}kg</h1>`
