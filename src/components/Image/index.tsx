import styles from './image.module.scss'

interface ImageProps {
  img: string
  alt: string
  title?: string
}

const Image = ({ img, alt, title }: ImageProps) => {
  return (
    <img
      className={styles.icon}
      src={`/icons/${img}.svg`}
      alt={alt}
      title={title}
      loading="lazy"
    />
  )
}

export default Image
