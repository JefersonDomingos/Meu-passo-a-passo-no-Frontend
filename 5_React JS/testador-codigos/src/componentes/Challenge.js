const Challenge = () => {
    const valorA = 3;
    const valorB = 3;
    const somar = () => {
        console.log(valorA+valorB)
    }
    
    return(
        <div>
            <h2>
                O valor A é: {valorA} e o valor B é: {valorB};
            </h2>
            <button onClick={somar}>ConsoleSoma</button>
        </div>
    )
}

export default Challenge;