'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
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
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-sky-50 via-cloud to-white"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {i % 2 === 0 ? '✉️' : '☁️'}
          </motion.span>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Card */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-xl rounded-[50px] p-8 md:p-12 shadow-float border-4 border-white overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative corner clouds */}
          <motion.span
            className="absolute -top-6 -left-6 text-6xl opacity-80"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ☁️
          </motion.span>
          <motion.span
            className="absolute -top-4 -right-8 text-5xl opacity-60"
            animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          >
            ☁️
          </motion.span>

          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✉️
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-display text-sky-azure">
                Get Cloud Mail!
              </h2>
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                ☁️
              </motion.span>
            </motion.div>
            <p className="text-lg font-heading text-gray-600">
              Veldora promises not to spam (he&apos;s too lazy) 😴
            </p>
          </motion.div>

          {/* Veldora peeking - SHIFTED DOWN */}
          <motion.div
            className="absolute top-32 md:top-28 -right-2 md:right-6 z-20"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <VeldoraMascot pose="peeking" size="small" />
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative">
            <motion.div
              className={`
                relative flex flex-col sm:flex-row gap-4
                p-2 rounded-full
                bg-white border-2
                transition-all duration-300
                ${isFocused 
                  ? 'border-sky-primary shadow-glow-magic' 
                  : 'border-sky-200 shadow-cloud'
                }
              `}
              animate={status === 'error' ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {/* Email Input */}
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="your@email.cloud ☁️"
                  disabled={status === 'loading' || status === 'success'}
                  className="
                    w-full px-6 py-4
                    bg-transparent
                    font-body text-lg
                    placeholder:text-sky-300
                    focus:outline-none
                    disabled:opacity-50
                  "
                />

                {/* Input decorations */}
                <AnimatePresence>
                  {isFocused && (
                    <motion.span
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
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
                  px-8 py-4 rounded-full
                  font-heading font-bold text-lg
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${status === 'success'
                    ? 'bg-accent-mint text-white'
                    : 'bg-gradient-to-r from-sky-primary to-sky-azure text-white hover:shadow-glow-magic'
                  }
                `}
                whileHover={status === 'idle' && email ? { scale: 1.05 } : {}}
                whileTap={status === 'idle' && email ? { scale: 0.95 } : {}}
              >
                {status === 'idle' && (
                  <>
                    <span>Send</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ✈️
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
                    <span>Sent!</span>
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

            {/* Flying paper airplane animation on success */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="absolute top-0 left-1/2 text-4xl pointer-events-none"
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
                  ✈️
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

          {/* Privacy Note */}
          <motion.p
            className="text-center mt-6 text-sm text-gray-500 font-body flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span>🔒</span>
            <span>We&apos;ll guard your email like dragons guard treasure</span>
            <span>🐉</span>
          </motion.p>

          {/* Decorative bottom cloud */}
          <motion.span
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl opacity-50"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ☁️
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}