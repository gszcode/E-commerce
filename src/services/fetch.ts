import axios, { AxiosError, AxiosResponse } from 'axios'
import { Post, Put } from '../typescript/types/fetch'
const api = 'http://localhost:3000/api/v1'

const post = async (url: string, data?: Post): Promise<AxiosResponse> => {
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

const put = async (url: string, data?: Put): Promise<AxiosResponse> => {
  try {
    const response = await axios.put(`${api}/${url}`, data)
    return response
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response) return axiosError.response
    else throw error
  }
}

export { post, get, put }
