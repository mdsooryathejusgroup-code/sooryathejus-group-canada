"use client"

import { useImageLoading } from "@/hooks/use-image-loading"
import { cn } from "@/lib/utils"

interface ImageLoaderProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  fallback?: React.ReactNode
}

export function ImageLoader({ 
  src, 
  alt, 
  className, 
  containerClassName,
  fallback 
}: ImageLoaderProps) {
  const { isLoading, hasError } = useImageLoading(src)

  if (hasError && fallback) {
    return <div className={containerClassName}>{fallback}</div>
  }

  return (
    <div className={cn("relative", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
      />
    </div>
  )
}