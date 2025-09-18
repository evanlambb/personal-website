# Personal Website Implementation Plan

## Project Overview
A two-part personal website built with Next.js:
- **Professional Section**: Resume, projects, contact info
- **Playground Section**: Obsidian notes, experiments, reflections

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: MDX + remark/rehype plugins
- **Deployment**: Vercel (recommended) or Netlify

## Project Structure
```
personal-website/
├── src/
│   ├── app/
│   │   ├── (professional)/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── (playground)/
│   │   │   ├── notes/
│   │   │   ├── experiments/
│   │   │   └── reflections/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── ui/
│   │   │   └── markdown/
│   │   ├── lib/
│   │   └── styles/
├── content/
│   ├── notes/
│   ├── projects/
│   └── experiments/
└── public/
    ├── images/
    └── assets/
```

## Phase 1: Foundation Setup (Week 1)

### 1.1 Project Initialization
- [x] Initialize Next.js project with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Set up ESLint and Prettier
- [ ] Configure basic folder structure

### 1.2 Basic Layout & Navigation
- [ ] Create main layout component
- [ ] Build navigation header
- [ ] Set up route groups for professional/playground
- [ ] Create landing page with section navigation

### 1.3 Markdown Processing Setup
- [ ] Install MDX and markdown processing libraries
- [ ] Configure remark/rehype plugins
- [ ] Create markdown rendering components
- [ ] Test with sample markdown files

## Phase 2: Professional Section (Week 2)

### 2.1 About/Resume Page
- [ ] Create professional summary component
- [ ] Build skills showcase
- [ ] Add work experience timeline
- [ ] Include education section

### 2.2 Projects Showcase
- [ ] Design project card component
- [ ] Create project detail pages
- [ ] Add filtering/categorization
- [ ] Include GitHub integration

### 2.3 Contact Information
- [ ] Build contact form
- [ ] Add social media links
- [ ] Include downloadable resume
- [ ] Add professional headshot

## Phase 3: Playground Foundation (Week 3)

### 3.1 Notes System
- [ ] Create note listing page
- [ ] Build individual note pages
- [ ] Add category navigation (classes, reflections, ideas)
- [ ] Implement date-based organization

### 3.2 Obsidian Integration
- [ ] Configure markdown parsing for Obsidian syntax
- [ ] Handle internal linking between notes
- [ ] Support for tags and metadata
- [ ] Image and asset handling

### 3.3 Search & Navigation
- [ ] Implement basic search functionality
- [ ] Create tag-based filtering
- [ ] Add breadcrumb navigation
- [ ] Build note index/archive

## Phase 4: Enhanced Features (Week 4+)

### 4.1 Interactive Experiments
- [ ] Create experiment showcase page
- [ ] Build iframe/component embedding system
- [ ] Add code snippet highlighting
- [ ] Include live demo capabilities

### 4.2 Content Management
- [ ] Set up content update workflow
- [ ] Add RSS feed for notes
- [ ] Implement content versioning
- [ ] Create backup/sync strategy

### 4.3 Performance & SEO
- [ ] Optimize images and assets
- [ ] Add meta tags and OpenGraph
- [ ] Implement sitemap generation
- [ ] Set up analytics

## Content Strategy

### Professional Content
1. **About Page**
   - Professional summary (2-3 paragraphs)
   - Core skills and technologies
   - Career timeline
   - Personal interests relevant to work

2. **Projects**
   - 3-5 key projects with:
     - Problem statement
     - Technology used
     - Your role and contributions
     - Results/impact
     - Links to code/demos

3. **Contact**
   - Professional email
   - LinkedIn profile
   - GitHub profile
   - Optional: Twitter, personal email

### Playground Content
1. **Class Notes**
   - Organized by subject/semester
   - Include code examples and diagrams
   - Link related concepts

2. **Reflections**
   - Daily thoughts and insights
   - Learning experiences
   - Career reflections

3. **Ideas**
   - Project concepts
   - Technical explorations
   - Random thoughts worth sharing

## Development Workflow

### Daily Development
1. Start with `npm run dev`
2. Work on one feature at a time
3. Test changes locally
4. Commit frequently with clear messages

### Content Updates
1. Add markdown files to `content/` directory
2. Update frontmatter metadata
3. Test rendering locally
4. Deploy changes

### Deployment
1. Push to GitHub repository
2. Connect to Vercel for automatic deployment
3. Configure custom domain (optional)
4. Set up preview deployments for testing

## Learning Resources

### Next.js Fundamentals
- [Next.js Official Tutorial](https://nextjs.org/learn)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Data Fetching Patterns](https://nextjs.org/docs/app/building-your-application/data-fetching)

### React Basics (as needed)
- [React Official Tutorial](https://react.dev/learn)
- [Component Patterns](https://react.dev/learn/thinking-in-react)
- [Hooks Overview](https://react.dev/reference/react)

### Styling & Design
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [UI Component Libraries](https://ui.shadcn.com/)
- [Color Palette Tools](https://coolors.co/)

## Success Metrics

### Phase 1 Success
- [ ] Project runs locally without errors
- [ ] Basic navigation works between sections
- [ ] Can render simple markdown content

### Phase 2 Success
- [ ] Professional section looks presentable
- [ ] All resume information is displayed
- [ ] Contact form functions properly

### Phase 3 Success
- [ ] Can display Obsidian notes correctly
- [ ] Navigation between notes works
- [ ] Search finds relevant content

### Final Success
- [ ] Website deployed and accessible
- [ ] Both sections serve their intended purpose
- [ ] Easy to add new content
- [ ] Performance is acceptable

## Next Steps
1. Initialize the Next.js project
2. Set up basic project structure
3. Configure development environment
4. Start with Phase 1 implementation

---

*This plan will evolve as we build. Adjust timelines and features based on your learning pace and priorities.*
