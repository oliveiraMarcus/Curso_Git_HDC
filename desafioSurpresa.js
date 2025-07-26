/* O QUE PRECISA SER FEITO ?

Crie um código para armazenar o máximo de informações possível dos pokemon da imagem ao lado e ao final, para cada um, exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"
EXEMPLO:
"DRAGONITE Cadastrado com sucesso"
*/


// Colocando uma constante de mensagem "Cadastrado com Sucesso"
const mensagemCadastro = " Cadastrado com sucesso" 

//Criando vetor com os nomes dos pokemons
let pokemons = ["POOCHYENA", "ZIGZAGOON", "DRAGONITE", "DRAGONITE", "DRAGONITE","POOCHYENA", "HURMPLE"];
//Colocando os níveis dos pokemons
let levelPokemons = ["LEVEL 2", "LEVEL 2", "LEVEL 5", "LEVEL 5", "LEVEL 5", "LEVEL 3", "LEVEL 2"]
//Sexo do pokemons
let sexoPokemons = ["M", "F", "M", "F", "F", "F", "M"]
//Pontos de vida dos Pokemons
let vidaPokemons = ["13/13", "13/13", "25/25", "24/24", "24/24", "15/15", "07/14"]

//criando uma condicional para aparecer nomes dos pokekons com a mensagem constante
for (let i = 0; i < 7; i++) {
    console.log(pokemons[i] + mensagemCadastro)
}

 console.log("\n")
 
 // Criando uma variável para aparecer todos os dados dos pokemons
for (let i = 0; i < 7; i++) {
   
    console.log(pokemons[i], levelPokemons[i], sexoPokemons[i], vidaPokemons[i],)
}