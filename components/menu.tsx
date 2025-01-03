'use client'

import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { Azeret_Mono as Geist_Mono } from 'next/font/google'
import { useTheme } from 'next-themes'
import Link from 'next/link';

const geistMono = Geist_Mono({ subsets: ['latin'] })

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Writings', href: '/writings' },
];

export function Menu() {
  const pathname = usePathname()
  const { theme } = useTheme()

  const textColorActive = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textColorInactive = theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'

  return (
    <nav className="flex items-center space-x-3 ml-16 pr-4 sm:pr-4 sm:space-x-4">
      <ul className="flex items-center space-x-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <span
                className={`${geistMono.className} text-[12px] font-light leading-tight transition-colors duration-200 ${
                  pathname === item.href
                    ? textColorActive
                    : textColorInactive
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="ml-1 sm:ml-0">
        <ThemeToggle lightColor="gray" darkColor="gray" />
      </div>
    </nav>
  )
}
