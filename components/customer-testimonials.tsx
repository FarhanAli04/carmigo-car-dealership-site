"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, CheckCircle, Sparkles, Users } from "lucide-react"
import Image from "next/image"

export function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "BMW X5 Owner",
      location: "Houston, TX",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The entire experience was seamless from start to finish. The team at Carmigo went above and beyond to help me find the perfect BMW X5. The financing process was quick and transparent, and I drove away the same day!",
      purchaseDate: "March 2024",
      verified: true,
      vehiclePurchased: "2023 BMW X5",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Mercedes C-Class Owner",
      location: "Dallas, TX",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I saved over $8,000 compared to other dealers, and the quality was outstanding. The team really cares about their customers and it shows in every interaction. Highly recommend Carmigo!",
      purchaseDate: "February 2024",
      verified: true,
      vehiclePurchased: "2022 Mercedes-Benz C-Class",
    },
    {
      id: 3,
      name: "Emily Chen",
      title: "Audi Q7 Owner",
      location: "Austin, TX",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The financing process was incredibly smooth. Got approved in under 60 seconds and the rates were better than my bank offered. The vehicle quality exceeded my expectations.",
      purchaseDate: "January 2024",
      verified: true,
      vehiclePurchased: "2023 Audi Q7",
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Ford F-150 Owner",
      location: "San Antonio, TX",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Professional service from day one. They helped me find exactly what I was looking for within my budget. The trade-in process was fair and hassle-free. Will definitely return for my next vehicle.",
      purchaseDate: "December 2023",
      verified: true,
      vehiclePurchased: "2023 Ford F-150",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      title: "Tesla Model S Owner",
      location: "Fort Worth, TX",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Amazing experience! The team was knowledgeable about electric vehicles and helped me understand all the features. The delivery was on time and the car was in perfect condition.",
      purchaseDate: "November 2023",
      verified: true,
      vehiclePurchased: "2022 Tesla Model S",
    },
    {
      id: 6,
      name: "Robert Kim",
      title: "Porsche Cayenne Owner",
      location: "Plano, TX",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Exceptional service and attention to detail. They made the luxury car buying experience truly special. The vehicle history was transparent and the warranty coverage is comprehensive.",
      purchaseDate: "October 2023",
      verified: true,
      vehiclePurchased: "2023 Porsche Cayenne",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-4">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-medium text-sm">Customer Stories</span>
            </div>
            <h2 className="text-heading mb-4 bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from real customers who found their perfect vehicle at Carmigo
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full px-4 py-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-amber-700 ml-2">4.9</span>
              </div>
              <div className="text-slate-600 font-medium">Based on 247+ verified reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full object-cover ring-2 ring-blue-200"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">{testimonial.name}</h3>
                        <p className="text-sm text-slate-600">{testimonial.location}</p>
                        <p className="text-xs text-slate-500">{testimonial.purchaseDate}</p>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mb-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-blue-600/20 mb-3" />
                    <p className="text-slate-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                      <div className="text-sm text-slate-600">
                        <span className="font-semibold">Vehicle Purchased:</span>
                        <br />
                        <span className="text-blue-600 font-medium">{testimonial.vehiclePurchased}</span>
                      </div>
                    </div>
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
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border-0">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Join Our Happy Customers</h3>
            <p className="text-slate-600 mb-6">
              Experience the Carmigo difference and see why our customers consistently rate us 5 stars
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <Star className="w-4 h-4 mr-2" />
                Leave a Google Review
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Share Your Experience
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
