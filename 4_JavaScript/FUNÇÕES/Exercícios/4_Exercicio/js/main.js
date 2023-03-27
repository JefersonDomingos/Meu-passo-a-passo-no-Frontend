//Escreva uma função que retorne um numero aleatório,

//O numero maximo retornado, deve ser passado via parâmetro,

//Utilize o Math.random()

//Os numeros aleatórios do Math.random são de 0.1 a 0.9,

//Math.floor() arredinda pra baixo por isso o mais + 1


function aleatorio(n) {
	return Math.floor(Math.random() * n) + 1;
}


console.log(aleatorio(5));



