'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface RoadmapPhase {
  id: string
  title: string
  period: string
  status: 'completed' | 'current' | 'upcoming'
  emoji: string
  items: { text: string; completed?: boolean; veldoraNote?: string }[]
  veldoraPose?: 'celebrating' | 'excited' | 'thinking' | 'sleeping'
}

const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'phase1',
    title: 'The Awakening',
    period: 'Q1 2024',
    status: 'completed',
    emoji: '☀️',
    veldoraPose: 'celebrating',
    items: [
      { text: 'Veldora woke up (finally)', completed: true, veldoraNote: 'It took 3 alarms...' },
      { text: 'Website launched', completed: true },
      { text: 'Community formed', completed: true, veldoraNote: '10K dragon friends!' },
      { text: 'Whitepaper released', completed: true },
    ],
  },
  {
    id: 'phase2',
    title: 'First Flight',
    period: 'Q2 2024',
    status: 'completed',
    emoji: '🚀',
    veldoraPose: 'excited',
    items: [
      { text: 'Token launched on DEX', completed: true, veldoraNote: 'Moon soon? 🌙' },
      { text: 'First 3 games released', completed: true },
      { text: '10K dragons joined', completed: true },
      { text: 'CEX listings', completed: true },
    ],
  },
  {
    id: 'phase3',
    title: 'Building the Kingdom',
    period: 'Q3 2024',
    status: 'current',
    emoji: '🏰',
    veldoraPose: 'thinking',
    items: [
      { text: 'Marketplace launch', completed: true },
      { text: '10 more games incoming', completed: false },
      { text: 'Mobile app beta', completed: false, veldoraNote: 'Veldora confused by phone 📱' },
      { text: 'NFT collection drop', completed: false },
    ],
  },
  {
    id: 'phase4',
    title: 'To The Moon? 🌙',
    period: 'Q4 2024',
    status: 'upcoming',
    emoji: '🌙',
    items: [
      { text: 'Major partnerships', veldoraNote: 'Big friends incoming!' },
      { text: 'DAO governance launch' },
      { text: 'Cross-chain bridge' },
      { text: 'Veldora merchandise!', veldoraNote: 'Plushies!!! 🧸' },
    ],
  },
  {
    id: 'phase5',
    title: 'The Great Beyond',
    period: '2025',
    status: 'upcoming',
    emoji: '🌌',
    veldoraPose: 'sleeping',
    items: [
      { text: 'Metaverse kingdom' },
      { text: 'Cross-chain adventures' },
      { text: 'More nap features', veldoraNote: "Veldora's #1 request 😴" },
      { text: 'World domination (friendly)', veldoraNote: '...with cuddles' },
    ],
  },
]

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  // Find current phase index
  const currentPhaseIndex = roadmapPhases.findIndex(p => p.status === 'current')

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-cloud-mist via-cloud-cream to-white"
    >
      {/* Treasure Map Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="map-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="#87CEEB" />
          </pattern>
          <rect width="100" height="100" fill="url(#map-pattern)" />
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${10 + i * 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ☁️
          </motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-4xl">🗺️</span>
            <h2 className="text-section font-display text-sky-azure">
              The Grand Adventure
            </h2>
            <span className="text-4xl">🗺️</span>
          </motion.div>
          <p className="text-xl font-heading text-gray-600 max-w-xl mx-auto">
            Where we've been, where we're floating next!
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Connecting Path */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Background path */}
            <div className="absolute inset-0 bg-sky-200 rounded-full" />
            {/* Animated progress path */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-mint via-sky-primary to-accent-lavender rounded-full"
              style={{
                scaleY: pathProgress,
                transformOrigin: 'top',
              }}
            />
            {/* Dotted overlay */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'repeating-linear-gradient(to bottom, transparent, transparent 8px, rgba(255,255,255,0.5) 8px, rgba(255,255,255,0.5) 16px)',
              }}
            />
          </div>

          {/* Phase Items */}
          <div className="space-y-12 md:space-y-20">
            {roadmapPhases.map((phase, index) => {
              const isLeft = index % 2 === 0
              const isCompleted = phase.status === 'completed'
              const isCurrent = phase.status === 'current'
              const isUpcoming = phase.status === 'upcoming'

              return (
                <motion.div
                  key={phase.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onMouseEnter={() => setHoveredPhase(phase.id)}
                  onMouseLeave={() => setHoveredPhase(null)}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`
                      absolute left-8 md:left-1/2 -translate-x-1/2
                      w-12 h-12 md:w-16 md:h-16 rounded-full
                      flex items-center justify-center
                      border-4 z-10
                      ${isCompleted 
                        ? 'bg-accent-mint border-white shadow-glow-magic' 
                        : isCurrent
                        ? 'bg-accent-sunshine border-white shadow-glow-sunshine animate-pulse'
                        : 'bg-white border-sky-200 shadow-cloud'
                      }
                    `}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-xl md:text-2xl">
                      {isCompleted ? '✓' : phase.emoji}
                    </span>
                  </motion.div>

                  {/* Current Phase Veldora */}
                  {isCurrent && (
                    <motion.div
                      className="absolute left-20 md:left-1/2 md:translate-x-8 top-0 z-20"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <VeldoraMascot
                        pose="excited"
                        size="small"
                        showBubble
                        bubbleText="We are here! 📍"
                      />
                    </motion.div>
                  )}

                  {/* Content */}
                  <motion.div
                    className={`
                      flex-1 ml-20 md:ml-0
                      ${isLeft ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}
                    `}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`
                        inline-block bg-white/90 backdrop-blur-xl rounded-[30px] p-6 md:p-8
                        shadow-cloud border-2 
                        ${isCurrent 
                          ? 'border-accent-sunshine shadow-glow-sunshine' 
                          : isUpcoming
                          ? 'border-sky-200 opacity-80'
                          : 'border-white'
                        }
                        max-w-lg
                        ${isLeft ? 'md:float-right' : ''}
                      `}
                      animate={isCurrent ? { 
                        boxShadow: [
                          '0 0 20px rgba(255, 217, 61, 0.3)',
                          '0 0 40px rgba(255, 217, 61, 0.5)',
                          '0 0 20px rgba(255, 217, 61, 0.3)',
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Phase Header */}
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        <motion.span
                          className="text-3xl"
                          animate={hoveredPhase === phase.id ? {
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {phase.emoji}
                        </motion.span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-display text-sky-azure">
                            {phase.title}
                          </h3>
                          <p className={`text-sm font-heading ${
                            isCurrent ? 'text-accent-sunshine' : 'text-gray-500'
                          }`}>
                            {phase.period}
                            {isCurrent && ' ← We are here!'}
                          </p>
                        </div>
                      </div>

                      {/* Phase Items */}
                      <ul className={`space-y-3 ${isLeft ? 'md:text-right' : ''}`}>
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className={`flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + itemIndex * 0.05 + 0.3 }}
                          >
                            <span className="text-lg mt-0.5">
                              {item.completed ? '✅' : isUpcoming ? '⭐' : '🔄'}
                            </span>
                            <div>
                              <span className={`font-body ${
                                item.completed ? 'text-gray-600' : 'text-gray-500'
                              }`}>
                                {item.text}
                              </span>
                              {item.veldoraNote && (
                                <p className="text-xs font-handwritten text-accent-coral mt-1">
                                  "{item.veldoraNote}" - Veldora
                                </p>
                              )}
                            </div>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Status Badge */}
                      <div className={`mt-4 ${isLeft ? 'md:text-right' : ''}`}>
                        <span className={`
                          inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold
                          ${isCompleted 
                            ? 'bg-accent-mint/20 text-accent-mint' 
                            : isCurrent
                            ? 'bg-accent-sunshine/20 text-accent-sunshine'
                            : 'bg-sky-100 text-sky-500'
                          }
                        `}>
                          {isCompleted ? '✓ Complete' : isCurrent ? '🔥 In Progress' : '✨ Coming Soon'}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>

          {/* End of roadmap decoration */}
          <motion.div
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            <motion.span
              className="text-4xl"
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur rounded-full px-8 py-4 shadow-cloud">
            <VeldoraMascot pose="thinking" size="small" />
            <p className="font-handwritten text-lg text-gray-600">
              "More features = less nap time... worth it!" 😴✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}