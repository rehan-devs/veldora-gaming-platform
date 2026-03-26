'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type VeldoraPose = 
  | 'sleeping' | 'waving' | 'excited' | 'confused' | 'peeking'
  | 'gaming' | 'celebrating' | 'sad' | 'thinking' | 'flying'
  | 'eating' | 'pointing' | 'tired' | 'proud' | 'surprised'

interface VeldoraMascotProps {
  pose?: VeldoraPose
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  className?: string
  showBubble?: boolean
  bubbleText?: string
  onClick?: () => void
}

const sizeClasses = {
  small: 'w-16 h-16',
  medium: 'w-24 h-24',
  large: 'w-40 h-40',
  xlarge: 'w-60 h-60',
}

const VeldoraMascot = memo(function VeldoraMascot({
  pose = 'waving',
  size = 'medium',
  className,
  showBubble = false,
  bubbleText = '',
  onClick,
}: VeldoraMascotProps) {
  const shouldReduceMotion = useReducedMotion()

  // Get eye state based on pose
  const getEyeState = () => {
    if (pose === 'sleeping' || pose === 'tired') return 'closed'
    if (pose === 'surprised' || pose === 'excited') return 'wide'
    return 'normal'
  }

  // Get mouth state based on pose
  const getMouthState = () => {
    if (pose === 'excited' || pose === 'celebrating') return 'open'
    if (pose === 'sad') return 'frown'
    return 'smile'
  }

  const eyeState = getEyeState()
  const mouthState = getMouthState()
  const isFlying = pose === 'flying'

  return (
    <div className={cn('relative', className)} onClick={onClick}>
      <motion.div
        className={cn(sizeClasses[size], 'relative cursor-pointer')}
        animate={shouldReduceMotion ? {} : {
          y: pose === 'sleeping' ? [0, -2, 0] : [0, -8, 0],
        }}
        transition={{
          duration: pose === 'sleeping' ? 4 : 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 200 220" className="w-full h-full">
          {/* Left Wing - Behind body */}
          <motion.g
            animate={shouldReduceMotion ? {} : isFlying ? {
              rotate: [-15, 15, -15],
            } : {
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: isFlying ? 0.3 : 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '55px 100px' }}
          >
            {/* Wing membrane */}
            <path
              d="M 55 85 
                 Q 20 60 10 40
                 Q 5 30 15 35
                 Q 25 40 30 50
                 Q 20 45 12 30
                 Q 8 20 18 28
                 Q 28 36 35 55
                 Q 28 50 22 38
                 Q 18 28 28 38
                 Q 38 48 45 70
                 Q 50 80 55 95
                 Z"
              fill="#89CFF0"
              stroke="#5DADE2"
              strokeWidth="1"
            />
            {/* Wing highlight */}
            <path
              d="M 50 88 Q 35 70 25 55"
              fill="none"
              stroke="#B0E0E6"
              strokeWidth="2"
              opacity="0.6"
            />
          </motion.g>

          {/* Right Wing - Behind body */}
          <motion.g
            animate={shouldReduceMotion ? {} : isFlying ? {
              rotate: [15, -15, 15],
            } : {
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: isFlying ? 0.3 : 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '145px 100px' }}
          >
            {/* Wing membrane */}
            <path
              d="M 145 85 
                 Q 180 60 190 40
                 Q 195 30 185 35
                 Q 175 40 170 50
                 Q 180 45 188 30
                 Q 192 20 182 28
                 Q 172 36 165 55
                 Q 172 50 178 38
                 Q 182 28 172 38
                 Q 162 48 155 70
                 Q 150 80 145 95
                 Z"
              fill="#89CFF0"
              stroke="#5DADE2"
              strokeWidth="1"
            />
            {/* Wing highlight */}
            <path
              d="M 150 88 Q 165 70 175 55"
              fill="none"
              stroke="#B0E0E6"
              strokeWidth="2"
              opacity="0.6"
            />
          </motion.g>

          {/* Body - Main chubby body */}
          <ellipse 
            cx="100" 
            cy="130" 
            rx="55" 
            ry="50" 
            fill="#5DADE2"
            className="drop-shadow-sm"
          />
          
          {/* Belly - Cream colored */}
          <ellipse 
            cx="100" 
            cy="138" 
            rx="38" 
            ry="35" 
            fill="#FAD7A0"
          />
          
          {/* Head */}
          <circle 
            cx="100" 
            cy="75" 
            r="42" 
            fill="#5DADE2"
          />
          
          {/* Left Ear */}
          <ellipse 
            cx="68" 
            cy="45" 
            rx="10" 
            ry="15" 
            fill="#5DADE2"
          />
          <ellipse 
            cx="68" 
            cy="47" 
            rx="6" 
            ry="10" 
            fill="#89CFF0"
          />
          
          {/* Right Ear */}
          <ellipse 
            cx="132" 
            cy="45" 
            rx="10" 
            ry="15" 
            fill="#5DADE2"
          />
          <ellipse 
            cx="132" 
            cy="47" 
            rx="6" 
            ry="10" 
            fill="#89CFF0"
          />
          
          {/* Left Horn */}
          <path
            d="M 72 38 Q 65 20 72 25 Q 78 28 76 38"
            fill="#FAD7A0"
            stroke="#E8C88B"
            strokeWidth="1"
          />
          
          {/* Right Horn */}
          <path
            d="M 128 38 Q 135 20 128 25 Q 122 28 124 38"
            fill="#FAD7A0"
            stroke="#E8C88B"
            strokeWidth="1"
          />
          
          {/* Eyes */}
          {eyeState === 'closed' ? (
            <>
              {/* Closed eyes - curved lines */}
              <path 
                d="M 78 72 Q 88 67 98 72" 
                stroke="#333" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
              <path 
                d="M 102 72 Q 112 67 122 72" 
                stroke="#333" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
            </>
          ) : eyeState === 'wide' ? (
            <>
              {/* Wide surprised eyes */}
              <circle cx="88" cy="70" r="12" fill="white" />
              <circle cx="112" cy="70" r="12" fill="white" />
              <circle cx="88" cy="70" r="8" fill="#333" />
              <circle cx="112" cy="70" r="8" fill="#333" />
              <circle cx="91" cy="67" r="3" fill="white" />
              <circle cx="115" cy="67" r="3" fill="white" />
            </>
          ) : (
            <>
              {/* Normal eyes */}
              <circle cx="88" cy="70" r="10" fill="white" />
              <circle cx="112" cy="70" r="10" fill="white" />
              <circle cx="88" cy="71" r="6" fill="#333" />
              <circle cx="112" cy="71" r="6" fill="#333" />
              <circle cx="90" cy="69" r="2" fill="white" />
              <circle cx="114" cy="69" r="2" fill="white" />
            </>
          )}
          
          {/* Blush marks */}
          <ellipse cx="72" cy="82" rx="8" ry="5" fill="#FADBD8" opacity="0.7" />
          <ellipse cx="128" cy="82" rx="8" ry="5" fill="#FADBD8" opacity="0.7" />
          
          {/* Nose */}
          <ellipse cx="100" cy="80" rx="5" ry="4" fill="#4A9BD9" />
          {/* Nose highlight */}
          <ellipse cx="98" cy="79" rx="2" ry="1.5" fill="#6BB9E8" opacity="0.6" />
          
          {/* Mouth */}
          {mouthState === 'open' ? (
            <>
              <ellipse cx="100" cy="92" rx="10" ry="7" fill="#FF8B94" />
              <ellipse cx="100" cy="90" rx="6" ry="3" fill="#FFB5B5" opacity="0.5" />
            </>
          ) : mouthState === 'frown' ? (
            <path 
              d="M 90 94 Q 100 88 110 94" 
              stroke="#333" 
              strokeWidth="2.5" 
              fill="none"
              strokeLinecap="round"
            />
          ) : (
            <path 
              d="M 90 88 Q 100 98 110 88" 
              stroke="#333" 
              strokeWidth="2.5" 
              fill="none"
              strokeLinecap="round"
            />
          )}
          
          {/* Left Arm/Paw */}
          <motion.g
            animate={shouldReduceMotion ? {} : pose === 'waving' ? {
              rotate: [-20, 20, -20],
            } : {}}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '60px 135px' }}
          >
            <ellipse cx="52" cy="140" rx="14" ry="12" fill="#5DADE2" />
            {/* Paw pads */}
            <ellipse cx="48" cy="143" rx="4" ry="3" fill="#4A9BD9" opacity="0.5" />
          </motion.g>
          
          {/* Right Arm/Paw */}
          <ellipse cx="148" cy="140" rx="14" ry="12" fill="#5DADE2" />
          <ellipse cx="152" cy="143" rx="4" ry="3" fill="#4A9BD9" opacity="0.5" />
          
          {/* Left Foot */}
          <ellipse cx="78" cy="178" rx="16" ry="10" fill="#5DADE2" />
          <ellipse cx="74" cy="180" rx="4" ry="3" fill="#4A9BD9" opacity="0.5" />
          
          {/* Right Foot */}
          <ellipse cx="122" cy="178" rx="16" ry="10" fill="#5DADE2" />
          <ellipse cx="126" cy="180" rx="4" ry="3" fill="#4A9BD9" opacity="0.5" />
          
          {/* Tail */}
          <motion.path
            d="M 148 155 Q 170 145 180 155 Q 190 165 185 175 Q 175 180 165 170 Q 155 160 148 160"
            fill="#5DADE2"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M 148 155 Q 170 145 180 155 Q 190 165 185 175 Q 175 180 165 170 Q 155 160 148 160",
                "M 148 155 Q 175 140 185 150 Q 195 160 190 170 Q 180 178 170 168 Q 158 158 148 160",
                "M 148 155 Q 170 145 180 155 Q 190 165 185 175 Q 175 180 165 170 Q 155 160 148 160",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Tail tip */}
          <ellipse cx="183" cy="172" rx="6" ry="8" fill="#89CFF0" />
          
          {/* Sleeping Z's */}
          {pose === 'sleeping' && (
            <>
              <motion.text
                x="135"
                y="45"
                fontSize="18"
                fill="#5DADE2"
                fontFamily="sans-serif"
                fontWeight="bold"
                animate={shouldReduceMotion ? {} : {
                  y: [45, 35],
                  opacity: [1, 0],
                  x: [135, 145],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Z
              </motion.text>
              <motion.text
                x="145"
                y="30"
                fontSize="14"
                fill="#5DADE2"
                fontFamily="sans-serif"
                fontWeight="bold"
                animate={shouldReduceMotion ? {} : {
                  y: [30, 20],
                  opacity: [1, 0],
                  x: [145, 155],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                z
              </motion.text>
              <motion.text
                x="155"
                y="18"
                fontSize="10"
                fill="#5DADE2"
                fontFamily="sans-serif"
                fontWeight="bold"
                animate={shouldReduceMotion ? {} : {
                  y: [18, 8],
                  opacity: [1, 0],
                  x: [155, 165],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                z
              </motion.text>
            </>
          )}

          {/* Sparkles for celebrating/excited */}
          {(pose === 'celebrating' || pose === 'excited') && (
            <>
              <motion.text
                x="45"
                y="50"
                fontSize="16"
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                ✨
              </motion.text>
              <motion.text
                x="145"
                y="45"
                fontSize="14"
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
              >
                ✨
              </motion.text>
              <motion.text
                x="160"
                y="100"
                fontSize="12"
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
              >
                ✨
              </motion.text>
            </>
          )}

          {/* Question mark for confused */}
          {pose === 'confused' && (
            <motion.text
              x="130"
              y="40"
              fontSize="24"
              fill="#5DADE2"
              fontWeight="bold"
              animate={shouldReduceMotion ? {} : {
                rotate: [-10, 10, -10],
              }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ transformOrigin: '142px 30px' }}
            >
              ?
            </motion.text>
          )}

          {/* Gaming controller */}
          {pose === 'gaming' && (
            <g transform="translate(75, 135)">
              <rect x="0" y="0" width="50" height="25" rx="8" fill="#333" />
              <rect x="2" y="2" width="46" height="21" rx="6" fill="#444" />
              <circle cx="14" cy="12" r="5" fill="#FF8B94" />
              <circle cx="36" cy="12" r="5" fill="#98D8AA" />
              <rect x="20" y="8" width="10" height="3" rx="1" fill="#666" />
              <rect x="23" y="5" width="4" height="9" rx="1" fill="#666" />
            </g>
          )}

          {/* Crown for proud */}
          {pose === 'proud' && (
            <g>
              <path
                d="M 75 30 L 82 15 L 92 25 L 100 8 L 108 25 L 118 15 L 125 30 Z"
                fill="#FFD93D"
                stroke="#F4C430"
                strokeWidth="2"
              />
              <circle cx="100" cy="18" r="4" fill="#FF8B94" />
              <circle cx="85" cy="22" r="3" fill="#87CEEB" />
              <circle cx="115" cy="22" r="3" fill="#98D8AA" />
            </g>
          )}
        </svg>
      </motion.div>
      
      {/* Speech Bubble */}
      {showBubble && bubbleText && (
        <motion.div 
          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2 shadow-cloud whitespace-nowrap z-10"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <p className="text-sm font-handwritten text-sky-azure">
            {bubbleText}
          </p>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
        </motion.div>
      )}
    </div>
  )
})

export default VeldoraMascot