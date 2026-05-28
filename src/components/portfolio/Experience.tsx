import { experiences } from '@/data/experience'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-14">
        <div className="mb-12 text-center">
          <h2 id="experience-heading" className="heading-1">
            Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((entry) => (
            <ExperienceCard key={entry.company + entry.startDate} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
