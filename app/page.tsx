'use client'

import { motion } from 'framer-motion'
import { ProjectLink } from '../components/project-link'
import { Section } from '../components/section'
import { Azeret_Mono as Geist_Mono } from 'next/font/google'
import Link from 'next/link'

const geistMono = Geist_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="space-y-8 pb-2">
      <div className="space-y-3 mt-24">
        <h2 className={`${geistMono.className} text-[12px] font-normal tracking-tight text-gray-400 dark:text-gray-500`}>
          About
        </h2>
        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm an entrepreneur and editor based in Buenos Aires, Argentina, with a special interest in startups, business, design, and bitcoin. After more than a decade in the media industry, my focus is now on exploring new design prototypes, creating interfaces and ideating monetization strategies, among other ventures.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <Section title="Building">
          <div className="space-y-6">
            {[
              {
                title: "Editado",
                description: "Editorial studio specializing in publishing and research.",
                href: "/editado"
              },
              {
                title: "TodaBuenaObra",
                description: "Community of Spanish-speaking Christian entrepreneurs.",
                href: "/todabuenaobra"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <ProjectLink 
                  title={<span className="text-[15px] font-light text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{project.title}</span>}
                  description={<span className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</span>}
                  href={project.href}
                  isBold={false}
                />
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <h2 className={`${geistMono.className} text-[12px] font-normal tracking-tight text-gray-400 dark:text-gray-500`}>Now</h2>
        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
          I spend my days at Editado working with a variety of clients, conceptualizing and creating a wide range of media products, including digital magazines, newsletters, and podcasts. I'm constantly looking for new ways for independent creators to monetize their content.
        </p>
        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
          An initial interest in design led me to delve deeper into interface design, media prototypes, and an ever-growing fascination with typefaces. In many ways, those interests have led me to take my first steps in designing through code, driven by a deep desire to create beautiful products on my own.
        </p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-1"
      >
        <h2 className={`${geistMono.className} text-[12px] font-normal tracking-tight text-gray-400 dark:text-gray-500`}>Contact</h2>
        <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
          Reach me at LinkedIn, Twitter or andres@editado.xyz.
        </p>
      </motion.section>
    </div>
  )
}
