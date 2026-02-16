import { useEffect, useState } from 'react'
import { CTASection } from '../components/home/CTASection'
import { ProjectCard, type Project } from '../components/references/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'

// Barve za rotacijo
const projectColors = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-600',
  'from-emerald-500 to-teal-600',
]

export function ReferencesPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects.php')
      .then(res => res.json())
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
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="pt-12 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center text-zinc-400">Nalaganje...</div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-12 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Naše reference"
          subtitle="Projekti, ki prikazujejo našo strokovnost v različnih panogah."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <CTASection />
    </>
  )
}
