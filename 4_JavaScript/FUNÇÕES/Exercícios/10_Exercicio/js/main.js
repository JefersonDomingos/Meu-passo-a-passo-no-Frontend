//Escreva uma fução que recebe um número,  e o decrementa de 1 em 1 com um loop;
//Além disso imprima somente os números pares no console;

function retornarPares(num){
	for(let i = 0; num >= i; num--){
		if(num % 2 == 0){
			console.log(`${num} é par`);
		}else{
			console.log(`${num} é impar`)
		}
	}
}

retornarPares(11);