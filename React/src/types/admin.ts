export interface AdminUser {
  id: number
  username: string
  email: string
  role: 'admin' | 'editor'
}

export interface AuthState {
  user: AdminUser | null
  isAuthenticated: boolean
  isLoading: boolean
}
