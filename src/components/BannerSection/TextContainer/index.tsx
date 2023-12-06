import styles from './text_container.module.scss'

interface TextProps {
  title: string
  paragraph: string
}

const TextContainer = ({ title, paragraph }: TextProps) => {
  return (
    <div className={styles.text_container}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  )
}

export default TextContainer
