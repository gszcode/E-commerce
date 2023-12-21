import styles from './button.module.scss'

interface ButtonProps {
  text: string
  type?: 'submit' | 'button'
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button type={type} className={styles.btn}>
      {text}
    </button>
  )
}

export default Button
