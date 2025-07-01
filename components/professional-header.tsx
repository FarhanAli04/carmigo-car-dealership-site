"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
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
import logo from '../public/bg logo update.png'
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
      {/* Top Bar - Red */}
      <div className="bg-[#FF3B30] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center hover:text-gray-100 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="hidden md:flex items-center hover:text-gray-100 transition-colors">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Car Street, Autocity</span>
              </div>
            </div>
            <div className="flex items-center hover:text-gray-100 transition-colors">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Dark Blue */}
      <header className="sticky top-0 z-40 bg-[#0A1F4D] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <div className="relative w-28 h-28">
                  <Image
                    src={logo}
                    alt="CARMIGGO Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 text-white hover:text-[#FF3B30] px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-56 origin-top-left bg-white rounded-lg shadow-xl ring-1 ring-black/5 z-50 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center px-4 py-3 text-sm text-gray-800 hover:bg-[#FF3B30] hover:text-white transition-colors duration-200"
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                <dropdownItem.icon className="w-4 h-4 mr-3 text-[#0A1F4D] group-hover:text-white" />
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#FF3B30] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/inventory"
                className="px-4 py-2 text-sm font-medium text-white hover:text-[#FF3B30] transition-colors duration-200 border border-transparent hover:border-white/20 rounded-md"
              >
                Browse Inventory
              </Link>
              <Link
                href="/financing"
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#FF3B30] hover:bg-[#E6352B] rounded-md transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
              >
                Get Pre-Approved
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FF3B30] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[#0A1F4D] shadow-xl border-t border-white/10 z-40"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex justify-between items-center w-full px-4 py-3 text-left text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 mt-1 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center px-4 py-3 text-sm text-white/90 hover:bg-[#FF3B30] hover:text-white transition-colors duration-200"
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                <dropdownItem.icon className="w-4 h-4 mr-3 text-white/70" />
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-[#FF3B30] hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-4 py-4 border-t border-white/10 space-y-3 bg-[#0A1F4D] bg-opacity-95 backdrop-blur-sm">
                <Link
                  href="/inventory"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white/90 hover:bg-[#FF3B30] hover:text-white rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse Inventory
                </Link>
                <Link
                  href="/financing"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-[#FF3B30] hover:bg-[#E6352B] rounded-md shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Pre-Approved
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
