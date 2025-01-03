'use client'

import { ReactNode } from 'react'
import { Azeret_Mono as Geist_Mono } from 'next/font/google'

const geistMono = Geist_Mono({ subsets: ['latin'] })

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="space-y-2">
      <h2 className={`${geistMono.className} text-[12px] font-normal tracking-tight text-gray-400`}>
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}
