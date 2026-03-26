'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'
import CloudButton from '@/components/ui/CloudButton'

const tokenStats = [
  { label: 'Current Price', value: '$0.0069', change: '+12.5%', emoji: '📈' },
  { label: 'Market Cap', value: '$6.9M', change: '+8.2%', emoji: '💰' },
  { label: 'Total Supply', value: '1B VELD', change: '', emoji: '🪙' },
  { label: 'Circulating', value: '420M VELD', change: '', emoji: '🔄' },
  { label: '24h Volume', value: '$1.2M', change: '+25%', emoji: '📊' },
  { label: 'Holders', value: '69,420', change: '+5.3%', emoji: '👥' },
]

const tokenUtilities = [
  { title: 'Play Games', description: 'Use VELD to play premium games and unlock exclusive content', emoji: '🎮' },
  { title: 'Earn Rewards', description: 'Complete quests and tournaments to earn VELD tokens', emoji: '🏆' },
  { title: 'Stake & Earn', description: 'Stake your VELD and earn passive income while you nap', emoji: '😴' },
  { title: 'Governance', description: 'Vote on important decisions in the Dragon Council', emoji: '🗳️' },
  { title: 'NFT Trading', description: 'Buy, sell, and trade NFTs in the Cloud Bazaar', emoji: '🖼️' },
  { title: 'Exclusive Access', description: 'Unlock VIP features and early access to new games', emoji: '⭐' },
]

const exchanges = [
  { name: 'UniSwap', logo: '🦄' },
  { name: 'PancakeSwap', logo: '🥞' },
  { name: 'SushiSwap', logo: '🍣' },
  { name: 'Coming Soon', logo: '🔜' },
]

export default function TokenPage() {
  return (
    <PageLayout
      title="VELD Token"
      subtitle="The official dragon currency - shiny, fluffy, and valuable! ✨"
      emoji="🪙"
    >
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Token Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {tokenStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/90 backdrop-blur rounded-2xl p-4 text-center shadow-cloud border-2 border-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl">{stat.emoji}</span>
                <p className="text-xl font-display text-sky-azure">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
                {stat.change && (
                  <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-accent-mint' : 'text-accent-coral'}`}>
                    {stat.change}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Buy Section */}
          <motion.div
            className="bg-gradient-to-r from-accent-sunshine/20 to-accent-coral/20 rounded-[40px] p-8 md:p-12 mb-16 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-display text-sky-azure mb-4">Get Your VELD Today!</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join thousands of dragons and start your adventure in the cloud kingdom!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {exchanges.map((exchange) => (
                <motion.button
                  key={exchange.name}
                  className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full shadow-cloud font-heading"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">{exchange.logo}</span>
                  {exchange.name}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <VeldoraMascot pose="excited" size="small" />
              <span className="font-handwritten text-lg text-gray-600">
                Veldora recommends buying some shinies! 💎
              </span>
            </div>
          </motion.div>

          {/* Token Utilities */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-display text-sky-azure text-center mb-8">
              What Can You Do With VELD? 🤔
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokenUtilities.map((utility, i) => (
                <motion.div
                  key={utility.title}
                  className="bg-white/80 backdrop-blur rounded-[25px] p-6 shadow-cloud border-2 border-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.span
                    className="text-4xl block mb-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {utility.emoji}
                  </motion.span>
                  <h3 className="text-lg font-display text-sky-azure mb-2">{utility.title}</h3>
                  <p className="text-sm text-gray-600">{utility.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contract Info */}
          <motion.div
            className="bg-white/90 backdrop-blur rounded-[30px] p-8 shadow-cloud text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-display text-sky-azure mb-4">Contract Address</h3>
            <div className="flex items-center justify-center gap-2 bg-cloud-mist rounded-full px-6 py-3 max-w-lg mx-auto">
              <code className="font-mono text-sm text-gray-600 truncate">
                0x1234...5678VELD
              </code>
              <motion.button
                className="text-sky-azure"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                📋
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ⚠️ Always verify the contract address before trading!
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}