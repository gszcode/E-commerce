import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import ErrorMessage from '../../components/ErrorMessageInput'
import Image from '../../components/Image'
import Input from '../../components/Input'
import { useFormContact } from '../../hooks/useFormContact'
import styles from './contact.module.scss'

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  affair: '',
  message: '',
  privacy_policy: false
}

const Contact = () => {
  const { formik } = useFormContact(initialValues)

  return (
    <section className={styles.container}>
      <BreadCrumbs page="Contacto" />
      <div className={styles.contact}>
        <AccountTitle title="Contacto" />
        <div className={styles.address_container}>
          <h3 className={styles.subtitle}>
            <Image img="map" alt="Address" />
            DIRECCIÓN DE CONTACTO
          </h3>
          <p className={styles.sub_subtitle}>
            Avenida Almendra 44 07888 Alcoya (Buenos Aires) Argentina
          </p>
          <p>
            Número de teléfono: <span>9966451202</span>
          </p>
          <p>
            Correo electrónico: <span>imperio@shoes.com</span>
          </p>
        </div>
        <div className={styles.contact_form}>
          <h3 className={styles.subtitle}>
            <Image img="contact_message" alt="Message" />
            ENVÍANOS TU MENSAJE
          </h3>
          <p className={styles.sub_subtitle}>
            RELLENA EL SIGUIENTE FORMULARIO Y EN BREVE TE CONTESTAREMOS.
          </p>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.data_container}>
              <div className={styles.data}>
                <Input
                  labelText="NOMBRE *"
                  textType="text"
                  textPlaceholder="Introduce tu nombre"
                  name="first_name"
                  formik={formik}
                />
                <Input
                  labelText="APELLIDO *"
                  textType="text"
                  textPlaceholder="Introduce tu apellido"
                  name="last_name"
                  formik={formik}
                />
                <Input
                  labelText="EMAIL *"
                  textType="email"
                  textPlaceholder="Introduce tu email"
                  name="email"
                  formik={formik}
                />
                <Input
                  labelText="TELÉFONO *"
                  textType="tel"
                  textPlaceholder="Introduce tu teléfono"
                  name="phone"
                  formik={formik}
                />
              </div>
              <div className={styles.data}>
                <Input
                  labelText="ASUNTO *"
                  textType="text"
                  textPlaceholder="Introduce el asunto"
                  name="affair"
                  formik={formik}
                />
                <div className={styles.msg}>
                  <label>MENSAJE *</label>
                  <textarea
                    name="message"
                    placeholder="Escribe aquí tu mensaje"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  ></textarea>
                  {formik && <ErrorMessage formik={formik} name="message" />}
                </div>
              </div>
            </div>
            <div className={styles.check}>
              <CheckBox
                text="Confirmo que he leído y estoy conforme con la"
                linkText="Política de Protección de Datos"
                href="/privacy-policy"
                idFor="privacy_policy"
                name="privacy_policy"
                formik={formik}
              />
            </div>
            <Button text="ENVIAR" type="submit" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
