interface User {
  first_name?: string
  last_name?: string
  username?: string
  email: string
}

export interface UserSlice {
  message: string
  data?: User | null
}

export interface Auth extends User {
  password: string
  [key: string]: string | undefined
}
