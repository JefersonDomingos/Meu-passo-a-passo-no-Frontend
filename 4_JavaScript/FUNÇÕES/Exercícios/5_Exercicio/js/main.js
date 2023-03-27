//Criar uma função que veirfica se uma pessoa é maior de idade,

//Caso ela for, imprima ela é maior de idade e pode tirar CNH

//Caso não for, imprima ela é menor de idade e não pode tirar CNH

//Imprima os dois casos, maior e menor


function eMaior(idade){
	if(idade >= 18){
		console.log(idade + " anos é de maior, pode tirar CNH");
	}else {
		console.log(idade + " anos é menor, não pode tirar CNH");
	}
}

eMaior(18);
eMaior(16);