import styles from './register.module.scss'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import CheckBox from '../../components/CheckBox'
import RegisterInput from '../../components/Input'
import Button from '../../components/Button'
import { useFormAuth } from '../../hooks/useFormAuth'

const initialValues = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  privacy_policy: false,
  purchase_conditions: false
}

const Register = () => {
  const formik = useFormAuth(initialValues)

  return (
    <section>
      <BreadCrumbs page="Register" />
      <div className={styles.container}>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <p className={styles.span}>
          CREA UNA CUENTA PERSONAL PARA COMPRAR CUALQUIER ARTÍCULO DE ESTA WEB.
        </p>

        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <RegisterInput
            labelText="NOMBRE"
            textType="text"
            textPlaceholder="Introduce tu nombre"
            name="first_name"
            formik={formik}
          />
          <RegisterInput
            labelText="APELLIDO"
            textType="text"
            textPlaceholder="Introduce tu apellido"
            name="last_name"
            formik={formik}
          />
          <RegisterInput
            labelText="USUARIO"
            textType="text"
            textPlaceholder="Introduce tu nombre de usuario"
            name="username"
            formik={formik}
          />
          <RegisterInput
            labelText="E-MAIL"
            textType="email"
            textPlaceholder="Introduce tu e-mail de usuario"
            name="email"
            formik={formik}
          />
          <RegisterInput
            labelText="PASSWORD"
            textType="password"
            textPlaceholder="Introduce tu clave de usuario"
            name="password"
            formik={formik}
          />
          <CheckBox
            text="He leído y acepto la"
            linkText="Política de Privacidad"
            href="/privacy-policy"
            idFor="privacy_policy"
            name="privacy_policy"
            formik={formik}
          />
          <CheckBox
            text="He leído y acepto las"
            linkText="Condiciones generales de compra"
            href="/purchas-conditions"
            idFor="purchase_conditions"
            name="purchase_conditions"
            formik={formik}
          />
          <Button text="REGISTRARSE" type="submit" />
          <Link to="/login" className={styles.already_account}>
            ¿Ya tienes una cuenta? Iniciar Sesión.
          </Link>
        </form>
      </div>
    </section>
  )
}

export default Register
