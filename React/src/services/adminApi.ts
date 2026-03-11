import axios from 'axios'
import type { Project } from '../types/project'

const adminApi = axios.create({
  baseURL: 'http://localhost:8000/api/admin',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

// Auth
export const login = async (username: string, password: string) => {
  const response = await adminApi.post('/login.php', { username, password })
  return response.data
}

export const logout = async () => {
  const response = await adminApi.post('/logout.php')
  return response.data
}

export const checkSession = async () => {
  const response = await adminApi.get('/check-session.php')
  return response.data
}

// Projects CRUD
export const getAdminProjects = async () => {
  const response = await adminApi.get('/projects.php')
  return response.data
}

export const getAdminProject = async (id: number) => {
  const response = await adminApi.get(`/project.php?id=${id}`)
  return response.data
}

export const createProject = async (data: Partial<Project>) => {
  const response = await adminApi.post('/projects.php', data)
  return response.data
}

export const updateProject = async (id: number, data: Partial<Project>) => {
  const response = await adminApi.put(`/project.php?id=${id}`, data)
  return response.data
}

export const deleteProject = async (id: number) => {
  const response = await adminApi.delete(`/project.php?id=${id}`)
  return response.data
}

// Image upload
export const uploadImage = async (prefix: string, file: File) => {
  const formData = new FormData()
  formData.append('prefix', prefix)
  formData.append('file', file)
  const response = await adminApi.post('/upload.php', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}
