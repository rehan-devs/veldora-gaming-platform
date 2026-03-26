'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface PreloaderProps {
  onComplete: () => void
}

const loadingMessages = [
  "Teaching dragons to code...",
  "Fluffing the clouds...",
  "Convincing Veldora to wake up...",
  "Polishing the tokens...",
  "Feeding the pixel pets...",
  "Counting floating sheep...",
  "Brewing cloud coffee...",
  "Almost there, pinky promise!"
]

const wakeUpMessages = [
  "Veldora is taking a quick nap...",
  "Just five more minutes...",
  "Okay okay, waking up...",
  "Almost ready to play!",
  "Ready! Click anywhere to enter! 🐉"
]

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'waking' | 'ready'>('loading')
  const [showClickHint, setShowClickHint] = useState(false)

  // Handle loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 12 + 3
        const newProgress = prev + increment
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setPhase('waking')
          return 100
        }
        return newProgress
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  // Cycle through loading messages
  useEffect(() => {
    if (phase !== 'loading') return

    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length)
    }, 2000)

    return () => clearInterval(messageInterval)
  }, [phase])

  // Handle waking phase
  useEffect(() => {
    if (phase !== 'waking') return

    let wakingIndex = 0
    setMessageIndex(0)

    const wakingInterval = setInterval(() => {
      wakingIndex++
      setMessageIndex(wakingIndex)
      
      if (wakingIndex >= wakeUpMessages.length - 1) {
        clearInterval(wakingInterval)
        setPhase('ready')
        setShowClickHint(true)
      }
    }, 600)

    return () => clearInterval(wakingInterval)
  }, [phase])

  // Handle click to enter
  const handleClick = useCallback(() => {
    if (phase !== 'ready') return
    
    setShowClickHint(false)
    
    // Small delay for exit animation
    setTimeout(() => {
      onComplete()
    }, 100)
  }, [phase, onComplete])

  // Handle keyboard enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase === 'ready' && (e.key === 'Enter' || e.key === ' ')) {
        handleClick()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [phase, handleClick])

  // Get current message based on phase
  const currentMessage = phase === 'loading' 
    ? loadingMessages[messageIndex % loadingMessages.length]
    : wakeUpMessages[Math.min(messageIndex, wakeUpMessages.length - 1)]

  // Determine Veldora's pose
  const veldoraPose = phase === 'ready' ? 'excited' : phase === 'waking' ? 'tired' : 'sleeping'

  return (
    <motion.div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-sky-primary via-sky-baby to-cloud overflow-hidden ${
        phase === 'ready' ? 'cursor-pointer' : ''
      }`}
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.5, ease: 'easeInOut' }
      }}
      onClick={handleClick}
    >
      {/* Animated Background Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl md:text-8xl select-none"
            style={{
              left: `${(i * 12) % 100}%`,
              top: `${(i * 15) % 80 + 10}%`,
              opacity: 0.15 + (i % 3) * 0.05,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5 + (i % 3) * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          >
            ☁️
          </motion.div>
        ))}
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-xl md:text-2xl"
            style={{
              left: `${15 + i * 10}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-4">
        {/* Veldora with Cloud */}
        <div className="relative mb-8">
          {/* Cloud Pillow */}
          <motion.div 
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-7xl md:text-8xl"
            animate={{ 
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ☁️
          </motion.div>

          {/* Veldora */}
          <motion.div
            animate={phase === 'ready' ? {
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            } : {
              y: [0, -5, 0],
            }}
            transition={{
              duration: phase === 'ready' ? 0.8 : 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <VeldoraMascot 
              pose={veldoraPose} 
              size="xlarge"
            />
          </motion.div>

          {/* Floating Z's when sleeping/loading */}
          {phase === 'loading' && (
            <div className="absolute -top-2 -right-4">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-xl md:text-2xl text-sky-azure font-display font-bold"
                  style={{
                    right: i * 18,
                    top: -i * 22,
                  }}
                  animate={{
                    y: [-5, -25],
                    x: [0, 15],
                    opacity: [1, 0],
                    scale: [1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: 'easeOut',
                  }}
                >
                  Z
                </motion.span>
              ))}
            </div>
          )}

          {/* Sparkles when ready */}
          {phase === 'ready' && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={`sparkle-${i}`}
                  className="absolute text-2xl"
                  style={{
                    left: `${20 + Math.cos((i * Math.PI) / 3) * 50}%`,
                    top: `${20 + Math.sin((i * Math.PI) / 3) * 50}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  ✨
                </motion.span>
              ))}
            </>
          )}
        </div>

        {/* Loading Message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            className={`text-lg md:text-2xl font-heading text-center mb-6 px-4 ${
              phase === 'ready' ? 'text-white font-bold' : 'text-sky-azure'
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {currentMessage}
          </motion.p>
        </AnimatePresence>

        {/* Progress Bar - Only show during loading */}
        {phase === 'loading' && (
          <div className="w-64 md:w-80 h-4 bg-white/40 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #FFD93D, #FF8B94, #C3AED6)',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        )}

        {/* Progress Percentage */}
        {phase === 'loading' && (
          <motion.p 
            className="mt-3 text-sm font-mono text-sky-azure/70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(Math.min(progress, 100))}% fluffiness loaded
          </motion.p>
        )}

        {/* Click to Enter Hint */}
        <AnimatePresence>
          {showClickHint && phase === 'ready' && (
            <motion.div
              className="mt-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated Click Button */}
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.button
                  className="px-8 py-4 bg-white rounded-full shadow-float font-display text-xl text-sky-azure flex items-center gap-3 hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClick}
                >
                  <span>Enter the Kingdom</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    🐉
                  </motion.span>
                </motion.button>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30 blur-xl -z-10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Or click anywhere text */}
              <motion.p
                className="mt-4 text-sm text-white/80 font-handwritten"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                or click anywhere to enter ✨
              </motion.p>

              {/* Keyboard hint */}
              <motion.p
                className="mt-2 text-xs text-white/60 font-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Press <kbd className="px-2 py-1 bg-white/20 rounded text-white">Enter</kbd> or <kbd className="px-2 py-1 bg-white/20 rounded text-white">Space</kbd>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Waking up indicator */}
        {phase === 'waking' && (
          <motion.div
            className="flex items-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              ☁️
            </motion.span>
            <span className="text-sky-azure/70 font-heading">Waking up...</span>
          </motion.div>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 text-4xl md:text-5xl"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌤️
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 text-3xl md:text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🌈
      </motion.div>
    </motion.div>
  )
}