"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Clock, Phone, Star, Car } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "Carmigo Main Showroom",
    address: "123 Main Street, Houston, TX 77001",
    phone: "(713) 555-CARS",
    hours: "Mon-Sat: 9AM-8PM, Sun: 12PM-6PM",
    inventory: 487,
    rating: 4.9,
    isMain: true,
  },
  {
    id: 2,
    name: "Carmigo Service Center",
    address: "456 Service Blvd, Houston, TX 77002",
    phone: "(713) 555-SERVICE",
    hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-4PM",
    inventory: 0,
    rating: 4.8,
    isMain: false,
  },
]

export function InteractiveMap() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading mb-4 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
            Visit Our Dealership
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience our premium showroom and service facilities in the heart of Houston
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-xl">
              {/* Map Container */}
              <div className="h-96 w-full bg-gradient-to-br from-primary-50 to-secondary-50 relative">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-gray-600/20" />
                    ))}
                  </div>
                </div>

                {/* Location Markers */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
                    >
                      <MapPin className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-white font-bold text-lg">Carmigo Houston</h3>
                    <p className="text-gray-400 text-sm">123 Main Street</p>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-11/12 max-w-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-8 w-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Get Directions</h4>
                      <p className="text-gray-500 text-sm">Find your way to our dealership</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {locations.map((location, index) => (
              <Card
                key={location.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{location.name}</h3>
                      {location.isMain && (
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-2">Main Location</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-400">{location.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{location.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{location.phone}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{location.hours}</span>
                    </div>

                    {location.inventory > 0 && (
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{location.inventory} vehicles available</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 font-medium text-sm">Find Us Easily</span>
            </div>
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule a Visit</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Book a personalized tour of our showroom and test drive your dream car
                </p>
                <Button className="mt-4 w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
