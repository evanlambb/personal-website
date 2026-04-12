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
    role: 'Software Engineer',
    startDate: 'January 2026',
    endDate: 'April 2026',
    logoSrc: '/images/logos/manulife.png',
    description: [
      'Architected an automated data pipeline using Python and MySQL to extract and synchronize Salesforce records into New Relic, delivering a centralized dashboard that enhanced system observability for the Integrations team.',
      'Engineered a Co-pilot Studio agent utilizing natural language processing to automate the generation of standardized Jira tickets, eliminating manual administrative overhead and accelerating issue resolution.',
      'Optimized business intelligence workflows by developing SQL queries within Salesforce Marketing Cloud, extracting critical performance metrics to drive data-informed decisions for senior business stakeholders.',
      'Orchestrated meetings translating business challenges from the sales team into actionable software requirements.',
      'Secured and deployed a custom Python app pipeline to the cloud using Kubernetes and Jenkins CI/CD workflows, enforcing security standards by performing Snyk scans and GitGuardian secret alerts prior to deployment.',
    ],
    techStack: ['Python', 'MySQL', 'Salesforce', 'New Relic', 'Co-pilot Studio', 'SQL', 'Kubernetes', 'Jenkins', 'Snyk'],
  },
  {
    company: 'Royal Bank of Canada (RBC)',
    role: 'Software Developer',
    startDate: 'May 2025',
    endDate: 'August 2025',
    logoSrc: '/images/logos/rbc.jpg',
    description: [
      'Developed a forecasting agent using Python that ingested and processed time-series data from 91 Kubernetes hosted services, enabling an estimated $400K in annual savings for a single team and demonstrating POC.',
      'Accelerated cross-team adoption by developing a web UI and backend on-boarding workflow that streamlined integration of the forecasting agent, reducing setup time for new teams using Flask REST APIs.',
      'Reduced MAPE (from 10% to 7%) by using LangGraph and LangSmith for performance monitoring, data fetching, cyclic reasoning, and data cleansing, enabling more reliable forecasts and better-informed decisions.',
      'Achieved 5% MAPE with only 100 data points by creating an "Iterative Calibration" method simulating LLM backpropagation with mini chain-of-thought runs, reducing forecast bias and improving prediction accuracy.',
      'Secured an initial and follow-up meeting with EVP of Core Banking & Payments Technology by presenting potential enterprise-wide benefits, leading to deeper evaluation of performance and cost savings.',
      'Documented data workflows and pipeline setup in Confluence, creating reusable references that reduced onboarding time across 3 teams and reinforced best practices in data pipeline management.',
      'Improved service stability by 20% across 91 microservices by optimizing CI/CD pipelines (GitHub Actions, SonarQube, Docker), strengthening deployment resilience and aligning with cloud-first DevOps practices.',
    ],
    techStack: ['Python', 'Flask', 'Kubernetes', 'LangGraph', 'LangSmith', 'GitHub Actions', 'SonarQube', 'Docker', 'Confluence'],
  },
]
