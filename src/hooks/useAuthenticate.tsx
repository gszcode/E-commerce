import { useSelector } from 'react-redux'
import { UserApi } from '../typescript/interfaces/user.interface'

export const useAuthenticate = () => {
  const { isAuthenticated }: UserApi = useSelector(
    (state: { user: UserApi }) => state.user
  )

  return { isAuthenticated }
}
