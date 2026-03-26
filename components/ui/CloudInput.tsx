'use client'

import { forwardRef, InputHTMLAttributes, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CloudInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: string
  showClouds?: boolean
}

const CloudInput = forwardRef<HTMLInputElement, CloudInputProps>(
  ({ label, error, icon, showClouds = true, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)

    return (
      <div className="relative">
        {/* Label */}
        {label && (
          <motion.label
            className={cn(
              'absolute left-4 transition-all duration-300 pointer-events-none font-heading',
              isFocused || hasValue
                ? '-top-6 text-sm text-sky-azure'
                : 'top-1/2 -translate-y-1/2 text-gray-400'
            )}
            animate={isFocused ? { scale: 0.9 } : { scale: 1 }}
          >
            {label}
          </motion.label>
        )}

        {/* Input wrapper */}
        <motion.div
          className={cn(
            'relative rounded-full overflow-hidden',
            'border-2 transition-all duration-300',
            isFocused
              ? 'border-sky-primary shadow-glow-magic'
              : error
              ? 'border-accent-coral shadow-[0_0_20px_rgba(255,139,148,0.3)]'
              : 'border-sky-200 shadow-cloud',
            'bg-white/90 backdrop-blur'
          )}
          animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Icon */}
          {icon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              {icon}
            </span>
          )}

          {/* Input */}
          <input
            ref={ref}
            className={cn(
              'w-full px-6 py-4 bg-transparent',
              'font-body text-gray-700',
              'placeholder:text-sky-300',
              'focus:outline-none',
              icon && 'pl-12',
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false)
              setHasValue(!!e.target.value)
            }}
            onChange={(e) => setHasValue(!!e.target.value)}
            {...props}
          />

          {/* Floating clouds on focus */}
          {showClouds && (
            <AnimatePresence>
              {isFocused && (
                <>
                  <motion.span
                    className="absolute -top-2 right-4 text-lg"
                    initial={{ opacity: 0, y: 10, scale: 0 }}
                    animate={{ opacity: 0.6, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    ☁️
                  </motion.span>
                  <motion.span
                    className="absolute -top-3 right-12 text-sm"
                    initial={{ opacity: 0, y: 10, scale: 0 }}
                    animate={{ opacity: 0.4, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    ☁️
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          )}

          {/* Sparkle on valid input */}
          <AnimatePresence>
            {hasValue && !error && (
              <motion.span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 180 }}
              >
                ✨
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              className="mt-2 text-sm text-accent-coral font-body flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span>😅</span>
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

CloudInput.displayName = 'CloudInput'

export default CloudInput