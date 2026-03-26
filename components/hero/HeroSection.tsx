'use client'

import { useRef, memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'
import CloudButton from '../ui/CloudButton'

const HeroSection = memo(function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const words = ['Where', 'Dragons', 'Play', '&', 'Dreams', 'Float', 'Away']

  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-blue-100" />

      {/* Static cloud layers - No animation for better performance */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] text-6xl opacity-30">☁️</div>
        <div className="absolute top-[20%] right-[10%] text-5xl opacity-25">☁️</div>
        <div className="absolute top-[60%] left-[15%] text-4xl opacity-20">☁️</div>
        <div className="absolute top-[70%] right-[20%] text-5xl opacity-25">☁️</div>
      </div>

      {/* Sun - CSS animation instead of framer-motion */}
      {!shouldReduceMotion && (
        <div 
          className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-8xl animate-[wiggle_8s_ease-in-out_infinite]"
          aria-hidden="true"
        >
          🌤️
        </div>
      )}
      {shouldReduceMotion && (
        <div 
          className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-8xl"
          aria-hidden="true"
        >
          🌤️
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Headline - Staggered word animation */}
            <motion.h1 
              className="font-display text-5xl md:text-7xl mb-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3 md:mr-4"
                  variants={fadeIn}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {word === 'Dragons' ? (
                    <span className="text-yellow-400 drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)]">
                      {word}
                    </span>
                  ) : word === 'Dreams' ? (
                    <span className="text-pink-400 drop-shadow-[0_2px_8px_rgba(244,114,182,0.5)]">
                      {word}
                    </span>
                  ) : (
                    <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                      {word}
                    </span>
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl font-heading text-gray-800 mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-sm bg-white/20 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
            >
              The fluffiest blockchain gaming kingdom in the sky! ☁️✨
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
            >
              <CloudButton 
                variant="primary" 
                size="large"
                aria-label="Start your adventure"
              >
                Start Adventure! ✨
              </CloudButton>
              <CloudButton 
                variant="secondary" 
                size="large"
                aria-label="Meet Veldora the dragon"
              >
                Meet Veldora 🐉
              </CloudButton>
            </motion.div>

            {/* Stats - Single animation instead of individual */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
            >
              {[
                { value: '50K+', label: 'Happy Dragons', emoji: '🐉' },
                { value: '$420M', label: 'Total Value', emoji: '💎' },
                { value: '∞', label: 'Fun Level', emoji: '🎮' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center bg-white/30 backdrop-blur-md rounded-2xl px-6 py-4 border-2 border-white/50 shadow-lg"
                >
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-2xl" aria-hidden="true">{stat.emoji}</span>
                    <span className="text-3xl font-display text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm font-heading text-gray-700 font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Veldora */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Cloud Base - Static */}
              <div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-9xl opacity-80"
                aria-hidden="true"
              >
                ☁️
              </div>

              {/* Veldora - CSS animation for better performance */}
              <div className={!shouldReduceMotion ? 'animate-[float_4s_ease-in-out_infinite]' : ''}>
                <VeldoraMascot
                  pose="excited"
                  size="xlarge"
                  showBubble
                  bubbleText="Let's play! 🎮"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
})

export default HeroSection