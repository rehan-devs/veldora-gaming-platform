'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

interface UseSoundOptions {
  volume?: number
  loop?: boolean
}

export function useSound(src: string, options: UseSoundOptions = {}) {
  const soundRef = useRef<Howl | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      volume: options.volume ?? 0.5,
      loop: options.loop ?? false,
      onload: () => setIsLoaded(true),
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
    })

    return () => {
      soundRef.current?.unload()
    }
  }, [src, options.volume, options.loop])

  const play = useCallback(() => {
    soundRef.current?.play()
  }, [])

  const stop = useCallback(() => {
    soundRef.current?.stop()
  }, [])

  const pause = useCallback(() => {
    soundRef.current?.pause()
  }, [])

  const setVolume = useCallback((volume: number) => {
    soundRef.current?.volume(volume)
  }, [])

  return {
    play,
    stop,
    pause,
    setVolume,
    isPlaying,
    isLoaded,
  }
}