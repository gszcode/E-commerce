import { useFormik } from 'formik'
import { RECOVERY_PASS } from '../typescript/interfaces/recovery_pass.interface.'

export const useFormRecoveryPass = (initialValues: RECOVERY_PASS) => {
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
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return formik
}
