import { useFormik } from 'formik'
import { Auth } from '../typescript/interfaces/user.interface'

export const useFormAuth = (initialValues: Auth) => {
  const validate = (values: Auth) => {
    const errors: Partial<Auth> = {}
    const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if (!validateEmail.test(values.email)) errors.email = 'Email invalido'
    for (const value in values) {
      if (!values[value]) errors[value] = 'Este campo es requerido'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    }
  })

  return formik
}
