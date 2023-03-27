//Escreva uma função que receba dois números, o primeiro é a base e o 
//segundo é o expoente;
//Depois faça essa operação e retorne o resultado;
//Por exemplo: 3,2 = 9


function calcPortencia(base,expoente){
	return Math.pow(base,expoente);
	//return base ** expoente; essa segunda forma veio como JS ES6.
}

console.log(calcPortencia(4,3));
console.log(calcPortencia(4,4));