import styles from './data_item.module.scss'

interface ItemProps {
  label: string
  data?: string
}

const DataItem = ({ label, data }: ItemProps) => {
  return (
    <p className={styles.item}>
      <strong>{label}: </strong>
      <span>{data}</span>
    </p>
  )
}

export default DataItem
