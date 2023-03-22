/*Argumentos com valor Default

*Posso deixar dentro dos parametros, um parametro com um valor default que pode ser mudado
*Calculando Potências

*/


function calcPot (base, exp=2){
    return Math.pow(base,exp);
}

console.log(calcPot(3)); //Não declarei o exp, mas ele usou o default que foi o 2 
console.log(calcPot(4,4)); //Agora declarei e o exp não será mais deafault e sim 4
