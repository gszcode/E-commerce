import styles from './account_title.module.scss'

const AccountTitle = ({ title }: { title: string }) => {
  return <h1 className={styles.title}>{title}</h1>
}

export default AccountTitle
