import { Hero } from '@/components/portfolio/Hero'
import { Experience } from '@/components/portfolio/Experience'
import { SiteHeader } from '@/components/portfolio/SiteHeader'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-main text-primary">
      <SiteHeader />
      <Hero />
      <Experience />
      {/* Anchor targets for nav links until those sections exist */}
      <div id="projects" className="sr-only" tabIndex={-1} aria-hidden />
      <div id="blog" className="sr-only" tabIndex={-1} aria-hidden />
    </div>
  )
}
