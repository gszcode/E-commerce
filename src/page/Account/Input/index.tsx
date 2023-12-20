import styles from './input.module.scss'

interface PropsInput {
  label: string
  type: string
}

const Input = ({ label, type }: PropsInput) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} placeholder="lorem ipsum" />
    </div>
  )
}

export default Input
