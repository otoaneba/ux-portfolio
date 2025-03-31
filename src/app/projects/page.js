import AboutHero from '@/components/sections/AboutHero'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Next.js", "Tailwind"],
      image: "/path/to/image1.jpg",  // Add your image path
      link: "https://project1.com",   // Add your project link
      github: "https://github.com/yourusername/project1"
    },
    // Add more projects as needed
  ]

  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="space-y-8 w-full max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
          >
            {project.image && (
              <div className="md:w-1/2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            )}
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
