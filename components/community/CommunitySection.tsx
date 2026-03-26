'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface SocialPlatform {
  name: string
  icon: string
  href: string
  members: string
  description: string
  color: string
  hoverEmoji: string
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Discord',
    icon: '💬',
    href: 'https://discord.gg/veldora',
    members: '50K+',
    description: 'dragons chatting',
    color: 'from-indigo-400 to-purple-500',
    hoverEmoji: '🎉',
  },
  {
    name: 'Twitter',
    icon: '🐦',
    href: 'https://twitter.com/veldora',
    members: '75K+',
    description: 'followers',
    color: 'from-sky-400 to-blue-500',
    hoverEmoji: '📱',
  },
  {
    name: 'Telegram',
    icon: '✈️',
    href: 'https://t.me/veldora',
    members: '30K+',
    description: 'members',
    color: 'from-cyan-400 to-sky-500',
    hoverEmoji: '💨',
  },
  {
    name: 'YouTube',
    icon: '📺',
    href: 'https://youtube.com/@veldora',
    members: '25K+',
    description: 'subscribers',
    color: 'from-red-400 to-rose-500',
    hoverEmoji: '🎬',
  },
]

const communityHighlights = [
  { emoji: '🎨', title: 'Fan Art Fridays', description: 'Show off your Veldora drawings!' },
  { emoji: '🏆', title: 'Weekly Tournaments', description: 'Compete for epic prizes!' },
  { emoji: '📚', title: 'Dragon Academy', description: 'Learn & earn with tutorials!' },
  { emoji: '🎁', title: 'Surprise Airdrops', description: 'Random rewards for active members!' },
]

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  return (
    <section
      ref={sectionRef}
      id="community"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-cloud to-sky-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-15"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            {['💙', '☁️', '✨'][i % 3]}
          </div>
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
            <span className="text-4xl">🐉</span>
            <h2 className="text-4xl md:text-5xl font-display text-sky-azure">
              Join the Flock
            </h2>
            <span className="text-4xl">🐉</span>
          </motion.div>
          <p className="text-xl font-heading text-gray-600 max-w-xl mx-auto">
            We don&apos;t bite! (Veldora might drool though) 😄
          </p>
        </motion.div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlatform(platform.name)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <Link 
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <motion.div
                  className="relative bg-white/90 backdrop-blur-xl rounded-[35px] p-6 text-center shadow-cloud border-2 border-white overflow-hidden h-full"
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(135, 206, 235, 0.25)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-3"
                    animate={hoveredPlatform === platform.name ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {platform.icon}
                  </motion.div>

                  {/* Platform Name */}
                  <h3 className="text-xl font-display text-sky-azure mb-1">
                    {platform.name}
                  </h3>

                  {/* Members Count */}
                  <p className="text-2xl font-display text-gray-800 mb-1">
                    {platform.members}
                  </p>
                  <p className="text-sm font-heading text-gray-500">
                    {platform.description}
                  </p>

                  {/* Hover emoji */}
                  {hoveredPlatform === platform.name && (
                    <motion.span
                      className="absolute top-2 right-2 text-2xl"
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0, y: -20 }}
                    >
                      {platform.hoverEmoji}
                    </motion.span>
                  )}

                  {/* Join Button */}
                  <motion.div
                    className={`
                      mt-4 py-2 px-4 rounded-full
                      bg-gradient-to-r ${platform.color}
                      text-white font-heading font-bold text-sm
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    `}
                  >
                    Join Now! ✨
                  </motion.div>

                  {/* Floating cloud decoration */}
                  <span className="absolute -top-3 -left-3 text-2xl opacity-60">
                    ☁️
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Community Highlights */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-display text-sky-azure text-center mb-8">
            What&apos;s Happening in the Kingdom? 🏰
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white/70 backdrop-blur rounded-[25px] p-5 text-center shadow-cloud border border-white"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.span
                  className="text-4xl block mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  {highlight.emoji}
                </motion.span>
                <h4 className="font-display text-lg text-sky-azure mb-1">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 font-body">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Veldora CTA - Positioned below the grid with proper spacing */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex flex-col items-center">
            <VeldoraMascot
              pose="waving"
              size="large"
              showBubble
              bubbleText="Come hang out with us! 🎉"
            />
            <motion.p
              className="mt-6 font-handwritten text-xl text-gray-600"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Join 150K+ dragon friends today! 🐉💙
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}