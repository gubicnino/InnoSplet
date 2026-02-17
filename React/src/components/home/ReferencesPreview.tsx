import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getFeaturedProjects } from '../../services/api'
import type { Project } from '../../types/project'
import { ProjectCard } from '../references/ProjectCard'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

// Barve za rotacijo
const projectColors = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-600',
  'from-emerald-500 to-teal-600',
]

export function ReferencesPreview() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProjects()
      .then(data => {
        if (data.status === 'success') {
          // Dodaj barve projektom
          const projectsWithColors = data.data.map((project: Project, index: number) => ({
            ...project,
            color: projectColors[index % projectColors.length]
          }));
          setProjects(projectsWithColors);
        }
        setLoading(false);
        console.log('Fetched projects:', data.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Nalaganje...</div>;
  
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Naše delo"
          subtitle="Izbor projektov, na katere smo ponosni."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button
            href="/references"
            variant="outline"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Ogled vseh projektov
          </Button>
        </div>
      </div>
    </section>
  )
}
