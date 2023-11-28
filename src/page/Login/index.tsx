import styles from './login.module.scss'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'

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
          <div className={styles.input_container}>
            <label>E-MAIL</label>
            <input type="text" placeholder="Introduce tu e-mail de usuario" />
          </div>
          <div className={styles.input_container}>
            <label>PASSWORD</label>
            <input type="text" placeholder="Introduce tu clave de usuario" />
          </div>
          <button className={styles.btn}>CONTINUAR</button>
          <Link to="/" className={styles.forgot}>
            ¿Has olvidado la contraseña?
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Login
