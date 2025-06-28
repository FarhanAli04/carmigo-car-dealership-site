"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Quote } from "lucide-react"
import Image from "next/image"

const videoTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "BMW X5 Owner",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    quote:
      "The entire experience was seamless. From browsing online to driving home my dream car, Carmigo exceeded every expectation.",
    duration: "2:34",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Mercedes C-Class Owner",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    quote:
      "I saved over $8,000 compared to other dealers, and the quality was outstanding. The team really cares about their customers.",
    duration: "1:58",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Audi Q7 Owner",
    rating: 5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    quote: "The financing process was incredibly smooth. Got approved in under 60 seconds and drove home the same day!",
    duration: "3:12",
    verified: true,
  },
]

export function VideoTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Real Stories from
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear directly from customers who found their perfect car at Carmigo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 backdrop-blur-sm group-hover:scale-105">
                <div className="relative">
                  <Image
                    src={testimonial.thumbnail || "/placeholder.svg"}
                    alt={`${testimonial.name} testimonial`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                    <Button
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full w-16 h-16 p-0"
                    >
                      <Play className="h-6 w-6 text-white ml-1" />
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  <Badge className="absolute top-4 right-4 bg-black/70 text-white border-0">
                    {testimonial.duration}
                  </Badge>

                  {/* Verified Badge */}
                  {testimonial.verified && (
                    <Badge className="absolute top-4 left-4 bg-green-500/90 text-white border-0">
                      Verified Purchase
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="h-6 w-6 text-yellow-400/50 mb-2" />
                    <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
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
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full"
          >
            View All Customer Stories
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
