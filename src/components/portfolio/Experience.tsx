import { experiences } from '@/data/experience'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14">
        <h2 id="experience-heading" className="heading-1 mb-12 text-center">
          Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experiences.map((entry) => (
            <ExperienceCard key={entry.company + entry.startDate} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
