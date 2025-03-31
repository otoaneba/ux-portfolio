'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/projects/${project.id}`}>
        <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="md:flex">
            {project.thumbnail && (
              <div className="md:w-2/5 relative h-48 md:h-auto">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6 md:w-3/5">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-4">{project.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
} 