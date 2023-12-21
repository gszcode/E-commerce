import { FormikProps } from 'formik'
import styles from './login_register.module.scss'
import Image from '../Image'
import { useState } from 'react'

interface PropsInput {
  labelText: string
  textType: string
  textPlaceholder: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>
}

const Input = ({
  labelText,
  textType,
  textPlaceholder,
  formik,
  name
}: PropsInput) => {
  const [showPass, setShowPass] = useState(false)

  const showPassword = () => {
    setShowPass(!showPass)
  }

  return (
    <div className={styles.input_container}>
      <label>{labelText}</label>
      <input
        type={!showPass ? textType : 'text'}
        placeholder={textPlaceholder}
        onChange={formik.handleChange}
        name={name}
        value={formik.values[name].toString()}
      />
      {name === 'password' && (
        <button
          type="button"
          className={`icon_btn ${styles.eye}`}
          onClick={showPassword}
        >
          <Image img={!showPass ? 'eye' : 'eye_slash'} alt="Eye" />
        </button>
      )}
    </div>
  )
}

export default Input
