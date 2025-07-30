export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Professional Header Skeleton */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-15 h-14 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-48"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Premium Hero Section Skeleton */}
        <div className="pt-16 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3 rounded-full animate-pulse">
              <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
              <div className="h-4 bg-purple-300 rounded w-40"></div>
            </div>
            
            {/* Main Title */}
            <div className="space-y-4">
              <div className="h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse w-full max-w-3xl mx-auto"></div>
              <div className="h-16 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 rounded-lg animate-pulse w-full max-w-2xl mx-auto"></div>
            </div>
            
            {/* Subtitle */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-2xl mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-xl mx-auto"></div>
            </div>
            
            {/* CTA Button */}
            <div className="h-12 bg-gradient-to-r from-emerald-300 to-blue-300 rounded-lg animate-pulse w-48 mx-auto shadow-lg"></div>
          </div>
        </div>
        
        {/* Premium Services Grid Skeleton */}
        <div className="py-24 px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-80 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-96 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`premium-service-${i}`}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Premium Image Placeholder */}
                <div className="relative w-full h-60 rounded-lg mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-blue-200 to-purple-200 animate-pulse"></div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/40 rounded-full animate-bounce"></div>
                </div>
                
                {/* Premium Title */}
                <div className="h-7 bg-gradient-to-r from-gray-300 to-gray-400 rounded animate-pulse w-3/4 mb-4"></div>
                
                {/* Premium Description */}
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                </div>
                
                {/* Premium Features */}
                <div className="space-y-3 mb-6">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={`feature-${i}-${j}`} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-emerald-300 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
                    </div>
                  ))}
                </div>
                
                {/* Premium Highlight Badge */}
                <div className="h-8 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-lg animate-pulse w-full max-w-xs"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Industry Expertise Skeleton */}
        <div className="py-24 px-6 bg-white/50 rounded-3xl mb-16">
          <div className="text-center mb-16 space-y-4">
            <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-72 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-96 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`industry-${i}`} className="bg-white/80 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
                <div className="h-6 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-3/4 mx-auto mb-3"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mx-auto"></div>
                </div>
                <div className="h-5 bg-emerald-200 rounded animate-pulse w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Process Steps Skeleton */}
        <div className="py-16 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl mb-16">
          <div className="text-center mb-16 space-y-4">
            <div className="h-10 bg-white/30 rounded animate-pulse w-80 mx-auto"></div>
            <div className="h-6 bg-white/20 rounded animate-pulse w-96 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={`process-${i}`} className="text-center">
                  <div className="w-16 h-16 bg-white/30 rounded-full animate-pulse mx-auto mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/50 rounded-full animate-bounce"></div>
                  </div>
                  <div className="h-6 bg-white/30 rounded animate-pulse w-20 mx-auto mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded animate-pulse w-full"></div>
                    <div className="h-4 bg-white/20 rounded animate-pulse w-3/4 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Benefits Skeleton */}
        <div className="py-24 px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-96 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-80 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`benefit-${i}`} className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100">
                <div className="h-7 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-32 mx-auto mb-4"></div>
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6 mx-auto"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5 mx-auto"></div>
                </div>
                <div className="h-8 bg-emerald-200 rounded-lg animate-pulse w-40 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section Skeleton */}
        <div className="py-24 px-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl text-center">
          <div className="space-y-6">
            <div className="h-10 bg-white/20 rounded animate-pulse w-96 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-6 bg-white/15 rounded animate-pulse w-[500px] mx-auto"></div>
              <div className="h-6 bg-white/15 rounded animate-pulse w-80 mx-auto"></div>
            </div>
            <div className="h-12 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-lg animate-pulse w-60 mx-auto shadow-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}