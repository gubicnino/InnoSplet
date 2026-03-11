import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { createProject, getAdminProject, updateProject, uploadImage } from '../../services/adminApi'

interface ProjectFormData {
  title: string
  slug: string
  short_description: string
  long_description: string
  industry: string
  category: string
  thumbnail_url: string
  gallery: string[]
  client_name: string
  project_url: string
  technologies: string
  completion_date: string
  duration_days: string
  challenge: string
  solution: string
  results: string
  is_active: boolean
  featured: boolean
  order_position: string
  prefix: string
}

const defaultForm: ProjectFormData = {
  title: '',
  slug: '',
  short_description: '',
  long_description: '',
  industry: '',
  category: '',
  thumbnail_url: '',
  gallery: [],
  client_name: '',
  project_url: '',
  technologies: '',
  completion_date: '',
  duration_days: '',
  challenge: '',
  solution: '',
  results: '',
  is_active: true,
  featured: false,
  order_position: '0',
  prefix: '',
}

const inputClass =
  'w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none'

const labelClass = 'block text-sm font-medium text-zinc-400 mb-2'

export function ProjectFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const [form, setForm] = useState<ProjectFormData>(defaultForm)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)

  const thumbnailInputRef = useRef<HTMLInputElement>(null)
  const galleryInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (id) {
      setLoading(true)
      getAdminProject(Number(id))
        .then((response) => {
          if (response.status === 'success') {
            const data = response.data

            // Parse JSON fields if they come as strings
            let gallery = data.gallery
            if (typeof gallery === 'string') {
              try {
                gallery = JSON.parse(gallery)
              } catch {
                gallery = []
              }
            }

            let technologies = data.technologies
            if (typeof technologies === 'string') {
              try {
                technologies = JSON.parse(technologies)
              } catch {
                technologies = []
              }
            }

            setForm({
              title: data.title || '',
              slug: data.slug || '',
              short_description: data.short_description || '',
              long_description: data.long_description || '',
              industry: data.industry || '',
              category: data.category || '',
              thumbnail_url: data.thumbnail_url || '',
              gallery: Array.isArray(gallery) ? gallery : [],
              client_name: data.client_name || '',
              project_url: data.project_url || '',
              technologies: Array.isArray(technologies) ? technologies.join(', ') : '',
              completion_date: data.completion_date || '',
              duration_days: data.duration_days?.toString() || '',
              challenge: data.challenge || '',
              solution: data.solution || '',
              results: data.results || '',
              is_active: Boolean(Number(data.is_active)),
              featured: Boolean(Number(data.featured)),
              order_position: data.order_position?.toString() || '0',
              prefix: data.prefix || '',
            })
          }
        })
        .catch((err) => {
          console.error('Error loading project:', err)
          setError('Failed to load project')
        })
        .finally(() => setLoading(false))
    }
  }, [id])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleToggle = (field: 'is_active' | 'featured') => {
    setForm((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: !isEditing
        ? title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
        : prev.slug,
    }))
  }

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!form.prefix) {
      setError('Please fill in the Prefix field before uploading images.')
      return
    }

    setUploading(true)
    setError('')
    try {
      const result = await uploadImage(form.prefix, file)
      if (result.status === 'success') {
        setForm((prev) => ({ ...prev, thumbnail_url: result.data.filename }))
      }
    } catch (err) {
      console.error('Error uploading thumbnail:', err)
      setError('Failed to upload thumbnail')
    } finally {
      setUploading(false)
      if (thumbnailInputRef.current) thumbnailInputRef.current.value = ''
    }
  }

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    if (!form.prefix) {
      setError('Please fill in the Prefix field before uploading images.')
      return
    }

    setUploading(true)
    setError('')
    try {
      const newFilenames: string[] = []
      for (const file of Array.from(files)) {
        const result = await uploadImage(form.prefix, file)
        if (result.status === 'success') {
          newFilenames.push(result.data.filename)
        }
      }
      setForm((prev) => ({ ...prev, gallery: [...prev.gallery, ...newFilenames] }))
    } catch (err) {
      console.error('Error uploading gallery images:', err)
      setError('Failed to upload one or more gallery images')
    } finally {
      setUploading(false)
      if (galleryInputRef.current) galleryInputRef.current.value = ''
    }
  }

  const removeGalleryImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    const techArray = form.technologies
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    const payload = {
      title: form.title,
      slug: form.slug,
      short_description: form.short_description,
      long_description: form.long_description || null,
      industry: form.industry,
      category: form.category || null,
      thumbnail_url: form.thumbnail_url || null,
      gallery: form.gallery.length > 0 ? form.gallery : null,
      client_name: form.client_name || null,
      project_url: form.project_url || null,
      technologies: techArray.length > 0 ? techArray : null,
      completion_date: form.completion_date || null,
      duration_days: form.duration_days ? Number(form.duration_days) : null,
      challenge: form.challenge || null,
      solution: form.solution || null,
      results: form.results || null,
      is_active: form.is_active ? 1 : 0,
      featured: form.featured ? 1 : 0,
      order_position: Number(form.order_position) || 0,
      prefix: form.prefix,
    }

    try {
      if (isEditing) {
        await updateProject(Number(id), payload)
      } else {
        await createProject(payload)
      }
      navigate('/admin-panel/projects')
    } catch (err) {
      console.error('Error saving project:', err)
      setError('Failed to save project')
    } finally {
      setSaving(false)
    }
  }

  const imagePreviewUrl = (filename: string) =>
    `/images/projects/${form.prefix}/${filename}`

  if (loading) {
    return <div className="text-center text-zinc-400 py-12">Loading project...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">
        {isEditing ? 'Edit Project' : 'New Project'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        {/* Basic Info */}
        <section className="bg-surface border border-white/5 rounded-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold text-white mb-1">Basic Info</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className={inputClass}
                placeholder="Project title"
                required
              />
            </div>

            <div>
              <label className={labelClass}>
                Slug <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                className={inputClass}
                placeholder="project-slug"
                required
              />
            </div>

            <div>
              <label className={labelClass}>Industry</label>
              <input
                type="text"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. IT, Healthcare"
              />
            </div>

            <div>
              <label className={labelClass}>Category</label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. Web Design"
              />
            </div>
          </div>
        </section>

        {/* Descriptions */}
        <section className="bg-surface border border-white/5 rounded-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold text-white mb-1">Descriptions</h2>

          <div>
            <label className={labelClass}>Short Description</label>
            <textarea
              name="short_description"
              value={form.short_description}
              onChange={handleChange}
              rows={2}
              className={`${inputClass} resize-none`}
              placeholder="Brief project description"
            />
          </div>

          <div>
            <label className={labelClass}>Long Description</label>
            <textarea
              name="long_description"
              value={form.long_description}
              onChange={handleChange}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Detailed project description"
            />
          </div>
        </section>

        {/* Media */}
        <section className="bg-surface border border-white/5 rounded-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold text-white mb-1">Media</h2>

          {/* Prefix first - needed before uploads */}
          <div>
            <label className={labelClass}>
              Prefix (image directory) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prefix"
              value={form.prefix}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. myproject"
              required
            />
            <p className="text-xs text-zinc-600 mt-1">
              Images will be stored in /images/projects/{form.prefix || '...'}/
            </p>
          </div>

          {/* Thumbnail */}
          <div>
            <label className={labelClass}>Thumbnail</label>
            <input
              ref={thumbnailInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleThumbnailUpload}
              className="hidden"
            />
            {form.thumbnail_url && form.prefix ? (
              <div className="flex items-start gap-4">
                <div className="relative group">
                  <img
                    src={imagePreviewUrl(form.thumbnail_url)}
                    alt="Thumbnail preview"
                    className="w-32 h-32 object-cover rounded-lg border border-zinc-700"
                  />
                  <button
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, thumbnail_url: '' }))}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    X
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-400">{form.thumbnail_url}</span>
                  <button
                    type="button"
                    onClick={() => thumbnailInputRef.current?.click()}
                    disabled={uploading}
                    className="text-sm text-primary hover:text-primary/80 text-left"
                  >
                    Replace
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (!form.prefix) {
                    setError('Please fill in the Prefix field before uploading images.')
                    return
                  }
                  thumbnailInputRef.current?.click()
                }}
                disabled={uploading}
                className="w-full border-2 border-dashed border-zinc-700 rounded-lg px-4 py-8 text-zinc-500 hover:border-zinc-500 hover:text-zinc-400 transition-colors text-sm"
              >
                {uploading ? 'Uploading...' : 'Click to upload thumbnail'}
              </button>
            )}
          </div>

          {/* Gallery */}
          <div>
            <label className={labelClass}>Gallery</label>
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              multiple
              onChange={handleGalleryUpload}
              className="hidden"
            />

            {form.gallery.length > 0 && form.prefix && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-3">
                {form.gallery.map((filename, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={imagePreviewUrl(filename)}
                      alt={filename}
                      className="w-full aspect-square object-cover rounded-lg border border-zinc-700"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      X
                    </button>
                    <span className="absolute bottom-0 left-0 right-0 bg-black/70 text-zinc-300 text-[10px] px-1 py-0.5 rounded-b-lg truncate">
                      {filename}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                if (!form.prefix) {
                  setError('Please fill in the Prefix field before uploading images.')
                  return
                }
                galleryInputRef.current?.click()
              }}
              disabled={uploading}
              className="w-full border-2 border-dashed border-zinc-700 rounded-lg px-4 py-6 text-zinc-500 hover:border-zinc-500 hover:text-zinc-400 transition-colors text-sm"
            >
              {uploading ? 'Uploading...' : 'Click to add gallery images'}
            </button>
          </div>
        </section>

        {/* Client & Details */}
        <section className="bg-surface border border-white/5 rounded-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold text-white mb-1">Client & Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Client Name</label>
              <input
                type="text"
                name="client_name"
                value={form.client_name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Client or company name"
              />
            </div>

            <div>
              <label className={labelClass}>Project URL</label>
              <input
                type="text"
                name="project_url"
                value={form.project_url}
                onChange={handleChange}
                className={inputClass}
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className={labelClass}>Completion Date</label>
              <input
                type="date"
                name="completion_date"
                value={form.completion_date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Duration (days)</label>
              <input
                type="number"
                name="duration_days"
                value={form.duration_days}
                onChange={handleChange}
                className={inputClass}
                placeholder="30"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Technologies (comma-separated)</label>
            <input
              type="text"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              className={inputClass}
              placeholder="React, TypeScript, Tailwind CSS"
            />
          </div>
        </section>

        {/* Case Study */}
        <section className="bg-surface border border-white/5 rounded-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold text-white mb-1">Case Study</h2>

          <div>
            <label className={labelClass}>Challenge</label>
            <textarea
              name="challenge"
              value={form.challenge}
              onChange={handleChange}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="What was the challenge?"
            />
          </div>

          <div>
            <label className={labelClass}>Solution</label>
            <textarea
              name="solution"
              value={form.solution}
              onChange={handleChange}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="How was it solved?"
            />
          </div>

          <div>
            <label className={labelClass}>Results</label>
            <textarea
              name="results"
              value={form.results}
              onChange={handleChange}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="What were the results?"
            />
          </div>
        </section>

        {/* Settings */}
        <section className="bg-surface border border-white/5 rounded-xl p-6 space-y-5">
          <h2 className="text-lg font-semibold text-white mb-1">Settings</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3">
              <span className="text-sm text-zinc-400">Active</span>
              <button
                type="button"
                onClick={() => handleToggle('is_active')}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  form.is_active ? 'bg-green-500' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    form.is_active ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3">
              <span className="text-sm text-zinc-400">Featured</span>
              <button
                type="button"
                onClick={() => handleToggle('featured')}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  form.featured ? 'bg-primary' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    form.featured ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>

            <div>
              <label className={labelClass}>Order Position</label>
              <input
                type="number"
                name="order_position"
                value={form.order_position}
                onChange={handleChange}
                className={inputClass}
                placeholder="0"
              />
            </div>
          </div>
        </section>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-500 text-sm">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Button type="submit" isLoading={saving}>
            {isEditing ? 'Save Changes' : 'Create Project'}
          </Button>
          <Button variant="ghost" type="button" onClick={() => navigate('/admin-panel/projects')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
