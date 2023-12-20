import styles from './wrapper.module.scss'

interface PropsWrapper {
  children: JSX.Element
}

const Wrapper = ({ children }: PropsWrapper) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
