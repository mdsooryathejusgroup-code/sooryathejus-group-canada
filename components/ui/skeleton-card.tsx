import { cn } from "@/lib/utils"

interface SkeletonCardProps {
  className?: string
  showImage?: boolean
  showTitle?: boolean
  showDescription?: boolean
  lines?: number
}

export function SkeletonCard({ 
  className, 
  showImage = true, 
  showTitle = true, 
  showDescription = true,
  lines = 3 
}: SkeletonCardProps) {
  return (
    <div className={cn("p-6 border rounded-xl space-y-4", className)}>
      {showImage && (
        <div className="h-60 bg-gray-200 rounded-lg animate-pulse" />
      )}
      {showTitle && (
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
      )}
      {showDescription && (
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-4 bg-gray-200 rounded animate-pulse",
                i === lines - 1 ? "w-2/3" : "w-full"
              )} 
            />
          ))}
        </div>
      )}
    </div>
  )
}