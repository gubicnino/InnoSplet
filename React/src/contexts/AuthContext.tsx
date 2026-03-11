import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { login as apiLogin, logout as apiLogout, checkSession } from '../services/adminApi'
import type { AdminUser, AuthState } from '../types/admin'

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  useEffect(() => {
    checkSession()
      .then((response) => {
        if (response.status === 'success' && response.data.authenticated) {
          setState({
            user: response.data.user as AdminUser,
            isAuthenticated: true,
            isLoading: false,
          })
        } else {
          setState((prev) => ({ ...prev, isLoading: false }))
        }
      })
      .catch(() => {
        setState((prev) => ({ ...prev, isLoading: false }))
      })
  }, [])

  const login = async (username: string, password: string) => {
    const response = await apiLogin(username, password)
    if (response.status === 'success') {
      setState({
        user: response.data as AdminUser,
        isAuthenticated: true,
        isLoading: false,
      })
    } else {
      throw new Error(response.message || 'Login failed')
    }
  }

  const logout = async () => {
    await apiLogout()
    setState({ user: null, isAuthenticated: false, isLoading: false })
  }

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
