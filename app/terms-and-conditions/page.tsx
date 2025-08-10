"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import FooterSection from "@/components/footer"
import HeaderSection from "@/components/header"
import WhatsAppFloatingButton from "@/components/whatsapp-floating"




export default function TermsAndConditionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <HeaderSection />
      <section className="px-6 py-16 bg-gray-50 text-gray-800 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to Soorya Thejus Group. These Terms and Conditions ("Terms") govern your use of our website and services, including digital marketing, real estate consulting, and business solutions. By accessing our site or engaging with our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Service Overview</h2>
        <p className="mb-4">
          We provide digital marketing campaigns, real estate brokerage services, and tailored business solutions across Toronto and other regions of Canada. All services are subject to availability and scope discussed in initial consultations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Client Obligations</h2>
        <p className="mb-4">
          Clients must provide accurate information and agree not to use our platform for unlawful purposes. We reserve the right to suspend services for any form of misuse or violation of applicable Canadian laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Payments & Refunds</h2>
        <p className="mb-4">
          Payments for marketing and real estate services are due as per the agreement or invoice terms. Refunds will be assessed case-by-case and are not guaranteed unless explicitly agreed in writing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Property Listings & Data</h2>
        <p className="mb-4">
          Real estate listings are updated frequently, but we cannot guarantee availability. Property data is collected from reliable sources but should be independently verified by clients.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including logos, images, and written material, is the property of Soorya Thejus Group unless otherwise stated. Unauthorized reproduction is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4">
          We shall not be held responsible for any direct, indirect, or incidental damages resulting from the use of our services. Users should consult professionals before making real estate or business investment decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms at any time. Continued use of the site after changes constitutes acceptance of the revised Terms. Please review this page regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Information</h2>
        <p className="mb-2">Soorya Thejus Group</p>
        <p className="mb-2">Toronto, Ontario, Canada</p>
        <p className="mb-2">Email: <a href="mailto:mdsooryathejusgroup@gmail.com" className="text-blue-600 underline">mdsooryathejusgroup@gmail.com</a></p>
        <p className="mb-4">Phone: <a href="tel:+14161234567" className="text-blue-600 underline">+1 (289) 374-4396</a></p>
      </div>
    </section>
      <WhatsAppFloatingButton message="Hello! I need assistance with real estate." />  

                 <FooterSection />
     
    </div>
  )
}
