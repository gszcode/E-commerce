import { Contact } from '../interfaces/contact.interface'
import { Auth, RecoveryPassword } from '../interfaces/user.interface'

export type Post = Auth | Contact | { email: string }
export type Put = RecoveryPassword
