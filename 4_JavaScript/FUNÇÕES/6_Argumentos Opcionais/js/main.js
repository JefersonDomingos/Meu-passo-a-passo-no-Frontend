/*Argumentos Opcionais

*Posso rodar a função mesmo se eu tiver deixado de colocar o parâmetro veja no exmplo 1;
*Ou posso exigir que a função não execute sem os 2 parâmetros e mandar uma mensagem para o usuário veja 
no exemplo 2

*/

function exemploUm (nome, idade){
    if(nome === undefined || idade === undefined){
        console.log("Funciona mesmo sem colocar os 2 parametros");
    }else{
        console.log("você colocou os  2 parametros");
    }
}

exemploUm(2);
exemploUm("Nina",12);

//Exemplo 2

function exemploDois (nome, idade){
    if(nome === undefined || idade === undefined){
        console.log("É obrigatorio os 2 parâmetros");
    }else{
        console.log("Executando");
    }
} 

exemploDois(2);
exemploDois("Tete",2);