'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'

interface UseScrollAnimationOptions {
  offset?: [string, string]
  inputRange?: [number, number]
  outputRange?: [number, number]
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: (options.offset as any) || ['start end', 'end start'],
  })

  const inputRange = options.inputRange || [0, 1]
  const outputRange = options.outputRange || [0, 1]

  const progress = useTransform(scrollYProgress, inputRange, outputRange)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isInView, scrollYProgress, progress }
}