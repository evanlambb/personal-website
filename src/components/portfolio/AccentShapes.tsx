interface ShapeProps {
  className?: string
}

function FilledCircle({ className }: ShapeProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="50" fill="var(--color-accent)" />
    </svg>
  )
}

function Ring({ className }: ShapeProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="6"
      />
    </svg>
  )
}

export function AccentShapesHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Ring className="absolute -right-16 top-1/3 h-48 w-48 opacity-[0.07] md:h-64 md:w-64 md:opacity-10" />
      <FilledCircle className="absolute -left-6 bottom-12 hidden h-16 w-16 opacity-[0.08] md:block" />
    </div>
  )
}

export function AccentShapesExperience() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <FilledCircle className="absolute -left-10 top-24 h-28 w-28 opacity-[0.06] md:h-40 md:w-40 md:opacity-[0.08]" />
      <Ring className="absolute -right-12 bottom-16 hidden h-36 w-36 opacity-[0.07] md:block" />
    </div>
  )
}

export function AccentShapesProjects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Ring className="absolute -left-14 top-16 h-44 w-44 opacity-[0.07] md:h-56 md:w-56 md:opacity-[0.09]" />
      <FilledCircle className="absolute -right-8 bottom-24 hidden h-20 w-20 opacity-[0.07] md:block" />
    </div>
  )
}
