/* RECURSION 

1_Permite a propria função se "chamar" de novo;

2_A função vai se chamar novamente até atender uma condição exigida;

3_ A cada momento a função subtrai 1 do seu parâmetro  e se reexecuta;
*/

function numeros (n){
    if(n > 2){
        console.log(n + " é maior que 2");
        numeros(n - 1);
    }else if ( n == 2){
        console.log(n + " é igual a 2");
        numeros(n - 1);
    }else {
        console.log(n +" é menor que 2");
    }
    
}

numeros(5);