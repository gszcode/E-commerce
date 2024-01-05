import { useFormik } from 'formik'
import { Contact } from '../typescript/interfaces/contact.interface'
import { post } from '../services/fetch'
import { messageToast } from '../utils/toastSuccess'

export const useFormContact = (initialValues: Contact) => {
  const { notify, notifyError } = messageToast()

  const validate = (values: Contact) => {
    const errors: Partial<Contact> = {}
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
      const response = await post('contact', values)

      if (response.status === 200) {
        notify(response.data.message)
        formik.resetForm()
      } else {
        notifyError(response.data.error || response.data.errors)
      }
    }
  })

  return { formik }
}
