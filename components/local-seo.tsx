"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Phone, Clock, Navigation, Car, Sparkles, Users } from "lucide-react"
import Link from "next/link"

export function LocalSEO() {
  const serviceAreas = [
    { city: "Dallas", distance: "0 miles", population: "1.3M" },
    { city: "Fort Worth", distance: "32 miles", population: "918K" },
    { city: "Arlington", distance: "18 miles", population: "394K" },
    { city: "Plano", distance: "25 miles", population: "285K" },
    { city: "Irving", distance: "15 miles", population: "256K" },
    { city: "Garland", distance: "20 miles", population: "246K" },
    { city: "Frisco", distance: "35 miles", population: "200K" },
    { city: "McKinney", distance: "40 miles", population: "195K" },
  ]

  const localFeatures = [
    {
      icon: Car,
      title: "Free Delivery",
      description: "Complimentary vehicle delivery within 100 miles of Dallas",
      badge: "No Cost",
    },
    {
      icon: Navigation,
      title: "Easy Access",
      description: "Conveniently located near major highways and DFW Airport",
      badge: "Central Location",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "20+ years serving the Dallas-Fort Worth metroplex",
      badge: "Trusted Local",
    },
    {
      icon: Star,
      title: "Community Choice",
      description: "Voted Best Auto Dealer in Dallas for 3 consecutive years",
      badge: "Award Winner",
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F4D]/5 to-[#C0C0C0]/10" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0A1F4D]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#C0C0C0]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F4D]/10 to-[#C0C0C0]/20 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-[#0A1F4D]" />
              <span className="text-[#0A1F4D] font-medium text-sm">Serving DFW Metroplex</span>
            </div>
            <h2 className="text-heading mb-4 bg-gradient-to-r from-[#0A1F4D] to-[#C0C0C0] bg-clip-text text-transparent">
              Your Local Dallas Auto Dealer
            </h2>
            <p className="text-[#0A1F4D]/80 text-lg max-w-2xl mx-auto">
              Proudly serving the Dallas-Fort Worth metroplex with quality vehicles, competitive financing, and
              exceptional service for over 20 years.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0A1F4D] to-[#0A1F4D]/80 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A1F4D]">Service Areas</h3>
                    <p className="text-[#0A1F4D]/80">We deliver throughout the DFW metroplex</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.map((area, index) => (
                    <motion.div
                      key={area.city}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#C0C0C0]/10 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[#0A1F4D]/10"
                    >
                      <h4 className="font-bold text-[#0A1F4D]">{area.city}</h4>
                      <p className="text-sm text-[#0A1F4D]/80">{area.distance}</p>
                      <p className="text-xs text-[#0A1F4D]/60">{area.population} residents</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#0A1F4D]/5 to-[#C0C0C0]/10 rounded-xl border border-[#0A1F4D]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="w-5 h-5 text-[#0A1F4D]" />
                    <span className="font-semibold text-[#0A1F4D]">Free Delivery Available</span>
                  </div>
                  <p className="text-[#0A1F4D]/80 text-sm">
                    Complimentary vehicle delivery within 100 miles of our Dallas location
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Local Features */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="space-y-6">
              {localFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0A1F4D] to-[#0A1F4D]/80 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-[#0A1F4D]">{feature.title}</h3>
                            <Badge className="bg-gradient-to-r from-[#0A1F4D]/10 to-[#C0C0C0]/20 text-[#0A1F4D] border-[#0A1F4D]/30">
                              {feature.badge}
                            </Badge>
                          </div>
                          <p className="text-[#0A1F4D]/80">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-[#C0C0C0]/30"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#0A1F4D] to-[#0A1F4D]/90 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-[#0A1F4D] mb-4">Visit Our Dallas Showroom</h3>
          <p className="text-[#0A1F4D]/80 mb-6 max-w-2xl mx-auto text-lg">
            Experience our premium inventory and exceptional service in person. We're conveniently located in the heart
            of Dallas with easy access from anywhere in the metroplex.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#C0C0C0]/10 rounded-xl p-4 border border-[#0A1F4D]/10">
              <MapPin className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
              <h4 className="font-bold text-[#0A1F4D]">Address</h4>
              <p className="text-[#0A1F4D]/80 text-sm">123 Auto Drive, Dallas, TX 75201</p>
            </div>
            <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#C0C0C0]/10 rounded-xl p-4 border border-[#0A1F4D]/10">
              <Phone className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
              <h4 className="font-bold text-[#0A1F4D]">Phone</h4>
              <p className="text-[#0A1F4D]/80 text-sm">(555) 123-4567</p>
            </div>
            <div className="bg-gradient-to-r from-[#0A1F4D]/5 to-[#C0C0C0]/10 rounded-xl p-4 border border-[#0A1F4D]/10">
              <Clock className="w-8 h-8 text-[#0A1F4D] mx-auto mb-2" />
              <h4 className="font-bold text-[#0A1F4D]">Hours</h4>
              <p className="text-[#0A1F4D]/80 text-sm">Mon-Sat: 9AM-8PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white shadow-xl transition-colors duration-300"
            >
              <Link href="/contact">
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#C0C0C0]/80 to-[#C0C0C0] hover:from-[#C0C0C0] hover:to-[#C0C0C0]/80 text-[#0A1F4D] shadow-xl transition-colors duration-300"
            >
              <Link href="tel:5551234567">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
