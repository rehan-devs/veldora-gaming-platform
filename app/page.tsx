'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
import { useFirstVisit } from '@/hooks/useFirstVisit'

// Components
import Preloader from '@/components/preloader/Preloader'
import Navigation from '@/components/navigation/Navigation'
import HeroSection from '@/components/hero/HeroSection'
import Footer from '@/components/footer/Footer'

// Dynamic imports
const GamesSection = dynamic(() => import('@/components/games/GamesSection'), {
  loading: () => <SectionLoader />,
})
const HowItWorks = dynamic(() => import('@/components/howItWorks/HowItWorks'), {
  loading: () => <SectionLoader />,
})
const EcosystemSection = dynamic(() => import('@/components/ecosystem/EcosystemSection'), {
  loading: () => <SectionLoader />,
})
const TokenomicsSection = dynamic(() => import('@/components/tokenomics/TokenomicsSection'), {
  loading: () => <SectionLoader />,
})
const StatisticsSection = dynamic(() => import('@/components/statistics/StatisticsSection'), {
  loading: () => <SectionLoader />,
})
const RoadmapSection = dynamic(() => import('@/components/roadmap/RoadmapSection'), {
  loading: () => <SectionLoader />,
})
const CommunitySection = dynamic(() => import('@/components/community/CommunitySection'), {
  loading: () => <SectionLoader />,
})
const NewsletterSection = dynamic(() => import('@/components/newsletter/NewsletterSection'), {
  loading: () => <SectionLoader />,
})

function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="text-4xl animate-bounce">☁️</div>
    </div>
  )
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [showPreloader, setShowPreloader] = useState(false)
  
  const { isFirstVisit, isLoading, markAsVisited } = useFirstVisit({
    key: 'veldora_visited',
    expirationTime: 24 * 60 * 60 * 1000, // 24 hours
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isLoading && isFirstVisit) {
      setShowPreloader(true)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading, isFirstVisit])

  const handleLoadingComplete = () => {
    markAsVisited()
    setShowPreloader(false)
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }

  // Show nothing while checking localStorage
  if (!isMounted || isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-sky-primary via-sky-baby to-white flex items-center justify-center">
        <div className="text-6xl animate-bounce">🐉</div>
      </div>
    )
  }

  return (
    <>
      {/* Preloader - Only on first visit */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main 
        className={`relative min-h-screen overflow-x-hidden transition-opacity duration-500 ${
          showPreloader ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-hidden={showPreloader}
      >
        <Navigation />
        <HeroSection />
        <GamesSection />
        <HowItWorks />
        <EcosystemSection />
        <TokenomicsSection />
        <StatisticsSection />
        <RoadmapSection />
        <CommunitySection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  )
}