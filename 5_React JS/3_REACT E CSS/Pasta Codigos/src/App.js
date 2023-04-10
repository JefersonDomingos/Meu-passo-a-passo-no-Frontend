import './App.css';
import Cars from'./components/Cars'

function App() {
  const carros = [
    {id:1, marca:"chevrolet", ano: 2023, cor: "prata"},
    {id:2, marca: "fiat", ano: 1998, cor: "vermelho"},
    {id:3, marca: "ford", ano:2017, cor: "preto"}
  ];

  return (
    <div className="App">
      <h1 className="my_title">Desafio CSS in React JS</h1>

      {carros.map((car) => (
        <Cars key={car.id} brand={car.marca} year={car.ano} color={car.cor}/>
      ))}
    </div>
  )
}

export default App;
