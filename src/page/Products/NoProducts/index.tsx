import styles from './no_produtcs.module.scss'
import Wrapper from '../../../components/Wrapper'

const NoProducts = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <p className={styles.title}>
          No se han encontrado productos en esta categoría
        </p>
      </div>
    </Wrapper>
  )
}

export default NoProducts
