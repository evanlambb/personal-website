export interface ExperienceEntry {
  company: string
  role: string
  startDate: string
  endDate: string
  logoSrc: string
  description: string[]
  techStack?: string[]
  links?: { label: string; href: string }[]
}

export const experiences: ExperienceEntry[] = [
  {
    company: 'Manulife',
    role: 'Software Engineering Intern',
    startDate: 'January 2026',
    endDate: 'April 2026',
    logoSrc: '/images/logos/manulife.png',
    description: [
      'Built and maintained internal microservices powering policy management workflows.',
      'Designed RESTful APIs consumed by multiple downstream teams across the organization.',
      'Improved CI/CD pipeline reliability, reducing failed deployments by 30%.',
    ],
    techStack: ['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'Docker', 'Jenkins'],
  },
  {
    company: 'Acme Corp',
    role: 'Junior Developer',
    startDate: 'May 2025',
    endDate: 'August 2025',
    logoSrc: '/images/logos/rbc.jpg',
    description: [
      'First bullet point about what you did.',
      'Second bullet point about impact or results.',
    ],
    techStack: ['Python', 'Django', 'Redis'],
  },
]
