"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MapPin, DollarSign, Gauge } from "lucide-react"

const makes = ["BMW", "Mercedes-Benz", "Audi", "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "Hyundai", "Lexus"]
const bodyTypes = ["Sedan", "SUV", "Coupe", "Convertible", "Hatchback", "Truck", "Wagon"]
const years = Array.from({ length: 15 }, (_, i) => 2024 - i)

export function AdvancedSearchWidget() {
  const [searchData, setSearchData] = useState({
    make: "Any Make",
    model: "",
    year: "Any Year",
    bodyType: "Any Type",
    minPrice: "",
    maxPrice: "",
    maxMileage: "",
    zipCode: "",
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearch = () => {
    console.log("Advanced search:", searchData)
    // In production, navigate to inventory with filters
  }

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Card className="bg-black/90 backdrop-blur-xl border-gray-700/50 shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Search className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Find Your Dream Car</h3>
                <p className="text-gray-400 text-sm">Search our premium inventory</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Live Search</Badge>
          </div>

          {/* Basic Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
            <Select value={searchData.make} onValueChange={(value) => setSearchData({ ...searchData, make: value })}>
              <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                <SelectValue placeholder="Any Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Any Make">Any Make</SelectItem>
                {makes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Any Model"
              value={searchData.model}
              onChange={(e) => setSearchData({ ...searchData, model: e.target.value })}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
            />

            <Select value={searchData.year} onValueChange={(value) => setSearchData({ ...searchData, year: value })}>
              <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                <SelectValue placeholder="Any Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Any Year">Any Year</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={searchData.bodyType}
              onValueChange={(value) => setSearchData({ ...searchData, bodyType: value })}
            >
              <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                <SelectValue placeholder="Body Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Any Type">Any Type</SelectItem>
                {bodyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white p-0 h-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              {isExpanded ? "Hide" : "Show"} Advanced Filters
            </Button>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Live Inventory</span>
              </div>
              <span>500+ Vehicles Available</span>
            </div>
          </div>

          {/* Advanced Filters */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 border-t border-gray-700/50 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Min Price
                  </label>
                  <Input
                    placeholder="$0"
                    value={searchData.minPrice}
                    onChange={(e) => setSearchData({ ...searchData, minPrice: e.target.value })}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Max Price
                  </label>
                  <Input
                    placeholder="$100,000+"
                    value={searchData.maxPrice}
                    onChange={(e) => setSearchData({ ...searchData, maxPrice: e.target.value })}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 flex items-center gap-2">
                    <Gauge className="h-4 w-4" />
                    Max Mileage
                  </label>
                  <Input
                    placeholder="100,000"
                    value={searchData.maxMileage}
                    onChange={(e) => setSearchData({ ...searchData, maxMileage: e.target.value })}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    ZIP Code
                  </label>
                  <Input
                    placeholder="77001"
                    value={searchData.zipCode}
                    onChange={(e) => setSearchData({ ...searchData, zipCode: e.target.value })}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
