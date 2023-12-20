import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import Input from '../Account/Input'
import styles from './edit_data.module.scss'

const EditData = () => {
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
                <Input label="NOMBRE" type="text" />
                <Input label="APELLIDO" type="text" />
                <Input label="EMAIL" type="email" />
              </div>
              <div className={styles.inputs}>
                <Input label="CONTRASEÑA ACTUAL" type="password" />
                <Input label="CONTRASEÑA NUEVA" type="password" />
                <Input label="CONFIRMAR CONTRASEÑA NUEVA" type="password" />
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
