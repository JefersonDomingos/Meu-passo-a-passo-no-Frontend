import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Jéferson");
  return (
    <div>
        {x && <p>Se X for verdadeiro esta mensagem aparece</p>}
        {name === "Jéferson" ? (<p>O nome é Jéferson </p>):(<p>O nome NÃO é Jéferson</p>)}

        <button onClick={() => setName("Matheus")}>MudarNome</button>
    </div>
  )
}

export default ConditionalRender;