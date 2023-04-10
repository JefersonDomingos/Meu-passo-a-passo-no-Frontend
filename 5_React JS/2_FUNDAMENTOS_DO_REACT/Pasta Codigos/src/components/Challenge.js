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