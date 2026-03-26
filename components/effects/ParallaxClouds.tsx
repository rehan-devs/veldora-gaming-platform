// components/effects/ParallaxClouds.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

interface CloudLayer {
  clouds: { x: string; y: string; size: string; opacity: number }[]
  speed: number
  zIndex: number
}

const cloudLayers: CloudLayer[] = [
  // Far background - slowest
  {
    clouds: [
      { x: '10%', y: '20%', size: '8rem', opacity: 0.3 },
      { x: '80%', y: '15%', size: '10rem', opacity: 0.25 },
      { x: '50%', y: '10%', size: '7rem', opacity: 0.2 },
    ],
    speed: 0.1,
    zIndex: 1,
  },
  // Mid background
  {
    clouds: [
      { x: '20%', y: '40%', size: '6rem', opacity: 0.5 },
      { x: '70%', y: '35%', size: '8rem', opacity: 0.4 },
      { x: '45%', y: '50%', size: '5rem', opacity: 0.45 },
    ],
    speed: 0.3,
    zIndex: 2,
  },
  // Near foreground - fastest
  {
    clouds: [
      { x: '5%', y: '70%', size: '5rem', opacity: 0.7 },
      { x: '90%', y: '60%', size: '6rem', opacity: 0.6 },
      { x: '30%', y: '80%', size: '4rem', opacity: 0.65 },
    ],
    speed: 0.5,
    zIndex: 3,
  },
]

export default function ParallaxClouds() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 })

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / innerWidth)
      mouseY.set((clientY - innerHeight / 2) / innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {cloudLayers.map((layer, layerIndex) => {
        const scrollY = useTransform(
          scrollYProgress,
          [0, 1],
          [0, layer.speed * 500]
        )

        return (
          <div
            key={layerIndex}
            className="absolute inset-0"
            style={{ zIndex: layer.zIndex }}
          >
            {layer.clouds.map((cloud, cloudIndex) => (
              <motion.div
                key={cloudIndex}
                className="absolute select-none"
                style={{
                  left: cloud.x,
                  top: cloud.y,
                  fontSize: cloud.size,
                  opacity: cloud.opacity,
                  y: scrollY,
                  x: useTransform(smoothMouseX, [-0.5, 0.5], [-20 * layer.speed, 20 * layer.speed]),
                }}
                animate={{
                  y: [0, -15 * layer.speed, 0],
                  x: [0, 10 * layer.speed, 0],
                }}
                transition={{
                  duration: 6 + layerIndex * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: cloudIndex * 0.5,
                }}
              >
                ☁️
              </motion.div>
            ))}
          </div>
        )
      })}

      {/* Extra decorative elements */}
      <motion.div
        className="absolute top-[5%] left-[15%] text-4xl opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ⭐
      </motion.div>
      
      <motion.div
        className="absolute top-[8%] right-[20%] text-3xl opacity-15"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✨
      </motion.div>
    </div>
  )
}