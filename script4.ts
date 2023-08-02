const entrada4 = require("readline-sync");

let nomes = [];


for (let i = 0; i < 5; i++ ){

    let nome: string = entrada4.question("Insira um nome: ");

    nome = nome.toLowerCase();

    let nomesplit = nome.split("");

    for ( let x = 0; x < nomesplit.length; x++  ){

        if(nomesplit[x] == "a"){

            nomes.push(nome)

            break;

        }

    }
}

console.log(nomes)
