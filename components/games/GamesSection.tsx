'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VeldoraMascot from '../veldora/VeldoraMascot'
import CloudButton from '../ui/CloudButton'

gsap.registerPlugin(ScrollTrigger)

interface Game {
  id: number
  name: string
  description: string
  players: string
  reward: string
  image: string
  emoji: string
  color: string
  live: boolean
}

const games: Game[] = [
  {
    id: 1,
    name: 'Cloud Kingdom Clash',
    description: 'Battle other dragons in the fluffiest strategy game ever!',
    players: '12.5K',
    reward: '500 VELD',
    image: '/games/cloud-clash.png',
    emoji: '🏰',
    color: 'from-accent-lavender to-accent-bubblegum',
    live: true,
  },
  {
    id: 2,
    name: 'Token Tumble',
    description: 'Match tokens and watch them tumble! Super satisfying.',
    players: '8.2K',
    reward: '200 VELD',
    image: '/games/token-tumble.png',
    emoji: '🪙',
    color: 'from-accent-sunshine to-accent-peach',
    live: true,
  },
  {
    id: 3,
    name: 'Dragon Racing',
    description: 'Race through the clouds! Try not to fall asleep mid-race.',
    players: '15.1K',
    reward: '750 VELD',
    image: '/games/dragon-racing.png',
    emoji: '🏁',
    color: 'from-accent-mint to-sky-primary',
    live: true,
  },
  {
    id: 4,
    name: 'Nap Quest',
    description: "Veldora's favorite! Find the comfiest clouds to nap on.",
    players: '5.8K',
    reward: '150 VELD',
    image: '/games/nap-quest.png',
    emoji: '😴',
    color: 'from-sky-baby to-accent-lavender',
    live: false,
  },
  {
    id: 5,
    name: 'Sky Miners',
    description: 'Mine precious gems from floating islands!',
    players: '9.7K',
    reward: '400 VELD',
    image: '/games/sky-miners.png',
    emoji: '⛏️',
    color: 'from-accent-coral to-accent-sunshine',
    live: true,
  },
  {
    id: 6,
    name: 'Bubble Pop Party',
    description: 'Pop bubbles with friends! The popping never stops!',
    players: '11.3K',
    reward: '300 VELD',
    image: '/games/bubble-pop.png',
    emoji: '🫧',
    color: 'from-accent-bubblegum to-accent-coral',
    live: true,
  },
]

export default function GamesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="games"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-cloud to-sky-50/30"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ☁️
          </motion.div>
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
            <span className="text-4xl">☁️</span>
            <h2 className="text-section font-display text-sky-azure">
              Fluffy Playgrounds
            </h2>
            <span className="text-4xl">☁️</span>
          </motion.div>
          <p className="text-xl font-heading text-gray-600 max-w-2xl mx-auto">
            Pick a cloud, any cloud! Each game is fluffier than the last 🎮
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              {/* Cloud-shaped Card */}
              <motion.div
                className={`
                  relative bg-white/90 backdrop-blur-xl
                  rounded-[40px] p-6
                  border-2 border-white
                  shadow-cloud
                  transition-all duration-500
                  overflow-hidden
                `}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 30px 60px rgba(135, 206, 235, 0.3)',
                }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Game Preview Area */}
                <div className="relative h-40 rounded-3xl bg-gradient-to-br from-cloud to-sky-50 mb-4 overflow-hidden">
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-7xl"
                      animate={hoveredGame === game.id ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {game.emoji}
                    </motion.span>
                  </div>

                  {/* Live Badge */}
                  {game.live && (
                    <motion.div
                      className="absolute top-3 right-3 flex items-center gap-2 bg-accent-mint/90 backdrop-blur px-3 py-1.5 rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-xs font-bold text-white">
                        🎮 Playing Now!
                      </span>
                    </motion.div>
                  )}

                  {/* Decorative clouds */}
                  <motion.span
                    className="absolute bottom-2 left-4 text-2xl opacity-50"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ☁️
                  </motion.span>
                  <motion.span
                    className="absolute bottom-4 right-6 text-xl opacity-40"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  >
                    ☁️
                  </motion.span>
                </div>

                {/* Game Info */}
                <div className="relative z-10">
                  <h3 className="text-xl font-display text-sky-azure mb-2 flex items-center gap-2">
                    {game.name}
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {game.emoji}
                    </motion.span>
                  </h3>
                  <p className="text-sm text-gray-600 font-body mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span>👥</span>
                      <span className="font-heading">{game.players} dragons playing</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-accent-sunshine font-bold">
                      <span>✨</span>
                      <span>{game.reward}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <CloudButton variant="accent" size="medium" className="w-full">
                    Let's Play! 🎮
                  </CloudButton>
                </div>

                {/* Peeking Veldora */}
                <motion.div
                  className="absolute -bottom-8 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20, rotate: 10 }}
                  whileHover={{ y: 0, rotate: 0 }}
                >
                  <VeldoraMascot pose="peeking" size="small" />
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.span
                className="absolute -top-4 -left-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* View All Games Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <CloudButton variant="primary" size="large">
            Explore All Games 🌈
          </CloudButton>
        </motion.div>

        {/* Fun footer note */}
        <motion.p
          className="text-center mt-8 text-sm font-handwritten text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          * Veldora rates all games by nap-friendliness. Nap Quest has 5 clouds! ☁️☁️☁️☁️☁️
        </motion.p>
      </div>
    </section>
  )
}