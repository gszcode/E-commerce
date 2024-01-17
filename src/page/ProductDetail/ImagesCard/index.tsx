import { Product } from '../../../typescript/interfaces/product.interface'
import styles from './images_card.module.scss'

interface ImagesProps {
  selectImage: string | null
  productFound: Product
  handleSelectImage: (img: string) => void
}

const ImagesCard = ({
  selectImage,
  productFound,
  handleSelectImage
}: ImagesProps) => {
  return (
    <div className={styles.image_container}>
      <div className={styles.img}>
        <img
          src={selectImage ? selectImage : productFound?.images[0]}
          alt={productFound?.product_name}
          loading="lazy"
        />
      </div>
      <div className={styles.secondary_imgs}>
        {productFound?.images.map((img) => (
          <img
            key={img}
            src={img}
            alt="Product"
            onClick={() => handleSelectImage(img)}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}

export default ImagesCard
