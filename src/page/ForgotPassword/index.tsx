import { useFormik } from 'formik'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './forgot_password.module.scss'
import { Link } from 'react-router-dom'
import { post } from '../../services/fetch'
import { useState } from 'react'
import Message from '../../components/Message'

const ForgotPassword = () => {
  const [message, setMessage] = useState(null)

  const formik = useFormik({
    initialValues: { email: '' },
    validate: (values) => {
      const errors: Partial<{ email: string }> = {}
      const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

      if (!validateEmail.test(values.email!)) errors.email = 'Email invalido'
      if (!values.email) errors.email = 'Este campo es requerido'
      return errors
    },
    onSubmit: async (values) => {
      const response = await post('auth/forgot-password', values)
      if (response.status === 200) {
        setMessage(response.data.message)
      }

      if (response.data.error || response.data.errors)
        setMessage(response.data.error || response.data.errors)
    }
  })

  return (
    <section className={styles.container}>
      <BreadCrumbs page="Recuperar contraseña" />
      <div className={styles.forgot}>
        <h1 className={styles.title}>RECUPERACIÓN DE CONTRASEÑA</h1>
        <p className={styles.subtitle}>
          <strong>INTRODUCE TU EMAIL. </strong>TE ENVIAREMOS INMEDIATAMENTE UN
          CORREO ELECTRÓNICO CON TUS DATOS DE ACCESO A LA WEB.
        </p>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          {!message ? (
            <>
              <Input
                labelText="EMAIL"
                textType="text"
                name="email"
                textPlaceholder="INTRODUCE TU EMAIL"
                formik={formik}
              />
              <div className={styles.btn_container}>
                <Button type="submit" text="ENVIAR" />
              </div>
            </>
          ) : (
            <Message message={message} />
          )}
        </form>
        <div className={styles.buttons}>
          <Link to="/">IR AL INICIO</Link>
          <Link to="/login">INICIAR SESIÓN</Link>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
