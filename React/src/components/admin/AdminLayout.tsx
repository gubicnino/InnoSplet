import { FolderKanban, LayoutDashboard, LogOut, Settings } from 'lucide-react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { label: 'Dashboard', path: '/admin-panel', icon: LayoutDashboard },
  { label: 'Projects', path: '/admin-panel/projects', icon: FolderKanban },
  { label: 'Settings', path: '/admin-panel/settings', icon: Settings },
]

export function AdminLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/admin-panel/login')
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-white/5 flex flex-col shrink-0">
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <Link to="/admin-panel" className="text-xl font-bold text-white">
            Inno<span className="text-primary">Splet</span>
            <span className="text-xs text-zinc-500 ml-2">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== '/admin-panel' && location.pathname.startsWith(item.path))
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User info + Logout */}
        <div className="p-4 border-t border-white/5">
          <div className="text-sm text-zinc-400 mb-3 px-4">{user?.username}</div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-500/5 transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
