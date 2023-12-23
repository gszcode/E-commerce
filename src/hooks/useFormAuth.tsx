import { useFormik } from 'formik'
import { Auth } from '../typescript/interfaces/user.interface'
import { post } from '../services/fetch'
import { AxiosResponse } from 'axios'
import { messageToast } from '../utils/toastSuccess'
import { useDispatch } from 'react-redux'
import { setUserData } from '../store/features/user/userSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthenticate } from './useAuthenticate'

export const useFormAuth = (initialValues: Auth) => {
  const { notify, notifyError } = messageToast()
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuthenticate()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/account')
  }, [isAuthenticated, navigate])

  const validate = (values: Auth) => {
    const errors: Partial<Auth> = {}
    const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if (!validateEmail.test(values.email!)) errors.email = 'Email invalido'
    if (values.password.length < 7) errors.password = 'Mínimo 8 caracteres'
    for (const value in values) {
      if (!values[value]) errors[value] = 'Este campo es requerido'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      let response: AxiosResponse

      if (values.first_name) {
        response = await post('auth/register', values)
        if (response.status === 201) notify(response.data.message)
      } else {
        response = await post('auth/login', values)
        if (response.status === 200) {
          const { message, user } = response.data
          notify(message)
          dispatch(setUserData({ user, isAuthenticated: true }))
        }
      }

      if (response.data.error || response.data.errors)
        notifyError(response.data.error || response.data.errors)
    }
  })

  return formik
}
