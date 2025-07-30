"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '@/components/context/loading-context'

export function useRouteLoading() {
  const pathname = usePathname()
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    // Get page name from pathname
    const pageName = pathname === '/' ? 'Home' : pathname.slice(1).replace(/-/g, ' ')
    const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)
    
    startLoading(`Loading ${capitalizedPageName}...`, 'page')
    
    // Simulate realistic loading time
    const timer = setTimeout(() => {
      stopLoading()
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [pathname, startLoading, stopLoading])
}
