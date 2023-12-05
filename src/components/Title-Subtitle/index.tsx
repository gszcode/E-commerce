import styles from './title_subtitle.module.scss'

interface PropsTitles {
  title: string
  subtitle: string
}

const TitleSubtitle = ({ title, subtitle }: PropsTitles) => {
  return (
    <h2 className={styles.title}>
      {title} <br /> <small className={styles.subtitle}>{subtitle}</small>
    </h2>
  )
}

export default TitleSubtitle
