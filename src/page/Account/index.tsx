import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import DataItem from './DataItem'
import styles from './account.module.scss'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="Mi cuenta" />
      <Wrapper>
        <>
          <Sidebar />
          <div className={styles.account}>
            <AccountTitle title="MI CUENTA" />
            <div className={styles.data_table}>
              <h3 className={styles.subtitle}>MIS DATOS DE CLIENTE</h3>
              <div className={styles.table}>
                <DataItem label="Username" data="gaby" />
                <DataItem label="Nombre" data="gabriel" />
                <DataItem label="Apellido" data="sanchez" />
                <DataItem label="Email" data="sgabrielok01@gmail.com" />
              </div>
            </div>
            <Link className={styles.btn} to="/account/edit-data">
              MODIFICAR MIS DATOS
            </Link>
          </div>
        </>
      </Wrapper>
    </section>
  )
}

export default Account
