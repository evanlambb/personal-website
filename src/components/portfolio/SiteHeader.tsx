import Link from 'next/link'

const navLinks = [
  { href: '#hero', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#notes', label: 'Blog / Notes' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-primary/10 bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center bg-surface px-4 py-2 text-sm font-semibold tracking-tight text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Evan Lamb
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 sm:gap-x-8 md:gap-x-10"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
