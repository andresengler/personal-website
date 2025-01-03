'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export function BlurEffect() {
  const { theme } = useTheme()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuBackground = theme === 'dark' ? 'rgba(10, 10, 10, 0.8)' : 'rgba(240, 240, 240, 0.8)'

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-28 pointer-events-none z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollY > 0 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: 'blur(0.5px)',
        WebkitBackdropFilter: 'blur(0.5px)',
        background: `linear-gradient(to bottom, 
          ${menuBackground} 0%, 
          ${menuBackground.replace('0.8', '0.15')} 20%, 
          ${menuBackground.replace('0.8', '0.05')} 33%, 
          ${menuBackground.replace('0.8', '0.015')} 47%,
          ${menuBackground.replace('0.8', '0.004')} 60%,
          ${menuBackground.replace('0.8', '0.001')} 73%,
          ${menuBackground.replace('0.8', '0.0004')} 87%,
          ${menuBackground.replace('0.8', '0.0001')} 93%,
          ${menuBackground.replace('0.8', '0')} 100%)`,
      }}
    />
  )
}
