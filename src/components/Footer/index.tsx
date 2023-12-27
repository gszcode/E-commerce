import Accordion from './Accordion'
import styles from './footer.module.scss'
import CheckBox from '../CheckBox'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.offers_container}>
        <h4 className={styles.span}>¡Recibe ofertas en tu correo!</h4>
        <div className={styles.input_container}>
          <input type="email" placeholder="Escribe tu e-mail" />
          <img src="/icons/message.svg" alt="Message Icon" />
        </div>
        <CheckBox
          text="He leído y estoy conforme con la"
          linkText="Política de Protección de Datos"
          href="/data-protection"
          footerStyle={true}
          idFor="data_protection"
          name="data-protection"
        />
      </div>
      <div className={styles.links}>
        <Accordion
          title="INFORMACIÓN"
          links={[
            'Contacto',
            'Envios y devoluciones',
            'Condiciones generales',
            'FAQ',
            'MAPA web'
          ]}
        />
        <Accordion
          title="SOBRE NOSOTROS"
          links={[
            'Quienes somos',
            'Contacto',
            'Aviso Legal',
            'Política y privacidad',
            'Política de cookies'
          ]}
        />
        <Accordion
          title="CUENTA"
          links={['Mi cuenta', 'Mis pedidos', 'Mis datos', 'Mis direcciones']}
        />
        <Accordion
          title="CONTACTO"
          links={[
            'minimo-shoes.com',
            'DIRECCIÓN: Avenida Almendra 44 07888 Alcoya (Buenos Aires) Argentina',
            'TELÉFONO: 9966451202',
            'E-MAIL: imperio@shoes.com'
          ]}
        />
      </div>
      <div className={styles.payment_cards}>
        <img src="/assets/footer_01.png" alt="Secure payment" />
      </div>
    </footer>
  )
}

export default Footer
