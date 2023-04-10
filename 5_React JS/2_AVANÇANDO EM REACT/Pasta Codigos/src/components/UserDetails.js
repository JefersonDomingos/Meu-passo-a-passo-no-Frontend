const UserDetails = ({name, idade, prof}) => {
    return (
        <div>
            <ul>
                <li>Nome: {name}</li>
                <li>Profissão: {prof}</li>
                <li>Idade: {idade}</li>
            </ul>
            {idade >= 18 ? <p>Pode tirar CHN </p> : <p>Não pode tirar CNH</p> }
        </div>
    )
}

export default UserDetails