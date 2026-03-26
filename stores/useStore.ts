import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface VeldoraState {
  // UI State
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // Theme
  isDarkMode: boolean
  toggleDarkMode: () => void
  
  // Sound
  isSoundEnabled: boolean
  toggleSound: () => void
  soundVolume: number
  setSoundVolume: (volume: number) => void
  
  // Easter eggs
  discoveredEasterEggs: string[]
  discoverEasterEgg: (id: string) => void
  
  // User preferences
  hasSeenOnboarding: boolean
  setHasSeenOnboarding: (seen: boolean) => void
  
  // Veldora mood (changes based on interactions)
  veldoraMood: 'happy' | 'sleepy' | 'excited' | 'confused'
  setVeldoraMood: (mood: 'happy' | 'sleepy' | 'excited' | 'confused') => void
  
  // Interaction counters
  cloudClickCount: number
  incrementCloudClicks: () => void
  totalInteractions: number
  incrementInteractions: () => void
}

export const useStore = create<VeldoraState>()(
  persist(
    (set, get) => ({
      // UI State
      isLoading: true,
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      // Theme
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      
      // Sound
      isSoundEnabled: true,
      toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
      soundVolume: 0.5,
      setSoundVolume: (volume) => set({ soundVolume: volume }),
      
      // Easter eggs
      discoveredEasterEggs: [],
      discoverEasterEgg: (id) => 
        set((state) => ({
          discoveredEasterEggs: state.discoveredEasterEggs.includes(id)
            ? state.discoveredEasterEggs
            : [...state.discoveredEasterEggs, id],
        })),
      
      // User preferences
      hasSeenOnboarding: false,
      setHasSeenOnboarding: (seen) => set({ hasSeenOnboarding: seen }),
      
      // Veldora mood
      veldoraMood: 'happy',
      setVeldoraMood: (mood) => set({ veldoraMood: mood }),
      
      // Interaction counters
      cloudClickCount: 0,
      incrementCloudClicks: () => 
        set((state) => ({ 
          cloudClickCount: state.cloudClickCount + 1,
          totalInteractions: state.totalInteractions + 1,
        })),
      totalInteractions: 0,
      incrementInteractions: () => 
        set((state) => ({ totalInteractions: state.totalInteractions + 1 })),
    }),
    {
      name: 'veldora-storage',
      partialize: (state) => ({
        isSoundEnabled: state.isSoundEnabled,
        soundVolume: state.soundVolume,
        discoveredEasterEggs: state.discoveredEasterEggs,
        hasSeenOnboarding: state.hasSeenOnboarding,
        cloudClickCount: state.cloudClickCount,
        totalInteractions: state.totalInteractions,
      }),
    }
  )
)