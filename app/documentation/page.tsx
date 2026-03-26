'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'

const docCategories = [
  {
    title: 'Getting Started',
    emoji: '🚀',
    docs: [
      { title: 'Introduction to Veldora', description: 'Learn the basics of our cloud kingdom' },
      { title: 'Creating a Wallet', description: 'Set up your dragon wallet in minutes' },
      { title: 'Your First Game', description: 'Play your first game and earn rewards' },
      { title: 'Understanding VELD', description: 'Everything about our token' },
    ],
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    docs: [
      { title: 'Game Mechanics', description: 'How our play-to-earn games work' },
      { title: 'Earning Rewards', description: 'Maximize your VELD earnings' },
      { title: 'Tournaments', description: 'Compete and win big prizes' },
      { title: 'Leaderboards', description: 'Climb the ranks and earn bonuses' },
    ],
  },
  {
    title: 'NFTs & Marketplace',
    emoji: '🖼️',
    docs: [
      { title: 'NFT Collections', description: 'Explore our NFT ecosystem' },
      { title: 'Buying NFTs', description: 'How to purchase items' },
      { title: 'Selling NFTs', description: 'List your items for sale' },
      { title: 'Trading Tips', description: 'Best practices for trading' },
    ],
  },
  {
    title: 'Staking',
    emoji: '💰',
    docs: [
      { title: 'Staking Basics', description: 'Earn passive income with VELD' },
      { title: 'Pool Types', description: 'Understanding different pools' },
      { title: 'Rewards Calculation', description: 'How APY is calculated' },
      { title: 'Unstaking', description: 'Withdrawing your tokens' },
    ],
  },
]

export default function DocumentationPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <PageLayout
      title="Dragon Academy"
      subtitle="Learn everything about Veldora! Even dragons go to school 📚"
      emoji="📚"
    >
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <motion.aside
              className="lg:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white/80 backdrop-blur rounded-[25px] p-4 shadow-cloud sticky top-24">
                <h3 className="font-display text-sky-azure mb-4 px-2">Categories</h3>
                <nav className="space-y-2">
                  {docCategories.map((cat, i) => (
                    <motion.button
                      key={cat.title}
                      onClick={() => setActiveCategory(i)}
                      className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl text-left transition-all ${
                        activeCategory === i
                          ? 'bg-sky-azure text-white shadow-cloud'
                          : 'hover:bg-sky-50 text-gray-600'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <span>{cat.emoji}</span>
                      <span className="font-heading text-sm">{cat.title}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-[30px] p-8 shadow-cloud">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{docCategories[activeCategory].emoji}</span>
                  <h2 className="text-2xl font-display text-sky-azure">
                    {docCategories[activeCategory].title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {docCategories[activeCategory].docs.map((doc, i) => (
                    <motion.a
                      key={doc.title}
                      href="#"
                      className="block bg-cloud-mist/50 hover:bg-cloud-mist rounded-xl p-4 transition-all group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-display text-sky-azure group-hover:text-sky-azure/80">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-gray-500">{doc.description}</p>
                        </div>
                        <span className="text-sky-azure opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-8 bg-gradient-to-r from-accent-sunshine/20 to-accent-peach/20 rounded-[25px] p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <VeldoraMascot pose="thinking" size="small" />
                <h3 className="font-display text-sky-azure mt-2">Still confused?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our Discord and ask the community!
                </p>
                <motion.button
                  className="bg-sky-azure text-white px-6 py-2 rounded-full font-heading"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Discord 💬
                </motion.button>
              </motion.div>
            </motion.main>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}