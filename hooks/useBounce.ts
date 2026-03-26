'use client'

import { useState, useCallback } from 'react'
import { useSpring, useMotionValue } from 'framer-motion'

export function useBounce() {
  const [isPressed, setIsPressed] = useState(false)
  
  const scale = useMotionValue(1)
  const springScale = useSpring(scale, {
    stiffness: 400,
    damping: 10,
  })

  const handlePressStart = useCallback(() => {
    setIsPressed(true)
    scale.set(0.95)
  }, [scale])

  const handlePressEnd = useCallback(() => {
    setIsPressed(false)
    scale.set(1)
  }, [scale])

  const handleHoverStart = useCallback(() => {
    if (!isPressed) {
      scale.set(1.05)
    }
  }, [scale, isPressed])

  const handleHoverEnd = useCallback(() => {
    if (!isPressed) {
      scale.set(1)
    }
  }, [scale, isPressed])

  return {
    scale: springScale,
    isPressed,
    handlers: {
      onMouseDown: handlePressStart,
      onMouseUp: handlePressEnd,
      onMouseLeave: handlePressEnd,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      onTouchStart: handlePressStart,
      onTouchEnd: handlePressEnd,
    },
  }
}