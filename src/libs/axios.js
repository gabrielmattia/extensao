import axios from 'axios'

export const useAxios = axios.create({
  timeout: 30000,
  baseURL: import.meta.env.VITE_API_URL_DEV,
  validateStatus: () => true,
  headers: {
    'Content-Type': 'application/json',
  },
})
