import { Link } from 'react-router-dom'
import styles from './checkbox.module.scss'

interface PropsCheck {
  text: string
  linkText: string
  href: string
  footerStyle?: boolean
  idFor: string
}

const CheckBox = ({ text, linkText, href, footerStyle, idFor }: PropsCheck) => {
  return (
    <div className={footerStyle ? styles.footerStyle : styles.check}>
      <input id={idFor} type="checkbox" />
      <label htmlFor={idFor}>
        {text} <Link to={`/${href}`}>{linkText}</Link>
      </label>
    </div>
  )
}

export default CheckBox
