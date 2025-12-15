"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import FooterSection from "@/components/footer"
import { ArrowRight, Building2, TrendingUp, Phone, Users, CheckCircle, Star, Globe } from "lucide-react"
import { Footer } from "react-day-picker"
import HeaderSection from "@/components/header"
import WhatsAppFloatingButton from "@/components/whatsapp-floating"
import HeroSection from "@/components/heroSection"
import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"




export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <HeaderSection />
        <section className="px-6 py-16 bg-white text-gray-800 mt-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

                <p className="mb-4">
                At Soorya Thejus Group, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our digital marketing, real estate, or business services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
                <p className="mb-4">
                We may collect personal details such as your name, email address, phone number, location, and any other information you voluntarily provide when you contact us or fill out forms on our site.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
                <p className="mb-4">
                Your data is used to respond to inquiries, deliver services, personalize user experience, improve our website, and send occasional updates or marketing material (with your consent).
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">3. Sharing of Information</h2>
                <p className="mb-4">
                We do not sell or rent your personal data. Information may be shared with trusted third parties who assist in delivering services, provided they also uphold confidentiality.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cookies & Tracking</h2>
                <p className="mb-4">
                Our site may use cookies to enhance user experience and track website traffic. You may choose to disable cookies through your browser settings.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
                <p className="mb-4">
                We implement appropriate measures to secure your personal data. However, no digital platform is completely secure. Use our services at your discretion.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
                <p className="mb-4">
                You may request to access, correct, or delete your personal data at any time by contacting us. You can also opt-out of receiving marketing communications.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">7. External Links</h2>
                <p className="mb-4">
                Our site may contain links to external websites. We are not responsible for their content or privacy practices. We encourage you to read their policies.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">8. Policy Updates</h2>
                <p className="mb-4">
                This Privacy Policy may be updated periodically. Any changes will be posted on this page with a revised effective date. Please review regularly.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">9. Contact Us</h2>
                <p className="mb-2">Soorya Thejus Group</p>
                <p className="mb-2">Toronto, Ontario, Canada</p>
                <p className="mb-2">Email: <a href="mailto:mdsooryathejusgroup@gmail.com" className="text-blue-600 underline">mdsooryathejusgroup@gmail.com</a></p>
                <p className="mb-4">Phone: <a href="tel:+14161234567" className="text-blue-600 underline">+1 (289) 374-4396</a></p>
            </div>
        </section>

      <WhatsAppFloatingButton message="Hello! I need assistance with real estate and marketting services." />  

    <FooterSection />
     
    </div>
  )
}
