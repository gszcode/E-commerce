import styles from './login_register.module.scss'

interface PropsInput {
  labelText: string
  textType: string
  textPlaceholder: string
}

const Input = ({ labelText, textType, textPlaceholder }: PropsInput) => {
  return (
    <div className={styles.input_container}>
      <label>{labelText}</label>
      <input type={textType} placeholder={textPlaceholder} />
    </div>
  )
}

export default Input
