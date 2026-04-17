export interface ProjectEntry {
  name: string
  tagline: string
  imageSrc: string
  description: string[]
  techStack?: string[]
  links?: { label: string; href: string }[]
}

export const projects: ProjectEntry[] = [
  {
    name: 'Personal Website',
    tagline: 'Portfolio and blog built with Next.js',
    imageSrc: '/images/logos/nextjs.svg',
    description: [
      'Designed and developed a personal portfolio site to showcase work experience, projects, and blog posts.',
      'Built with Next.js App Router and Tailwind CSS for a fast, responsive, and accessible experience.',
      'Deployed on Vercel with automatic preview deployments for every pull request.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'GitHub', href: 'https://github.com/evanlambb/personal-website' },
      { label: 'Live Site', href: 'https://evanlamb.com' },
    ],
  },
  {
    name: 'Forecasting Agent',
    tagline: 'AI-powered time-series forecasting tool',
    imageSrc: '/images/logos/rbc.jpg',
    description: [
      'Built a forecasting agent that ingests time-series data from Kubernetes-hosted services to predict resource usage and reduce cloud spend.',
      'Implemented an "Iterative Calibration" method simulating LLM backpropagation with mini chain-of-thought runs, achieving 5% MAPE with only 100 data points.',
      'Developed a web UI and backend onboarding workflow to streamline cross-team adoption.',
    ],
    techStack: ['Python', 'Flask', 'LangGraph', 'LangSmith', 'Kubernetes', 'Docker'],
    links: [
      { label: 'GitHub', href: 'https://github.com/evanlambb' },
    ],
  },
]
