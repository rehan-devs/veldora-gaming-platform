'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/footer/Footer'
import FloatingElements from '@/components/effects/FloatingElements'

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
  emoji?: string
}

export default function PageLayout({ 
  children, 
  title, 
  subtitle,
  emoji = '☁️'
}: PageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-primary via-cloud to-white">
      <FloatingElements />
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-6xl block mb-4"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-display text-white drop-shadow-lg mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl font-heading text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>

      <Footer />
    </main>
  )
}