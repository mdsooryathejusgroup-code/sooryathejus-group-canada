import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Briefcase,
  Users,
  FileText,
  Calculator,
  Globe,
  Lightbulb,
  CheckCircle,
  Target,
} from "lucide-react"
import FooterSection from "@/components/footer"

export default function ServicesPage() {
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
              <Link
                href="/digital-marketing"
                className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
              >
                Digital Marketing
              </Link>
              <Link href="/real-estate" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Real Estate
              </Link>
              <Link href="/services" className="text-emerald-600 font-medium text-sm">
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
            <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Target className="w-4 h-4" />
              <span>Serving 200+ Canadian Businesses</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Business Services
              <span className="block text-emerald-600">For Growth & Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to help Canadian companies thrive in today's competitive
              marketplace.
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600">Strategic solutions for every aspect of your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Business Consulting",
                description: "Strategic guidance to help your business grow and overcome challenges.",
                features: ["Strategic Planning", "Market Analysis", "Process Optimization", "Growth Strategies"],
                highlight: "95% client success rate",
              },
              {
                icon: Users,
                title: "HR Solutions",
                description: "Complete human resources services to manage and develop your workforce.",
                features: ["Recruitment", "Training Programs", "Performance Management", "HR Compliance"],
                highlight: "50% faster hiring",
              },
              {
                icon: Calculator,
                title: "Financial Services",
                description: "Professional financial management and accounting services for businesses.",
                features: ["Bookkeeping", "Tax Planning", "Financial Analysis", "Budget Management"],
                highlight: "30% cost savings avg",
              },
              {
                icon: FileText,
                title: "Legal Support",
                description: "Business legal services to protect your interests and ensure compliance.",
                features: ["Contract Review", "Business Formation", "Compliance", "Legal Documentation"],
                highlight: "100% compliance rate",
              },
              {
                icon: Globe,
                title: "International Trade",
                description: "Expand your business globally with our international trade expertise.",
                features: ["Export/Import", "Trade Documentation", "Market Entry", "Regulatory Compliance"],
                highlight: "25 countries served",
              },
              {
                icon: Lightbulb,
                title: "Innovation Consulting",
                description: "Drive innovation and digital transformation in your organization.",
                features: ["Technology Strategy", "Digital Transformation", "Innovation Workshops", "R&D Support"],
                highlight: "40% efficiency gains",
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

      {/* Industry Expertise */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-lg text-gray-600">Specialized knowledge across key Canadian industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technology", description: "Software, hardware, and tech startups", clients: "50+" },
              { title: "Healthcare", description: "Medical practices and healthcare organizations", clients: "30+" },
              { title: "Manufacturing", description: "Industrial and manufacturing companies", clients: "40+" },
              { title: "Retail", description: "E-commerce and brick-and-mortar stores", clients: "60+" },
              { title: "Professional Services", description: "Law firms, accounting, and consulting", clients: "35+" },
              { title: "Non-Profit", description: "Charitable organizations and foundations", clients: "25+" },
              { title: "Construction", description: "Contractors and construction companies", clients: "45+" },
              { title: "Hospitality", description: "Hotels, restaurants, and tourism", clients: "20+" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                <div className="text-emerald-600 font-medium text-sm">{industry.clients} clients served</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 px-6 bg-emerald-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-emerald-100 text-lg">A proven methodology for business success</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We understand your business needs and challenges" },
                {
                  step: "02",
                  title: "Analysis",
                  description: "Thorough analysis of your current situation and opportunities",
                },
                { step: "03", title: "Strategy", description: "Develop customized solutions and implementation plan" },
                {
                  step: "04",
                  title: "Implementation",
                  description: "Execute the plan with dedicated project management",
                },
                { step: "05", title: "Support", description: "Ongoing support and optimization for continued success" },
              ].map((item, index) => (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-emerald-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600">The advantages of partnering with Sooryathejus Group</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Experienced professionals with deep industry knowledge and proven track records.",
                metric: "15+ years avg experience",
              },
              {
                title: "Customized Solutions",
                description: "Tailored services that address your specific business needs and objectives.",
                metric: "100% custom approach",
              },
              {
                title: "Proven Results",
                description: "Track record of helping businesses achieve their goals and drive growth.",
                metric: "95% client satisfaction",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md inline-block">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how our comprehensive business services can help you achieve your goals and drive sustainable
            growth.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

            <FooterSection />
      
    </div>
  )
}
