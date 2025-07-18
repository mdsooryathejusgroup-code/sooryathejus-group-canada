import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Search,
  Share2,
  BarChart3,
  Target,
  Zap,
  Globe,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import FooterSection from "@/components/footer"


export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
              <span className="text-xl font-semibold text-gray-900">Sooryathejus Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Home
              </Link>
              <Link href="/digital-marketing" className="text-emerald-600 font-medium text-sm">
                Digital Marketing
              </Link>
              <Link href="/real-estate" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
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
              <TrendingUp className="w-4 h-4" />
              <span>Proven ROI Growth for 300+ Clients</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Digital Marketing
              <span className="block text-emerald-600">That Delivers Results</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Drive growth, increase visibility, and maximize ROI with our comprehensive digital marketing solutions
              tailored for Canadian businesses.
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium"
            >
              Start Your Campaign
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions to grow your online presence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "SEO Optimization",
                description: "Boost your search rankings and organic traffic with our proven SEO strategies.",
                features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
                metric: "300% avg traffic increase",
              },
              {
                icon: Share2,
                title: "Social Media Marketing",
                description: "Build brand awareness and engage your audience across all social platforms.",
                features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
                metric: "150% engagement growth",
              },
              {
                icon: Target,
                title: "PPC Advertising",
                description: "Maximize your ad spend with targeted pay-per-click campaigns that convert.",
                features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "ROI Tracking"],
                metric: "4.2x average ROAS",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Data-driven insights to measure performance and optimize your marketing efforts.",
                features: ["Performance Tracking", "Custom Reports", "ROI Analysis", "Strategy Optimization"],
                metric: "Real-time insights",
              },
              {
                icon: Globe,
                title: "Content Marketing",
                description: "Engage your audience with compelling content that drives action and builds trust.",
                features: ["Blog Writing", "Video Content", "Email Marketing", "Content Strategy"],
                metric: "85% lead quality improvement",
              },
              {
                icon: Zap,
                title: "Conversion Optimization",
                description: "Turn more visitors into customers with optimized landing pages and funnels.",
                features: ["A/B Testing", "Landing Pages", "User Experience", "Conversion Tracking"],
                metric: "45% conversion rate boost",
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
                  {service.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-lg text-gray-600">A systematic approach to digital marketing success</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "We analyze your business, competitors, and market to create a customized strategy.",
                },
                {
                  step: "02",
                  title: "Implementation",
                  description: "Our expert team executes the strategy across all relevant digital channels.",
                },
                {
                  step: "03",
                  title: "Optimization",
                  description: "We continuously monitor and optimize campaigns for maximum performance.",
                },
                {
                  step: "04",
                  title: "Reporting & Growth",
                  description: "Regular reports and strategic adjustments ensure continued growth.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 bg-emerald-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-emerald-100 text-lg">Our clients see measurable growth</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "300%", label: "Average Traffic Growth" },
              { number: "4.2x", label: "Return on Ad Spend" },
              { number: "85%", label: "Lead Quality Improvement" },
              { number: "45%", label: "Conversion Rate Boost" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how our digital marketing expertise can help your business reach new heights.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium">
            Get Free Consultation
          </Button>
        </div>
      </section>
            <FooterSection />

    </div>
  )
}
