import styles from './brands.module.scss'
import { brands } from '../../json/brands'
import BrandCard from './BrandCard'

const Brands = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>NUESTRAS MARCAS</h2>
      <div className={styles.brands_container}>
        {brands.map((brand) => (
          <BrandCard key={brand.id} image={brand.image} title={brand.title} />
        ))}
      </div>
    </section>
  )
}

export default Brands
