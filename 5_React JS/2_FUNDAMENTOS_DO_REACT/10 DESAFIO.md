Crie um componente chamado Challenge;

Importe-o em App js;

No componente criado faça a criação de dois valores numéricos;
Imprima estes valores no componente;

Crie também um evento de click que soma estes dois valores e exiba no
console;

Passo 1: criar o arquivo Challenge.js na pasta components;
const Challenge = () => {
    const value1 = 10; //valor numérico 1
    const value2 = 14; //valor numérico 2
    return(
        <div>
            <h1>Este é o valor 1:{value1} e este é o valor2: {value2}</h1> //Imprimindo no componente
        </div>
    );
}

export default Challenge;
/////////////////////////////////////////////////////////////////////////////////////////////////////////

Passo 2: Importando O Challenge em App.js: 
import Challenge from "./components/Challenge"; //importando o challenge

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Modulo-2</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent/>
        <Events />
        <Challenge/> //importando o challenge
    </div>
  );
}

export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////

Passo 3: Imprimindo a soma no console

const Challenge = () => {
    const value1 = 10;
    const value2 = 14;

    const somar = () => {
        console.log(value1+value2);
    }

    return(
        <div>
            <h1>Este é o valor 1:{value1} e este é o valor2: {value2}</h1>
            
            <button onClick={somar}>Imprimir no console</button>
        </div>
        
    );
}

export default Challenge;





