
const Destructuring = ({brand, km, color, isNew}) => {
  return (
    <div>
        <ul>
            <li>marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {isNew && <p>Este carro é NOVO</p>}
    </div>
  )
}

export default Destructuring;

