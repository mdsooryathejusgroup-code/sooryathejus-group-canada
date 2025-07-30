export default function DigitalMarketingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-16 bg-gray-200 rounded animate-pulse w-full max-w-2xl mx-auto mb-6" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-xl mx-auto mb-4" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-sm mx-auto mb-8" />
          <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs mx-auto" />
        </div>
        
        {/* Services Overview Section */}
        <div className="mb-16">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-sm mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`service-${i}`} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="h-16 w-16 bg-gray-200 rounded-lg animate-pulse mb-4" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4 mb-3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Sections */}
        <div className="space-y-16">
          {/* Section 1 - SEO & Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-sm" />
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`seo-desc-${i}`} className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                ))}
              </div>
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`seo-feature-${i}`} className="flex items-center space-x-3">
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-xs" />
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80 bg-gray-200 rounded-xl animate-pulse" />
          </div>

          {/* Section 2 - Social Media */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-80 bg-gray-200 rounded-xl animate-pulse" />
            <div className="space-y-6">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-md" />
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`social-desc-${i}`} className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`social-platform-${i}`} className="text-center p-4 bg-white rounded-lg border">
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-16 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3 - Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-sm" />
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`analytics-desc-${i}`} className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`analytics-stat-${i}`} className="text-center p-4 bg-white rounded-lg border">
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-full mb-2" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-12 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80 bg-gray-200 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white p-8 rounded-2xl shadow-sm border">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-md mx-auto mb-4" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs sm:w-40" />
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs sm:w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}