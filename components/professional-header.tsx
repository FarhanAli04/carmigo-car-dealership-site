"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Car,
  DollarSign,
  FileText,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react"

export default function ProfessionalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Inventory",
      href: "/inventory",
      dropdown: [
        { name: "All Vehicles", href: "/inventory", icon: Car },
        { name: "New Cars", href: "/inventory?type=new", icon: Sparkles },
        { name: "Used Cars", href: "/inventory?type=used", icon: Car },
        { name: "Certified Pre-Owned", href: "/inventory?type=certified", icon: Car },
      ],
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Financing", href: "/financing", icon: DollarSign },
        { name: "Trade-In", href: "/trade-in", icon: FileText },
        { name: "Service Center", href: "/services", icon: Settings },
        { name: "Parts & Accessories", href: "/services#parts", icon: Settings },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-3 hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse" />
        <div className="container-custom relative z-10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <Phone className="w-4 h-4" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Auto Drive, Dallas, TX 75201</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9AM-8PM, Sun: 12PM-6PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">60-Second Pre-Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span>247+ Vehicles Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Car className="w-7 h-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Carmigo
                </h1>
                <p className="text-xs text-slate-600 font-medium">Premium Auto Dealer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 group">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 py-3 z-50 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 font-medium relative z-10"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                    <dropdownItem.icon className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/financing"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Pre-Approved
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
            >
              <div className="container-custom py-6">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-slate-700 hover:text-blue-600 font-semibold py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 space-y-1 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <dropdownItem.icon className="w-4 h-4" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <Link
                    href="/financing"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg"
                  >
                    Get Pre-Approved
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
