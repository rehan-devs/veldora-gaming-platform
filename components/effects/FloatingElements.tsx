'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'

// Memoize the component to prevent unnecessary re-renders
const FloatingElements = memo(function FloatingElements() {
  // Generate elements only once
  const elements = useMemo(() => {
    const items = []
    // Reduced from 25 to 8 elements
    for (let i = 0; i < 8; i++) {
      items.push({
        id: i,
        emoji: ['☁️', '✨', '⭐'][i % 3],
        left: `${10 + (i * 12)}%`,
        top: `${15 + (i * 10) % 70}%`,
        duration: 15 + (i * 3),
        delay: i * 2,
      })
    }
    return items
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-2xl opacity-20 will-change-transform"
          style={{
            left: el.left,
            top: el.top,
          }}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: el.delay,
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  )
})

export default FloatingElements