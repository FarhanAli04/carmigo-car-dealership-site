"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Search,
  Filter,
  Star,
  Heart,
  Eye,
  Shield,
  Zap,
  Fuel,
  Gauge,
  Settings,
  Sparkles,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowUpDown,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Import components
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

// Import inventory data
import inventoryData from "@/data/inventory.json"

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    make: "",
    bodyType: "",
    minPrice: 0,
    maxPrice: 100000,
    minYear: 2015,
    maxYear: 2024,
    condition: "",
    fuelType: "",
    transmission: "",
    drivetrain: "",
  })
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Get unique values for filter options
  const makes = [...new Set(inventoryData.map((car) => car.make))].sort()
  const bodyTypes = [...new Set(inventoryData.map((car) => car.bodyType))].sort()
  const conditions = [...new Set(inventoryData.map((car) => car.condition))].sort()
  const fuelTypes = [...new Set(inventoryData.map((car) => car.fuelType))].sort()
  const transmissions = [...new Set(inventoryData.map((car) => car.transmission))].sort()
  const drivetrains = [...new Set(inventoryData.map((car) => car.drivetrain))].sort()

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    const filtered = inventoryData.filter((car) => {
      const matchesSearch =
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toString().includes(searchTerm)

      const matchesFilters =
        (!filters.make || car.make === filters.make) &&
        (!filters.bodyType || car.bodyType === filters.bodyType) &&
        car.price >= filters.minPrice &&
        car.price <= filters.maxPrice &&
        car.year >= filters.minYear &&
        car.year <= filters.maxYear &&
        (!filters.condition || car.condition === filters.condition) &&
        (!filters.fuelType || car.fuelType === filters.fuelType) &&
        (!filters.transmission || car.transmission === filters.transmission) &&
        (!filters.drivetrain || car.drivetrain === filters.drivetrain)

      return matchesSearch && matchesFilters
    })

    // Sort vehicles
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "year-new":
        filtered.sort((a, b) => b.year - a.year)
        break
      case "year-old":
        filtered.sort((a, b) => a.year - b.year)
        break
      case "mileage-low":
        filtered.sort((a, b) => a.mileage - b.mileage)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "featured":
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return b.rating - a.rating
        })
        break
    }

    return filtered
  }, [searchTerm, filters, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage)
  const paginatedVehicles = filteredVehicles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const toggleFavorite = (carId: number) => {
    setFavorites((prev) => (prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]))
  }

  const clearFilters = () => {
    setFilters({
      make: "",
      bodyType: "",
      minPrice: 0,
      maxPrice: 100000,
      minYear: 2015,
      maxYear: 2024,
      condition: "",
      fuelType: "",
      transmission: "",
      drivetrain: "",
    })
    setSearchTerm("")
  }

  const activeFiltersCount =
    Object.values(filters).filter(
      (value) => value !== "" && value !== 0 && value !== 100000 && value !== 2015 && value !== 2024,
    ).length + (searchTerm ? 1 : 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <ProfessionalHeader />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://img.freepik.com/free-photo/couple-stands-bugatti-lamborgini-somewhere-monte-carlo_1304-3910.jpg"
            alt="Luxury Car Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5 animate-pulse" />

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-medium text-sm">Premium Inventory</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Browse Our Inventory
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover {inventoryData.length}+ premium vehicles with competitive pricing and exceptional quality
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-24 border-0 bg-white/80 backdrop-blur-xl shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                  </h2>
                  {activeFiltersCount > 0 && (
                    <Button
                      onClick={clearFilters}
                      size="sm"
                      className="text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear ({activeFiltersCount})
                    </Button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Make, model, year..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-slate-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Make */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Make</label>
                    <Select value={filters.make} onValueChange={(value) => setFilters({ ...filters, make: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Makes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Makes</SelectItem>
                        {makes.map((make) => (
                          <SelectItem key={make} value={make}>
                            {make}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Body Type */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Body Type</label>
                    <Select
                      value={filters.bodyType}
                      onValueChange={(value) => setFilters({ ...filters, bodyType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {bodyTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Price Range: ${filters.minPrice.toLocaleString()} - ${filters.maxPrice.toLocaleString()}
                    </label>
                    <div className="space-y-4">
                      <Slider
                        value={[filters.minPrice]}
                        onValueChange={([value]) => setFilters({ ...filters, minPrice: value })}
                        max={100000}
                        step={5000}
                        className="w-full"
                      />
                      <Slider
                        value={[filters.maxPrice]}
                        onValueChange={([value]) => setFilters({ ...filters, maxPrice: value })}
                        max={100000}
                        step={5000}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Year Range */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Year Range: {filters.minYear} - {filters.maxYear}
                    </label>
                    <div className="space-y-4">
                      <Slider
                        value={[filters.minYear]}
                        onValueChange={([value]) => setFilters({ ...filters, minYear: value })}
                        min={2015}
                        max={2024}
                        step={1}
                        className="w-full"
                      />
                      <Slider
                        value={[filters.maxYear]}
                        onValueChange={([value]) => setFilters({ ...filters, maxYear: value })}
                        min={2015}
                        max={2024}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Additional Filters */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Condition</label>
                      <Select
                        value={filters.condition}
                        onValueChange={(value) => setFilters({ ...filters, condition: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Conditions" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Conditions</SelectItem>
                          {conditions.map((condition) => (
                            <SelectItem key={condition} value={condition}>
                              {condition}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Fuel Type</label>
                      <Select
                        value={filters.fuelType}
                        onValueChange={(value) => setFilters({ ...filters, fuelType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Fuel Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Fuel Types</SelectItem>
                          {fuelTypes.map((fuel) => (
                            <SelectItem key={fuel} value={fuel}>
                              {fuel}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </Button>
                <div className="text-slate-600">
                  <span className="font-semibold">{filteredVehicles.length}</span> vehicles found
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="year-new">Year: Newest First</SelectItem>
                    <SelectItem value="year-old">Year: Oldest First</SelectItem>
                    <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                  <Button
                    onClick={() => setViewMode("grid")}
                    size="sm"
                    className={`rounded-none ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-slate-600"}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => setViewMode("list")}
                    size="sm"
                    className={`rounded-none ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-slate-600"}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicle Grid/List */}
            <AnimatePresence mode="wait">
              {paginatedVehicles.length > 0 ? (
                <motion.div
                  key={`${viewMode}-${currentPage}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}
                >
                  {paginatedVehicles.map((car, index) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card
                        className={`overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full ${
                          viewMode === "list" ? "flex" : ""
                        }`}
                      >
                        <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 flex-shrink-0" : ""}`}>
                          <Image
                            src={car.image || "/placeholder.svg"}
                            alt={`${car.year} ${car.make} ${car.model}`}
                            width={400}
                            height={300}
                            className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
                              viewMode === "list" ? "w-full h-full" : "w-full h-48"
                            }`}
                          />

                          {/* Overlay Badges */}
                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {car.isCertified && (
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                                <Shield className="h-3 w-3 mr-1" />
                                Certified
                              </Badge>
                            )}
                            {car.daysOnLot <= 3 && (
                              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg animate-pulse">
                                <Zap className="h-3 w-3 mr-1" />
                                Hot Deal
                              </Badge>
                            )}
                          </div>

                          <div className="absolute top-4 right-4">
                            <Button
                              onClick={() => toggleFavorite(car.id)}
                              size="sm"
                              className={`opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full w-10 h-10 p-0 shadow-lg ${
                                favorites.includes(car.id)
                                  ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                                  : "bg-white/90 hover:bg-white text-slate-800"
                              }`}
                            >
                              <Heart
                                className={`h-4 w-4 ${favorites.includes(car.id) ? "fill-white text-white" : ""}`}
                              />
                            </Button>
                          </div>

                          {/* Savings Badge */}
                          {car.savings > 0 && (
                            <div className="absolute bottom-4 left-4">
                              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Save ${car.savings.toLocaleString()}
                              </Badge>
                            </div>
                          )}
                        </div>

                        <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-slate-800">
                              {car.year} {car.make} {car.model}
                            </h3>
                            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full px-2 py-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold text-amber-700">{car.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ${car.price.toLocaleString()}
                              </div>
                              {car.originalPrice > car.price && (
                                <div className="text-sm text-slate-500 line-through">
                                  ${car.originalPrice.toLocaleString()}
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-slate-600 text-sm font-medium">
                                {car.mileage.toLocaleString()} miles
                              </div>
                              <div className="text-slate-500 text-xs">{car.viewCount} views</div>
                            </div>
                          </div>

                          <div
                            className={`grid gap-3 text-sm text-slate-600 mb-4 ${
                              viewMode === "list" ? "grid-cols-4" : "grid-cols-2"
                            }`}
                          >
                            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-2">
                              <Fuel className="h-4 w-4 text-blue-600" />
                              <span className="font-medium">{car.mpg}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-2">
                              <Settings className="h-4 w-4 text-purple-600" />
                              <span className="font-medium">{car.transmission}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2">
                              <Gauge className="h-4 w-4 text-green-600" />
                              <span className="font-medium">{car.drivetrain}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-2">
                              <Shield className="h-4 w-4 text-amber-600" />
                              <span className="font-medium">{car.condition}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {car.features.slice(0, 3).map((feature, idx) => (
                              <Badge
                                key={idx}
                                className="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 border-0"
                              >
                                {feature}
                              </Badge>
                            ))}
                            {car.features.length > 3 && (
                              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
                                +{car.features.length - 3} more
                              </Badge>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <Button
                              asChild
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                            >
                              <Link href={`/inventory/${car.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">No vehicles found</h3>
                  <p className="text-slate-600 mb-6">Try adjusting your search criteria or filters</p>
                  <Button onClick={clearFilters} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Clear All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProfessionalFooter />
    </div>
  )
}
