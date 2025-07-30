"use client"

import { useLoading } from "@/components/context/loading-context"
import { useEffect, useState } from "react"

export function PageLoader() {
  const { loading } = useLoading()
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState("")

  // Animated progress simulation
  useEffect(() => {
    if (loading.isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev
          return prev + Math.random() * 15
        })
      }, 200)
      return () => clearInterval(interval)
    } else {
      setProgress(100)
      setTimeout(() => setProgress(0), 500)
    }
  }, [loading.isLoading])

  // Animated dots for loading text
  useEffect(() => {
    if (loading.isLoading) {
      const interval = setInterval(() => {
        setDots(prev => {
          if (prev === "...") return ""
          return prev + "."
        })
      }, 500)
      return () => clearInterval(interval)
    }
  }, [loading.isLoading])

  if (!loading.isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
      </div>

      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-100/30 to-blue-100/30 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative flex items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-8 max-w-md mx-auto">
          
          {/* Company Logo & Branding */}
          <div className="space-y-4">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Sooryathejus Group" 
                className="w-full h-full object-contain rounded-xl shadow-lg animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-xl animate-pulse"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
              Sooryathejus Group
            </h2>
          </div>

          {/* Advanced Loading Animation */}
          <div className="relative">
            {/* Main Spinner */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
              {/* Animated Ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-emerald-500 border-r-emerald-400 rounded-full animate-spin"></div>
              {/* Inner Ring */}
              <div className="absolute inset-2 border-3 border-transparent border-t-blue-400 border-l-blue-300 rounded-full animate-spin"></div>
              {/* Center Dot */}
              <div className="absolute inset-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse shadow-lg"></div>
            </div>

            {/* Loading Bars Animation */}
            <div className="flex justify-center space-x-1 mb-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-emerald-400 to-emerald-600 rounded-full animate-bounce shadow-sm"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    height: `${20 + (i % 2) * 10}px`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Professional Loading Text */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 tracking-wide">
              {loading.loadingText || "Loading Experience"}{dots}
            </h3>
            <p className="text-sm text-gray-500 font-medium">
              Preparing your premium business solutions
            </p>
          </div>

          {/* Premium Progress Bar */}
          <div className="space-y-3">
            <div className="relative w-80 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto shadow-inner">
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-400 rounded-full transition-all duration-300 ease-out shadow-sm"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 px-2">
              <span>Initializing...</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Premium Loading Steps */}
          <div className="text-xs text-gray-400 space-y-1 mt-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Optimizing performance</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Loading premium features</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}