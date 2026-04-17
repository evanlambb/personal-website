import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-14">
        <h2 id="projects-heading" className="heading-1 mb-12 text-center">
          Projects
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((entry) => (
            <ProjectCard key={entry.name} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
