'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using Veldora, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.`,
  },
  {
    title: 'Eligibility',
    content: `You must be at least 18 years old to use Veldora. By using our platform, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms. Veldora is not available in jurisdictions where cryptocurrency gaming is prohibited.`,
  },
  {
    title: 'Account Responsibilities',
    content: `You are responsible for maintaining the security of your wallet and account, all activities that occur under your account, ensuring your wallet connection is secure, and not sharing access with unauthorized users. We are not responsible for losses due to compromised accounts.`,
  },
  {
    title: 'VELD Token',
    content: `VELD tokens are utility tokens for use within the Veldora ecosystem. They are NOT investment contracts or securities, currency or legal tender, or guaranteed to have any specific value. Token values may fluctuate. Do not purchase more than you can afford to lose.`,
  },
  {
    title: 'Gaming Rules',
    content: `When using our games, you agree to play fairly and not use cheats, bots, or exploits, not engage in fraudulent activities, respect other players and community guidelines, and report bugs responsibly. Violations may result in account suspension or termination.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on Veldora, including but not limited to games, graphics, artwork, Veldora mascot and branding, text, logos, designs, and smart contracts are owned by Veldora and protected by intellectual property laws. You may not copy, modify, or distribute our content without permission.`,
  },
  {
    title: 'Limitation of Liability',
    content: `Veldora is provided "as is" without warranties of any kind. We are not liable for loss of tokens or funds, smart contract failures, service interruptions, third-party actions, or market fluctuations. Use our platform at your own risk.`,
  },
  {
    title: 'Modifications',
    content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the platform after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or platform announcements.`,
  },
  {
    title: 'Termination',
    content: `We may terminate or suspend your access to Veldora immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the platform will cease immediately.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms will be resolved through binding arbitration.`,
  },
]

export default function TermsOfServicePage() {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="The rules of the cloud kingdom! 📜"
      emoji="📜"
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

          {/* Warning Banner */}
          <motion.div
            className="bg-gradient-to-r from-accent-sunshine/20 to-accent-peach/20 rounded-[30px] p-6 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gray-700 font-heading">
              ⚠️ Please read these terms carefully before using Veldora. 
              By using our platform, you agree to these terms.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white/80 backdrop-blur rounded-[25px] p-6 shadow-cloud border-2 border-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-xl font-display text-sky-azure mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-sky-azure text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Summary Card */}
          <motion.div
            className="mt-12 bg-white/90 backdrop-blur-xl rounded-[30px] p-8 shadow-cloud"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-display text-sky-azure mb-4 text-center">
              Quick Summary 📝
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { emoji: '✅', text: 'Play fair and have fun' },
                { emoji: '🔒', text: 'Keep your wallet secure' },
                { emoji: '⚠️', text: 'Crypto is risky - invest wisely' },
                { emoji: '🤝', text: 'Respect the community' },
                { emoji: '📜', text: 'Follow the rules' },
                { emoji: '💙', text: 'Enjoy the cloud kingdom!' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-cloud-mist rounded-xl"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.6 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-gray-600 font-heading text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <VeldoraMascot pose="thinking" size="medium" />
            <h3 className="text-xl font-display text-sky-azure mt-4 mb-2">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our team if you need clarification on any of these terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:legal@veldora.io"
                className="inline-flex items-center gap-2 bg-sky-azure text-white px-6 py-3 rounded-full font-heading"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📧</span>
                Contact Legal Team
              </motion.a>
              <motion.a
                href="/faqs"
                className="inline-flex items-center gap-2 bg-white text-sky-azure px-6 py-3 rounded-full font-heading shadow-cloud"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>❓</span>
                View FAQs
              </motion.a>
            </div>
          </motion.div>

          {/* Acceptance Note */}
          <motion.p
            className="text-center mt-8 text-sm text-gray-500 font-handwritten"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            By continuing to use Veldora, you acknowledge that you have read, understood, and agree to these terms. 🐉✓
          </motion.p>
        </div>
      </section>
    </PageLayout>
  )
}