import styles from './login.module.scss'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import LoginInput from '../../components/Input'
import Button from '../../components/Button'
import { useFormAuth } from '../../hooks/useFormAuth'

const initialValues = {
  email: '',
  password: ''
}

const Login = () => {
  const formik = useFormAuth(initialValues)

  return (
    <section>
      <BreadCrumbs page="Login" />
      <div className={styles.container}>
        <h2 className={styles.title}>INICIA SESIÓN</h2>
        <p className={styles.span}>
          ACCEDE A TU CUENTA PERSONAL PARA REVISAR EL ESTADO DE TUS PEDIDOS O
          COMPRAR CUALQUIER ARTÍCULO DE ESTA WEB.
        </p>

        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <LoginInput
            name="email"
            labelText="E-MAIL"
            textType="email"
            textPlaceholder="Introduce tu e-mail de usuario"
            formik={formik}
          />
          <LoginInput
            name="password"
            labelText="PASSWORD"
            textType="password"
            textPlaceholder="Introduce tu clave de usuario"
            formik={formik}
          />
          <Button text="CONTINUAR" type="submit" />
          <Link to="/register" className={styles.create_account}>
            ¿No tienes cuenta? Registrarse.
          </Link>
          <Link to="/forgot-password" className={styles.forgot}>
            ¿Has olvidado la contraseña?
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Login
