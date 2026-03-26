'use client'

import { ReactNode, memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CloudButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  'aria-label'?: string
}

const CloudButton = memo(function CloudButton({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  onClick,
  disabled = false,
  loading = false,
  'aria-label': ariaLabel,
}: CloudButtonProps) {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center gap-2',
    'font-heading font-bold rounded-full',
    'transition-all duration-200',
    'focus:outline-none focus:ring-4 focus:ring-sky-300',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95'
  )

  const variantStyles = {
    primary: cn(
      'bg-gradient-to-r from-yellow-400 to-orange-400',
      'text-gray-900',
      'border-3 border-yellow-300',
      'shadow-[0_8px_20px_rgba(251,191,36,0.4)]',
      'hover:shadow-[0_12px_30px_rgba(251,191,36,0.5)]',
      'hover:from-yellow-300 hover:to-orange-300',
      'hover:-translate-y-1'
    ),
    secondary: cn(
      'bg-white/95 backdrop-blur-md',
      'text-gray-900',
      'border-3 border-gray-300',
      'shadow-[0_8px_20px_rgba(0,0,0,0.1)]',
      'hover:bg-white',
      'hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]',
      'hover:border-gray-400',
      'hover:-translate-y-1'
    ),
    accent: cn(
      'bg-gradient-to-r from-pink-400 to-purple-500',
      'text-white',
      'border-3 border-pink-300',
      'shadow-[0_8px_20px_rgba(236,72,153,0.4)]',
      'hover:shadow-[0_12px_30px_rgba(236,72,153,0.5)]',
      'hover:from-pink-300 hover:to-purple-400',
      'hover:-translate-y-1'
    ),
    ghost: cn(
      'bg-transparent',
      'text-gray-900',
      'border-2 border-transparent',
      'hover:bg-white/50',
      'hover:border-gray-300'
    ),
  }

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg md:text-xl',
  }

  const MotionButton = motion.button

  return (
    <MotionButton
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {loading ? (
        <span className="animate-spin">☁️</span>
      ) : (
        children
      )}
    </MotionButton>
  )
})

export default CloudButton