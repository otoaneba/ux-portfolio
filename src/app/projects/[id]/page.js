import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id.toString() === params.id)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
} 