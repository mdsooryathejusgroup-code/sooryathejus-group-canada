"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  reverse?: boolean; // To switch image and text positions
  gradientFrom?: string;
  gradientTo?: string;
}

export default function HeroSection({
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  badgeText,
  badgeIcon,
  reverse = false,
  gradientFrom = "from-emerald-50",
  gradientTo = "to-green-100",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20",
        `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
      )}
    >
      <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            reverse ? "lg:flex-row-reverse" : ""
          )}
        >
          <AnimatedSection>
            <div className={cn("text-center lg:text-left")}>
              {badgeText && (
                <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  {badgeIcon}
                  <span>{badgeText}</span>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                {title}
                {highlight && (
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                    {highlight}
                  </span>
                )}
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={buttonLink}
                  className="inline-flex items-center justify-center max-w-fit px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg mx-auto sm:mx-0"
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
