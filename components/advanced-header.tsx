"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Phone, MapPin, Clock, Star, Zap, Globe, Search } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timer)
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/inventory", label: "Inventory", badge: "500+" },
    { href: "/financing", label: "Financing", badge: "60s Approval" },
    { href: "/trade-in", label: "Trade-In", badge: "Instant Quote" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Bar with Live Information */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <Phone className="h-4 w-4" />
              <span className="font-medium">(713) 555-CARS</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Houston, TX • Free Delivery 100mi</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Nationwide Shipping Available</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Open Now • {currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-800"
            : "bg-black/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Carmigo
                </div>
                <div className="text-xs text-gray-400 -mt-1">Your Car Buddy</div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gray-800/50 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">{item.badge}</Badge>
                    )}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 bg-transparent"
              >
                <Link href="/inventory" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search Cars
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Link href="/financing" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Get Pre-Approved
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between py-3 text-gray-300 hover:text-white font-medium transition-colors border-b border-gray-800/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">{item.badge}</Badge>
                    )}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    <Link href="/inventory" onClick={() => setIsMenuOpen(false)}>
                      <Search className="h-4 w-4 mr-2" />
                      Search Cars
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Link href="/financing" onClick={() => setIsMenuOpen(false)}>
                      <Zap className="h-4 w-4 mr-2" />
                      Get Pre-Approved
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
