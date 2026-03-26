import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fun loading messages
export const loadingMessages = [
  "Teaching dragons to code...",
  "Fluffing the clouds...",
  "Convincing Veldora to wake up...",
  "Polishing the tokens...",
  "Feeding the pixel pets...",
  "Counting floating sheep...",
  "Brewing cloud coffee...",
  "Almost there, pinky promise!",
]

// Fun error messages
export const errorMessages = [
  "Oopsie! Veldora tripped.",
  "Something went poof!",
  "The clouds are confused.",
  "Veldora ate the page.",
  "This wasn't supposed to happen!",
]

// Fun success messages
export const successMessages = [
  "Woohoo! 🎉",
  "Veldora is proud of you!",
  "Cloud five! ✋☁️",
  "That was awesome!",
  "Shiny success!",
]

// Fun empty state messages
export const emptyMessages = [
  "Nothing here but clouds...",
  "Veldora's looking for it...",
  "Did someone say treats?",
  "It's quiet... too quiet.",
]

// Get random message from array
export function getRandomMessage(messages: string[]): string {
  return messages[Math.floor(Math.random() * messages.length)]
}

// Format large numbers with K, M, B suffixes
export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}