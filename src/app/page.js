import profileTokyo from "@/assets/profile-tokyo.png";
import Image from "next/image";
import Projects from './projects/page'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = projects.slice(0, 2) // Show first 2 projects

  return (
    <div className="flex flex-col gap-16 pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-8">
        {/* Profile Image */}
        <div className="mb-6">
          <Image
            src={profileTokyo}
            alt="Naoto Abe smiling toward the camera"
            width={250}
            height={250}
            className="rounded-full border-2 border-purple-600 dark:border-purple-400 p-1"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Crafting
          <span className="text-purple-600 dark:text-purple-400"> user-centric experiences </span>
           with code and design.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          Digital craftsman (Developer / UX Researcher) helping companies build products 
          that are both beautiful and functional.
        </p>
        <div className="flex gap-4">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Get in touch
          </a>
          <a 
            href="/about" 
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
        <div className="flex flex-col gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/projects"
            className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
