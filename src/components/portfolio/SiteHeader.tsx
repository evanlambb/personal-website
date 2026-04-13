import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  { href: 'https://github.com/evanlambb', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/evanlamb11/', label: 'LinkedIn', icon: FaLinkedinIn },
  { href: 'https://x.com/evan_lamb11', label: 'X', icon: FaXTwitter },
]

const navLinks: { href: string; label: string; newTab?: boolean }[] = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '/Evan_Lamb_Resume.pdf', label: 'Resume', newTab: true },
]

const linkClassName =
  'text-base font-semibold text-primary transition-colors duration-200 hover:text-accent hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
const linkStyle = { fontFamily: 'var(--font-inter), system-ui, sans-serif' }

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
                {item.newTab ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                    style={linkStyle}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={linkClassName}
                    style={linkStyle}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right column: social links */}
        <div className="hidden items-center gap-4 justify-self-end md:flex">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
            >
              <Icon size={27} />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
