import { Calendar, ExternalLink, User } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { PageHeading } from "../components/ui/PageHeading";
import { getProjectById } from "../services/api";
import type { Project } from "../types/project";

export default function ProjectDetails() {
    const [project, setProject] = useState<Project>()
    const {id} = useParams()
 
    useEffect(() => {
      const res = getProjectById(id!)
      res.then(data => {
        if (data.status === 'success') {
          const projectData = data.data[0]
          
          // Parse JSON fields if they are strings
          if (projectData.gallery && typeof projectData.gallery === 'string') {
            try {
              projectData.gallery = JSON.parse(projectData.gallery)
            } catch (e) {
              console.error('Error parsing gallery:', e)
              projectData.gallery = null
            }
          }
          
          if (projectData.technologies && typeof projectData.technologies === 'string') {
            try {
              projectData.technologies = JSON.parse(projectData.technologies)
            } catch (e) {
              console.error('Error parsing technologies:', e)
              projectData.technologies = null
            }
          }
          
          setProject(projectData)
        }
      })
    }, [id])
    
    if (!project) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-zinc-400 text-lg">Nalaganje...</div>
        </div>
      );
    }

    return (
      <>
        <PageHeading title={project.title} />
        
        <div className="py-16 md:py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                    {project.industry}
                  </span>
                  {project.category && (
                    <span className="px-4 py-2 bg-surface text-zinc-300 text-sm font-medium rounded-full border border-white/5">
                      {project.category}
                    </span>
                  )}
                </div>

                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                  {project.short_description}
                </p>

                {project.long_description && (
                  <div className="text-zinc-400 leading-relaxed space-y-4 mt-6">
                    {project.long_description.split('\n').map((paragraph, idx) => (
                      paragraph.trim() && <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Project Meta */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="bg-surface rounded-xl p-6 border border-white/5 space-y-6">
                  <h3 className="text-lg font-bold text-white mb-4">Informacije o projektu</h3>
                  
                  {project.client_name && (
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Stranka</div>
                        <div className="text-white font-medium">{project.client_name}</div>
                      </div>
                    </div>
                  )}

                  {project.completion_date && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Zaključeno</div>
                        <div className="text-white font-medium">
                          {new Date(project.completion_date).toLocaleDateString('sl-SI', {
                            year: 'numeric',
                            month: 'long'
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {project.duration_days && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Trajanje</div>
                        <div className="text-white font-medium">{project.duration_days} dni</div>
                      </div>
                    </div>
                  )}

                  {project.project_url && (
                    <div className="pt-4 border-t border-white/5">
                      <Button
                        href={project.project_url}
                        variant="primary"
                        className="w-full"
                        rightIcon={<ExternalLink className="w-4 h-4" />}
                      >
                        Obišči spletno stran
                      </Button>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Main Image */}
          {project.image_url && (
            <AnimatedSection>
              <div className="mb-16 rounded-2xl overflow-hidden border border-white/5">
                <img
                    src={`/images/projects/${project.thumbnail_url}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </AnimatedSection>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <AnimatedSection>
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Galerija</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-white/5">
                      <img
                        src={`/images/projects/${image}`}
                        alt={`${project.title} - ${idx + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Challenge, Solution, Results */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {project.challenge && (
              <AnimatedSection>
                <div className="bg-surface rounded-xl p-6 md:p-8 border border-white/5 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Izziv</h3>
                  <p className="text-zinc-400 leading-relaxed">{project.challenge}</p>
                </div>
              </AnimatedSection>
            )}

            {project.solution && (
              <AnimatedSection delay={0.1}>
                <div className="bg-surface rounded-xl p-6 md:p-8 border border-white/5 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Rešitev</h3>
                  <p className="text-zinc-400 leading-relaxed">{project.solution}</p>
                </div>
              </AnimatedSection>
            )}

            {project.results && (
              <AnimatedSection delay={0.2}>
                <div className="bg-surface rounded-xl p-6 md:p-8 border border-white/5 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">Rezultati</h3>
                  <p className="text-zinc-400 leading-relaxed">{project.results}</p>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Back to Projects */}
          <AnimatedSection>
            <div className="text-center">
              <Link
                to="/references"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                ← Nazaj na reference
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </>
    );
};
