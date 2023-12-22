import { useFormik } from 'formik'
import { Auth } from '../typescript/interfaces/user.interface'
import { post } from '../services/fetch'
import { AxiosResponse } from 'axios'
import { useMessageToast } from './toastSuccess'
import { useDispatch } from 'react-redux'
import { setUserData } from '../store/features/user/userSlice'

export const useFormAuth = (initialValues: Auth) => {
  const { notify, notifyError } = useMessageToast()
  const dispatch = useDispatch()

  const validate = (values: Auth) => {
    const errors: Partial<Auth> = {}
    const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if (!validateEmail.test(values.email!)) errors.email = 'Email invalido'
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
          notify(response.data.message)
          dispatch(setUserData(response.data.user))
        }
      }

      if (response.data.error || response.data.errors)
        notifyError(response.data.error || response.data.errors)
    }
  })

  return formik
}
