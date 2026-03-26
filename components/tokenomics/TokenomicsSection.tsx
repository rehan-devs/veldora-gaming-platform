'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface TokenAllocation {
  name: string
  percentage: number
  funName: string
  description: string
  emoji: string
  color: string
}

const allocations: TokenAllocation[] = [
  {
    name: 'Gaming Rewards',
    percentage: 40,
    funName: 'The Fun Fund',
    description: 'Rewards for playing games and being awesome!',
    emoji: '🎮',
    color: '#FF8B94',
  },
  {
    name: 'Community',
    percentage: 25,
    funName: 'Dragon Friends Pool',
    description: 'For airdrops, contests, and community events!',
    emoji: '👥',
    color: '#98D8AA',
  },
  {
    name: 'Liquidity',
    percentage: 15,
    funName: 'The Splashy Reserve',
    description: 'Keeping trades smooth and splashy!',
    emoji: '💧',
    color: '#87CEEB',
  },
  {
    name: 'Team',
    percentage: 10,
    funName: 'Dragon Keeper Salary',
    description: 'For the humans who keep Veldora fed!',
    emoji: '🏰',
    color: '#C3AED6',
  },
  {
    name: 'Airdrops',
    percentage: 10,
    funName: 'Surprise Shinies',
    description: 'Random rewards falling from the sky!',
    emoji: '🎁',
    color: '#FFD93D',
  },
]

interface TokenStat {
  label: string
  value: string
  emoji: string
}

const tokenStats: TokenStat[] = [
  { label: 'Total Supply', value: '1,000,000,000', emoji: '🪙' },
  { label: 'Circulating', value: '420,690,000', emoji: '🔄' },
  { label: 'Burned', value: '69,420,000', emoji: '🔥' },
  { label: 'Price', value: '$0.0069', emoji: '📈' },
]

export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredAllocation, setHoveredAllocation] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="tokenomics"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-cloud via-cloud-cream to-white"
    >
      {/* Background Coins */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl md:text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            🪙
          </motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              ✨
            </motion.span>
            <h2 className="text-section font-display text-sky-azure">
              VELD Token
            </h2>
            <motion.span
              className="text-4xl"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              ✨
            </motion.span>
          </motion.div>
          <p className="text-xl font-heading text-gray-600 max-w-xl mx-auto">
            The Official Dragon Currency 🐉💎
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Veldora with Giant Coin */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Giant Coin */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: 'linear',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-sunshine via-yellow-400 to-accent-peach shadow-float flex items-center justify-center border-8 border-yellow-500/30">
                  <div className="text-center">
                    <span className="text-6xl md:text-7xl font-display text-white drop-shadow-lg">
                      VELD
                    </span>
                    <div className="text-4xl mt-2">🐉</div>
                  </div>
                </div>
              </motion.div>

              {/* Veldora holding the coin */}
              <motion.div
                className="absolute -bottom-10 -right-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <VeldoraMascot
                  pose="excited"
                  size="large"
                  showBubble
                  bubbleText="SHINY!!! ✨"
                />
              </motion.div>

              {/* Floating sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-xl"
                  style={{
                    left: `${20 + Math.cos((i * Math.PI) / 4) * 60}%`,
                    top: `${20 + Math.sin((i * Math.PI) / 4) * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  ✨
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Token Distribution */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-display text-sky-azure mb-6">
              Token Distribution 📊
            </h3>

            {/* Allocation Bars (Not boring pie chart!) */}
            <div className="space-y-4">
              {allocations.map((allocation, index) => (
                <motion.div
                  key={allocation.name}
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  onMouseEnter={() => setHoveredAllocation(index)}
                  onMouseLeave={() => setHoveredAllocation(null)}
                >
                  {/* Label */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="text-xl"
                        animate={hoveredAllocation === index ? {
                          scale: [1, 1.3, 1],
                          rotate: [0, 10, -10, 0],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {allocation.emoji}
                      </motion.span>
                      <span className="font-heading font-semibold text-gray-700">
                        {allocation.funName}
                      </span>
                    </div>
                    <span className="font-display text-lg" style={{ color: allocation.color }}>
                      {allocation.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-6 bg-white/50 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ backgroundColor: allocation.color }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${allocation.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />

                      {/* Coin stack visualization */}
                      <div className="absolute inset-y-0 right-2 flex items-center gap-0.5">
                        {[...Array(Math.min(Math.floor(allocation.percentage / 10), 4))].map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 + i * 0.1 + 1 }}
                          >
                            🪙
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover tooltip */}
                  <AnimatePresence>
                    {hoveredAllocation === index && (
                      <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 shadow-cloud z-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <p className="text-sm text-gray-600 whitespace-nowrap">
                          {allocation.description}
                        </p>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Token Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          {tokenStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur rounded-3xl p-6 text-center shadow-cloud border-2 border-white"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 1.2 }}
            >
              <motion.span
                className="text-3xl block mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.emoji}
              </motion.span>
              <p className="text-2xl font-display text-sky-azure mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-heading text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun note */}
        <motion.p
          className="text-center mt-12 font-handwritten text-lg text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          * Veldora personally guards every token while napping 😴🔐
        </motion.p>
      </div>
    </section>
  )
}