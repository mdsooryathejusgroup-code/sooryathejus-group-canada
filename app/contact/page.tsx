import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import FooterSection from "@/components/footer"


export default function ContactPage() {
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
              <Link href="/services" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                Services
              </Link>
              <Link href="/contact" className="text-emerald-600 font-medium text-sm">
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Get In
              <span className="block text-emerald-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Contact our team of experts and let's discuss how we can
              help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
                <p className="text-gray-600 mb-8">
                  Ready to transform your business? Get in touch with our experts today.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details: "123 Business Street, Toronto, ON M5V 3A8",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: "+1 (416) 123-4567",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: "info@sooryathejusgroup.ca",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                <h3 className="font-semibold text-emerald-900 mb-3">Quick Response Guarantee</h3>
                <div className="space-y-2">
                  {["Response within 2 hours", "Free consultation call", "No obligation quote"].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3" id="message">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        placeholder="John"
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        placeholder="Doe"
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+1 (416) 123-4567"
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-400">
                        <option>Select a service</option>
                        <option>Digital Marketing</option>
                        <option>Real Estate</option>
                        <option>Business Consulting</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us about your project and how we can help you achieve your goals..."
                      rows={4}
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 group-hover:border-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-medium transform hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                    <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer:
                  "We typically begin new projects within 1-2 weeks of contract signing, depending on project scope and current workload.",
              },
              {
                question: "Do you work with businesses outside of Toronto?",
                answer:
                  "Yes, we serve clients across Canada and can work remotely or travel to your location as needed.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We work with various industries including technology, healthcare, real estate, retail, and professional services.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "We provide ongoing support and maintenance services to ensure your continued success.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don't wait to transform your business. Contact us today for a free consultation and discover how we can help
            you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact#message">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium"
            >
              Schedule Free Consultation
            </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-md font-medium bg-transparent"
            >
              Call Now
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Quick response</span>
            </div>
          </div>
        </div>
      </section>
            <FooterSection />

    </div>
  )
}
