import axios, { CreateAxiosDefaults } from 'axios'

const { VITE_BASE_URL } = import.meta.env

const defaultAxiosConfig: CreateAxiosDefaults = {
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const api = axios.create(defaultAxiosConfig)
