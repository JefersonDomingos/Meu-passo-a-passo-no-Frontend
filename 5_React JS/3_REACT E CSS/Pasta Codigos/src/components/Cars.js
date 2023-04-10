import styles from './Cars.module.css'

const Cars = ({brand, year, color}) => {
  return (
    <div>
        <ul className={styles.my_ul}>
            <li>marca: {brand}</li>
            <li>ano: {year}</li>
            <li>cor: {color}</li>
        </ul>
    </div>
  )
}

export default Cars