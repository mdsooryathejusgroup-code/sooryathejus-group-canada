"use client"

import { useLoading } from '@/components/context/loading-context'

export function SimpleLoader() {
  const { loading } = useLoading()

  if (!loading.isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="relative w-12 h-12">
        {/* Classic rotating dashes loader like in the image */}
        <div className="absolute inset-0 animate-spin">
          {/* Generate 12 dashes in a circle */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-3 bg-emerald-600 rounded-full"
              style={{
                top: '0px',
                left: '50%',
                transformOrigin: '50% 24px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
                opacity: 1 - (i * 0.08), // Fade effect
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
