'use client'

import { useState, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(smoothing: boolean = true) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return {
    position,
    x: smoothing ? springX : mouseX,
    y: smoothing ? springY : mouseY,
  }
}