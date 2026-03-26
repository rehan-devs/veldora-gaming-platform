'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/layout/PageLayout'
import VeldoraMascot from '@/components/veldora/VeldoraMascot'

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, connect your wallet, participate in games, or contact us for support. This may include wallet addresses, email address (if provided), gaming activity and statistics, transaction history within our platform, and communication preferences.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services, process transactions and send related information, send you technical notices and support messages, respond to your comments and questions, detect and prevent fraud and abuse, and personalize your gaming experience.`,
  },
  {
    title: 'Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, to comply with legal obligations, to protect our rights and prevent fraud, and with your consent or at your direction.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We strive to protect your data but cannot guarantee absolute security. Veldora guards your data like dragons guard treasure! 🐉🔒`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access your personal information, correct inaccurate data, request deletion of your data, opt-out of marketing communications, and export your data in a portable format.`,
  },
  {
    title: 'Contact Us',
    content: `If you have questions about this Privacy Policy, please contact us at privacy@veldora.io or join our Discord community.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="We protect your data like dragons protect treasure! 🔒"
      emoji="🔒"
    >
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-sm text-gray-500">Last Updated: December 1, 2024</p>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-[30px] p-8 shadow-cloud mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start gap-4">
              <VeldoraMascot pose="proud" size="small" />
              <div>
                <p className="text-gray-600">
                  At Veldora, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our platform.
                </p>
              </div>
            </div>
          </motion.div>

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
                  <span>☁️</span>
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <VeldoraMascot 
              pose="waving" 
              size="medium" 
              showBubble 
              bubbleText="Your privacy matters to us! 💙" 
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}