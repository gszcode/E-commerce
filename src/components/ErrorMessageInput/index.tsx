import styles from './error_message_input.module.scss'
import { FormikProps } from 'formik'

interface ErrorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>
  name: string
}

const ErrorMessage = ({ formik, name }: ErrorProps) => {
  return (
    <>
      {formik.errors[name] && formik.touched[name] ? (
        <div className={styles.error}>{String(formik.errors[name])}*</div>
      ) : null}
    </>
  )
}

export default ErrorMessage
