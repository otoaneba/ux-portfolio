import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Case Studies</h1>
      <div className="flex flex-col gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
