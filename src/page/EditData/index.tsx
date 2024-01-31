import styles from './edit_data.module.scss'
import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import Input from './Input'
import { useSelector } from 'react-redux'
import { UserApi } from '../../typescript/interfaces/user.interface'
// import { useState } from 'react'

const setNewPasswords = {
  current_pass: '',
  new_pass: '',
  repeat_new_pass: ''
}

const EditData = () => {
  const { user } = useSelector((state: UserApi) => state.user as UserApi)
  // const [passwords, setPasswords] = useState(setNewPasswords)

  console.log(user)

  return (
    <section className={styles.container}>
      <BreadCrumbs page="Mi cuenta / Modificar datos" />
      <Wrapper>
        <>
          <Sidebar />
          <div className={styles.data}>
            <AccountTitle title="MODIFICAR MIS DATOS" />
            <form className={styles.form}>
              <div className={styles.inputs}>
                <Input
                  label="NOMBRE"
                  type="text"
                  name="name"
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  value={user?.first_name!}
                />
                <Input
                  label="APELLIDO"
                  type="text"
                  name="surname"
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  value={user?.last_name!}
                />
                <Input
                  label="EMAIL"
                  type="email"
                  name="email"
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  value={user?.email!}
                />
              </div>
              <div className={styles.inputs}>
                <Input
                  textholder="Ingresar contraseña actual"
                  label="CONTRASEÑA ACTUAL"
                  type="password"
                  name="current_pass"
                  value={setNewPasswords.current_pass}
                />
                <Input
                  textholder="Ingresar contraseña nueva"
                  label="CONTRASEÑA NUEVA"
                  type="password"
                  name="new_pass"
                  value={setNewPasswords.new_pass}
                />
                <Input
                  textholder="Repetir contraseña nueva"
                  label="CONFIRMAR CONTRASEÑA NUEVA"
                  type="password"
                  name="repeat_new_pass"
                  value={setNewPasswords.repeat_new_pass}
                />
              </div>
              <Button text="GUARDAR" />
            </form>
          </div>
        </>
      </Wrapper>
    </section>
  )
}

export default EditData
