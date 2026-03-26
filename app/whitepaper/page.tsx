'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'
import CloudButton from '@/components/ui/CloudButton'

const sections = [
  { title: 'Executive Summary', page: '1-5', emoji: '📋' },
  { title: 'Introduction', page: '6-12', emoji: '👋' },
  { title: 'Problem Statement', page: '13-18', emoji: '🤔' },
  { title: 'Our Solution', page: '19-28', emoji: '💡' },
  { title: 'Technology Stack', page: '29-40', emoji: '⚙️' },
  { title: 'Tokenomics', page: '41-52', emoji: '🪙' },
  { title: 'Roadmap', page: '53-60', emoji: '🗺️' },
  { title: 'Team', page: '61-68', emoji: '👥' },
  { title: 'Legal Disclaimer', page: '69-72', emoji: '⚖️' },
]

export default function WhitepaperPage() {
  return (
    <PageLayout
      title="Whitepaper"
      subtitle="The technical blueprint of our cloud kingdom 📄"
      emoji="📄"
    >
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Download Banner */}
          <motion.div
            className="bg-gradient-to-r from-sky-primary to-sky-azure rounded-[30px] p-8 text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.span
              className="text-6xl block mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📖
            </motion.span>
            <h2 className="text-2xl font-display mb-2">VELDORA Whitepaper v2.0</h2>
            <p className="opacity-80 mb-6">Last updated: December 2024</p>
            <div className="flex flex-wrap justify-center gap-4">
              <CloudButton variant="secondary">
                Download PDF 📥
              </CloudButton>
              <CloudButton variant="secondary">
                Read Online 👁️
              </CloudButton>
            </div>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-[30px] p-8 shadow-cloud mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-display text-sky-azure mb-6">Table of Contents</h3>
            <div className="space-y-3">
              {sections.map((section, i) => (
                <motion.a
                  key={section.title}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-sky-50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{section.emoji}</span>
                    <span className="font-heading text-gray-700 group-hover:text-sky-azure">
                      {section.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">p. {section.page}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { label: 'Pages', value: '72', emoji: '📄' },
              { label: 'Version', value: '2.0', emoji: '🔢' },
              { label: 'Languages', value: '8', emoji: '🌍' },
              { label: 'Downloads', value: '50K+', emoji: '📥' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-cloud">
                <span className="text-2xl">{stat.emoji}</span>
                <p className="font-display text-xl text-sky-azure">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Veldora Note */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <VeldoraMascot 
              pose="thinking" 
              size="medium" 
              showBubble 
              bubbleText="Even I read it... mostly! 📚" 
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}