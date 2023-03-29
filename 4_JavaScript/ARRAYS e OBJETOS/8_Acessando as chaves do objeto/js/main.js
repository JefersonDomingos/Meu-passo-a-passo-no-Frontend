//Acessando as chaves do objeto
//As chaves são o que aparece do lado 'esquerdo' do Objeto
//Os valores aparecem do lado 'direito'


let mouse = {
    cor: 'preto',
    marca: 'multilaser'
}

//vamos obter um Array mostrando o nome das chaves mas não o seu valor
console.log(Object.keys(mouse));