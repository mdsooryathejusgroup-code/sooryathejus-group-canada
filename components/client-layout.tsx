"use client"

import { useRouteLoading } from '@/hooks/use-route-loading'
import { ReactNode } from 'react'

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  // This hook will automatically trigger loading on route changes
  useRouteLoading()
  
  return <>{children}</>
}
