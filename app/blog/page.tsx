// app/blog/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'

const blogPosts = [
  {
    id: 1,
    title: 'Veldora 2.0: The Fluffiest Update Yet!',
    excerpt: 'We are excited to announce the biggest update in Veldora history...',
    date: 'Dec 15, 2024',
    category: 'Announcements',
    emoji: '🎉',
    featured: true,
  },
  {
    id: 2,
    title: 'New Game Alert: Dragon Racing is Live!',
    excerpt: 'Race through the clouds and earn VELD tokens in our newest game...',
    date: 'Dec 10, 2024',
    category: 'Games',
    emoji: '🏁',
    featured: false,
  },
  {
    id: 3,
    title: 'Staking Rewards Increased!',
    excerpt: 'Great news for all stakers! We have increased APY across all pools...',
    date: 'Dec 5, 2024',
    category: 'Updates',
    emoji: '💰',
    featured: false,
  },
  {
    id: 4,
    title: 'Community Spotlight: Top Dragons of November',
    excerpt: 'Celebrating our most active community members this month...',
    date: 'Dec 1, 2024',
    category: 'Community',
    emoji: '⭐',
    featured: false,
  },
  {
    id: 5,
    title: 'Partnership Announcement: Big Things Coming!',
    excerpt: 'We are thrilled to announce a major partnership that will...',
    date: 'Nov 28, 2024',
    category: 'Partnerships',
    emoji: '🤝',
    featured: false,
  },
  {
    id: 6,
    title: 'How to Maximize Your VELD Earnings',
    excerpt: 'Tips and tricks from our top players on earning more tokens...',
    date: 'Nov 25, 2024',
    category: 'Guides',
    emoji: '📈',
    featured: false,
  },
]

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function BlogPage() {
  const featuredPost = blogPosts.find(p => p.featured)
  const regularPosts = blogPosts.filter(p => !p.featured)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate success
    setStatus('success')
    setEmail('')
    
    // Reset after showing success
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <PageLayout
      title="Dragon Blog"
      subtitle="News, updates, and stories from the cloud kingdom 📰"
      emoji="📰"
    >
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <motion.article
              className="bg-gradient-to-r from-accent-sunshine/20 to-accent-coral/20 rounded-[40px] p-8 mb-12 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.span
                  className="text-8xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {featuredPost.emoji}
                </motion.span>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-sm bg-sky-azure text-white px-3 py-1 rounded-full">
                    Featured ⭐
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display text-sky-azure mt-3 mb-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 justify-center md:justify-start text-sm text-gray-500">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="bg-white/90 backdrop-blur-xl rounded-[25px] p-6 shadow-cloud border-2 border-white cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{post.emoji}</span>
                  <span className="text-xs bg-sky-50 text-sky-azure px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display text-lg text-sky-azure mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            className="mt-16 text-center bg-white/80 backdrop-blur rounded-[30px] p-8 shadow-cloud"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ overflow: 'visible' }}
          >
            <VeldoraMascot pose="waving" size="medium" />
            <h3 className="text-xl font-display text-sky-azure mt-4 mb-2">
              Never Miss an Update!
            </h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for weekly dragon news</p>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <motion.div
                className={`
                  relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2
                  p-2 rounded-full
                  bg-white
                  transition-all duration-300
                  ${isFocused 
                    ? 'ring-2 ring-sky-primary ring-inset shadow-[0_0_0_3px_rgba(135,206,235,0.1)]' 
                    : 'ring-2 ring-sky-200 ring-inset shadow-cloud'
                  }
                `}
                animate={status === 'error' ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                {/* Email Input */}
                <div className="flex-1 relative min-h-[56px] flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="your@email.cloud ☁️"
                    disabled={status === 'loading' || status === 'success'}
                    className="
                      w-full h-full px-6 py-3
                      bg-transparent
                      font-body text-base sm:text-lg
                      placeholder:text-sky-300
                      focus:outline-none
                      disabled:opacity-50
                    "
                  />

                  {/* Input decorations */}
                  <AnimatePresence>
                    {isFocused && (
                      <motion.span
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        ✨
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success' || !email}
                  className={`
                    px-6 sm:px-8 py-3 sm:py-3.5 rounded-full
                    font-heading font-bold text-base sm:text-lg
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    whitespace-nowrap
                    flex-shrink-0
                    ${status === 'success'
                      ? 'bg-accent-mint text-white'
                      : 'bg-gradient-to-r from-sky-primary to-sky-azure text-white hover:shadow-lg'
                    }
                  `}
                  whileHover={status === 'idle' && email ? { scale: 1.05 } : {}}
                  whileTap={status === 'idle' && email ? { scale: 0.95 } : {}}
                >
                  {status === 'idle' && (
                    <>
                      <span>Subscribe</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✉️
                      </motion.span>
                    </>
                  )}
                  {status === 'loading' && (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      ☁️
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <>
                      <span>Subscribed!</span>
                      <span>✓</span>
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <span>Try Again</span>
                      <span>🔄</span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Flying envelope animation on success */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="absolute top-0 left-1/2 text-4xl pointer-events-none z-50"
                    initial={{ opacity: 1, x: 0, y: 0 }}
                    animate={{ 
                      opacity: [1, 1, 0],
                      x: [0, 100, 200],
                      y: [0, -100, -200],
                      rotate: [0, -15, -30],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    ✉️
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="font-heading text-accent-mint text-lg">
                    🎉 Woohoo! Welcome to the cloud fam!
                  </p>
                  <p className="font-handwritten text-gray-500 mt-1">
                    Check your inbox for a surprise from Veldora! ✨
                  </p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="font-heading text-accent-coral text-lg">
                    😅 Oops! Something went wonky!
                  </p>
                  <p className="font-handwritten text-gray-500 mt-1">
                    Veldora tripped over a cloud. Try again?
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}