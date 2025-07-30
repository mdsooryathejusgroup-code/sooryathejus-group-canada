"use client"

import { usePathname } from 'next/navigation'
import { useLoading } from '@/components/context/loading-context'
import { useEffect } from 'react'

export function NavigationLoader() {
  const pathname = usePathname()
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    // Start loading on route change
    const handleRouteChange = () => {
      startLoading("Loading page...", "page")
      
      // Stop loading after a short delay
      const timer = setTimeout(() => {
        stopLoading()
      }, 1500)
      
      return () => clearTimeout(timer)
    }

    handleRouteChange()
  }, [pathname, startLoading, stopLoading])

  return null
}
