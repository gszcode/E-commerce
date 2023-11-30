import styles from './register.module.scss'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import CheckBox from '../../components/CheckBox'
import RegisterInput from '../../components/InputLoginRegister'
import Button from '../../components/Button'

const Register = () => {
  return (
    <section>
      <BreadCrumbs page="Register" />
      <div className={styles.container}>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <p className={styles.span}>
          CREA UNA CUENTA PERSONAL PARA COMPRAR CUALQUIER ARTÍCULO DE ESTA WEB.
        </p>

        <form className={styles.form}>
          <RegisterInput
            labelText="NOMBRE"
            textType="text"
            textPlaceholder="Introduce tu nombre"
          />
          <RegisterInput
            labelText="APELLIDO"
            textType="text"
            textPlaceholder="Introduce tu apellido"
          />
          <RegisterInput
            labelText="USUARIO"
            textType="text"
            textPlaceholder="Introduce tu nombre de usuario"
          />
          <RegisterInput
            labelText="E-MAIL"
            textType="email"
            textPlaceholder="Introduce tu e-mail de usuario"
          />
          <RegisterInput
            labelText="PASSWORD"
            textType="password"
            textPlaceholder="Introduce tu clave de usuario"
          />
          <CheckBox
            text="He leído y acepto la"
            linkText="Política de Privacidad"
            href="/"
            idFor="privacy_policy"
          />
          <CheckBox
            text="He leído y acepto las"
            linkText="Condiciones generales de compra"
            href="/"
            idFor="purchase_conditions"
          />
          <Button text="REGISTRARSE" />
          <Link to="/login" className={styles.already_account}>
            ¿Ya tienes una cuenta?
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Register
