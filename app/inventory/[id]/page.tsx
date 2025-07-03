"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  Share2,
  Shield,
  Zap,
  Fuel,
  Gauge,
  Settings,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Car,
  FileText,
  Calculator,
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Users,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Import components
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

// Import inventory data
import inventoryData from "@/data/inventory.json"

export default function VehicleDetailPage() {
  const params = useParams()
  const vehicleId = Number.parseInt(params.id as string)
  const vehicle = inventoryData.find((car) => car.id === vehicleId)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedTab, setSelectedTab] = useState("overview")

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <ProfessionalHeader />
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Vehicle Not Found</h1>
          <p className="text-slate-600 mb-8">The vehicle you're looking for doesn't exist or has been sold.</p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <Link href="/inventory">Browse All Vehicles</Link>
          </Button>
        </div>
        <ProfessionalFooter />
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)
  }

  const vehicleSpecs = [
    { label: "Year", value: vehicle.year },
    { label: "Make", value: vehicle.make },
    { label: "Model", value: vehicle.model },
    { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} miles` },
    { label: "Engine", value: vehicle.engine },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Drivetrain", value: vehicle.drivetrain },
    { label: "Fuel Type", value: vehicle.fuelType },
    { label: "MPG", value: vehicle.mpg },
    { label: "Body Type", value: vehicle.bodyType },
    { label: "Doors", value: vehicle.doors },
    { label: "Seats", value: vehicle.seats },
    { label: "Exterior Color", value: vehicle.exterior },
    { label: "Interior Color", value: vehicle.interior },
    { label: "VIN", value: vehicle.vin },
    { label: "Condition", value: vehicle.condition },
  ]

  const relatedVehicles = inventoryData
    .filter((car) => car.id !== vehicle.id && (car.make === vehicle.make || car.bodyType === vehicle.bodyType))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <ProfessionalHeader />

      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-[#0A1F4D]/80 mb-8">
          <Link href="/" className="hover:text-[#0A1F4D] transition-colors">
            Home
          </Link>
          <span className="text-[#0A1F4D]/50">/</span>
          <Link href="/inventory" className="hover:text-[#0A1F4D] transition-colors">
            Inventory
          </Link>
          <span className="text-[#0A1F4D]/50">/</span>
          <span className="text-[#0A1F4D] font-medium">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Images and Gallery */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-2xl border border-[#C0C0C0]/30 bg-white/90 backdrop-blur-xl mb-8">
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {vehicle.images.length}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {vehicle.isCertified && (
                      <Badge className="bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 text-white border-0 shadow-lg">
                        <Shield className="h-3 w-3 mr-1" />
                        Certified Pre-Owned
                      </Badge>
                    )}
                    {vehicle.daysOnLot <= 3 && (
                      <Badge className="bg-gradient-to-r from-[#C0C0C0] to-[#A0A0A0] text-[#0A1F4D] border-0 shadow-lg animate-pulse">
                        <Zap className="h-3 w-3 mr-1" />
                        Hot Deal
                      </Badge>
                    )}
                    {vehicle.savings > 0 && (
                      <Badge className="bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/80 text-white font-bold shadow-lg">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Save ${vehicle.savings.toLocaleString()}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="p-4 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10">
                  <div className="flex gap-2 overflow-x-auto">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImageIndex === index
                            ? "border-[#0A1F4D] shadow-lg"
                            : "border-[#C0C0C0] hover:border-[#0A1F4D]/50"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          width={80}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Vehicle Details Tabs */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-xl">
              <CardContent className="p-0">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-white data-[state=active]:shadow-lg text-[#0A1F4D] data-[state=active]:text-[#0A1F4D]"
                    >
                      <Car className="w-4 h-4 mr-2" />
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-white data-[state=active]:shadow-lg text-[#0A1F4D] data-[state=active]:text-[#0A1F4D]"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Features
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history" 
                      className="data-[state=active]:bg-white data-[state=active]:shadow-lg text-[#0A1F4D] data-[state=active]:text-[#0A1F4D]"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      History
                    </TabsTrigger>
                    <TabsTrigger
                      value="warranty"
                      className="data-[state=active]:bg-white data-[state=active]:shadow-lg text-[#0A1F4D] data-[state=active]:text-[#0A1F4D]"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Warranty
                    </TabsTrigger>
                  </TabsList>

                  <div className="p-8">
                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A1F4D] mb-4">Vehicle Specifications</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {vehicleSpecs.map((spec, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center p-3 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-lg border border-[#C0C0C0]/30"
                            >
                              <span className="text-[#0A1F4D]/80 font-medium">{spec.label}:</span>
                              <span className="text-[#0A1F4D] font-semibold">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-4 text-center border border-[#C0C0C0]/30">
                          <Fuel className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-[#0A1F4D]">{vehicle.mpg}</div>
                          <div className="text-sm text-[#0A1F4D]/80">Fuel Economy</div>
                        </div>
                        <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-4 text-center border border-[#C0C0C0]/30">
                          <Gauge className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-[#0A1F4D]">{vehicle.drivetrain}</div>
                          <div className="text-sm text-[#0A1F4D]/80">Drivetrain</div>
                        </div>
                        <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-4 text-center border border-[#C0C0C0]/30">
                          <Settings className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-[#0A1F4D]">{vehicle.transmission}</div>
                          <div className="text-sm text-[#0A1F4D]/80">Transmission</div>
                        </div>
                        <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-4 text-center border border-[#C0C0C0]/30">
                          <Star className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
                          <div className="text-2xl font-bold text-[#0A1F4D]">{vehicle.rating}</div>
                          <div className="text-sm text-[#0A1F4D]/80">Customer Rating</div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="features" className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A1F4D] mb-4">Standard Features</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {vehicle.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-lg border border-[#C0C0C0]/30"
                            >
                              <CheckCircle className="w-5 h-5 text-[#0A1F4D] flex-shrink-0" />
                              <span className="text-[#0A1F4D] font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="history" className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A1F4D] mb-4">Vehicle History</h3>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-6 border border-[#C0C0C0]/30">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-[#0A1F4D] rounded-full flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-bold text-[#0A1F4D]">Clean Carfax Report</h4>
                                <p className="text-[#0A1F4D]/80">Score: {vehicle.carfaxScore}/100</p>
                              </div>
                            </div>
                            <ul className="space-y-2 text-[#0A1F4D]">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                No accidents reported
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                Single previous owner
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                Regular maintenance records
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                No flood or fire damage
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-6 border border-[#C0C0C0]/30">
                            <h4 className="font-bold text-[#0A1F4D] mb-3">Service History</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-[#0A1F4D]/80">Last Service:</span>
                                <span className="font-semibold text-[#0A1F4D]">2 months ago</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[#0A1F4D]/80">Oil Change:</span>
                                <span className="font-semibold text-[#0A1F4D]">Recent</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[#0A1F4D]/80">Inspection:</span>
                                <span className="font-semibold text-[#0A1F4D]">Passed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="warranty" className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A1F4D] mb-4">Warranty Information</h3>
                        <div className="space-y-4">
                          {vehicle.isCertified && (
                            <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-6 border border-[#C0C0C0]/30">
                              <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-8 h-8 text-[#0A1F4D]" />
                                <h4 className="text-xl font-bold text-[#0A1F4D]">Certified Pre-Owned Warranty</h4>
                              </div>
                              <ul className="space-y-2 text-[#0A1F4D]">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                  7-year/100,000-mile powertrain warranty
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                  24/7 roadside assistance
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                  Trip interruption coverage
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-[#0A1F4D]" />
                                  Transferable to new owner
                                </li>
                              </ul>
                            </div>
                          )}

                          <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-xl p-6 border border-[#C0C0C0]/30">
                            <h4 className="font-bold text-[#0A1F4D] mb-3">Extended Warranty Options</h4>
                            <p className="text-[#0A1F4D]/80 mb-4">
                              Protect your investment with our comprehensive extended warranty plans
                            </p>
                            <Button className="bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 text-white hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] transition-colors">
                              Learn More About Warranties
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pricing and Actions */}
          <div className="space-y-6">
            {/* Vehicle Title and Price */}
            <Card className="shadow-2xl border border-[#C0C0C0]/30 bg-white/90 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-[#0A1F4D] mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h1>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(vehicle.rating) ? "fill-[#0A1F4D] text-[#0A1F4D]" : "text-[#C0C0C0]"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[#0A1F4D]/80">
                      ({vehicle.rating}) • {vehicle.viewCount} views
                    </span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 bg-clip-text text-transparent mb-2">
                    ${vehicle.price.toLocaleString()}
                  </div>
                  {vehicle.originalPrice > vehicle.price && (
                    <div className="text-xl text-[#0A1F4D]/60 line-through mb-2">
                      ${vehicle.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="text-[#0A1F4D]/80">
                    {vehicle.mileage.toLocaleString()} miles • {vehicle.condition}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white text-lg py-4 shadow-xl transition-colors">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Payment
                  </Button>

                  <Button className="w-full bg-gradient-to-r from-[#C0C0C0] to-[#A0A0A0] hover:from-[#A0A0A0] hover:to-[#808080] text-[#0A1F4D] text-lg py-4 shadow-xl transition-colors">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Pre-Approved
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`${
                        isFavorite
                          ? "bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white"
                          : "bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 hover:from-[#0A1F4D]/10 hover:to-[#0A1F4D]/20 text-[#0A1F4D]"
                      } transition-all duration-300 border border-[#C0C0C0]/30`}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-white" : ""}`} />
                      {isFavorite ? "Saved" : "Save"}
                    </Button>

                    <Button className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 hover:from-[#0A1F4D]/10 hover:to-[#0A1F4D]/20 text-[#0A1F4D] border border-[#C0C0C0]/30 transition-colors">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-2xl border border-[#C0C0C0]/30 bg-white/90 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#0A1F4D]">
                  <Phone className="w-5 h-5 text-[#0A1F4D]" />
                  Contact Our Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0A1F4D] mb-1">(555) 123-4567</div>
                  <div className="text-[#0A1F4D]/80">Sales Department</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-lg border border-[#C0C0C0]/30">
                    <MapPin className="w-5 h-5 text-[#0A1F4D]" />
                    <div>
                      <div className="font-semibold text-[#0A1F4D]">Visit Our Showroom</div>
                      <div className="text-sm text-[#0A1F4D]/80">123 Auto Drive, Dallas, TX</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-lg border border-[#C0C0C0]/30">
                    <Clock className="w-5 h-5 text-[#0A1F4D]" />
                    <div>
                      <div className="font-semibold text-[#0A1F4D]">Business Hours</div>
                      <div className="text-sm text-[#0A1F4D]/80">Mon-Sat: 9AM-8PM</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#0A1F4D]/5 to-[#0A1F4D]/10 rounded-lg border border-[#C0C0C0]/30">
                    <Mail className="w-5 h-5 text-[#0A1F4D]" />
                    <div>
                      <div className="font-semibold text-[#0A1F4D]">Email Us</div>
                      <div className="text-sm text-[#0A1F4D]/80">info@carmigo.com</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white transition-colors">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Test Drive
                </Button>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-2xl border border-[#C0C0C0]/30 bg-white/90 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#0A1F4D] mb-4 text-center">Why Choose Carmigo?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#0A1F4D] font-medium">Licensed & Insured Dealer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#0A1F4D] font-medium">BBB A+ Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#0A1F4D] font-medium">15,000+ Happy Customers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#0A1F4D] font-medium">4.9/5 Customer Rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#0A1F4D] mb-8 text-center">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedVehicles.map((car) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden shadow-xl border border-[#C0C0C0]/30 bg-white/90 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className="relative">
                      <Image
                        src={car.image || "/placeholder.svg"}
                        alt={`${car.year} ${car.make} ${car.model}`}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      {car.savings > 0 && (
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 text-white font-bold shadow-lg">
                          Save ${car.savings.toLocaleString()}
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#0A1F4D] mb-2">
                        {car.year} {car.make} {car.model}
                      </h3>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 bg-clip-text text-transparent mb-4">
                        ${car.price.toLocaleString()}
                      </div>
                      <Button asChild className="w-full bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white transition-colors">
                        <Link href={`/inventory/${car.id}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProfessionalFooter />
    </div>
  )
}
