
import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import PropsComponent from './components/PropsComponent';
import Destructuring from './components/Destructuring';
import Fragments from './components/Fragments';
import TesteChildren from './components/TesteChildren';
import FuncaoEmProps from './components/FuncaoEmProps';
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
      setMessage(msg);
  }


  function propsFuncao () {
    console.log("Função em Props");
  }

  const cars = [
    {id:1, brand:"Chevrolet", km:10000, color:"black", isNew:false },
    {id:2, brand:"Fiat", km:0.250, color:"white", isNew:false },
    {id:3, brand:"Kia", km:15000, color:"yellow", isNew:false },
    {id:4, brand:"Vw", km:10000, color:"iceblue", isNew:true },
  ]

  const peoples = [
    {id: 1, name: "Jéferson", idade: 24, prof: "Programador"},
    {id:2, name: "Lucas", idade: 8, prof: "Não Trabalha"},
    {id:3, name: "Dionata", idade: 21, prof: "Professor"}
  ]
  
  return (
    <div className="App">
      <h1>Avançando no React JS</h1>
      <ListRender/>
      
      <ConditionalRender/>
      
      {/*Props*/}
      <PropsComponent name = "Jéferson"/>
      
      {/*Destructuring*/}
      <Destructuring brand="Vw" km={10000} color="black" isNew={false}/>
      
      {/*Reaproveitando o Component Destructuring*/}
      <Destructuring brand="Chevrolet" km={20000} color="white" isNew={true}/>
      <Destructuring brand="Fiat" km={0} color="blue" isNew={true}/>

      {/*Reaproveitando a const cars através do loop map*/}
      {cars.map((car) => (
        <Destructuring 
        brand={car.brand}
        km={car.km} 
        color={car.km}
        key={car.id}
        isNew={car.isNew}/>
      ))}
      
      {/*Fragments*/}
      <Fragments testando ="Teste props fragments"/>

      {/*Props Children*/}
      <TesteChildren>
        <h4>Children no App.js</h4>
      </TesteChildren>

      {/*Executando função com Props*/}
      <FuncaoEmProps myFunction={propsFuncao}/>
      
      {/*State Lift*/}
      <Message msg={message}/>
      <ChangeMessage mudaState = {handleMessage}/>

      {/*Desafio*/}
      {peoples.map((people) => (
        <UserDetails
        name = {people.name}
        idade = {people.idade}
        prof = {people.prof}
        key = {people.id}
        />
      ))}
      
    </div>
  );
}

export default App;
