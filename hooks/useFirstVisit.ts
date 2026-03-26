'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseFirstVisitOptions {
  key?: string
  expirationTime?: number
}

export function useFirstVisit(options: UseFirstVisitOptions = {}) {
  const { 
    key = 'veldora_session_visited', 
    expirationTime 
  } = options
  
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedData = localStorage.getItem(key)
    
    if (storedData) {
      // Check expiration if expirationTime is set
      if (expirationTime) {
        const { timestamp } = JSON.parse(storedData)
        const isExpired = Date.now() - timestamp > expirationTime
        
        if (isExpired) {
          localStorage.removeItem(key)
          setIsFirstVisit(true)
        } else {
          setIsFirstVisit(false)
        }
      } else {
        setIsFirstVisit(false)
      }
    } else {
      setIsFirstVisit(true)
    }
    
    setIsLoading(false)
  }, [key, expirationTime])

  const markAsVisited = useCallback(() => {
    const data = JSON.stringify({ timestamp: Date.now() })
    localStorage.setItem(key, data)
    setIsFirstVisit(false)
  }, [key])

  return {
    isFirstVisit,
    isLoading,
    markAsVisited,
  }
}