const Events = () =>{
    
    const imprimirNoConsole = () => {
        console.log("O evento de click funcionou");
    }

    const renderizandoHtml = (x) => {

        if(x){
            return <h3>Renderizando HTML por um evento</h3>
        }else{
            return <h3>Renderizando!</h3>
        }
    }
    
    return(
        <div>
            <button onClick={imprimirNoConsole}>Clique aqui</button>
            <button onClick={() => console.log("Evento dentro do HTML")}>Evento no HTML</button>

            <div>
                {renderizandoHtml(true)}
                {renderizandoHtml(false)}
            </div>
        </div>
    );
       
};

export default Events;