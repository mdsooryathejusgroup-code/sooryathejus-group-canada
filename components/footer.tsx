import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, TrendingUp, Phone, Users, CheckCircle, Star, Globe } from "lucide-react"

export default function FooterSection() {
  return (
    <div>

      {/* Footer */}
   <footer className="bg-white border-t border-gray-200 pt-12 pb-4 px-6">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start mb-4">
          <img
            src="/logo.png"
            alt="Sooryathejus Group Logo"
            className="w-15 h-14 object-contain"
          />
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Canada's trusted partner for digital marketing, real estate, and business solutions.
        </p>
        <div className="text-sm text-gray-500 leading-7">
          <p>90 Burnhamthorpe Rd W 14 th floor Suite :1412, Mississauga, ON L5B 3C3, Canada</p>
          <p>mdsooryathejusgroup@gmail.com</p>
          <p>info@sooryathejusgroup.com</p>
          <p>+1 (289) 374-4396</p>
          <p>+1 (437) 771-3330</p>
        </div>

      </div>

      {/* Right-Aligned Combined Section */}
      <div className="flex justify-center md:justify-end text-center pt-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/digital-marketing" className="hover:text-emerald-600 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-600 transition-colors">
                  Business Services
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="hover:text-emerald-600 transition-colors">
                  Real Estate
                </Link>
              </li>              
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-emerald-600 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
<div className="border-t border-gray-200 mt-4 pt-4 text-center text-sm text-gray-500">
  <p>© 2025 Sooryathejus Group. All rights reserved.</p>
</div>

  </div>
</footer>

    </div>
  )
}
