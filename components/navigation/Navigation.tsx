'use client'

import { useState, useEffect, memo, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import VeldoraMascot from '../veldora/VeldoraMascot'

const navItems = [
  { name: 'Games', href: '/games', emoji: '🎮' },
  { name: 'Marketplace', href: '/marketplace', emoji: '🏪' },
  { name: 'Token', href: '/token', emoji: '🪙' },
  { name: 'Staking', href: '/staking', emoji: '💰' },
]

const Navigation = memo(function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'py-2 bg-white/80 backdrop-blur-xl shadow-cloud'
            : 'py-4 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🐉</span>
              <span className="text-2xl md:text-3xl font-display text-sky-azure">
                VELDORA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="px-4 py-2 rounded-full font-heading font-semibold text-gray-600 hover:text-sky-azure hover:bg-white/50 transition-colors flex items-center gap-2">
                    <span>{item.emoji}</span>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Connect Wallet Button */}
            <button
              className={cn(
                'hidden md:flex items-center gap-2',
                'px-6 py-3 rounded-full',
                'bg-gradient-to-r from-accent-sunshine to-accent-coral',
                'text-white font-heading font-bold',
                'shadow-cloud hover:shadow-float',
                'transition-all duration-300 hover:scale-105'
              )}
            >
              <span>💎</span>
              <span>Connect</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-12 h-12 rounded-full bg-white/80 shadow-cloud flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={cn(
                  'w-full h-0.5 bg-sky-azure rounded-full transition-transform origin-left',
                  isMobileMenuOpen && 'rotate-45 translate-y-[-2px]'
                )} />
                <span className={cn(
                  'w-full h-0.5 bg-sky-azure rounded-full transition-opacity',
                  isMobileMenuOpen && 'opacity-0'
                )} />
                <span className={cn(
                  'w-full h-0.5 bg-sky-azure rounded-full transition-transform origin-left',
                  isMobileMenuOpen && '-rotate-45 translate-y-[2px]'
                )} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Simplified */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-sky-primary/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-2xl font-display text-white"
                >
                  <span>{item.emoji}</span>
                  {item.name}
                </Link>
              ))}

              <button
                className="mt-8 px-8 py-4 rounded-full bg-white text-sky-azure font-display text-xl shadow-float"
                onClick={closeMenu}
              >
                💎 Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

export default Navigation