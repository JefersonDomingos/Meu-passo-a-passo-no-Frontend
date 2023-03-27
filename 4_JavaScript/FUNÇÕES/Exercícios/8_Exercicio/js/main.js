//Escreva uma função que recebe uma string;
//Se o texto conter mais de 10 caracteres imprima "Texto muito longo";
//Se conter menos, imprima "Texto dentro do limite";

function contar(name){
	if(name.length > 10){
		return `${name} é um texto muito longo`;
	}else{
		return `${name} é um texto padrão`;
	}
}

console.log(contar("paralelepipedo"));
console.log(contar("papel"));