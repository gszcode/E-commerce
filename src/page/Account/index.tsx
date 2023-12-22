import { useEffect } from 'react'
import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import DataItem from './DataItem'
import styles from './account.module.scss'
import { Link } from 'react-router-dom'
import { get } from '../../services/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { UserApi } from '../../typescript/interfaces/user.interface'
import { setUserData } from '../../store/features/user/userSlice'

const Account = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: UserApi) => state.user as UserApi)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await get('user/account')
        dispatch(setUserData(response.data.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    getUserData()
  }, [dispatch])

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
                <DataItem label="Username" data={user?.username} />
                <DataItem label="Nombre" data={user?.first_name} />
                <DataItem label="Apellido" data={user?.last_name} />
                <DataItem label="Email" data={user?.email} />
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
