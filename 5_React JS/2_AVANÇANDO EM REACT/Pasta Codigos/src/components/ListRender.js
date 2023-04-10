import React, { useState } from 'react';

const ListRender = () => {

  const [list] = useState(["Jéferson", "Lucas", "Matheus", "Thiago"]);
  
  const [users, setUsers] = useState([
    {id: 1, nome: "Jéferson", idade: 24},  //Usar o id como key para o <li>
    {id: 2, nome: "Ludmila", idade: 18},
    {id:3, nome: "Dionata", idade:21}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
  }
  
  return (                    
    <div>
       <ul>
          {list.map((item,i) => (   //i é o index do método map;
          
            <li key={i}>{item}</li>
          
          ))}
        </ul>
        
        <ul>
          {users.map((user) => ( //o 'id' foi usado como 'key' para o <Li>;
          
            <li key={user.id}> 
              {user.nome} - {user.idade}
            </li> 
        
            ))}
        </ul>
        <button onClick={deleteRandom}>deletar</button>

    </div>
  )
};

export default ListRender;