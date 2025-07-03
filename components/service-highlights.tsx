"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  Star,
  Users,
  Sparkles,
  Settings,
} from "lucide-react"
import Link from "next/link"

export function ServiceHighlights() {
  const services = [
    {
      icon: Wrench,
      title: "Expert Service & Maintenance",
      description: "ASE-certified technicians providing comprehensive automotive service",
      features: [
        "150-point inspection",
        "Genuine OEM parts",
        "Factory-trained technicians",
        "Same-day service available",
      ],
      badge: "ASE Certified",
      color: "from-[#0A1F4D] to-[#0A1F4D]/80",
      gradient: "from-[#0A1F4D]/5 to-[#C0C0C0]/10",
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Comprehensive protection plans for peace of mind",
      features: [
        "Bumper-to-bumper coverage",
        "Roadside assistance 24/7",
        "Rental car coverage",
        "Transferable warranties",
      ],
      badge: "Full Coverage",
      color: "from-[#0A1F4D] to-[#0A1F4D]/70",
      gradient: "from-[#0A1F4D]/5 to-[#C0C0C0]/10",
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Quick turnaround for routine maintenance and repairs",
      features: [
        "Oil changes in 30 minutes",
        "While-you-wait service",
        "Online appointment booking",
        "Service reminders",
      ],
      badge: "Fast Service",
      color: "from-[#0A1F4D] to-[#0A1F4D]/60",
      gradient: "from-[#0A1F4D]/5 to-[#C0C0C0]/10",
    },
  ]

  const certifications = [
    { name: "ASE Certified", icon: Award },
    { name: "Factory Authorized", icon: Shield },
    { name: "BBB A+ Rating", icon: Star },
    { name: "Customer Choice Award", icon: Users },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-[#0A1F4D]/5 to-[#C0C0C0]/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0A1F4D]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#C0C0C0]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F4D]/10 to-[#C0C0C0]/20 rounded-full px-4 py-2 mb-4">
              <Settings className="w-4 h-4 text-[#0A1F4D]" />
              <span className="text-[#0A1F4D] font-medium text-sm">Service Excellence</span>
            </div>
            <h2 className="text-heading mb-4 bg-gradient-to-r from-[#0A1F4D] to-[#C0C0C0] bg-clip-text text-transparent">
              Complete Automotive Care
            </h2>
            <p className="text-[#0A1F4D]/80 text-lg max-w-2xl mx-auto">
              From routine maintenance to major repairs, our certified technicians keep your vehicle running at its best
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full border-0 bg-white/80 backdrop-blur-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-[#0A1F4D]/10 to-[#C0C0C0]/20 text-[#0A1F4D] border-[#0A1F4D]/30">
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0A1F4D] mb-4">{service.title}</h3>
                  <p className="text-[#0A1F4D]/80 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-[#0A1F4D] font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white shadow-lg transition-colors duration-300"
                  >
                    <Link href="/services">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#C0C0C0]/30"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A1F4D] to-[#0A1F4D]/90 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#0A1F4D] mb-4">Trusted & Certified</h3>
            <p className="text-[#0A1F4D]/80 max-w-2xl mx-auto text-lg">
              Our commitment to excellence is recognized by industry leaders and customers alike
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A1F4D] to-[#0A1F4D]/90 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <cert.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-[#0A1F4D]">{cert.name}</h4>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0A1F4D] to-[#0A1F4D]/90 hover:from-[#0A1F4D]/90 hover:to-[#0A1F4D] text-white shadow-xl transition-colors duration-300"
            >
              <Link href="/services">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Service
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#C0C0C0]/80 to-[#C0C0C0] hover:from-[#C0C0C0] hover:to-[#C0C0C0]/80 text-[#0A1F4D] shadow-xl transition-colors duration-300"
            >
              <Link href="tel:5551234567">
                <Phone className="h-5 w-5 mr-2" />
                Call Service Dept
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
