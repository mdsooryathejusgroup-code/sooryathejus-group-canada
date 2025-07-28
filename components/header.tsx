import Link from "next/link"

export default function HeaderSection() {
  return (
   <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
              <span className="text-xl font-semibold text-gray-900">Sooryathejus Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 text-sm">Home</Link>
              <Link href="/digital-marketing" className="text-gray-600 hover:text-emerald-600 text-sm">Digital Marketing</Link>
              <Link href="/real-estate" className="text-gray-600 hover:text-emerald-600 text-sm">Real Estate</Link>
              <Link href="/services" className="text-gray-600 hover:text-emerald-600 text-sm">Services</Link>
              <Link href="/contact" className="text-emerald-600 font-medium text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
  )
}