import "./MyForm.css";
import {useState} from 'react';

const MyForm = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmail("Testando o onSubmit");

    console.log(email);

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                  <span>Email:</span>
                  <input type="email" name="email" placeholder="Digite seu email"/>
                </label>
            </div>
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm