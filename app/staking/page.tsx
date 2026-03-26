'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'
import CloudButton from '@/components/ui/CloudButton'

const stakingPools = [
  {
    id: 1,
    name: 'Cloud Nap',
    duration: '30 Days',
    apy: '12%',
    minStake: '100 VELD',
    totalStaked: '2.5M VELD',
    emoji: '☁️',
    color: 'from-sky-primary to-sky-baby',
  },
  {
    id: 2,
    name: 'Dragon Dream',
    duration: '90 Days',
    apy: '25%',
    minStake: '500 VELD',
    totalStaked: '5.8M VELD',
    emoji: '🐉',
    color: 'from-accent-lavender to-accent-bubblegum',
  },
  {
    id: 3,
    name: 'Deep Sleep',
    duration: '180 Days',
    apy: '45%',
    minStake: '1000 VELD',
    totalStaked: '12.3M VELD',
    emoji: '😴',
    color: 'from-accent-sunshine to-accent-peach',
  },
  {
    id: 4,
    name: 'Hibernation',
    duration: '365 Days',
    apy: '80%',
    minStake: '5000 VELD',
    totalStaked: '25.6M VELD',
    emoji: '💎',
    color: 'from-accent-coral to-accent-sunshine',
  },
]

export default function StakingPage() {
  const [selectedPool, setSelectedPool] = useState<number | null>(null)

  return (
    <PageLayout
      title="Nap Station"
      subtitle="Put your tokens to sleep and wake up with more! 😴💰"
      emoji="😴"
    >
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              { label: 'Total Staked', value: '46.2M VELD', emoji: '🔒' },
              { label: 'Total Stakers', value: '12,450', emoji: '👥' },
              { label: 'Rewards Paid', value: '2.1M VELD', emoji: '🎁' },
              { label: 'Avg APY', value: '40.5%', emoji: '📈' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur rounded-2xl p-4 text-center shadow-cloud"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-2xl">{stat.emoji}</span>
                <p className="text-xl font-display text-sky-azure">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Veldora Tip */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12 bg-white/60 backdrop-blur rounded-full px-6 py-3 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <VeldoraMascot pose="sleeping" size="small" />
            <p className="font-handwritten text-lg text-gray-600">
              The longer you nap, the more you earn! - Veldora
            </p>
          </motion.div>

          {/* Staking Pools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {stakingPools.map((pool, i) => (
              <motion.div
                key={pool.id}
                className={`relative bg-white/90 backdrop-blur-xl rounded-[30px] p-6 border-2 shadow-cloud overflow-hidden cursor-pointer ${
                  selectedPool === pool.id ? 'border-sky-azure' : 'border-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => setSelectedPool(pool.id)}
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pool.color}`} />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="text-4xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {pool.emoji}
                    </motion.span>
                    <div>
                      <h3 className="text-xl font-display text-sky-azure">{pool.name}</h3>
                      <p className="text-sm text-gray-500">Lock: {pool.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display text-accent-mint">{pool.apy}</p>
                    <p className="text-xs text-gray-500">APY</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-cloud-mist rounded-xl p-3">
                    <p className="text-xs text-gray-500">Min Stake</p>
                    <p className="font-display text-sky-azure">{pool.minStake}</p>
                  </div>
                  <div className="bg-cloud-mist rounded-xl p-3">
                    <p className="text-xs text-gray-500">Total Staked</p>
                    <p className="font-display text-sky-azure">{pool.totalStaked}</p>
                  </div>
                </div>

                <CloudButton variant="accent" className="w-full">
                  Stake Now 🚀
                </CloudButton>
              </motion.div>
            ))}
          </div>

          {/* How It Works */}
          <motion.div
            className="bg-white/80 backdrop-blur rounded-[30px] p-8 shadow-cloud"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-display text-sky-azure text-center mb-6">
              How Staking Works 🤔
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Choose a Pool', desc: 'Pick your nap duration', emoji: '☁️' },
                { step: '2', title: 'Stake VELD', desc: 'Lock your tokens and relax', emoji: '🔒' },
                { step: '3', title: 'Earn Rewards', desc: 'Wake up richer!', emoji: '💰' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <motion.span
                    className="text-4xl block mb-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {item.emoji}
                  </motion.span>
                  <div className="w-8 h-8 bg-sky-azure text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-display text-sky-azure">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}