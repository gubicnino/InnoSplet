import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        {project.thumbnail_url ? (
          <img
            src={`/images/projects/${project.thumbnail_url}`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
          {project.industry}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}
