import Link from 'next/link'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#blog', label: 'Blog' },
]

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-10 w-full border-b border-primary"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-0 md:py-5">
        {/* Left column: brand */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-primary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Evan Lamb
          </Link>
        </div>

        {/* Center column: nav links */}
        <nav aria-label="Primary">
          <ul className="flex list-none gap-8">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-primary transition-colors duration-200 hover:text-accent hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right column: spacer (reserved for future dark-mode toggle / contact) */}
        <div className="hidden md:block" />
      </div>
    </header>
  )
}
