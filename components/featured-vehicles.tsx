"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Eye, Shield, Zap, Fuel, Gauge, Settings, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Import inventory data
import inventoryData from "@/data/inventory.json"

export function FeaturedVehicles() {
  const [favorites, setFavorites] = useState<number[]>([])

  // Get featured vehicles from inventory
  const featuredVehicles = inventoryData.filter((car) => car.featured).slice(0, 6)

  const toggleFavorite = (carId: number) => {
    setFavorites((prev) => (prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]))
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 font-medium text-sm">Premium Selection</span>
            </div>
            <h2 className="text-heading bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Featured Vehicles
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium vehicles with exceptional value and quality
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {car.isCertified && (
                      <Badge className="bg-gradient-to-r from-success-500 to-success-600 text-white border-0 shadow-lg">
                        <Shield className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                    {car.daysOnLot <= 3 && (
                      <Badge className="bg-gradient-to-r from-warning-500 to-warning-600 text-white border-0 shadow-lg animate-pulse">
                        <Zap className="h-3 w-3 mr-1" />
                        Hot Deal
                      </Badge>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      onClick={() => toggleFavorite(car.id)}
                      size="sm"
                      className={`opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full w-10 h-10 p-0 shadow-lg ${
                        favorites.includes(car.id)
                          ? "bg-gradient-to-r from-warning-500 to-warning-600 hover:from-warning-600 hover:to-warning-700"
                          : "bg-white/90 hover:bg-white text-gray-800"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(car.id) ? "fill-white text-white" : ""}`} />
                    </Button>
                  </div>

                  {/* Savings Badge */}
                  {car.savings > 0 && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold shadow-lg">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Save ${car.savings.toLocaleString()}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800">
                      {car.year} {car.make} {car.model}
                    </h3>
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-amber-600">{car.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        ${car.price.toLocaleString()}
                      </div>
                      {car.originalPrice > car.price && (
                        <div className="text-sm text-slate-500 line-through">${car.originalPrice.toLocaleString()}</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-slate-600 text-sm font-medium">{car.mileage.toLocaleString()} miles</div>
                      <div className="text-slate-500 text-xs">{car.viewCount} views</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-2">
                      <Fuel className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{car.mpg}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-secondary-50 to-pink-50 rounded-lg p-2">
                      <Settings className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-success-50 to-success-100 rounded-lg p-2">
                      <Gauge className="h-4 w-4 text-green-600" />
                      <span className="font-medium">{car.drivetrain}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-accent-50 to-orange-50 rounded-lg p-2">
                      <Shield className="h-4 w-4 text-amber-600" />
                      <span className="font-medium">{car.condition}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} className="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 border-0">
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
                      className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white text-lg px-8 py-4 shadow-xl"
          >
            <Link href="/inventory">
              <Sparkles className="w-5 h-5 mr-2" />
              View All {inventoryData.length} Vehicles
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
