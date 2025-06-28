"use client"

import Link from "next/link"
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Award,
  Users,
  Star,
  Sparkles,
  Zap,
} from "lucide-react"

export default function ProfessionalFooter() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "New Vehicles", href: "/inventory?type=new" },
    { name: "Used Vehicles", href: "/inventory?type=used" },
    { name: "Certified Pre-Owned", href: "/inventory?type=certified" },
    { name: "Financing Options", href: "/financing" },
    { name: "Trade-In Value", href: "/trade-in" },
    { name: "Service Center", href: "/services" },
  ]

  const customerService = [
    { name: "Contact Us", href: "/contact" },
    { name: "About Carmigo", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Reviews", href: "/reviews" },
    { name: "Warranty Info", href: "/warranty" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  const services = [
    { name: "Auto Financing", href: "/financing" },
    { name: "Vehicle Service", href: "/services" },
    { name: "Parts & Accessories", href: "/services#parts" },
    { name: "Body Shop", href: "/services#body-shop" },
    { name: "Collision Repair", href: "/services#collision" },
    { name: "Extended Warranties", href: "/services#warranty" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Footer Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg relative">
                <Car className="w-7 h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Carmigo
                </h3>
                <p className="text-blue-200 text-sm">Premium Auto Dealer</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Your trusted partner in finding the perfect vehicle. With over 20 years of experience, we provide
              exceptional service and quality vehicles to customers across Texas.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">Licensed Dealer</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-sm text-slate-300">BBB A+ Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-300">15K+ Customers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-slate-300">4.9/5 Rating</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center hover:from-sky-400 hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Main Location</p>
                  <p className="text-slate-300">123 Auto Drive</p>
                  <p className="text-slate-300">Dallas, TX 75201</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-slate-300 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@carmigo.com" className="text-slate-300 hover:text-white transition-colors">
                  info@carmigo.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>Mon-Fri: 9AM-8PM</p>
                  <p>Sat: 9AM-6PM</p>
                  <p>Sun: 12PM-5PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border border-amber-500/30">
              <h5 className="font-semibold text-amber-400 mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                24/7 Roadside Assistance
              </h5>
              <p className="text-slate-300 text-sm mb-2">For existing customers</p>
              <a href="tel:+15551234999" className="text-white font-semibold">
                (555) 123-4999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="border-t border-slate-700/50 relative z-10">
        <div className="container-custom py-8">
          <h4 className="text-lg font-semibold mb-6 text-center text-white">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <span className="text-slate-300 hover:text-white text-sm">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-400 text-sm">
              <p>&copy; {currentYear} Carmigo Auto Dealership. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-slate-400 text-sm">
              <span>Dealer License: #TX123456</span>
              <span>|</span>
              <span>NMLS ID: #987654</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
