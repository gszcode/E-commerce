import { Link } from 'react-router-dom'
import styles from './checkbox.module.scss'
import { FormikProps } from 'formik'
import ErrorMessage from '../ErrorMessageInput'

interface PropsCheck {
  text: string
  linkText: string
  href: string
  footerStyle?: boolean
  idFor: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik?: FormikProps<any>
}

const CheckBox = ({
  text,
  linkText,
  href,
  footerStyle,
  idFor,
  name,
  formik
}: PropsCheck) => {
  return (
    <div className={footerStyle ? styles.footerStyle : styles.check}>
      <input
        id={idFor}
        type="checkbox"
        name={name}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        checked={formik?.values[name!]}
      />
      <label htmlFor={idFor}>
        {text} <Link to={`${href}`}>{linkText}</Link>
      </label>
      {formik && <ErrorMessage formik={formik} name={name} style="check" />}
    </div>
  )
}

export default CheckBox
