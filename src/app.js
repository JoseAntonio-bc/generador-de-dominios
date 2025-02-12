let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let todasLasCombinaciones = [];

for (let element1 of pronoun) {
  for (let element2 of adj) {
    for (let element3 of noun) {
      todasLasCombinaciones.push(element1 + element2 + element3 + ".com")
    }
  }
}
console.log(todasLasCombinaciones);
