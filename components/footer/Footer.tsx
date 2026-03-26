'use client'

import { useRef, useState, memo } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

const footerLinks = {
  product: [
    { name: 'Games', href: '/games' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Token', href: '/token' },
    { name: 'Staking', href: '/staking' },
  ],
  resources: [
    { name: 'Documentation', href: '/documentation' },
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
  ],
  community: [
    { name: 'Discord', href: 'https://discord.gg/veldora', external: true },
    { name: 'Twitter', href: 'https://twitter.com/veldora', external: true },
    { name: 'Telegram', href: 'https://t.me/veldora', external: true },
    { name: 'Reddit', href: 'https://reddit.com/r/veldora', external: true },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
}

const socialIcons = [
  { name: 'Discord', emoji: '💬', href: 'https://discord.gg/veldora' },
  { name: 'Twitter', emoji: '🐦', href: 'https://twitter.com/veldora' },
  { name: 'Telegram', emoji: '✈️', href: 'https://t.me/veldora' },
  { name: 'YouTube', emoji: '📺', href: 'https://youtube.com/@veldora' },
]

const Footer = memo(function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: '-100px' })
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleVeldoraClick = () => {
    setShowEasterEgg(true)
    setTimeout(() => {
      setShowEasterEgg(false)
    }, 5000)
  }

  const categoryEmojis: Record<string, string> = {
    product: '🎮',
    resources: '📚',
    community: '💙',
    legal: '📋',
  }

  return (
    <footer
      ref={footerRef}
      className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-white via-cloud to-sky-primary/20"
    >
      {/* Sleeping Veldora Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="relative text-[8rem] leading-none">☁️</div>
        </motion.div>
      </div>

      {/* Easter Egg Modal - Fixed */}
      {showEasterEgg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setShowEasterEgg(false)}
        >
          <div 
            className="relative bg-white rounded-3xl p-10 shadow-2xl border-4 border-yellow-300 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content */}
            <div className="text-center">
              <VeldoraMascot
                pose="celebrating"
                size="large"
                showBubble
                bubbleText="You found the secret! 🎉✨"
              />
              
              <h3 className="mt-6 text-3xl font-display text-gray-900">
                Congratulations! 🎊
              </h3>
              
              <p className="text-xl font-heading text-sky-azure mt-3">
                You are officially a dragon friend! 🐉💙
              </p>
              
              <p className="text-sm font-body text-gray-600 mt-4">
                You&apos;ve unlocked the secret dragon club membership!
              </p>

              <button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-heading font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setShowEasterEgg(false)}
              >
                Awesome! ✨
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Logo & Description */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Link href="/">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-2xl">🐉</span>
                <span className="text-2xl font-display text-sky-azure">VELDORA</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 font-body mb-4">
              Where Dragons Play and Dreams Float Away ☁️✨
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name}`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/80 shadow-cloud flex items-center justify-center text-lg hover:bg-white transition-colors cursor-pointer">
                    {social.emoji}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 + 0.2 }}
            >
              <h4 className="font-display text-lg text-sky-azure mb-4 capitalize flex items-center gap-1">
                {category}
                <span>{categoryEmojis[category]}</span>
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                    >
                      <span className="text-gray-600 hover:text-sky-azure font-body text-sm transition-colors inline-flex items-center gap-1 group">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          ☁️
                        </span>
                        {link.name}
                        {'external' in link && link.external && (
                          <span className="text-xs opacity-50">↗</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 font-body">
            © 2024 Veldora. All rights reserved.
          </p>
        </motion.div>

        {/* Easter Egg Hint */}
        <motion.p
          className="text-center mt-4 text-xs text-gray-400 font-handwritten cursor-pointer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ delay: 1 }}
          onClick={handleVeldoraClick}
        >
          psst... click here for a surprise 🤫
        </motion.p>
      </div>
    </footer>
  )
})

export default Footer