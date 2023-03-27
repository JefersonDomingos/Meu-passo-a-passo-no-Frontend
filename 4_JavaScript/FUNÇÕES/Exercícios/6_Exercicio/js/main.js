//Criar uma função que verifica os tipos de dados "number, string, boolean"

//Execute todos os tipos e retorne mensagem para cada caso


function verificaTipo(dado){
	if(typeof(dado) === "boolean" ){
		console.log("O dado é Booleano");
	}else if(typeof(dado) === "string"){
		console.log("O dado é String")
	}else if(typeof(dado) === "number"){
		console.log("O dado é um Número")
	}
}

verificaTipo(true);
verificaTipo("nome");
verificaTipo(10)