'use client'

import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TooltipProps {
  children: ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  emoji?: string
  delay?: number
}

const positionStyles = {
  top: '-top-12 left-1/2 -translate-x-1/2',
  bottom: '-bottom-12 left-1/2 -translate-x-1/2',
  left: 'top-1/2 -translate-y-1/2 -left-4 -translate-x-full',
  right: 'top-1/2 -translate-y-1/2 -right-4 translate-x-full',
}

const arrowStyles = {
  top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45',
  bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45',
  left: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45',
  right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45',
}

const motionVariants = {
  top: { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 10 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 } },
}

export default function Tooltip({
  children,
  content,
  position = 'top',
  emoji = '☁️',
  delay = 200,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay)
    setTimeoutId(id)
  }

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn(
              'absolute z-50 px-4 py-2',
              'bg-white rounded-2xl shadow-cloud',
              'border-2 border-white',
              'whitespace-nowrap',
              'pointer-events-none',
              positionStyles[position]
            )}
            variants={motionVariants[position]}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {/* Content */}
            <div className="flex items-center gap-2">
              <span className="text-sm">{emoji}</span>
              <span className="text-sm font-heading text-gray-700">{content}</span>
            </div>

            {/* Arrow */}
            <div
              className={cn(
                'absolute w-3 h-3 bg-white',
                arrowStyles[position]
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}