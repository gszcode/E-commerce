import styles from './button.module.scss'

const Button = ({ text }: { text: string }) => {
  return <button className={styles.btn}>{text}</button>
}

export default Button
