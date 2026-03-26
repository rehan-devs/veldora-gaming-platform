'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import VeldoraMascot from '../veldora/VeldoraMascot'

interface Step {
  number: number
  title: string
  subtitle: string
  description: string
  emoji: string
  veldoraPose: 'confused' | 'excited' | 'gaming' | 'celebrating'
  veldoraSpeech: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Wake Up',
    subtitle: 'Connect Your Wallet',
    description: "It's like a treasure pouch, but digital! Just click the shiny button.",
    emoji: '☀️',
    veldoraPose: 'confused',
    veldoraSpeech: "What's a... meta-mask? 🤔",
  },
  {
    number: 2,
    title: 'Pick a Cloud',
    subtitle: 'Choose a Game',
    description: 'So many games, so many naps to skip... Pick your favorite playground!',
    emoji: '☁️',
    veldoraPose: 'excited',
    veldoraSpeech: 'Ooh, that one looks fun!',
  },
  {
    number: 3,
    title: 'Play & Earn',
    subtitle: 'Start Gaming',
    description: 'This is the fun part! Almost as good as napping. Actually, better!',
    emoji: '🎮',
    veldoraPose: 'gaming',
    veldoraSpeech: "I am so good at this! ...zzz",  // Fixed: Changed I'm to "I am"
  },
  {
    number: 4,
    title: 'Collect Treasures',
    subtitle: 'Earn VELD Tokens',
    description: 'Shiny things! Dragons love shiny things! Stack them to the moon!',
    emoji: '✨',
    veldoraPose: 'celebrating',
    veldoraSpeech: 'SHINY THINGS!!! 🤩',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-cloud via-white to-cloud-mist"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dotted Path Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 10,20 Q 30,10 50,25 T 90,30 Q 70,50 50,45 T 10,60 Q 30,80 50,75 T 90,80"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            style={{ pathLength }}
          />
        </svg>

        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${10 + i * 10}%`,
              top: `${15 + Math.sin(i) * 20}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl">🐉</span>
            <h2 className="text-section font-display text-sky-azure">
              How To Dragon
            </h2>
            <span className="text-4xl">🐉</span>
          </motion.div>
          <p className="text-xl font-heading text-gray-600 max-w-xl mx-auto">
            Even Veldora figured it out (eventually) 😴
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-sky-primary via-accent-sunshine to-accent-coral rounded-full"
              style={{
                scaleY: pathLength,
                transformOrigin: 'top',
              }}
            />
            {/* Dotted overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'repeating-linear-gradient(to bottom, transparent, transparent 10px, white 10px, white 20px)',
              }}
            />
          </div>

          {/* Step Items */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number Circle */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-0 lg:top-1/2 lg:-translate-y-1/2 z-20 hidden lg:flex"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-cloud border-4 border-sky-primary flex items-center justify-center">
                    <span className="text-2xl font-display text-sky-azure">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-block ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
                    {/* Mobile step number */}
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <div className="w-10 h-10 rounded-full bg-sky-primary flex items-center justify-center">
                        <span className="text-lg font-display text-white">
                          {step.number}
                        </span>
                      </div>
                      <span className="text-3xl">{step.emoji}</span>
                    </div>

                    <motion.div
                      className="bg-white/80 backdrop-blur-xl rounded-[30px] p-8 shadow-cloud border-2 border-white max-w-md"
                      whileHover={{
                        boxShadow: '0 20px 50px rgba(135, 206, 235, 0.25)',
                      }}
                    >
                      {/* Desktop emoji */}
                      <motion.span
                        className="hidden lg:block text-5xl mb-4"
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {step.emoji}
                      </motion.span>

                      <h3 className="text-2xl font-display text-sky-azure mb-1">
                        &quot;{step.title}&quot;
                      </h3>
                      <p className="text-lg font-heading text-accent-coral mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 font-body">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Veldora Side */}
                <motion.div
                  className="flex-1 flex justify-center relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <VeldoraMascot
                      pose={step.veldoraPose}
                      size="large"
                      showBubble
                      bubbleText={step.veldoraSpeech}
                    />

                    {/* Decorative elements around Veldora */}
                    <motion.span
                      className="absolute -top-4 -right-4 text-2xl"
                      animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                    <motion.span
                      className="absolute -bottom-2 -left-4 text-3xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ☁️
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.p
            className="text-lg font-handwritten text-gray-600 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            See? Even a sleepy dragon can do it! 😴✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}