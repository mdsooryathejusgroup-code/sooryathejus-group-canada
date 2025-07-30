import { useEffect } from "react"
import { useLoading } from "@/components/context/loading-context"

export function usePageLoading(isLoading: boolean, text?: string) {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    if (isLoading) {
      startLoading(text || 'Loading page...', 'page')
    } else {
      stopLoading()
    }
  }, [isLoading, text, startLoading, stopLoading])
}

export function useSectionLoading(isLoading: boolean, text?: string) {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    if (isLoading) {
      startLoading(text || 'Loading content...', 'section')
    } else {
      stopLoading()
    }
  }, [isLoading, text, startLoading, stopLoading])
}