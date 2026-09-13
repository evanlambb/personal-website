export interface ProjectEntry {
  name: string
  tagline: string
  imageSrc: string
  description: string[]
  techStack?: string[]
  links?: { label: string; href: string }[]
  /** Optional YouTube video ID to embed in the expanded card, e.g. "cJf6P82O_ew" */
  youtubeId?: string
}

export const projects: ProjectEntry[] = [
  {
    name: 'Connect 4 AI',
    tagline: 'An AlphaZero-style game-playing agent that learns purely from self-play, no human game data.',
    imageSrc: '/images/logos/connect_zero_square.jpg',
    description: [
      'Implemented an AlphaZero-style game-playing agent from scratch that learns purely through self-play with no human game data, integrating Monte Carlo Tree Search with a policy/value neural network.',
      'Engineered the full self-play training loop, game generation, a symmetry-augmented replay buffer, batched network updates, and versioned, resumable checkpointing with a NaN/inf loss guard to prevent poisoned checkpoints.',
      'Developed an evaluation harness (arena match runner, generation-vs-generation win rates, anchored Elo with CSV/JSON export) that quantitatively confirmed each agent beats its baselines.',
    ],
    techStack: ['PyTorch', 'Python', 'NumPy', 'FastAPI'],
    youtubeId: 'cJf6P82O_ew',
    links: [
      { label: 'GitHub', href: 'https://github.com/evanlambb/Connect-Zero' },
    ],
  },
  {
    name: 'ML YouTube Chrome Extension', // [cite: 1]
    tagline: 'Detect and filter non-educational videos from your YouTube recommendations, instantly, with classical machine learning.', // [cite: 38]
    imageSrc: '/images/logos/clarigo_square.jpg', 
    description: [
      'Classifies YouTube videos as educational or non-educational from their metadata to filter your YouTube feed in real time.',
      'Executes inference entirely client-side in the browser using a lightweight logistic regression and TF-IDF model.',
      'Built a Python data pipeline that handles data collection, labeling, training, and exporting the model to a browser-ready format.'
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
    name: 'AI 3D character design engine',
    tagline: 'A browser-based, AI-native Blender alternative that democratizes 3D game development with integrated generation, modeling, and animation.',
    imageSrc: '/images/logos/blox_square.jpg', 
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
]
