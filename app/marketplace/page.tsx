'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'
import CloudButton from '@/components/ui/CloudButton'

const nftItems = [
  { id: 1, name: 'Golden Dragon Egg', price: '500 VELD', rarity: 'Legendary', emoji: '🥚', seller: 'CloudMaster' },
  { id: 2, name: 'Cloud Surfboard', price: '150 VELD', rarity: 'Rare', emoji: '🏄', seller: 'SkyRider' },
  { id: 3, name: 'Rainbow Wings', price: '300 VELD', rarity: 'Epic', emoji: '🌈', seller: 'DragonLord' },
  { id: 4, name: 'Sleepy Pillow', price: '50 VELD', rarity: 'Common', emoji: '🛏️', seller: 'NapKing' },
  { id: 5, name: 'Crystal Crown', price: '800 VELD', rarity: 'Legendary', emoji: '👑', seller: 'VeldoraFan' },
  { id: 6, name: 'Magic Wand', price: '200 VELD', rarity: 'Epic', emoji: '🪄', seller: 'WizardCloud' },
  { id: 7, name: 'Fluffy Cape', price: '100 VELD', rarity: 'Rare', emoji: '🧣', seller: 'FashionDragon' },
  { id: 8, name: 'Star Fragment', price: '75 VELD', rarity: 'Uncommon', emoji: '⭐', seller: 'StarCollector' },
]

const rarityColors: Record<string, string> = {
  'Common': 'bg-gray-200 text-gray-700',
  'Uncommon': 'bg-accent-mint/20 text-accent-mint',
  'Rare': 'bg-sky-primary/20 text-sky-azure',
  'Epic': 'bg-accent-lavender/20 text-purple-600',
  'Legendary': 'bg-accent-sunshine/20 text-yellow-600',
}

export default function MarketplacePage() {
  const [selectedRarity, setSelectedRarity] = useState('All')

  const rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

  const filteredItems = selectedRarity === 'All' 
    ? nftItems 
    : nftItems.filter(item => item.rarity === selectedRarity)

  return (
    <PageLayout
      title="Cloud Bazaar"
      subtitle="Trade stuff for other cool stuff! The fluffiest marketplace around 🏪"
      emoji="🏪"
    >
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              { label: 'Total Volume', value: '2.4M VELD', emoji: '📊' },
              { label: 'Items Listed', value: '12,450', emoji: '📦' },
              { label: 'Active Traders', value: '5,280', emoji: '👥' },
              { label: 'Floor Price', value: '25 VELD', emoji: '💰' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur rounded-2xl p-4 text-center shadow-cloud">
                <span className="text-2xl">{stat.emoji}</span>
                <p className="text-xl font-display text-sky-azure">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {rarities.map((rarity) => (
              <motion.button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-4 py-2 rounded-full font-heading text-sm transition-all ${
                  selectedRarity === rarity
                    ? 'bg-sky-azure text-white shadow-cloud'
                    : 'bg-white/70 text-gray-600 hover:bg-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {rarity}
              </motion.button>
            ))}
          </motion.div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-xl rounded-[25px] p-5 border-2 border-white shadow-cloud overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative h-40 rounded-xl bg-gradient-to-br from-cloud to-sky-50 mb-4 flex items-center justify-center">
                    <motion.span
                      className="text-7xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.emoji}
                    </motion.span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-sky-azure">{item.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${rarityColors[item.rarity]}`}>
                        {item.rarity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">by @{item.seller}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-display text-lg text-accent-sunshine">
                        {item.price}
                      </span>
                      <CloudButton variant="accent" size="small">
                        Buy Now
                      </CloudButton>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-block bg-white/80 backdrop-blur rounded-3xl p-8 shadow-cloud">
              <VeldoraMascot pose="proud" size="medium" showBubble bubbleText="I collect shinies too!" />
              <h3 className="text-xl font-display text-sky-azure mt-4">
                Want to sell your items?
              </h3>
              <p className="text-gray-600 mb-4">List your NFTs and start earning VELD!</p>
              <CloudButton variant="primary">Start Selling ✨</CloudButton>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}