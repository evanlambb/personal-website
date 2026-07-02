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
    name: 'Clarigo', // [cite: 1]
    tagline: 'Detect and filter non-educational videos from your YouTube recommendations, instantly, with classical machine learning.', // [cite: 38]
    imageSrc: '/images/logos/placeholder.png', 
    description: [
      'Classifies YouTube videos as educational or non-educational from their metadata to filter your YouTube feed in real time. [cite: 23]',
      'Executes inference entirely client-side in the browser using a lightweight logistic regression and TF-IDF model. [cite: 24, 124]',
      'Built a Python data pipeline that handles data collection, labeling, training, and exporting the model to a browser-ready format. [cite: 25]'
    ],
    techStack: ['Python', 'JavaScript', 'HTML', 'CSS', 'Chrome Extension API'], // [cite: 39, 40]
    links: [
      { label: 'GitHub', href: 'https://github.com/r-chong/Clarigo' }, // [cite: 23]
    ],
  },
  {
    name: 'AI Legal Research Assistant',
    tagline: 'Citation-grounded RAG system for Canadian refugee law',
    imageSrc: '/images/logos/caseLogo.ico',
    description: [
      'Engineered a full-stack RAG system for Canadian refugee law, delivering citation-grounded legal responses (ConHacks — Snowflake Track Winner).',
      'Built ingestion pipelines curating 3,000+ tribunal decisions and 70+ statutes in Snowflake; implemented chunking, metadata enrichment, and top-k semantic retrieval using LangChain and Snowflake Cortex Search.',
      'Architected a routed RAG pipeline with query rewriting and Gemini-based intent classification, dynamically selecting retrieval sources; enforced citation-only outputs via grounded prompting to reduce hallucination.',
    ],
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'Snowflake', 'Gemini', 'LangChain'],
    links: [
      { label: 'GitHub', href: 'https://github.com/evanlambb/Case' },
    ],
  },
  {
    name: 'Blox',
    tagline: 'A browser-based, AI-native Blender alternative that democratizes 3D game development with integrated generation, modeling, and animation.',
    imageSrc: '/images/logos/placeholder.png', 
    description: [
      'Engineered an accessible 3D scene editor with a hierarchical structure and customizable dockable windows to collapse the game development pipeline into a single workspace.',
      'Integrated Google Gemini and the Meshy API to power primitive model blockouts, image-to-3D generation, and natural-language animation selection.',
      'Developed a custom edit-mode using Three.js for vertex/edge/face manipulation and GLB export, earning Best Use of VR and the Gemini API category at HackCanada.'
    ],
    techStack: ['TypeScript', 'React 19', 'Three.js', 'Vite', 'Zustand', 'Gemini API', 'Meshy API'], 
    links: [
      { label: 'GitHub', href: 'https://github.com/evanlambb/HackCanada2026' },
    ],
  }, 
  {
    name: 'Personal Website',
    tagline: 'Portfolio and blog built with Next.js',
    imageSrc: '/images/logos/website.svg',
    description: [
      'Designed and developed a personal portfolio site to showcase work experience, projects, and blog posts.',
      'Built with Next.js App Router and Tailwind CSS for a fast, responsive, and accessible experience.',
      'Deployed on Vercel with automatic preview deployments for every pull request.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'GitHub', href: 'https://github.com/evanlambb/personal-website' },
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
      // { label: 'GitHub', href: 'https://github.com/evanlambb' },
    ],
  },
]
