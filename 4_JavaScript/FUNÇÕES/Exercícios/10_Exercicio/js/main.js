//Escreva uma fução que recebe um número,  e o decrementa de 1 em 1 com um loop;
//Além disso imprima somente os números pares no console;

function retornaPares (num){
	for(let i = num; i >=0; i--){
		if(i % 2 == 0){
			console.log(i);
		}
	}
}

retornaPares(15)