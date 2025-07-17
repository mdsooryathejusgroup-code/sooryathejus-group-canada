import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, TrendingUp, Phone, Users, CheckCircle, Star, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <img src="/logo.jpg" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
              <span className="text-xl font-semibold text-gray-900">Sooryathejus Group</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-emerald-600 font-medium text-sm">
                Home
              </Link>
              <Link
                href="/digital-marketing"
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
              >
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
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-6 py-2 rounded-md">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>Trusted by 500+ Canadian Businesses</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Elevate Your Business
              <span className="block text-emerald-600">With Expert Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with Canada's leading business solutions provider. We deliver strategic digital marketing, premium
              real estate services, and comprehensive business consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact#message">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              </Link>
              <Link href="/#ourwork">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md font-medium bg-transparent"
              >
                View Our Work
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Why Choose Sooryathejus Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and Canadian values to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" id="ourwork" >
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Digital Excellence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cutting-edge digital marketing strategies that drive measurable growth and ROI for your business.
              </p>
              <div className="space-y-3">
                {["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Building2 className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                Real Estate Expertise
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive real estate solutions backed by deep market knowledge and professional service.
              </p>
              <div className="space-y-3">
                {["Residential Sales", "Commercial Properties", "Investment Consulting", "Property Management"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Client-Focused Approach
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Personalized service and dedicated support to ensure your success is our top priority.
              </p>
              <div className="space-y-3">
                {["Dedicated Account Manager", "24/7 Support", "Custom Solutions", "Regular Reporting"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-emerald-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-emerald-100 text-lg">Our track record speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Clients", sublabel: "Across Canada" },
              { number: "98%", label: "Client Retention", sublabel: "Year over year" },
              { number: "$50M+", label: "Revenue Generated", sublabel: "For our clients" },
              { number: "15+", label: "Years Experience", sublabel: "In the market" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100 font-medium mb-1">{stat.label}</div>
                <div className="text-emerald-200 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                description: "Drive growth with data-driven marketing strategies",
                features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
                link: "/digital-marketing",
                icon: Globe,
                color: "blue",
              },
              {
                title: "Real Estate",
                description: "Navigate the Canadian property market with confidence",
                features: ["Residential Sales", "Commercial", "Investment", "Management"],
                link: "/real-estate",
                icon: Building2,
                color: "emerald",
              },
              {
                title: "Business Services",
                description: "Strategic consulting for sustainable growth",
                features: ["Consulting", "HR Solutions", "Financial", "Legal Support"],
                link: "/services",
                icon: TrendingUp,
                color: "purple",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by businesses across Canada</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                title: "CEO, TechStart Solutions",
                company: "Toronto, ON",
                testimonial:
                  "Sooryathejus Group transformed our digital presence completely. Our online sales increased by 300% within 6 months of working with them.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Michael Rodriguez",
                title: "Founder, GreenBuild Construction",
                company: "Vancouver, BC",
                testimonial:
                  "Their real estate expertise helped us find the perfect commercial property for our expansion. Professional service from start to finish.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Emily Thompson",
                title: "Director, HealthCare Plus",
                company: "Calgary, AB",
                testimonial:
                  "The business consulting services provided by Sooryathejus Group were instrumental in streamlining our operations and reducing costs by 25%.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-200 group"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-emerald-50 rounded-full px-8 py-4 border border-emerald-100">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-emerald-600" />
                    </div>
                  ))}
                </div>
                <span className="text-emerald-700 font-medium text-sm">500+ Happy Clients</span>
              </div>
              <div className="w-px h-6 bg-emerald-200"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-emerald-700 font-medium text-sm">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join hundreds of successful Canadian businesses who trust Sooryathejus Group for their growth needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#message">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium"
              >
                <Phone className="mr-2 w-4 h-4" />
                Schedule Free Consultation
              </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-md font-medium bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.jpg" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
                <span className="font-semibold text-gray-900">Sooryathejus Group</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Canada's trusted partner for digital marketing, real estate, and business solutions.
              </p>
              <div className="text-sm text-gray-500">
                <p>Toronto, Ontario, Canada</p>
                <p>info@sooryathejusgroup.ca</p>
                <p>+1 (416) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/digital-marketing" className="hover:text-emerald-600 transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-emerald-600 transition-colors">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-emerald-600 transition-colors">
                    Business Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-emerald-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Sooryathejus Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
