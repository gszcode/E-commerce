import { products } from '../json/offers_products'
import { blankets, several, sofas } from '../json/home_products'
import { pajamas_blankets, sneakers, underwear } from '../json/clothes_products'
import { sports } from '../json/sports_products'
import { bikes } from '../json/bikes_products'

export const allProducts = [
  ...products,
  ...pajamas_blankets,
  ...sofas,
  ...blankets,
  ...underwear,
  ...sneakers,
  ...several,
  ...sports,
  ...bikes
]
