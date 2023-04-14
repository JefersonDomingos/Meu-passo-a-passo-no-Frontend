const FuncoesJsx = () => {
    const escreverJsx = (x) => {
        if(x){
            return <h1>É verdadeiro</h1>
        }else{
            return <h1>É falso</h1>
        }
    }

    return(
        <div>
            {escreverJsx(true)} {/*Função retornando JSX*/}
            {escreverJsx(false)}
        </div>
        
    )
}

export default FuncoesJsx;