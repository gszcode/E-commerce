export interface User {
  first_name?: string
  last_name?: string
  username?: string
  email?: string
}

export interface Auth extends User {
  password: string
  privacy_policy?: boolean
  purchase_conditions?: boolean
  [key: string]: string | boolean | undefined
}

export interface UserApi {
  user: User | null
  isAuthenticated?: boolean
}
