'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'

const cookieTypes = [
  {
    name: 'Essential Cookies',
    emoji: '🔒',
    required: true,
    description: 'Required for the platform to function properly. Cannot be disabled.',
    examples: ['Session management', 'Security tokens', 'Wallet connection state'],
  },
  {
    name: 'Analytics Cookies',
    emoji: '📊',
    required: false,
    description: 'Help us understand how you use our platform to improve it.',
    examples: ['Page views', 'User journey tracking', 'Error monitoring'],
  },
  {
    name: 'Preference Cookies',
    emoji: '⚙️',
    required: false,
    description: 'Remember your settings and preferences for a better experience.',
    examples: ['Language settings', 'Theme preferences', 'Game settings'],
  },
  {
    name: 'Marketing Cookies',
    emoji: '📢',
    required: false,
    description: 'Used to deliver relevant ads and track campaign effectiveness.',
    examples: ['Ad targeting', 'Social media integration', 'Campaign tracking'],
  },
]

const managingOptions = [
  {
    title: 'Browser Settings',
    emoji: '🌐',
    description: 'Most browsers allow you to refuse or delete cookies through their settings menu.',
  },
  {
    title: 'Our Cookie Banner',
    emoji: '🍪',
    description: 'Use our cookie consent tool when you first visit to customize your preferences.',
  },
  {
    title: 'Mobile Devices',
    emoji: '📱',
    description: 'Check your device settings for cookie and tracking controls.',
  },
  {
    title: 'Third-Party Tools',
    emoji: '🔧',
    description: 'Use browser extensions to manage cookies across all websites.',
  },
]

export default function CookiePolicyPage() {
  return (
    <PageLayout
      title="Cookie Policy"
      subtitle="We use cookies... but not the chocolate kind! 🍪"
      emoji="🍪"
    >
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-sm text-gray-500">Last Updated: December 1, 2024</p>
          </motion.div>

          {/* Fun Introduction */}
          <motion.div
            className="bg-gradient-to-r from-accent-peach/20 to-accent-sunshine/20 rounded-[30px] p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.span
                className="text-8xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🍪
              </motion.span>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-display text-sky-azure mb-2">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600">
                  Cookies are small text files stored on your device when you visit websites. 
                  They help us remember your preferences and improve your experience. 
                  Unfortunately, you cannot eat these cookies! 😄
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display text-sky-azure text-center mb-8">
              Types of Cookies We Use 🍪
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  className="bg-white/90 backdrop-blur-xl rounded-[25px] p-6 shadow-cloud border-2 border-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{cookie.emoji}</span>
                      <h3 className="font-display text-sky-azure">{cookie.name}</h3>
                    </div>
                    {cookie.required && (
                      <span className="text-xs bg-accent-coral/20 text-accent-coral px-2 py-1 rounded-full font-bold">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{cookie.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-bold">Examples:</p>
                    {cookie.examples.map((example) => (
                      <p key={example} className="text-xs text-gray-500 flex items-center gap-2">
                        <span>☁️</span>
                        {example}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            className="bg-white/80 backdrop-blur rounded-[30px] p-8 shadow-cloud mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-display text-sky-azure mb-6 flex items-center gap-2">
              <span>⚙️</span>
              Managing Your Cookies
            </h2>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies in several ways:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {managingOptions.map((option, i) => (
                <motion.div
                  key={option.title}
                  className="flex items-start gap-3 p-4 bg-cloud-mist/50 rounded-xl"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <span className="text-2xl">{option.emoji}</span>
                  <div>
                    <h4 className="font-heading text-sky-azure font-semibold">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 p-4 bg-accent-sunshine/10 rounded-xl">
              ⚠️ Note: Disabling certain cookies may affect the functionality of our platform. 
              Essential cookies cannot be disabled as they are required for Veldora to work properly.
            </p>
          </motion.div>

          {/* Third Party Cookies */}
          <motion.div
            className="bg-white/80 backdrop-blur rounded-[30px] p-8 shadow-cloud mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-display text-sky-azure mb-4 flex items-center gap-2">
              <span>🔗</span>
              Third-Party Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Some cookies on our platform are set by third-party services we use:
            </p>
            <div className="space-y-3">
              {[
                { name: 'Google Analytics', purpose: 'Website analytics and performance tracking', emoji: '📈' },
                { name: 'Cloudflare', purpose: 'Security and performance optimization', emoji: '🛡️' },
                { name: 'Wallet Providers', purpose: 'Wallet connection and transaction handling', emoji: '👛' },
              ].map((service) => (
                <div key={service.name} className="flex items-center gap-3 p-3 bg-cloud-mist/30 rounded-xl">
                  <span className="text-xl">{service.emoji}</span>
                  <div>
                    <span className="font-heading text-sky-azure">{service.name}</span>
                    <span className="text-gray-500 text-sm ml-2">- {service.purpose}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            className="bg-white/80 backdrop-blur rounded-[30px] p-8 shadow-cloud mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-display text-sky-azure mb-4 flex items-center gap-2">
              <span>🔄</span>
              Policy Updates
            </h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for legal, operational, or regulatory reasons. We encourage you to periodically 
              review this page for the latest information on our cookie practices. The date at the 
              top of this policy indicates when it was last updated.
            </p>
          </motion.div>

          {/* Veldora Note */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <VeldoraMascot 
              pose="eating" 
              size="medium" 
              showBubble 
              bubbleText="I prefer cloud cookies! ☁️🍪" 
            />
            <p className="mt-4 text-gray-600 font-heading">
              Questions about cookies? We are happy to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <motion.a
                href="mailto:privacy@veldora.io"
                className="inline-flex items-center gap-2 bg-sky-azure text-white px-6 py-3 rounded-full font-heading"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📧</span>
                Contact Us
              </motion.a>
              <motion.a
                href="/privacy-policy"
                className="inline-flex items-center gap-2 bg-white text-sky-azure px-6 py-3 rounded-full font-heading shadow-cloud"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🔒</span>
                Privacy Policy
              </motion.a>
            </div>
          </motion.div>

          {/* Fun footer */}
          <motion.p
            className="text-center mt-8 text-sm text-gray-400 font-handwritten"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Fun fact: Veldora has tried to eat digital cookies. It did not work. 🐉😅
          </motion.p>
        </div>
      </section>
    </PageLayout>
  )
}