import { useFormik } from 'formik'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './forgot_password.module.scss'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {email: ''},
        onSubmit: async (values) => {
          console.log(values)
        }
      })

    return (
        <section className={styles.container}>
            <BreadCrumbs page="Recuperar contraseña" />
            <div className={styles.forgot}>
                <h1 className={styles.title}>RECUPERACIÓN DE CONTRASEÑA</h1>
                <p className={styles.subtitle}><strong>INTRODUCE TU EMAIL. </strong>TE ENVIAREMOS INMEDIATAMENTE UN CORREO ELECTRÓNICO CON TUS DATOS DE ACCESO A LA WEB.</p>
                <form className={styles.form}>
                    <Input labelText='EMAIL' textType='text' name="email" textPlaceholder='INTRODUCE TU EMAIL' formik={formik} />
                    <div className={styles.btn_container}>
                        <Button type='submit' text='ENVIAR' />
                    </div>
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