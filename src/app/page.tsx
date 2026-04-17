import { Hero } from '@/components/portfolio/Hero'
import { Experience } from '@/components/portfolio/Experience'
import { Projects } from '@/components/portfolio/Projects'
import { SiteHeader } from '@/components/portfolio/SiteHeader'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-main text-primary">
      <SiteHeader />
      <Hero />
      <Experience />
      <Projects />
      {/* Anchor target for nav link until blog section exists */}
      <div id="blog" className="sr-only" tabIndex={-1} aria-hidden />
    </div>
  )
}
