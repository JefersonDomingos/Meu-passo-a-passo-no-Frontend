//Adicionar e Remover propriedades de um objeto;

let violao = {
    cor: 'preto',
    som: 'alto',
    nilon: false
}
console.log('O objeto');
console.log(violao);

//add propriedade
console.log('a propriedade -marca- foi adicionada');
violao.marca = 'memphis';
console.log(violao);


//removendo propriedade
console.log('a propriedade -som- foi deletada');
delete violao.som;
console.log(violao);
