'use client'

import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface FloatingCardProps {
  children: ReactNode
  className?: string
  showVeldora?: boolean
  veldoraPose?: 'peeking' | 'waving' | 'excited'
  glowColor?: 'sky' | 'sunshine' | 'coral' | 'mint' | 'lavender'
  hoverEffect?: 'lift' | 'glow' | 'rainbow'
}

const glowColors = {
  sky: 'hover:shadow-[0_20px_50px_rgba(135,206,235,0.3)]',
  sunshine: 'hover:shadow-[0_20px_50px_rgba(255,217,61,0.3)]',
  coral: 'hover:shadow-[0_20px_50px_rgba(255,139,148,0.3)]',
  mint: 'hover:shadow-[0_20px_50px_rgba(152,216,170,0.3)]',
  lavender: 'hover:shadow-[0_20px_50px_rgba(195,174,214,0.3)]',
}

export default function FloatingCard({
  children,
  className,
  showVeldora = false,
  veldoraPose = 'peeking',
  glowColor = 'sky',
  hoverEffect = 'lift',
}: FloatingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        'relative',
        'bg-white/80 backdrop-blur-xl',
        'border-2 border-white',
        'rounded-[30px]',
        'p-6',
        'shadow-cloud',
        'transition-all duration-500',
        glowColors[glowColor],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={
        hoverEffect === 'lift'
          ? { y: -10, scale: 1.02 }
          : hoverEffect === 'glow'
          ? { scale: 1.02 }
          : {}
      }
      animate={isHovered ? { y: -5 } : { y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Rainbow border on hover */}
      {hoverEffect === 'rainbow' && (
        <motion.div
          className="absolute inset-0 rounded-[30px] opacity-0 pointer-events-none"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          style={{
            background: 'linear-gradient(90deg, #FF8B94, #FFD93D, #98D8AA, #87CEEB, #C3AED6)',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      {/* Decorative clouds */}
      <motion.span
        className="absolute -top-4 -left-4 text-3xl opacity-60"
        animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        ☁️
      </motion.span>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Veldora peeking */}
      {showVeldora && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -bottom-6 -right-6 z-20"
              initial={{ opacity: 0, y: 20, rotate: 15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: 20, rotate: -15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <VeldoraMascot pose={veldoraPose} size="small" />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Sparkle effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -top-2 -right-2 text-xl"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            ✨
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}