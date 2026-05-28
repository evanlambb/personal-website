import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-14">
        <div className="mb-12 text-center">
          <h2 id="projects-heading" className="heading-1">
            Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((entry) => (
            <ProjectCard key={entry.name} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
