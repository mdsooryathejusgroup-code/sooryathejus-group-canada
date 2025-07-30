export default function RealEstateLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-16 bg-gray-200 rounded animate-pulse w-full max-w-2xl mx-auto mb-6" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-3xl mx-auto mb-4" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs sm:w-40" />
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs sm:w-32" />
          </div>
        </div>
        
        {/* Featured Properties Section */}
        <div className="mb-16">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-md mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`property-${i}`} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                {/* Property Image */}
                <div className="h-48 bg-gray-200 animate-pulse" />
                
                {/* Property Content */}
                <div className="p-6 space-y-4">
                  {/* Price */}
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-xs" />
                  
                  {/* Title */}
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-full max-w-sm" />
                  
                  {/* Location */}
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-xs" />
                  </div>
                  
                  {/* Property Details */}
                  <div className="flex justify-between text-sm">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={`property-detail-${i}-${j}`} className="flex items-center space-x-1">
                        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-8" />
                      </div>
                    ))}
                  </div>
                  
                  {/* View Details Button */}
                  <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-lg mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-2xl mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`service-${i}`} className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse mx-auto mb-4" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-full max-w-xs mx-auto mb-3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-sm" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={`about-desc-${i}`} className="h-4 bg-gray-200 rounded animate-pulse w-full" />
              ))}
            </div>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={`about-feature-${i}`} className="flex items-center space-x-3">
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-xs" />
                </div>
              ))}
            </div>
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs" />
          </div>
          <div className="h-96 bg-gray-200 rounded-xl animate-pulse" />
        </div>
        
        {/* Statistics Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`stat-${i}`} className="space-y-2">
                <div className="h-8 bg-gray-200 rounded animate-pulse w-full max-w-xs mx-auto" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full max-w-sm mx-auto" />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-full max-w-lg mx-auto mb-4" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-full max-w-2xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs sm:w-40" />
            <div className="h-12 bg-gray-200 rounded animate-pulse w-full max-w-xs sm:w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}