'use client'
import { motion } from 'framer-motion'

export default function ProjectDetail({ project }) {
  return (
    <article className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Banner with Overview */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-purple-50 dark:bg-purple-900/20 py-32">
          <div className="max-w-4xl mx-auto px-4">
            {/* Case Study Title */}
            <div className="mb-16">
              <p className="text-2xl md:text-3xl uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 pl-10 font-custom-study">
                CASE STUDY — 
              </p>
              <h2 className="text-4xl font-bold md:text-5xl mb-16">
                {project.title}
              </h2>
            </div>

            {/* Overview Grid */}
            <div className="grid md:grid-cols-3 gap-12">
              {/* Column A - Main Description */}
              <div className="md:col-span-1">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Overview</h3>
                <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  {project.overview.description}
                </p>
              </div>

              {/* Column B - Additional Info */}
              <div className="md:col-span-1">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Platform</h3>
                <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  {project.overview.additionalInfo}
                </p>
              </div>

              {/* Column C - Role */}
              <div className="md:col-span-1">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Role & Timeline</h3>
                <p className="text-base text-gray-800 dark:text-gray-200">
                  {project.overview.role}, {project.overview.timeline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">The Problem</h2>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="mb-4">{project.problem.statement}</p>
              <p className="text-gray-600 dark:text-gray-300">{project.problem.need}</p>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Pain Points</h2>
            {project.painPoints.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{category.category}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {category.points.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Personas */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Personas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.personas.map((persona, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{persona.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{persona.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Results */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Testing & Results</h2>
            {Object.entries(project.testing).map(([phase, results], index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  {phase === 'lowFi' ? 'Low-Fidelity' : 
                   phase === 'midFi' ? 'Mid-Fidelity' : 
                   'Prototype'} Testing
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">What Worked</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {results.good.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">What Needed Work</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {results.bad.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(project.solutions).map(([category, items], index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 capitalize">{category}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </article>
  )
} 