'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ProjectEntry } from '@/data/projects'

export function ProjectCard({ entry }: { entry: ProjectEntry }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="cursor-pointer rounded-md border border-primary/20 bg-[var(--color-surface)]"
      onClick={() => setExpanded((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded((prev) => !prev)
        }
      }}
    >
      <div className="flex items-start gap-5 px-6 py-5 sm:gap-7 sm:px-8 sm:py-6">
        <div className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded sm:h-20 sm:w-20">
          <Image
            src={entry.imageSrc}
            alt={`${entry.name} logo`}
            fill
            className="object-contain"
            sizes="80px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="heading-3 truncate">{entry.name}</h3>
            <svg
              className={`h-5 w-5 shrink-0 text-primary/50 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="font-sans text-base font-medium sm:text-lg">
            {entry.tagline}
          </p>

          {entry.techStack && entry.techStack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="expandable-card-body"
        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-primary/10 px-6 pb-6 pt-5 sm:px-8">
            <ul className="body-text mb-4 list-disc space-y-2 pl-5 text-base sm:text-lg">
              {entry.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {entry.links && entry.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-4">
                {entry.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-medium text-accent underline underline-offset-2 hover:opacity-80"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
