'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface Stat {
  value: number | string
  suffix: string
  prefix: string
  label: string
  emoji: string
  veldoraPose: 'excited' | 'proud' | 'gaming' | 'sleeping'
  veldoraSpeech: string
  isInfinity?: boolean
}

const stats: Stat[] = [
  {
    value: 420,
    suffix: 'M',
    prefix: '$',
    label: 'Total Value Locked',
    emoji: '💎',
    veldoraPose: 'excited',
    veldoraSpeech: "That's a lot of shinies!",
  },
  {
    value: 69420,
    suffix: '',
    prefix: '',
    label: 'Happy Dragons',
    emoji: '🐉',
    veldoraPose: 'proud',
    veldoraSpeech: 'Hi friends!',
  },
  {
    value: 42,
    suffix: '',
    prefix: '',
    label: 'Awesome Games',
    emoji: '🎮',
    veldoraPose: 'gaming',
    veldoraSpeech: 'Not enough nap games tho...',
  },
  {
    value: '∞',
    suffix: '',
    prefix: '',
    label: 'Fun Had',
    emoji: '✨',
    veldoraPose: 'sleeping',
    veldoraSpeech: 'zzz...',
    isInfinity: true,
  },
]

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-cloud to-cloud-mist"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-lg md:text-xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {['✨', '☁️', '🪙', '⭐'][i % 4]}
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
            <span className="text-4xl">📊</span>
            <h2 className="text-section font-display text-sky-azure">
              Big Numbers, Small Dragon
            </h2>
            <span className="text-4xl">📊</span>
          </motion.div>
          <p className="text-xl font-heading text-gray-600 max-w-xl mx-auto">
            Numbers so big, even Veldora is impressed!
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <motion.div
                className="relative bg-white/90 backdrop-blur-xl rounded-[40px] p-8 text-center shadow-cloud border-4 border-white overflow-hidden"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 30px 60px rgba(135, 206, 235, 0.25)',
                }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-primary/10 to-accent-sunshine/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* Main Emoji */}
                <motion.div
                  className="text-5xl mb-4"
                  animate={hoveredStat === index ? {
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {stat.emoji}
                </motion.div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-display text-sky-azure mb-2">
                  {stat.isInfinity ? (
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.span>
                  ) : (
                    <AnimatedCounter
                      value={stat.value as number}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  )}
                </div>

                {/* Label */}
                <p className="font-heading text-gray-600 mb-6">{stat.label}</p>

                {/* Veldora */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredStat === index ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <VeldoraMascot
                    pose={stat.veldoraPose}
                    size="small"
                    showBubble={hoveredStat === index}
                    bubbleText={stat.veldoraSpeech}
                  />
                </motion.div>

                {/* Sparkles */}
                {hoveredStat === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute text-lg pointer-events-none"
                        style={{
                          left: `${20 + Math.cos((i * Math.PI) / 3) * 35}%`,
                          top: `${20 + Math.sin((i * Math.PI) / 3) * 35}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        ✨
                      </motion.span>
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fun comparison section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-block bg-white/80 backdrop-blur rounded-3xl p-8 shadow-cloud">
            <p className="font-handwritten text-xl text-gray-600 mb-4">
              To put that in perspective...
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl">☁️</span>
                <span className="text-sm text-gray-500">= 1 million clouds</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl">😴</span>
                <span className="text-sm text-gray-500">= 420 Veldora naps</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl">🪙</span>
                <span className="text-sm text-gray-500">= infinite shinies</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}