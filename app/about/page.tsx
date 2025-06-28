"use client"

import { motion } from "framer-motion"
import { Award, Car, Shield, Star, Heart, Target, Zap, Trophy } from "lucide-react"
import Link from "next/link"
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

export default function AboutPage() {
  const milestones = [
    { year: "2003", title: "Founded", description: "Started as a small family dealership" },
    { year: "2008", title: "Expansion", description: "Opened our second location" },
    { year: "2015", title: "Digital Innovation", description: "Launched online platform" },
    { year: "2020", title: "Award Recognition", description: "Dealer of the Year award" },
    { year: "2023", title: "15,000+ Customers", description: "Reached major milestone" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction at the forefront.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in transparent, honest dealings with no hidden fees or surprises.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every vehicle we sell and every service we provide.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace technology and innovation to enhance the car buying experience.",
    },
  ]

  const team = [
    {
      name: "Michael Rodriguez",
      position: "General Manager",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading our team with passion for automotive excellence and customer satisfaction.",
    },
    {
      name: "Sarah Johnson",
      position: "Sales Director",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in matching customers with their perfect vehicle and financing solutions.",
    },
    {
      name: "David Chen",
      position: "Service Manager",
      experience: "18+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Certified master technician ensuring every vehicle meets our quality standards.",
    },
    {
      name: "Lisa Thompson",
      position: "Finance Manager",
      experience: "10+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Helping customers secure the best financing options for their budget and needs.",
    },
  ]

  const achievements = [
    { icon: Trophy, title: "Dealer of the Year", year: "2023" },
    { icon: Star, title: "Customer Choice Award", year: "2022" },
    { icon: Shield, title: "BBB A+ Rating", year: "2021" },
    { icon: Award, title: "Excellence in Service", year: "2020" },
  ]

  return (
    <div className="min-h-screen">
      <ProfessionalHeader />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/placeholder.svg?height=400&width=1200)" }}
        ></div>

        <div className="relative z-20 container-custom text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-display mb-6">About Carmigo</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Your trusted automotive partner for over 20 years, committed to excellence and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-heading mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2003 by the Rodriguez family, Carmigo began as a small neighborhood dealership with a
                  simple mission: to provide quality vehicles and exceptional service to our community.
                </p>
                <p>
                  Over the past two decades, we've grown from a single location to become one of Texas's most trusted
                  automotive dealers, serving over 15,000 satisfied customers while maintaining our family values and
                  personal touch.
                </p>
                <p>
                  Today, we combine traditional values with modern technology to offer an unparalleled car buying
                  experience. From our extensive inventory to our streamlined financing process, everything we do is
                  designed with our customers in mind.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                  <div className="text-slate-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Carmigo Dealership"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Est. 2003</div>
                    <div className="text-slate-600 text-sm">Family Owned</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Our Journey</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Key milestones that have shaped our growth and commitment to excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="card-professional p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-800 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">{milestone.title}</h3>
                        <p className="text-blue-600 font-medium">{milestone.year}</p>
                      </div>
                    </div>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Meet Our Team</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you find your perfect vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional overflow-hidden hover-lift"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-slate-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-slate-500 text-sm mb-3">{member.experience}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Awards & Recognition</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Recognition for our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">{achievement.title}</h3>
                <p className="text-blue-600 font-medium">{achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h2 className="text-heading mb-6">Experience the Carmigo Difference</h2>
            <p className="text-xl mb-8 text-slate-200">
              Join our family of satisfied customers and discover why we're Texas's most trusted automotive dealer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory" className="btn-secondary text-lg px-8 py-4">
                Browse Our Inventory
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-slate-900"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  )
}
