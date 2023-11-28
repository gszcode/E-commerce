import { Link } from 'react-router-dom'
import styles from './breadcrumbs.module.scss'

const BreadCrumbs = ({ page }: { page: string }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <Link to="/" title="Inicio">
          Inicio
        </Link>{' '}
        / <span className={styles.page}>{page}</span>
      </span>
    </div>
  )
}

export default BreadCrumbs
