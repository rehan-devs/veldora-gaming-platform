'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'
import CloudButton from '@/components/ui/CloudButton'
import { Metadata } from 'next'

const games = [
  {
    id: 1,
    name: 'Cloud Kingdom Clash',
    description: 'Battle other dragons in the fluffiest strategy game ever! Build your castle, train your dragons, and try not to fall asleep mid-battle.',
    players: '12.5K',
    reward: '500 VELD',
    category: 'Strategy',
    emoji: '🏰',
    color: 'from-accent-lavender to-accent-bubblegum',
    live: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Token Tumble',
    description: 'Match tokens and watch them tumble! Super satisfying puzzle action with crypto rewards.',
    players: '8.2K',
    reward: '200 VELD',
    category: 'Puzzle',
    emoji: '🪙',
    color: 'from-accent-sunshine to-accent-peach',
    live: true,
    featured: false,
  },
  {
    id: 3,
    name: 'Dragon Racing',
    description: 'Race through the clouds! Try not to fall asleep mid-race like Veldora does.',
    players: '15.1K',
    reward: '750 VELD',
    category: 'Racing',
    emoji: '🏁',
    color: 'from-accent-mint to-sky-primary',
    live: true,
    featured: true,
  },
  {
    id: 4,
    name: 'Nap Quest',
    description: "Veldora's favorite! Find the comfiest clouds to nap on and earn rewards while sleeping.",
    players: '5.8K',
    reward: '150 VELD',
    category: 'Casual',
    emoji: '😴',
    color: 'from-sky-baby to-accent-lavender',
    live: true,
    featured: false,
  },
  {
    id: 5,
    name: 'Sky Miners',
    description: 'Mine precious gems from floating islands! Dig deep into the clouds for treasures.',
    players: '9.7K',
    reward: '400 VELD',
    category: 'Simulation',
    emoji: '⛏️',
    color: 'from-accent-coral to-accent-sunshine',
    live: true,
    featured: false,
  },
  {
    id: 6,
    name: 'Bubble Pop Party',
    description: 'Pop bubbles with friends! The popping never stops and neither do the rewards!',
    players: '11.3K',
    reward: '300 VELD',
    category: 'Arcade',
    emoji: '🫧',
    color: 'from-accent-bubblegum to-accent-coral',
    live: true,
    featured: false,
  },
  {
    id: 7,
    name: 'Cloud Craft',
    description: 'Build your own floating island paradise! Craft, decorate, and invite friends.',
    players: '7.4K',
    reward: '350 VELD',
    category: 'Building',
    emoji: '🏗️',
    color: 'from-sky-primary to-accent-mint',
    live: false,
    featured: false,
  },
  {
    id: 8,
    name: 'Dragon Duel',
    description: 'Card battling with dragon companions! Collect, trade, and battle your way to victory.',
    players: '6.9K',
    reward: '450 VELD',
    category: 'Card Game',
    emoji: '🃏',
    color: 'from-accent-lavender to-sky-azure',
    live: false,
    featured: false,
  },
]

const categories = ['All', 'Strategy', 'Puzzle', 'Racing', 'Casual', 'Simulation', 'Arcade', 'Building', 'Card Game']

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showLiveOnly, setShowLiveOnly] = useState(false)

  const filteredGames = games.filter(game => {
    if (selectedCategory !== 'All' && game.category !== selectedCategory) return false
    if (showLiveOnly && !game.live) return false
    return true
  })

  return (
    <PageLayout
      title="Fluffy Playgrounds"
      subtitle="Pick a cloud, any cloud! Each game is fluffier than the last 🎮"
      emoji="🎮"
    >
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-heading text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-sky-azure text-white shadow-cloud'
                      : 'bg-white/70 text-gray-600 hover:bg-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setShowLiveOnly(!showLiveOnly)}
              className={`px-4 py-2 rounded-full font-heading text-sm flex items-center gap-2 transition-all ${
                showLiveOnly
                  ? 'bg-accent-mint text-white shadow-cloud'
                  : 'bg-white/70 text-gray-600 hover:bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`w-2 h-2 rounded-full ${showLiveOnly ? 'bg-white' : 'bg-accent-mint'} animate-pulse`} />
              Live Only
            </motion.button>
          </motion.div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div
                  className="relative bg-white/90 backdrop-blur-xl rounded-[30px] p-6 border-2 border-white shadow-cloud overflow-hidden h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {game.featured && (
                    <div className="absolute top-3 left-3 bg-accent-sunshine text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Featured
                    </div>
                  )}

                  <div className={`relative h-32 rounded-2xl bg-gradient-to-br ${game.color} mb-4 flex items-center justify-center`}>
                    <motion.span
                      className="text-6xl"
                      animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {game.emoji}
                    </motion.span>

                    {game.live && (
                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-accent-mint rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-accent-mint">LIVE</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-display text-sky-azure mb-2">
                    {game.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-500">
                      👥 {game.players} playing
                    </span>
                    <span className="text-accent-sunshine font-bold">
                      ✨ {game.reward}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-sky-50 text-sky-azure px-3 py-1 rounded-full">
                      {game.category}
                    </span>
                    <CloudButton variant="accent" size="small">
                      {game.live ? 'Play Now' : 'Coming Soon'}
                    </CloudButton>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <VeldoraMascot pose="confused" size="large" />
              <p className="mt-4 text-xl font-heading text-gray-600">
                No games found... Veldora is looking for them! 🔍
              </p>
            </motion.div>
          )}

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-block bg-white/80 backdrop-blur rounded-3xl p-8 shadow-cloud">
              <VeldoraMascot pose="excited" size="medium" />
              <h3 className="text-2xl font-display text-sky-azure mt-4 mb-2">
                More Games Coming Soon!
              </h3>
              <p className="text-gray-600 mb-4">
                Veldora is working hard (between naps) to bring you more fun!
              </p>
              <CloudButton variant="primary">
                Get Notified 🔔
              </CloudButton>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}