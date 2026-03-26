'use client'

import { memo } from 'react'

const CloudParticles = memo(function CloudParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* CSS-only floating clouds - much more performant */}
      <div className="cloud-particle cloud-1" />
      <div className="cloud-particle cloud-2" />
      <div className="cloud-particle cloud-3" />
      <div className="cloud-particle cloud-4" />
      <div className="cloud-particle cloud-5" />
      
      <style jsx>{`
        .cloud-particle {
          position: absolute;
          width: 100px;
          height: 60px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: float-up linear infinite;
          opacity: 0.3;
          will-change: transform;
        }
        
        .cloud-1 { left: 10%; animation-duration: 25s; animation-delay: 0s; }
        .cloud-2 { left: 30%; animation-duration: 30s; animation-delay: 5s; }
        .cloud-3 { left: 50%; animation-duration: 28s; animation-delay: 10s; }
        .cloud-4 { left: 70%; animation-duration: 32s; animation-delay: 3s; }
        .cloud-5 { left: 90%; animation-duration: 26s; animation-delay: 8s; }
        
        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
})

export default CloudParticles