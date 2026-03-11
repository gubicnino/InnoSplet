import { FolderKanban, Star, ToggleRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getAdminProjects } from '../../services/adminApi'

export function DashboardPage() {
  const [stats, setStats] = useState({ total: 0, active: 0, featured: 0 })

  useEffect(() => {
    getAdminProjects().then((response) => {
      if (response.status === 'success') {
        const projects = response.data
        setStats({
          total: projects.length,
          active: projects.filter((p: { is_active: boolean | number }) => p.is_active).length,
          featured: projects.filter((p: { featured: boolean | number }) => p.featured).length,
        })
      }
    })
  }, [])

  const cards = [
    { label: 'Total Projects', value: stats.total, icon: FolderKanban, color: 'text-primary' },
    { label: 'Active', value: stats.active, icon: ToggleRight, color: 'text-green-500' },
    { label: 'Featured', value: stats.featured, icon: Star, color: 'text-yellow-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-surface rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-zinc-400 text-sm">{card.label}</span>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <div className="text-3xl font-bold text-white">{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
