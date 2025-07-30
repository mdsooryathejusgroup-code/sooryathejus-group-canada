"use client"

import { useNavigationLoader } from '@/hooks/use-navigation-loader'
import { ReactNode } from 'react'

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  // This hook will automatically trigger loading on route changes
  useNavigationLoader()
  
  return <>{children}</>
}
