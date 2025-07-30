"use client"

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '@/components/context/loading-context'

export function useNavigationLoader() {
  const pathname = usePathname()
  const { startLoading, stopLoading } = useLoading()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Start loading when pathname changes
    startLoading('Loading page...', 'page')
    
    // Stop loading after a short delay
    timeoutRef.current = setTimeout(() => {
      stopLoading()
    }, 800)
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname, startLoading, stopLoading])
}
