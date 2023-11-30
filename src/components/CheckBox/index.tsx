import { Link } from 'react-router-dom'
import styles from './checkbox.module.scss'

interface PropsCheck {
  text: string
  linkText: string
  href: string
  footerStyle: boolean
}

const CheckBox = ({ text, linkText, href, footerStyle }: PropsCheck) => {
  console.log(footerStyle)
  return (
    <div className={footerStyle ? styles.footerStyle : styles.check}>
      <input type="checkbox" />
      <p>
        {text} <Link to={`/${href}`}>{linkText}</Link>
      </p>
    </div>
  )
}

export default CheckBox
