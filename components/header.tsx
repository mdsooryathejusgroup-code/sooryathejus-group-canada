"use client"; // Important if you're using App Router

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderSection() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Real Estate", path: "/real-estate" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
            <span className="text-xl font-semibold text-gray-900">Sooryathejus Group</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className={`text-sm ${
                  pathname === path
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
