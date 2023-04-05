//Loop em Arrays 
//Podemos percorrer todos os 'índices' dos arrays facilmente utilizando o loop
//Podemos usar o for, while ou outro loop para exibir cada 'índice' do array


let frutas = ["abacaxi","uva","morango", "pera"];
let indice = 0;

while( indice <  frutas.length){
    console.log(frutas[indice]);
    indice++;
}

console.log("VEJA O MESMO LOOP NO FOR")

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}