"use client"

import { createContext, useContext, useState, ReactNode, useCallback } from "react"

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

  const setLoading = useCallback((state: Partial<LoadingState>) => {
    setLoadingState(prev => ({ ...prev, ...state }))
  }, [])

  const startLoading = useCallback((text?: string, type: LoadingState['type'] = 'page') => {
    setLoading({ 
      isLoading: true, 
      loadingText: text || 'Loading...', 
      progress: 0,
      type 
    })
  }, [setLoading])

  const stopLoading = useCallback(() => {
    setLoading({ isLoading: false, progress: 100 })
  }, [setLoading])

  const setProgress = useCallback((progress: number) => {
    setLoading({ progress })
  }, [setLoading])

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