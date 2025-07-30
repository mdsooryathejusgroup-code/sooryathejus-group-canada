"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import FooterSection from "@/components/footer"
import HeaderSection from "@/components/header"

// Schema for validation
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message should be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    alert("Message sent successfully!")
    reset()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
       <HeaderSection />

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In <span className="block text-emerald-600">Touch</span></h1>
          <p className="text-xl text-gray-600 mb-10">Ready to take your business to the next level? Contact our team of experts and let's discuss how we can help you achieve your goals.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12 max-w-6xl">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
              <p className="text-gray-600">Ready to transform your business? Get in touch with our experts today.</p>
            </div>
            <div className="space-y-4">
              {[{
                icon: MapPin,
                title: "Visit Us",
                details: "90 Burnhamthorpe Rd W 14th Floor Suite 1412, Mississauga, ON L5B 0H9, Canada",
                link: "https://maps.app.goo.gl/aoNzEo2dELw31EVZ9?g_st=iwb",
              }, {
                icon: Phone,
                title: "Call Us",
                details: "+1 289-374-6421"
              }, {
                icon: Mail,
                title: "Email Us",
                details: "info@sooryathejusgroup.ca"
              }, {
                icon: Clock,
                title: "Business Hours",
                details: "Mon-Fri: 11AM-5PM"
              }].map((item, idx) => item.link ? (
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                </a>
              ) : (
                <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
              <h3 className="font-semibold text-emerald-900 mb-3">Quick Response Guarantee</h3>
              {["Response within 2 hours", "Free consultation call", "No obligation quote"].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* ... form fields ... */}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="px-6 pb-16 pt-8">
 <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-emerald-700 text-center">Our Office Location</h3>
          <p className="text-center text-gray-600 mb-6">
            Visit us at our head office. Find us on the map below:
          </p>
          <div className="w-full h-72 rounded-xl overflow-hidden border shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.7460819287976!2d-79.63675599999999!3d43.591005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b477811261c51%3A0x3eccd8a53240a779!2sSooryathejus%20Group!5e0!3m2!1sen!2sin!4v1752855350296!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
