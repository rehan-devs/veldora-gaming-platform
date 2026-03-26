'use client'

import { useEffect, useState, useCallback } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
]

export function useEasterEggs() {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [secretClickCount, setSecretClickCount] = useState(0)
  const [rainbowMode, setRainbowMode] = useState(false)
  const [sleepyMode, setSleepyMode] = useState(false)
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    let keySequence: string[] = []
    let timeout: NodeJS.Timeout

    const handleKeyDown = (e: KeyboardEvent) => {
      keySequence.push(e.code)
      
      if (keySequence.length > KONAMI_CODE.length) {
        keySequence = keySequence.slice(-KONAMI_CODE.length)
      }

      if (keySequence.join(',') === KONAMI_CODE.join(',')) {
        setKonamiActivated(true)
        keySequence = []
        setTimeout(() => setKonamiActivated(false), 10000)
      }

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        keySequence = []
      }, 2000)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    let typed = ''
    let timeout: NodeJS.Timeout

    const handleKeyPress = (e: KeyboardEvent) => {
      typed += e.key.toLowerCase()
      
      if (typed.includes('nap')) {
        setSleepyMode(true)
        typed = ''
        setTimeout(() => setSleepyMode(false), 5000)
      }

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        typed = ''
      }, 1000)
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      clearTimeout(timeout)
    }
  }, [])

  const handleLogoClick = useCallback(() => {
    setSecretClickCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 5) {
        setRainbowMode(true)
        setTimeout(() => setRainbowMode(false), 5000)
        return 0
      }
      return newCount
    })
  }, [])

  useEffect(() => {
    let idleTimeout: NodeJS.Timeout

    const resetIdle = () => {
      setIsIdle(false)
      clearTimeout(idleTimeout)
      idleTimeout = setTimeout(() => setIsIdle(true), 30000)
    }

    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart']
    events.forEach((event) => window.addEventListener(event, resetIdle))
    
    resetIdle()

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetIdle))
      clearTimeout(idleTimeout)
    }
  }, [])

  return {
    konamiActivated,
    rainbowMode,
    sleepyMode,
    isIdle,
    handleLogoClick,
  }
}