const entrada1 = require("readline-sync");
let ns: number[] = []
let nt : number =0
let nma: number = -99999999999999999999999999999999999999999999
let nme: number = 99999999999999999999999999999999999999999999

for (let i = 0; i < 5; i++){
  let n: number = parseInt(entrada1.question("digite um numero :"));
  ns[i] = n
  nt+= n
}
for (let i = 0; i < ns.length; i++) {
  if (ns[i] > nma) {
    nma = ns[i]
  }
}
for (let i = 0; i < ns.length; i++) {
  if (ns[i] < nme) {
    nme = ns[i]
  }
}

 console.log("o maior e: "+ nma +" o menor e: "+ nme + " e a media e: "+ nt / 5);