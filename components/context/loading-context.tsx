"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface LoadingState {
  isLoading: boolean
  loadingText?: string
  progress?: number
  type?: 'page' | 'section' | 'form' | 'image'
}

interface LoadingContextType {
  loading: LoadingState
  setLoading: (state: Partial<LoadingState>) => void
  startLoading: (text?: string, type?: LoadingState['type']) => void
  stopLoading: () => void
  setProgress: (progress: number) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    loadingText: '',
    progress: 0,
    type: 'page'
  })

  const setLoading = (state: Partial<LoadingState>) => {
    setLoadingState(prev => ({ ...prev, ...state }))
  }

  const startLoading = (text?: string, type: LoadingState['type'] = 'page') => {
    setLoading({ 
      isLoading: true, 
      loadingText: text || 'Loading...', 
      progress: 0,
      type 
    })
  }

  const stopLoading = () => {
    setLoading({ isLoading: false, progress: 100 })
  }

  const setProgress = (progress: number) => {
    setLoading({ progress })
  }

  return (
    <LoadingContext.Provider value={{
      loading,
      setLoading,
      startLoading,
      stopLoading,
      setProgress
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider')
  }
  return context
}