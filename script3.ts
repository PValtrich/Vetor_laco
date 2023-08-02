const entrada3 = require("readline-sync");

let palavra : string[] = [];

for(let i = 0; i < 5; i++){
    palavra.push(entrada3.question("Digite palavras: "))
}

palavra.map((p)=>{
    
    let result = p.split("a")
    console.log(p);
    
})







