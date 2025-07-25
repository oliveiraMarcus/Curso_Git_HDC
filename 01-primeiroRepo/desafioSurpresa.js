const mensagemCadastro = " Cadastrado com sucesso" 


let pokemons = ["POOCHYENA", "ZIGZAGOON", "DRAGONITE", "DRAGONITE", "DRAGONITE","POOCHYENA", "HURMPLE"];
let levelPokemons = ["LEVEL 2", "LEVEL 2", "LEVEL 5", "LEVEL 5", "LEVEL 5", "LEVEL 3", "LEVEL 2"]
let sexoPokemons = ["M", "F", "M", "F", "F", "F", "M"]
let vidaPokemons = ["13/13", "13/13", "25/25", "24/24", "24/24", "15/15", "07/14"]

for (let i = 0; i < 7; i++) {
    console.log(pokemons[i] + mensagemCadastro)
}

 console.log("\n")
 
for (let i = 0; i < 7; i++) {
   
    console.log(pokemons[i], levelPokemons[i], sexoPokemons[i], vidaPokemons[i],)
}