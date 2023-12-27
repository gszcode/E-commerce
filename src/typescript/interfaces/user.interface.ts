export interface User {
  first_name?: string
  last_name?: string
  username?: string
  email?: string
}

export interface Auth extends User {
  privacy_policy: boolean
  purchase_conditions: boolean
  password: string
  [key: string]: string | boolean | undefined
}

export interface UserApi {
  user: User | null
  isAuthenticated?: boolean
}
