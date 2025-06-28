"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock, Phone, ExternalLink, Navigation, Camera, Calendar, Users, Sparkles } from "lucide-react"
import Image from "next/image"

export function GoogleBusinessListing() {
  const businessInfo = {
    name: "Carmigo Auto Dealership",
    rating: 4.8,
    reviewCount: 247,
    address: "123 Auto Drive, Dallas, TX 75201",
    phone: "(555) 123-4567",
    website: "www.carmigo.com",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "12:00 PM - 5:00 PM",
    },
    categories: ["Car Dealer", "Used Car Dealer", "Auto Financing", "Auto Service"],
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    recentReviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2 days ago",
        text: "Excellent service! Found my dream car and the financing was seamless. Highly recommend!",
      },
      {
        name: "Mike Rodriguez",
        rating: 5,
        date: "1 week ago",
        text: "Professional staff, great selection, and transparent pricing. Will definitely return!",
      },
      {
        name: "Emily Chen",
        rating: 4,
        date: "2 weeks ago",
        text: "Good experience overall. The team was helpful and the car quality is excellent.",
      },
    ],
  }

  const getCurrentStatus = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const currentDay = now.getDay()

    // Simple logic for demo - in production, use proper time checking
    if (currentDay === 0) {
      // Sunday
      return currentHour >= 12 && currentHour < 17 ? "Open" : "Closed"
    } else if (currentDay === 6) {
      // Saturday
      return currentHour >= 9 && currentHour < 18 ? "Open" : "Closed"
    } else {
      // Monday-Friday
      return currentHour >= 9 && currentHour < 20 ? "Open" : "Closed"
    }
  }

  const isOpen = getCurrentStatus() === "Open"

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">Find Us on Google</span>
            </div>
            <h2 className="text-heading mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Discover Our Google Presence
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              See what our customers are saying and get all the information you need about our dealership
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-xl">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{businessInfo.name}</h3>
                    </div>
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(businessInfo.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="font-bold text-lg">{businessInfo.rating}</span>
                        <span className="text-blue-200">({businessInfo.reviewCount} reviews)</span>
                      </div>
                      <Badge
                        className={`${isOpen ? "bg-green-500/20 text-green-300 border-green-400/30" : "bg-red-500/20 text-red-300 border-red-400/30"} backdrop-blur-sm`}
                      >
                        <div
                          className={`w-2 h-2 ${isOpen ? "bg-green-400" : "bg-red-400"} rounded-full mr-2 animate-pulse`}
                        />
                        {isOpen ? "Open Now" : "Closed"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {businessInfo.categories.map((category, index) => (
                        <Badge key={index} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Google
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Business Info */}
                  <div className="p-8 space-y-8">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        Location & Contact
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{businessInfo.address}</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                          <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{businessInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                          <ExternalLink className="h-5 w-5 text-purple-600 flex-shrink-0" />
                          <span className="text-blue-600 font-medium">{businessInfo.website}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        Business Hours
                      </h4>
                      <div className="space-y-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4">
                        {Object.entries(businessInfo.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between items-center py-1">
                            <span className="text-slate-600 capitalize font-medium">{day}:</span>
                            <span className="text-slate-800 font-semibold">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Photos & Reviews */}
                  <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50/50">
                    <div className="mb-8">
                      <h4 className="font-semibold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Camera className="h-4 w-4 text-white" />
                        </div>
                        Photo Gallery
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {businessInfo.photos.slice(0, 4).map((photo, index) => (
                          <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={photo || "/placeholder.svg"}
                              alt={`Carmigo photo ${index + 1}`}
                              width={150}
                              height={100}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-6 flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                        Recent Reviews
                      </h4>
                      <div className="space-y-4">
                        {businessInfo.recentReviews.slice(0, 2).map((review, index) => (
                          <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {review.name.charAt(0)}
                                </div>
                                <div>
                                  <span className="font-semibold text-slate-800">{review.name}</span>
                                  <p className="text-xs text-slate-500">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="border-t border-slate-200/50 p-6 bg-gradient-to-r from-white to-blue-50/30">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Visit
                    </Button>
                    <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg">
                      <Star className="h-4 w-4 mr-2" />
                      Write Review
                    </Button>
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg">
                      <Users className="h-4 w-4 mr-2" />
                      Follow Updates
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
