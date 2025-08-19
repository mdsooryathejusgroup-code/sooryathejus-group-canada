"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Services", path: "/services" },
    { name: "Real Estate", path: "/real-estate" },    
    { name: "Contact", path: "/contact" },
  ]

  const navLinkClass = (path: string) =>
    `text-sm ${
      pathname === path
        ? "text-emerald-600 font-semibold"
        : "text-gray-700 hover:text-emerald-600"
    } transition-colors`

  return (
<header className="fixed top-0 left-0 right-0 z-50">
  <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6">
    <div className="flex items-center justify-between md:justify-center h-16 w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Sooryathejus Group" className="h-14 w-auto" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 ml-6">
        {navItems.map(({ name, path }) => (
          <Link key={path} href={path} className={navLinkClass(path)}>
            {name}
          </Link>
        ))}
          {/* CTA Button */}
        <Link href="/contact">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Get Started
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-200">
        <nav className="flex flex-col items-center space-y-4">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={navLinkClass(path)}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
              Get Started
            </Button>
          </Link>
        </nav>
      </div>
    )}
  </div>
</header>
  )
}
