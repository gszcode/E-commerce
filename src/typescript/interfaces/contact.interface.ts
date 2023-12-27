import { User } from './user.interface'

export interface Contact extends User {
  phone: string
  affair: string
  message: string
  privacy_policy: boolean
  [key: string]: string | boolean | undefined
}
