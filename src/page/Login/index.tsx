import styles from './login.module.scss'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import LoginInput from '../../components/InputLoginRegister'
import Button from '../../components/Button'

const Login = () => {
  return (
    <section>
      <BreadCrumbs page="Login" />
      <div className={styles.container}>
        <h2 className={styles.title}>INICIA SESIÓN</h2>
        <p className={styles.span}>
          ACCEDE A TU CUENTA PERSONAL PARA REVISAR EL ESTADO DE TUS PEDIDOS O
          COMPRAR CUALQUIER ARTÍCULO DE ESTA WEB.
        </p>

        <form className={styles.form}>
          <LoginInput
            labelText="E-MAIL"
            textType="email"
            textPlaceholder="Introduce tu e-mail de usuario"
          />
          <LoginInput
            labelText="PASSWORD"
            textType="password"
            textPlaceholder="Introduce tu clave de usuario"
          />
          <Button text="CONTINUAR" />
          <Link to="/" className={styles.forgot}>
            ¿Has olvidado la contraseña?
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Login
