import { Brand } from '../interfaces/brand.interface'

export type BrandWithoutId = Omit<Brand, 'id'>
