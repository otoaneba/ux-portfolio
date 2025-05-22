'use client'
import { motion } from 'framer-motion'
import userIcon from '@/assets/images/user.svg'
import Image from 'next/image'

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
        <section className="w-full py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 font-montserrat">The Problem</h2>
            </div>
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-800 dark:text-gray-200">
              Can <span className="text-purple-600 dark:text-purple-400">onboarding</span> be made easier for <span className="text-purple-600 dark:text-purple-400">time-strapped parents</span> with young kids?
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">{project.problem.statement}</p>
            <p className="text-gray-600 dark:text-gray-300">{project.problem.need}</p>
          </div>
        </section>

        {/* Process Overview */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat">{project.process.overview.title}</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-gray-600 dark:text-gray-300">
              An 8-week journey to reimagine the authentication experience.
            </p>
            
            {/* Process Steps */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {project.process.overview.steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300">• {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            {/* <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                Result: {project.process.overview.result}
              </p>
            </div> */}
          </div>
        </section>

        {/* Needfinding */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                CHAPTER ONE
              </p>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 font-montserrat">{project.needfinding.title}</h2>
                <div className="w-8 h-8 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">1</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {project.needfinding.description}
            </p>
            
            <div className="flex flex-col gap-4">
              {project.needfinding.methods.map((method, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {method.details}
                  </p>
                  
                  {/* User Interview Quotes */}
                  {method.title === "User Interviews" && (
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={userIcon}
                            alt="User avatar"
                            width={52}
                            height={52}
                            className="text-purple-600 dark:text-purple-400"
                          />
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            Sarah, Mother of 2
                          </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                          "I'm always juggling the baby in one arm while trying to sign up for things. It's frustrating when I have to put her down just to type a password."
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={userIcon}
                            alt="User avatar"
                            width={52}
                            height={52}
                            className="text-purple-600 dark:text-purple-400"
                          />
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            Mike, Father of 3
                          </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                          "I often forget my passwords because I'm rushing through signup processes between my kids' activities."
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={userIcon}
                            alt="User avatar"
                            width={52}
                            height={52}
                            className="text-purple-600 dark:text-purple-400"
                          />
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                            Lisa, Mother of 1
                          </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                          "I wish there was a faster way to create accounts. I don't have time to fill out long forms while watching my toddler."
                        </p>
                      </div>
                    </div>
                  )}

                  {method.competitors && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {method.competitors.map((competitor, index) => (
                          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h4 className="font-semibold mb-3">{competitor.name}</h4>
                            <div className="space-y-4">
                              <div>
                                <p className="text-green-600 dark:text-green-400 text-sm mb-2">Strengths</p>
                                <ul className="text-sm space-y-1">
                                  {competitor.strengths.map((strength, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-300">• {strength}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-red-600 dark:text-red-400 text-sm mb-2">Weaknesses</p>
                                <ul className="text-sm space-y-1">
                                  {competitor.weaknesses.map((weakness, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-300">• {weakness}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Opportunities</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {method.opportunities.map((opportunity, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300">{opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Alternatives */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                CHAPTER TWO
              </p>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 font-montserrat">{project.designAlternatives.title}</h2>
                <div className="w-8 h-8 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {project.designAlternatives.description}
            </p>
            
            {/* Methods */}
            <div className="flex flex-col gap-6 mb-12">
              {project.designAlternatives.methods.map((method, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {method.details}
                  </p>
                  {method.personas && (
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      {method.personas.map((persona, i) => (
                        <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                          <h4 className="font-semibold mb-2">{persona.name}</h4>
                          <p className="text-purple-600 dark:text-purple-400 text-sm mb-3">{persona.role}</p>
                          <ul className="text-sm space-y-2">
                            {persona.goals.map((goal, j) => (
                              <li key={j} className="text-gray-600 dark:text-gray-300">• {goal}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* After Design Alternatives section */}
        {/* Prototype */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                CHAPTER THREE
              </p>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 font-montserrat">{project.prototype.title}</h2>
                <div className="w-8 h-8 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {project.prototype.description}
            </p>
            
            <div className="flex flex-col gap-6">
              {project.prototype.methods.map((method, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {method.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* After Prototype section */}
        {/* Evaluation */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                CHAPTER FOUR
              </p>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 font-montserrat">{project.evaluation.title}</h2>
                <div className="w-8 h-8 shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">4</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {project.evaluation.description}
            </p>
            
            <div className="flex flex-col gap-6">
              {project.evaluation.methods.map((method, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {method.details}
                  </p>
                  {method.testing && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">{method.testingTitle}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                          <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">What Worked</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {method.testing.good.map((item, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                          <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">What Needed Work</h4>
                          <ul className="list-disc pl-6 space-y-2">
                            {method.testing.bad.map((item, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery and Analysis */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 font-montserrat">Discovery and Analysis</h2>
            
            {/* Stakeholder Interviews */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-4">{project.discovery.stakeholderInterviews.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.discovery.stakeholderInterviews.description}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {project.discovery.stakeholderInterviews.keyFindings.map((finding, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">{finding}</li>
                ))}
              </ul>
            </div>

            {/* Summary of Insights */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-4">{project.discovery.insights.title}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {project.discovery.insights.findings.map((finding, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">{finding}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat">Pain Points</h2>
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

        {/* Testing Results */}
        <section className="w-full border-t border-gray-200 dark:border-gray-700 py-16 mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat">Testing & Results</h2>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat">Solutions</h2>
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