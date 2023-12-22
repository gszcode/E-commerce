import { toast } from 'react-toastify'

export const useMessageToast = () => {
  const notify = (message: string) => {
    toast(`✔️ ${message}`, {
      bodyClassName: `font-size: 16px`,
      toastId: 'customId'
    })
  }

  const notifyError = (message: string) => {
    toast(`❌ ${message}`, {
      bodyClassName: `font-size: 16px`,
      toastId: 'customIdError'
    })
  }

  return {
    notify,
    notifyError
  }
}
