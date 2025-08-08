"use client"
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
  Smartphone,
  Palette,
  Star,
  Instagram,
  Facebook,
  FileText,
  Monitor,
} from "lucide-react"
import FooterSection from "@/components/footer"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import WhatsAppFloatingButton from "@/components/whatsapp-floating"
import HeaderSection from "@/components/header"
import AnimatedSection from "@/components/AnimatedSection"
import HeroSection from "@/components/heroSection"
import  CountUp  from "react-countup"

// Enhanced Animated Counter Component for Digital Marketing
const DigitalMarketingCounter = ({ value, suffix = "", decimal = false }: { value: number, suffix?: string, decimal?: boolean }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="text-4xl font-bold text-white mb-2 transform hover:scale-110 transition-transform duration-300">
      {inView && (
        <CountUp 
          end={value} 
          duration={2.5} 
          decimals={decimal ? 1 : 0}
          suffix={suffix}
          useEasing={true}
        />
      )}
    </div>
  );
};

// Animated Metric Component for Service Cards
const AnimatedMetric = ({ text }: { text: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md transform hover:scale-105 transition-transform duration-300">
      {(() => {
        const match = text.match(/([\d.]+)([^\d]*)/)
        if (match && inView) {
          const [, number, textSuffix] = match
          return (
            <>
              <CountUp 
                end={parseFloat(number)} 
                duration={2.2} 
                decimals={number.includes('.') ? 1 : 0}
                useEasing={true}
              />
              {textSuffix}
            </>
          )
        }
        return inView ? text : text.replace(/[\d.]+/, '0')
      })()}
    </div>
  );
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    <HeaderSection />
    <HeroSection
      title="Digital Marketing That"
      highlight="Drives Results"
      description="Transform your online presence with data-driven digital marketing strategies. From SEO to social media, we help businesses grow their digital footprint and increase revenue."
      buttonText="Get Free Consultation"
      buttonLink="/contact"
      imageSrc="/heroSection/digitalMarketing.jpeg"
      imageAlt="Digital Marketing"
    />

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
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
                icon: FileText,
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
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Create powerful mobile applications that engage users and drive business growth.",
                features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
                metric: "95% user retention rate",
              },
              {
                icon: Monitor,
                title: "Web Development",
                description: "Build responsive, high-performance websites that convert visitors into customers.",
                features: ["Custom Websites", "E-commerce Platforms", "CMS Integration", "Performance Optimization"],
                metric: "50% faster load times",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Design intuitive user experiences that delight customers and improve conversions.",
                features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
                metric: "60% UX improvement",
              },
              {
                icon: Search,
                title: "Advanced SEO Services",
                description: "Comprehensive SEO strategies to dominate search results and drive organic traffic.",
                features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
                metric: "250% organic growth",
              },
              {
                icon: Star,
                title: "Logo Design & Branding",
                description: "Create memorable brand identities that resonate with your target audience.",
                features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
                metric: "80% brand recognition boost",
              },
              {
                icon: Globe,
                title: "Strategic Content Creation",
                description: "Develop compelling content strategies that engage audiences and drive conversions.",
                features: ["Content Strategy", "Video Production", "Copywriting", "Editorial Calendar"],
                metric: "200% content engagement",
              },
              {
                icon: Facebook,
                title: "Meta Ads (Facebook)",
                description: "Leverage Facebook's powerful advertising platform to reach your ideal customers.",
                features: ["Campaign Setup", "Audience Targeting", "Creative Development", "Performance Optimization"],
                metric: "3.8x Facebook ROAS",
              },
              {
                icon: Instagram,
                title: "Instagram Ads",
                description: "Create visually stunning Instagram campaigns that build brand awareness and drive sales.",
                features: ["Story Ads", "Feed Campaigns", "Reels Advertising", "Influencer Integration"],
                metric: "120% Instagram reach",
              },
              {
                icon: Palette,
                title: "Graphic Design Services",
                description: "Professional graphic design that communicates your brand message effectively.",
                features: ["Marketing Materials", "Digital Graphics", "Print Design", "Brand Collateral"],
                metric: "90% design approval rate",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:text-left"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 md:mx-0">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 md:justify-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex w-full items-center">
                  <div className="bg-emerald-50 px-3 py-2 rounded-md text-sm font-medium text-emerald-600 w-full text-center sm:text-left h-10 flex items-center justify-center sm:justify-start transform hover:scale-105 transition-transform duration-300">
                    <AnimatedMetric text={service.metric} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
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
      <section className="py-16 px-6 bg-emerald-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-emerald-100 text-lg">Our clients see measurable growth</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: 300, suffix: "%", label: "Average Traffic Growth" },
              { value: 4.2, suffix: "x", label: "Return on Ad Spend", decimal: true },
              { value: 85, suffix: "%", label: "Lead Quality Improvement" },
              { value: 45, suffix: "%", label: "Conversion Rate Boost" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <DigitalMarketingCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimal={stat.decimal} 
                />
                <div className="text-emerald-100 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how our digital marketing expertise can help your business reach new heights.
          </p>
          <Link href="/contact">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:scale-105">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>
          </Link>
        </div>
      </section>
            <WhatsAppFloatingButton message="Hello! I need assistance with digital marketing." />  

            <FooterSection />

    </div>
  )
}
