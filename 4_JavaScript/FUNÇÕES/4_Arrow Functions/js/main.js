/*ARROW FUNCTIONS

1_ Uma maneira diferente e mais limpa de criar uma função
2_ Não substitui uma função
3_ É muito utilizada nos Frameworks JavaScript
4_ Não tem o seu próprio .this
5_ Pega o this declarado globalmente, não tem no seu próprio escopo como a function.

*/

let firstArrow = () => {
    console.log("Primeira Arrow function");
}

firstArrow()