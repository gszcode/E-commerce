import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './recovery_pasword.module.scss'
import { useFormRecoveryPass } from '../../hooks/useFormRecoveryPassword'

const initialValues = {
  password: '',
  repassword: ''
}

const RecoveryPassword = () => {
  const formik = useFormRecoveryPass(initialValues)

  return (
    <section className={styles.container}>
      <BreadCrumbs page="Recuperar contraseña" />
      <div className={styles.recovery}>
        <AccountTitle title="RECUPERACIÓN DE CONTRASEÑA" />
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Input
            name="password"
            textType="password"
            labelText="CONTRASEÑA NUEVA"
            textPlaceholder="Contraseña nueva"
            formik={formik}
          />
          <Input
            name="repassword"
            textType="password"
            labelText="CONFIRMAR CONTRASEÑA"
            textPlaceholder="Confirmar contraseña"
            formik={formik}
          />
          <Button type="submit" text="ENVIAR" />
        </form>
      </div>
    </section>
  )
}

export default RecoveryPassword
