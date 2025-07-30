export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Premium Navigation Skeleton */}
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
        {/* Premium Hero Section */}
        <div className="text-center mb-16 py-12">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-3 rounded-full animate-pulse">
              <div className="w-4 h-4 bg-emerald-300 rounded-full"></div>
              <div className="h-4 bg-emerald-300 rounded w-32"></div>
            </div>
            <div className="h-14 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse w-96 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-[500px] mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-80 mx-auto"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Premium Contact Form Skeleton */}
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="space-y-8">
              {/* Form Title */}
              <div className="space-y-4">
                <div className="h-8 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-48"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-72"></div>
              </div>
              
              {/* Premium Form Fields */}
              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                    <div className="h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl animate-pulse border-2 border-gray-100"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
                    <div className="h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl animate-pulse border-2 border-gray-100"></div>
                  </div>
                </div>
                
                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                    <div className="h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl animate-pulse border-2 border-gray-100"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                    <div className="h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl animate-pulse border-2 border-gray-100"></div>
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                  <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl animate-pulse border-2 border-gray-100"></div>
                </div>
                
                {/* Premium Submit Button */}
                <div className="pt-4">
                  <div className="h-14 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl animate-pulse shadow-lg w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium Contact Info Skeleton */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-56"></div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-80"></div>
            </div>
            
            {/* Premium Contact Methods */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`contact-method-${i}`} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="h-16 w-16 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-white/50 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse w-32"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Premium Map Skeleton */}
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
              <div className="space-y-4">
                <div className="h-6 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-40"></div>
                <div className="relative h-80 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse overflow-hidden">
                  {/* Map pins animation */}
                  <div className="absolute top-8 left-8 w-6 h-6 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-16 right-12 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-12 left-16 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-700"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Office Hours Skeleton */}
        <div className="mt-20 bg-white/70 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-white/50">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-64 mx-auto"></div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-80 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={`office-hours-${i}`} className="bg-white/80 p-6 rounded-2xl shadow-md border border-white/30">
                  <div className="space-y-4 text-center">
                    <div className="h-6 bg-gradient-to-r from-emerald-200 to-blue-200 rounded animate-pulse w-24 mx-auto"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-32 mx-auto"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-28 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-blue-500 p-12 rounded-3xl shadow-2xl text-center">
          <div className="space-y-6">
            <div className="h-10 bg-white/30 rounded animate-pulse w-80 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-6 bg-white/20 rounded animate-pulse w-96 mx-auto"></div>
              <div className="h-6 bg-white/20 rounded animate-pulse w-72 mx-auto"></div>
            </div>
            <div className="h-14 bg-white/30 rounded-xl animate-pulse w-56 mx-auto shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}