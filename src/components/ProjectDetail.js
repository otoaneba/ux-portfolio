'use client'
import { motion } from 'framer-motion'

export default function ProjectDetail({ project }) {
  return (
    <article className="max-w-4xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-purple-600 dark:text-purple-400 mb-8">{project.subtitle}</p>
        
        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="mb-4">{project.problem.statement}</p>
            <p className="text-gray-600 dark:text-gray-300">{project.problem.need}</p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pain Points</h2>
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
        </section>

        {/* Personas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Personas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.personas.map((persona, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{persona.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{persona.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testing Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Testing & Results</h2>
          {Object.entries(project.testing).map(([phase, results], index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                {phase === 'lowFi' ? 'Low-Fidelity' : 
                 phase === 'midFi' ? 'Mid-Fidelity' : 
                 'Prototype'} Testing
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">What Worked</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {results.good.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
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
        </section>

        {/* Solutions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(project.solutions).map(([category, items], index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 capitalize">{category}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </article>
  )
} 