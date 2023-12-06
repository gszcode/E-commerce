import styles from './banner.module.scss'
import TextContainer from './TextContainer'

interface BannerProps {
  img: string
  alt: string
  style?: string
}

const Banner = ({ img, alt, style }: BannerProps) => {
  console.log(style)
  return (
    <div
      className={`${styles.container} ${style === 'outlet' && styles.outlet}`}
    >
      <img src={img} alt={alt} />

      {style === 'outlet' && (
        <TextContainer
          title="OUTLET"
          paragraph="LA MEJOR CALIDAD A PRECIOS INCREIBLES"
        />
      )}
    </div>
  )
}

export default Banner
