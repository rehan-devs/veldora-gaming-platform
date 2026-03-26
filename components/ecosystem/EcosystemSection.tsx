'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface EcosystemArea {
  id: string
  name: string
  icon: string
  description: string
  funDescription: string
  lineEnd: { x: number; y: number }
  offset: number
  verticalOffset: number
  mobileOffset: number
  color: string
  veldoraPose: 'excited' | 'thinking' | 'proud' | 'confused'
}

const ecosystemAreas: EcosystemArea[] = [
  {
    id: 'wallet',
    name: 'Dragon Wallet',
    icon: '💰',
    description: 'Secure storage for all your tokens and NFTs',
    funDescription: 'Where dragons keep their shinies safe!',
    lineEnd: { x: 5, y: 58 },
    offset: -8,
    verticalOffset: 0,
    mobileOffset: 0,
    color: 'from-accent-sunshine to-accent-peach',
    veldoraPose: 'proud',
  },
  {
    id: 'marketplace',
    name: 'Cloud Bazaar',
    icon: '🏪',
    description: 'Trade items, NFTs, and in-game assets',
    funDescription: 'Trade stuff for other cool stuff!',
    lineEnd: { x: 92, y: 58 },
    offset: 0,
    verticalOffset: 0,
    mobileOffset: -11,
    color: 'from-accent-coral to-accent-bubblegum',
    veldoraPose: 'excited',
  },
  {
    id: 'governance',
    name: 'Dragon Council',
    icon: '🏛️',
    description: 'Vote on important platform decisions',
    funDescription: 'Vote on important dragon decisions!',
    lineEnd: { x: 18, y: 14 },
    offset: -8,
    verticalOffset: 0,
    mobileOffset: 0,
    color: 'from-accent-lavender to-sky-primary',
    veldoraPose: 'thinking',
  },
  {
    id: 'staking',
    name: 'Nap Station',
    icon: '😴',
    description: 'Stake tokens and earn passive rewards',
    funDescription: 'Put tokens to sleep, wake up with more!',
    lineEnd: { x: 76, y: 14 },
    offset: 0,
    verticalOffset: 0,
    mobileOffset: -5,
    color: 'from-accent-mint to-sky-baby',
    veldoraPose: 'confused',
  },
]

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [selectedArea, setSelectedArea] = useState<EcosystemArea | null>(null)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      style={{
        position: 'relative',
        width: '100%',
        padding: '5rem 0',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #E8F4F8, white, #F8FBFF)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ☁️
          </motion.span>
        ))}
      </div>

      {/* Section Header */}
      <motion.div
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '0 1rem',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '2rem' }}>🏰</span>
          <h2 className="text-section font-display text-sky-azure">
            Veldora&apos;s Kingdom
          </h2>
          <span style={{ fontSize: '2rem' }}>🏰</span>
        </div>
        <p className="text-lg md:text-xl font-heading text-gray-600" style={{ maxWidth: '32rem', margin: '0 auto' }}>
          Everything a dragon needs in one fluffy place!
        </p>
      </motion.div>

      {/* Interactive Kingdom Map */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
          margin: '0 auto 3rem auto',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 'min(90vw, 750px)',
            height: 'min(90vw, 750px)',
            margin: '0 auto',
          }}
        >
          {/* SVG layer for lines */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 5,
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD93D" />
                <stop offset="100%" stopColor="#F0B429" />
              </linearGradient>
              <linearGradient id="grad-coral" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8B94" />
                <stop offset="100%" stopColor="#FF6B81" />
              </linearGradient>
              <linearGradient id="grad-lavender" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C3AED6" />
                <stop offset="100%" stopColor="#9B8EC4" />
              </linearGradient>
              <linearGradient id="grad-mint" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#98D8AA" />
                <stop offset="100%" stopColor="#6BC48A" />
              </linearGradient>
            </defs>

            {ecosystemAreas.map((area, index) => {
              const gradIds = ['grad-gold', 'grad-coral', 'grad-lavender', 'grad-mint']
              const ex = area.lineEnd.x
              const ey = area.lineEnd.y
              const cx = 50
              const cy = 40

              const cpX = (cx + ex) / 2
              const isAbove = ey < cy
              const cpY = isAbove
                ? Math.min(cy, ey) - 8
                : (cy + ey) / 2 + 6

              return (
                <g key={`line-${area.id}`}>
                  <motion.path
                    d={`M ${cx} ${cy} Q ${cpX} ${cpY} ${ex} ${ey}`}
                    fill="none"
                    stroke={`url(#${gradIds[index]})`}
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.85 } : {}}
                    transition={{ duration: 1.2, delay: 0.4 + index * 0.15 }}
                  />
                  <motion.circle
                    cx={ex}
                    cy={ey}
                    r="1.2"
                    fill={`url(#${gradIds[index]})`}
                    stroke="white"
                    strokeWidth="0.4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.15 }}
                  />
                </g>
              )
            })}
          </svg>

          {/* Castle + Veldora */}
          <motion.div
            style={{
              position: 'absolute',
              left: '40%',
              top: '30%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <motion.div
                style={{
                  fontSize: 'clamp(4rem, 10vw, 7rem)',
                  lineHeight: 1,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🏰
              </motion.div>
              <motion.div
                style={{
                  marginTop: '-1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <VeldoraMascot pose="proud" size="medium" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Ecosystem Area Tabs */}
          {ecosystemAreas.map((area, index) => (
            <motion.button
              key={area.id}
              style={{
                position: 'absolute',
                left: `${area.lineEnd.x + area.offset + (isMobile ? area.mobileOffset : 0)}%`,
                top: `${area.lineEnd.y + area.verticalOffset}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 1.0,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              onMouseEnter={() => setHoveredArea(area.id)}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => setSelectedArea(area)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`bg-gradient-to-br ${area.color}`}
                style={{
                  position: 'relative',
                  width: 'clamp(4.5rem, 12vw, 8rem)',
                  height: 'clamp(4.5rem, 12vw, 8rem)',
                  borderRadius: '1.25rem',
                  boxShadow: '0 12px 40px rgba(135, 206, 235, 0.2), 0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid rgba(255, 255, 255, 0.6)',
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '0.25rem' }}>
                  {area.icon}
                </span>
                <span
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(0.5rem, 1.5vw, 0.875rem)',
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '0 0.5rem',
                    lineHeight: 1.2,
                    textShadow: '0 1px 3px rgba(0,0,0,0.15)',
                  }}
                >
                  {area.name}
                </span>
              </motion.div>

              {/* Hover tooltip */}
              <AnimatePresence>
                {hoveredArea === area.id && (
                  <motion.div
                    className="hidden md:block"
                    style={{
                      position: 'absolute',
                      top: '-3.5rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'white',
                      borderRadius: '1rem',
                      padding: '0.5rem 1rem',
                      boxShadow: '0 10px 40px rgba(135, 206, 235, 0.2)',
                      whiteSpace: 'nowrap',
                      zIndex: 30,
                    }}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  >
                    <p className="text-sm font-heading text-sky-azure">
                      {area.funDescription}
                    </p>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-0.5rem',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        width: '1rem',
                        height: '1rem',
                        background: 'white',
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Sparkles */}
              <motion.span
                style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: '-0.5rem',
                  fontSize: 'clamp(0.75rem, 2vw, 1.125rem)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                ✨
              </motion.span>
            </motion.button>
          ))}

          {/* Floating clouds */}
          {[
            { x: 5, y: 75 },
            { x: 92, y: 80 },
            { x: 50, y: 90 },
            { x: 75, y: 85 },
          ].map((cloud, i) => (
            <motion.span
              key={i}
              className="hidden sm:block"
              style={{
                position: 'absolute',
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                opacity: 0.6,
                pointerEvents: 'none',
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              ☁️
            </motion.span>
          ))}
        </div>
      </div>

      {/* Area Detail Modal */}
      <AnimatePresence>
        {selectedArea && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
              }}
              onClick={() => setSelectedArea(null)}
            />

            <motion.div
              style={{
                position: 'relative',
                background: 'white',
                borderRadius: '2rem',
                padding: '2rem',
                maxWidth: '28rem',
                width: '100%',
                boxShadow: '0 20px 60px rgba(135, 206, 235, 0.15)',
                border: '4px solid white',
              }}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring' }}
            >
              <button
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: '#F8FBFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                }}
                onClick={() => setSelectedArea(null)}
              >
                ✕
              </button>

              <div style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '1rem' }}>
                {selectedArea.icon}
              </div>

              <h3 className="font-display text-sky-azure" style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                {selectedArea.name}
              </h3>

              <p className="font-handwritten text-accent-coral" style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '1rem' }}>
                &quot;{selectedArea.funDescription}&quot;
              </p>

              <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '1.5rem' }}>
                {selectedArea.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <VeldoraMascot
                  pose={selectedArea.veldoraPose}
                  size="medium"
                  showBubble
                  bubbleText="Let me show you around! 🐉"
                />
              </div>

              <button
                className={`font-heading bg-gradient-to-r ${selectedArea.color}`}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 40px rgba(135, 206, 235, 0.2)',
                }}
              >
                Explore {selectedArea.name} ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <motion.div
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '0 1rem',
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        {ecosystemAreas.map((area) => (
          <div
            key={area.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(4px)',
              borderRadius: '9999px',
              padding: '0.375rem 1rem',
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{area.icon}</span>
            <span className="font-heading" style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              {area.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}