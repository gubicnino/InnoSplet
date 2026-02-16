import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getProjects = async () => {
  const response = await api.get('/projects.php')
  return response.data
}
export const getFeaturedProjects = async () => {
  const response = await api.get('/featured-projects.php')
  return response.data
}

export const sendContactMessage = async (data: { name: string; email: string; message: string }) => {
  const response = await api.post('/contact.php', data)
  return response.data
}