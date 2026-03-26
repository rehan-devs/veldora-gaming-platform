'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'

const faqs = [
  {
    category: 'General',
    emoji: '☁️',
    questions: [
      {
        q: 'What is Veldora?',
        a: 'Veldora is the fluffiest blockchain gaming platform in the sky! We offer play-to-earn games, NFTs, and a fun community of dragon enthusiasts.',
      },
      {
        q: 'Who is Veldora the dragon?',
        a: 'Veldora is our adorable mascot - a chubby, friendly dragon who loves napping on clouds more than breathing fire. He guides users through the platform!',
      },
      {
        q: 'Is Veldora free to use?',
        a: 'Yes! Creating an account and playing many of our games is completely free. Some premium features require VELD tokens.',
      },
    ],
  },
  {
    category: 'VELD Token',
    emoji: '🪙',
    questions: [
      {
        q: 'What is VELD token?',
        a: 'VELD is our native utility token used for gaming, staking, governance, and trading NFTs within the Veldora ecosystem.',
      },
      {
        q: 'How can I buy VELD?',
        a: 'You can buy VELD on major DEXs like UniSwap and PancakeSwap. Check our Token page for direct links!',
      },
      {
        q: 'Is VELD safe to invest in?',
        a: 'VELD is audited by reputable firms, but as with any crypto, please DYOR and only invest what you can afford to lose.',
      },
    ],
  },
  {
    category: 'Gaming',
    emoji: '🎮',
    questions: [
      {
        q: 'How do I start playing?',
        a: 'Simply connect your wallet, choose a game from our Playgrounds, and start playing! Many games are free to try.',
      },
      {
        q: 'How do I earn VELD from games?',
        a: 'Complete quests, win matches, participate in tournaments, and climb leaderboards to earn VELD rewards!',
      },
      {
        q: 'Can I play on mobile?',
        a: 'Yes! Our mobile app is coming soon. Currently, you can play through your mobile browser.',
      },
    ],
  },
  {
    category: 'Staking',
    emoji: '💰',
    questions: [
      {
        q: 'What is staking?',
        a: 'Staking means locking your VELD tokens for a period of time to earn passive rewards. The longer you stake, the more you earn!',
      },
      {
        q: 'Can I unstake early?',
        a: 'Yes, but early unstaking may result in reduced rewards depending on the pool type.',
      },
      {
        q: 'What are the current APY rates?',
        a: 'APY ranges from 12% to 80% depending on the staking duration. Check our Staking page for current rates.',
      },
    ],
  },
]

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <PageLayout
      title="FAQs"
      subtitle="Got questions? Veldora has answers! (mostly) 🤔"
      emoji="❓"
    >
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.emoji}</span>
                <h2 className="text-xl font-display text-sky-azure">{category.category}</h2>
              </div>

              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const itemId = `${catIndex}-${qIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <motion.div
                      key={itemId}
                      className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-cloud border-2 border-white overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: qIndex * 0.05 }}
                    >
                      <motion.button
                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                        onClick={() => toggleItem(itemId)}
                      >
                        <span className="font-heading text-gray-700 pr-4">{faq.q}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sky-azure flex-shrink-0"
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-4">
                              <div className="pt-2 border-t border-sky-100">
                                <p className="text-gray-600 py-3">{faq.a}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {/* Still Have Questions Section */}
          <motion.div
            className="mt-16 text-center bg-gradient-to-r from-accent-lavender/20 to-accent-bubblegum/20 rounded-[30px] p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <VeldoraMascot 
              pose="confused" 
              size="medium" 
              showBubble 
              bubbleText="Still confused? Ask me!" 
            />
            <h3 className="text-xl font-display text-sky-azure mt-4 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our community and support team are always happy to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-cloud font-heading text-sky-azure"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💬</span>
                Join Discord
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-cloud font-heading text-sky-azure"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✉️</span>
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}