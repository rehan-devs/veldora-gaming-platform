// lib/animations.ts
import { Variants } from 'framer-motion'

// Float animation variants
export const floatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Bounce in variants
export const bounceInVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.3,
    y: 50,
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
}

// Fade up variants
export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 },
  },
}

// Stagger children container
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Stagger item variants
export const staggerItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
}

// Scale pop variants
export const scalePopVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
  exit: { 
    scale: 0, 
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

// Wobble variants
export const wobbleVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [-3, 3, -3, 3, 0],
    transition: {
      duration: 0.5,
    },
  },
}

// Slide in from left
export const slideInLeftVariants: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

// Slide in from right
export const slideInRightVariants: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

// Cloud puff effect
export const cloudPuffVariants: Variants = {
  initial: { scale: 1 },
  puff: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    transition: {
      duration: 0.4,
    },
  },
}

// Sparkle effect
export const sparkleVariants: Variants = {
  initial: { scale: 0, rotate: 0, opacity: 0 },
  animate: {
    scale: [0, 1.5, 1],
    rotate: [0, 180, 360],
    opacity: [0, 1, 0.8],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Breathing effect (subtle scale)
export const breatheVariants: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Wiggle effect
export const wiggleVariants: Variants = {
  animate: {
    rotate: [-2, 2, -2],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Rainbow text animation
export const rainbowTextVariants: Variants = {
  animate: {
    backgroundPosition: ['0% center', '200% center'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Typewriter effect helper
export const typewriterVariants: Variants = {
  initial: { width: 0 },
  animate: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'steps(40)',
    },
  },
}

// Path drawing animation
export const drawPathVariants: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: 'easeInOut' },
      opacity: { duration: 0.5 },
    },
  },
}

// Confetti burst variants
export const confettiBurstVariants = (index: number): Variants => ({
  initial: { 
    opacity: 1, 
    scale: 0,
    x: 0,
    y: 0,
  },
  animate: {
    opacity: [1, 1, 0],
    scale: [0, 1.5, 1],
    x: Math.cos((index * Math.PI) / 4) * 100,
    y: [0, Math.sin((index * Math.PI) / 4) * -100, 50],
    rotate: [0, 360, 720],
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
})

// Hover lift effect
export const hoverLiftVariants: Variants = {
  initial: { y: 0, boxShadow: '0 10px 40px rgba(135, 206, 235, 0.2)' },
  hover: { 
    y: -10, 
    boxShadow: '0 25px 50px rgba(135, 206, 235, 0.3)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

// Squish effect on click
export const squishVariants: Variants = {
  initial: { scaleX: 1, scaleY: 1 },
  pressed: { 
    scaleX: 1.1, 
    scaleY: 0.9,
    transition: { duration: 0.1 },
  },
  released: {
    scaleX: 1,
    scaleY: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
}

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  enter: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

// Parallax helper function
export const createParallaxVariants = (speed: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y: speed * 100,
    transition: {
      duration: 0,
    },
  },
})

// Spring configurations
export const springConfigs = {
  gentle: { type: 'spring' as const, stiffness: 100, damping: 20 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 10 },
  stiff: { type: 'spring' as const, stiffness: 400, damping: 30 },
  slow: { type: 'spring' as const, stiffness: 50, damping: 15 },
} as const

// Easing functions
export const easings = {
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
  easeOutElastic: (x: number) => {
    const c4 = (2 * Math.PI) / 3
    return x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
  },
  easeOutBounce: (x: number) => {
    const n1 = 7.5625
    const d1 = 2.75
    if (x < 1 / d1) {
      return n1 * x * x
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375
    }
  },
} as const