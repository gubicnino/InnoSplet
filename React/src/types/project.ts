export interface Project {
  id: number
  title: string
  slug: string
  short_description: string
  long_description: string | null
  industry: string
  category: string | null
  image_url: string | null
  thumbnail_url: string | null
  gallery: string[] | null 
  client_name: string | null
  project_url: string | null
  technologies: string[] | null 
  completion_date: string | null 
  duration_days: number | null
  challenge: string | null
  solution: string | null
  results: string | null
  is_active: boolean
  featured: boolean
  order_position: number
  
  color?: string
}