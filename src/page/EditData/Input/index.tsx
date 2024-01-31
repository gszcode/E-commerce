import styles from './input.module.scss'

interface PropsInput {
  label: string
  type: string
  name: string
  value: string
  textholder?: string
}

const Input = ({ label, type, value, name, textholder }: PropsInput) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        name={name}
        placeholder={textholder}
      />
    </div>
  )
}

export default Input
