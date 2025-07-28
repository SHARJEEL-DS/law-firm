"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "THE FIRM", href: "/firm" },
    { name: "ATTORNEYS", href: "/attorneys" },
    { name: "PRACTICES", href: "/practices" },
    { name: "NEWS AND PUBLICATIONS", href: "/news" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "text-sm font-semibold tracking-wide transition-colors",
                  scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Button */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={clsx(
                "hover:bg-white/10",
                scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
              )}
            >
              <Search className="h-4 w-4 mr-2" />
              SEARCH
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={clsx(
                scrolled ? "text-black" : "text-white",
                "hover:text-gray-300"
              )}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-black/90 backdrop-blur-sm rounded-md py-2 px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white text-sm font-medium py-2 hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm p-4">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
