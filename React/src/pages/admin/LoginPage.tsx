import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { useAuth } from '../../contexts/AuthContext'

export function LoginPage() {
  const { isAuthenticated, login, isLoading } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-zinc-400">Loading...</div>
      </div>
    )
  }

  if (isAuthenticated) {
    return <Navigate to="/admin-panel" replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(username, password)
    } catch {
      setError('Invalid username or password')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Inno<span className="text-primary">Splet</span>
            <span className="text-xs text-zinc-500 ml-2">Admin</span>
          </h1>
          <p className="text-zinc-400 mt-2">Sign in to continue</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-white/5 rounded-2xl p-6 space-y-5"
        >
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-400 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-500 text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" isLoading={submitting}>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}
