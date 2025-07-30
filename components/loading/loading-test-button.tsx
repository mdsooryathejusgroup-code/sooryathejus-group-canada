"use client"

import { useLoading } from "@/components/context/loading-context"

export function LoadingTestButton() {
  const { startLoading, stopLoading } = useLoading()

  const handleTestLoading = () => {
    startLoading("Testing premium loader...", "page")
    
    setTimeout(() => {
      stopLoading()
    }, 3000)
  }

  return (
    <button
      onClick={handleTestLoading}
      className="fixed bottom-4 right-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg z-50 font-medium"
    >
      Test Loader
    </button>
  )
}
