import { Link } from 'react-router-dom'
import styles from './checkbox.module.scss'

interface PropsCheck {
  text: string
  linkText: string
  href: string
}

const CheckBox = ({ text, linkText, href }: PropsCheck) => {
  return (
    <div className={styles.check}>
      <input type="checkbox" />
      <p>
        {text} <Link to={`/${href}`}>{linkText}</Link>
      </p>
    </div>
  )
}

export default CheckBox
