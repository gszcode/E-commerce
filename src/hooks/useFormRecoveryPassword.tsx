import { useFormik } from 'formik'
import { RECOVERY_PASS } from '../typescript/interfaces/recovery_pass.interface.'
import { put } from '../services/fetch'
import { messageToast } from '../utils/toastSuccess'
import { useNavigate } from 'react-router-dom'

export const useFormRecoveryPass = (
  initialValues: RECOVERY_PASS,
  params?: string
) => {
  const { notify, notifyError } = messageToast()
  const navigate = useNavigate()
  const validate = (values: RECOVERY_PASS) => {
    const errors: Partial<RECOVERY_PASS> = {}

    for (const value in values) {
      if (!values[value]) errors[value] = 'Este campo es requerido'
      else if (values[value].length < 7) errors[value] = 'Mínimo 8 caracteres'
    }
    if (values.password !== values.repassword) {
      errors.repassword = 'Las contraseñas no coinciden'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      const response = await put(`auth/recovery-password/${params}`, values)
      if (response.status === 200) {
        notify(response.data.message)
        formik.resetForm()
        navigate('/login')
      }

      if (response.data.error || response.data.errors)
        notifyError(response.data.error || response.data.errors)
    }
  })

  return formik
}
