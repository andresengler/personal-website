'use client'

import Link from 'next/link'

interface ProjectLinkProps {
  title: React.ReactNode
  description: string
  href?: string
  showArrow?: boolean
  isBold?: boolean
}

export function ProjectLink({ title, description, href = '#', showArrow = true, isBold = false }: ProjectLinkProps) {
  return (
    <div>
      <Link 
        href={href}
        className="block group"
      >
        <div className="flex items-center">
          {title}
          {showArrow && (
            <span className={`ml-1 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-[0.7em]`}>
              ↗
            </span>
          )}
        </div>
        {description && (
          <p className="text-[15px] text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </Link>
    </div>
  )
}
