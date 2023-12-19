import BreadCrumbs from '../../components/BreadCrumbs'
import Sidebar from '../../components/Sidebar'
import styles from './account.module.scss'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="Mi cuenta" />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.account}>
          <h1 className={styles.title}>MI CUENTA</h1>
          <div className={styles.data_table}>
            <h3 className={styles.subtitle}>MIS DATOS DE CLIENTE</h3>
            <div className={styles.table}>
              <p className={styles.item}>
                <strong>Username: </strong>
                <span>gaby</span>
              </p>
              <p className={styles.item}>
                <strong>Nombre: </strong>
                <span>gabriel</span>
              </p>
              <p className={styles.item}>
                <strong>Apellido: </strong>
                <span>sanchez</span>
              </p>
              <p className={styles.item}>
                <strong>Email: </strong>
                <span>sgabriel.dev@gmail.com</span>
              </p>
            </div>
          </div>
          <Link className={styles.btn} to="/edit-data">
            MODIFICAR MIS DATOS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Account
