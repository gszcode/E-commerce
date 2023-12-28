import { useState, useEffect } from 'react'
import styles from './carousel.module.scss'
import ProductCard from '../ProductCard'
import { Product } from '../../typescript/interfaces/product.interface'

interface CarouselProps {
  products: Product[]
}

const Carousel = ({ products }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex, products.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const getItemsPerScreen = () => {
    const screenWidth = window.innerWidth
    if (screenWidth >= 1025) {
      return 4
    } else if (screenWidth >= 641) {
      return 3
    } else {
      return 2
    }
  }

  const itemsPerScreen = getItemsPerScreen()

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel_container}
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerScreen)}%)`
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Carousel Navegation */}
      <div className={styles.navigation}>
        <span
          className={`${styles.arrow} ${styles.prev}`}
          onClick={handlePrevClick}
        >
          &lt;
        </span>
        <div className={styles.pagination}>
          {products.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ''
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <span
          className={`${styles.arrow} ${styles.next}`}
          onClick={handleNextClick}
        >
          &gt;
        </span>
      </div>
    </div>
  )
}

export default Carousel
