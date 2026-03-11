import { Edit, Plus, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { deleteProject, getAdminProjects } from '../../services/adminApi'
import type { Project } from '../../types/project'

export function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteModal, setDeleteModal] = useState<Project | null>(null)
  const [deleting, setDeleting] = useState(false)

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const response = await getAdminProjects()
      if (response.status === 'success') {
        setProjects(response.data)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleDelete = async () => {
    if (!deleteModal) return
    setDeleting(true)
    try {
      await deleteProject(deleteModal.id)
      setDeleteModal(null)
      fetchProjects()
    } catch (error) {
      console.error('Error deleting project:', error)
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center text-zinc-400 py-12">Loading projects...</div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <Button href="/admin-panel/projects/new" leftIcon={<Plus className="w-4 h-4" />}>
          New Project
        </Button>
      </div>

      <div className="bg-surface rounded-xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Title
              </th>
              <th className="text-left px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Industry
              </th>
              <th className="text-center px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Active
              </th>
              <th className="text-center px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Featured
              </th>
              <th className="text-center px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Order
              </th>
              <th className="text-right px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="px-6 py-4 text-white font-medium">{project.title}</td>
                <td className="px-6 py-4 text-zinc-400">{project.industry}</td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      project.is_active ? 'bg-green-500' : 'bg-zinc-600'
                    }`}
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      project.featured ? 'bg-primary' : 'bg-zinc-600'
                    }`}
                  />
                </td>
                <td className="px-6 py-4 text-center text-zinc-400">{project.order_position}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      to={`/admin-panel/projects/${project.id}/edit`}
                      className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setDeleteModal(project)}
                      className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                  No projects found. Create your first project.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-surface border border-white/5 rounded-2xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-white mb-2">Delete Project</h3>
            <p className="text-zinc-400 mb-6">
              Are you sure you want to delete &ldquo;
              <span className="text-white">{deleteModal.title}</span>&rdquo;? This action cannot be
              undone.
            </p>
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setDeleteModal(null)} disabled={deleting}>
                Cancel
              </Button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="inline-flex items-center justify-center font-medium transition-all duration-200 text-sm px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
