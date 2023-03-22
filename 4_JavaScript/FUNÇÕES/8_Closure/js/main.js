/*Closure

1_ Cria-se uma função principal com um parâmetro,

2_ Dentro da principal retornamos uma função anônima que consegue interagir com o parâmetro da função
principal, exemplo retornar o parâmetro da principal somando com o parâmetro da anônima.

3_ Podemos invocar a função principal com seu parâmetro dentro de uma variável e logo essa variável se torna
a função anônima, podendo receber um parâmetro e retornando o seu parametro somado ao parametro da função
principal

4_Ou seja a função anonima pode acessar a função principal, basta apenas colocar a principal dentro de uma 
variável e usar essa variável como se fosse a função anônima.

*/

function somar (x){
    return function(y){
        return x + y
    }
}

let funcAnonima = somar(2);

console.log(funcAnonima(1));

//vai retornar 3





