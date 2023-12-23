import axios, { AxiosError, AxiosResponse } from 'axios'
import { Auth } from '../typescript/interfaces/user.interface'
const api = 'http://localhost:3000/api/v1'

const post = async (url: string, data?: Auth): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(`${api}/${url}`, data)
    return response
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response) return axiosError.response
    else throw error
  }
}

const get = async (url: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(`${api}/${url}`, {
      withCredentials: true
    })
    return response
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response) return axiosError.response
    else throw error
  }
}

export { post, get }
