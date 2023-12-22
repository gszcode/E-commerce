export interface User {
  first_name?: string
  last_name?: string
  username?: string
  email?: string
}

export interface Auth extends User {
  password: string
  [key: string]: string | undefined
}

export interface UserApi {
  user: User | null | false
}
