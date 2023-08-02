const entrada2 = require("readline-sync");
let noma: string = ""

for (let i = 0; i < 5; i++) {
  let nome = entrada2.question("digite um nome :")

  if (nome.length > noma.length) {
    noma = nome
  }
}
 console.log(noma);