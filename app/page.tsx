"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Car, DollarSign, Shield, Star, Zap, Sparkles, TrendingUp, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Import components
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"
import { GoogleBusinessListing } from "@/components/google-business-listing"
import { FeaturedVehicles } from "@/components/featured-vehicles"
import { CustomerTestimonials } from "@/components/customer-testimonials"
import { FinancingOptions } from "@/components/financing-options"
import { ServiceHighlights } from "@/components/service-highlights"
import { LocalSEO } from "@/components/local-seo"

// Import inventory data
import inventoryData from "@/data/inventory.json"

export default function HomePage() {
  const [searchFilters, setSearchFilters] = useState({
    make: "",
    model: "",
    maxPrice: "",
    bodyType: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    window.location.href = `/inventory?${params.toString()}`
  }

  const stats = [
    { label: "Vehicles Available", value: "247+", icon: Car, color: "from-primary-600 to-primary-800" },
    { label: "Happy Customers", value: "15K+", icon: Star, color: "from-amber-500 to-amber-600" },
    { label: "Years in Business", value: "20+", icon: Award, color: "from-slate-700 to-slate-800" },
    { label: "Average Savings", value: "$8K", icon: DollarSign, color: "from-emerald-500 to-emerald-600" },
  ]

  const makes = [...new Set(inventoryData.map((car) => car.make))].sort()
  const bodyTypes = [...new Set(inventoryData.map((car) => car.bodyType))].sort()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/20">
      <ProfessionalHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.stockcake.com/public/3/a/5/3a5e66db-283f-4359-9993-efec45ac26eb_large/luxury-car-showroom-stockcake.jpg"
            alt="Luxury car showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary-900/80 to-primary-800/80" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-amber-400 font-medium text-sm">Premium Auto Dealer</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-100 to-primary-50 bg-clip-text text-transparent">
                Find Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Dream Car
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover premium vehicles with competitive financing, exceptional service, and unbeatable value in the
              heart of Dallas-Fort Worth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg px-8 py-4 shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
              >
                <Link href="/inventory">
                  <Car className="w-5 h-5 mr-2" />
                  Browse Inventory
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 text-lg px-8 py-4 shadow-2xl transition-all duration-300"
              >
                <Link href="/financing">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Pre-Approved
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Advanced Search Widget */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Find Your Perfect Vehicle</h2>
                </div>
                <p className="text-gray-100">Search through our premium inventory of 247+ vehicles</p>
              </div>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Make</label>
                    <select
                      value={searchFilters.make}
                      onChange={(e) => setSearchFilters({ ...searchFilters, make: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-sm"
                    >
                      <option value="">All Makes</option>
                      {makes.map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Body Type</label>
                    <select
                      value={searchFilters.bodyType}
                      onChange={(e) => setSearchFilters({ ...searchFilters, bodyType: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-sm"
                    >
                      <option value="">All Types</option>
                      {bodyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price</label>
                    <select
                      value={searchFilters.maxPrice}
                      onChange={(e) => setSearchFilters({ ...searchFilters, maxPrice: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-sm"
                    >
                      <option value="">Any Price</option>
                      <option value="25000">Under $25,000</option>
                      <option value="35000">Under $35,000</option>
                      <option value="50000">Under $50,000</option>
                      <option value="75000">Under $75,000</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <Button
                      onClick={handleSearch}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 shadow-lg"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search Vehicles
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge className="bg-gradient-to-r from-[#0A1F4D]/10 to-[#0A1F4D]/20 text-[#0A1F4D] border-[#0A1F4D]/30">
                    <Shield className="w-3 h-3 mr-1" />
                    Certified Pre-Owned Available
                  </Badge>
                  <Badge className="bg-gradient-to-r from-[#C0C0C0]/20 to-[#C0C0C0]/40 text-[#0A1F4D] border-[#C0C0C0]/50">
                    <Zap className="w-3 h-3 mr-1" />
                    60-Second Financing
                  </Badge>
                  <Badge className="bg-gradient-to-r from-[#0A1F4D]/10 to-[#C0C0C0]/30 text-[#0A1F4D] border-[#0A1F4D]/30">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Best Price Guarantee
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <FeaturedVehicles />

      {/* Financing Options */}
      <FinancingOptions />

      {/* Customer Testimonials */}
      <CustomerTestimonials />

      {/* Service Highlights */}
      <ServiceHighlights />

      {/* Google Business Listing */}
      <GoogleBusinessListing />

      {/* Local SEO */}
      <LocalSEO />

      <ProfessionalFooter />
    </div>
  )
}
