const Eventos = () => {
    const handleImprimir = () => console.log("Imprimiu no console");
    return(
        <div>
            <button onClick={handleImprimir}>Imprimir no Console</button>
        </div>
    )
}
export default Eventos;