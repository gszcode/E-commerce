import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setUserData } from '../store/features/user/userSlice'
import { get } from '../services/fetch'

interface CheckProps {
  setLoading: (value: React.SetStateAction<boolean>) => void
}

export const useCheckLogin = ({ setLoading }: CheckProps) => {
  const dispatch = useDispatch()

  const checkLogin = async () => {
    setLoading(true)
    const cookies = Cookies.get()

    if (!cookies.token) {
      dispatch(setUserData({ user: null, isAuthenticated: false }))
      setLoading(false)
      return
    }

    try {
      const response = await get('auth/verify-token')
      if (response.status !== 200) {
        dispatch(setUserData({ user: null, isAuthenticated: false }))
        return
      }

      dispatch(setUserData({ user: response.data, isAuthenticated: true }))
    } catch (error) {
      dispatch(setUserData({ user: null, isAuthenticated: false }))
    } finally {
      setLoading(false)
    }
  }

  return { checkLogin }
}
