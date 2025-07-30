import { useState, useEffect } from "react"

export function useImageLoading(src: string) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = new Image()
    
    img.onload = () => {
      setIsLoading(false)
      setHasError(false)
    }
    
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
    
    img.src = src
    
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { isLoading, hasError }
}