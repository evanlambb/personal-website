# Personal Website

A modern two-part personal website built with Next.js, featuring a professional portfolio section and a personal playground for notes and experiments.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── professional/    # Professional portfolio section
│   │   └── playground/      # Personal playground section
│   ├── components/          # Reusable React components
│   └── lib/                 # Utility functions
├── content/                 # Markdown content
│   ├── notes/              # Personal notes (Obsidian-compatible)
│   ├── projects/           # Project documentation
│   └── experiments/        # Experiment documentation
└── public/                 # Static assets
```

## 🎯 Features

### Professional Section
- Resume and experience showcase
- Project portfolio
- Contact information
- Professional presentation

### Playground Section
- Obsidian notes integration
- Personal reflections and ideas
- Interactive experiments
- Learning documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX + Markdown
- **Development**: ESLint, Prettier

## 📝 Content Management

### Adding Notes
1. Create `.md` files in `content/notes/`
2. Include frontmatter with metadata:
   ```markdown
   ---
   title: "Note Title"
   date: "2024-01-15"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Use standard markdown syntax
4. Link between notes with `[[note-name]]`

### Adding Projects
1. Create `.md` files in `content/projects/`
2. Include project details and tech stack
3. Add links to demos and repositories

## 🚧 Development Status

This project follows a 4-phase implementation plan:

- ✅ **Phase 1**: Foundation Setup
- 🚧 **Phase 2**: Professional Section (Next)
- ⏳ **Phase 3**: Playground Foundation
- ⏳ **Phase 4**: Enhanced Features

See `IMPLEMENTATION_PLAN.md` for detailed roadmap.

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

This is a personal website project. Feel free to fork and adapt for your own use!

## 📄 License

ISC License - see LICENSE file for details. 
