import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Building2,
  Home,
  MapPin,
  TrendingUp,
  Users,
  Shield,
  Award,
  CheckCircle,
  DollarSign,
} from "lucide-react"
import FooterSection from "@/components/footer"


export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
              <span className="text-xl font-semibold text-gray-900">Sooryathejus Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Home
              </Link>
              <Link
                href="/digital-marketing"
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
              >
                Digital Marketing
              </Link>
              <Link href="/real-estate" className="text-emerald-600 font-medium text-sm">
                Real Estate
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <DollarSign className="w-4 h-4" />
              <span>$2.5B+ in Property Transactions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Real Estate Solutions
              <span className="block text-emerald-600">For Every Need</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in Canadian real estate. From residential to commercial properties, we provide
              comprehensive solutions for all your real estate needs.
            </p>
            <Link href="/real-estate#properties">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:scale-105"
            >
              Explore Properties
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50 ">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Real Estate Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for all your property needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="properties">
            {[
              {
                icon: Home,
                title: "Residential Sales",
                description:
                  "Find your dream home or sell your property with our expert residential real estate services.",
                features: ["Home Buying", "Property Selling", "Market Analysis", "Negotiation Support"],
                highlight: "1000+ homes sold",
              },
              {
                icon: Building2,
                title: "Commercial Real Estate",
                description: "Comprehensive commercial property solutions for businesses and investors.",
                features: ["Office Spaces", "Retail Properties", "Industrial Sites", "Investment Properties"],
                highlight: "$500M+ in deals",
              },
              {
                icon: TrendingUp,
                title: "Investment Consulting",
                description: "Strategic real estate investment advice to maximize your portfolio returns.",
                features: ["Market Research", "ROI Analysis", "Portfolio Management", "Risk Assessment"],
                highlight: "15% avg ROI",
              },
              {
                icon: MapPin,
                title: "Property Management",
                description: "Full-service property management to protect and grow your real estate investments.",
                features: ["Tenant Management", "Maintenance Services", "Rent Collection", "Property Marketing"],
                highlight: "98% occupancy rate",
              },
              {
                icon: Users,
                title: "Relocation Services",
                description: "Smooth relocation assistance for individuals and corporate clients moving to Canada.",
                features: ["Area Orientation", "School Districts", "Neighborhood Tours", "Settlement Support"],
                highlight: "500+ families relocated",
              },
              {
                icon: Award,
                title: "Property Valuation",
                description: "Accurate property valuations for buying, selling, or investment decisions.",
                features: ["Market Appraisals", "Comparative Analysis", "Investment Evaluation", "Tax Assessment"],
                highlight: "Certified appraisers",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md">
                  {service.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Canadian Real Estate Market</h2>
            <p className="text-lg text-gray-600">Current market insights and trends</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Toronto",
                price: "$1.2M",
                change: "+5.2%",
                description: "Average home price in the Greater Toronto Area continues to show steady growth.",
                trend: "up",
              },
              {
                city: "Vancouver",
                price: "$1.4M",
                change: "+3.8%",
                description: "Vancouver remains one of Canada's most desirable real estate markets.",
                trend: "up",
              },
              {
                city: "Calgary",
                price: "$485K",
                change: "+7.1%",
                description: "Calgary shows strong recovery with increasing demand and competitive pricing.",
                trend: "up",
              },
            ].map((market, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{market.city} Market</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{market.price}</div>
                <div className="text-emerald-600 font-medium mb-4">{market.change} YoY</div>
                <p className="text-gray-600 text-sm">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6" style={{ backgroundColor: "rgb(30, 151, 113)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Real Estate Services?</h2>
            <p className="text-emerald-100 text-lg">Experience the difference of working with experts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Expertise",
                description: "Years of experience in the Canadian real estate market with a proven track record.",
              },
              {
                icon: Users,
                title: "Personalized Service",
                description: "Dedicated agents who understand your unique needs and provide tailored solutions.",
              },
              {
                icon: TrendingUp,
                title: "Market Knowledge",
                description: "Deep understanding of local markets, trends, and opportunities across Canada.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-emerald-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make Your Real Estate Move?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our real estate experts are here to guide you every step of
            the way.
          </p>
          <Link href="/contact#message">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:scale-105">
            Schedule Consultation
          </Button>
          </Link>
        </div>
      </section>
            <FooterSection />

    </div>
  )
}
