"use client"

import { motion } from "framer-motion"
import {
  Wrench,
  DollarSign,
  FileText,
  Shield,
  Clock,
  CheckCircle,
  Award,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  Target,
} from "lucide-react"
import Link from "next/link"
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: DollarSign,
      title: "Auto Financing",
      description: "Competitive rates and flexible terms for all credit types",
      features: ["Quick pre-approval", "Multiple lender network", "Bad credit welcome", "Same-day approval"],
      link: "/financing",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FileText,
      title: "Vehicle Trade-In",
      description: "Get top dollar for your current vehicle with instant appraisals",
      features: ["Instant online quotes", "Competitive valuations", "Same-day processing", "No obligation"],
      link: "/trade-in",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description: "Complete automotive service from certified technicians",
      features: ["Factory-trained techs", "Genuine parts", "Warranty coverage", "Express service"],
      link: "/services#maintenance",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Protect your investment with comprehensive coverage plans",
      features: ["Bumper-to-bumper coverage", "Roadside assistance", "Rental car coverage", "Transferable"],
      link: "/services#warranty",
      color: "from-purple-500 to-indigo-600",
    },
  ]

  const serviceProcess = [
    {
      step: "01",
      title: "Schedule Appointment",
      description: "Book online or call to schedule your service at a convenient time",
    },
    {
      step: "02",
      title: "Drop Off Vehicle",
      description: "Bring your vehicle to our state-of-the-art service center",
    },
    {
      step: "03",
      title: "Expert Diagnosis",
      description: "Our certified technicians perform thorough inspection and diagnosis",
    },
    {
      step: "04",
      title: "Quality Service",
      description: "We complete the work using genuine parts and proven techniques",
    },
    {
      step: "05",
      title: "Quality Check",
      description: "Every job undergoes rigorous quality control before completion",
    },
    {
      step: "06",
      title: "Pick Up & Go",
      description: "Collect your vehicle and enjoy peace of mind on the road",
    },
  ]

  const additionalServices = [
    { name: "Oil Changes", price: "Starting at $29.99", time: "30 minutes" },
    { name: "Brake Service", price: "Starting at $149.99", time: "2-3 hours" },
    { name: "Tire Installation", price: "Starting at $19.99/tire", time: "1 hour" },
    { name: "Battery Replacement", price: "Starting at $89.99", time: "30 minutes" },
    { name: "AC Service", price: "Starting at $99.99", time: "1-2 hours" },
    { name: "Transmission Service", price: "Starting at $199.99", time: "2-4 hours" },
    { name: "Engine Diagnostics", price: "Starting at $129.99", time: "1 hour" },
    { name: "Wheel Alignment", price: "Starting at $79.99", time: "1 hour" },
  ]

  const certifications = [
    { name: "ASE Certified", icon: Award },
    { name: "Factory Authorized", icon: Shield },
    { name: "AAA Approved", icon: Star },
    { name: "BBB A+ Rating", icon: Target },
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
            <h1 className="text-display mb-6">Our Services</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Complete automotive solutions from financing to maintenance, all under one roof with expert service you
              can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Complete Automotive Solutions</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From finding your perfect vehicle to keeping it running smoothly, we provide comprehensive services for
              all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-8 hover-lift"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-slate-800">{service.title}</h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.link} className="btn-primary inline-flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Our Service Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We've streamlined our service process to make it as convenient and efficient as possible for our
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Service Menu & Pricing</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Transparent pricing for all our services with no hidden fees or surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card-professional p-6 hover-lift"
              >
                <h3 className="text-lg font-semibold mb-2 text-slate-800">{service.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{service.price}</p>
                <div className="flex items-center space-x-2 text-slate-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{service.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Need a custom quote? Our service advisors are here to help.</p>
            <Link href="/contact" className="btn-primary">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Certifications & Credentials</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our technicians hold industry-leading certifications and our facility meets the highest standards for
              automotive service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{cert.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-heading mb-6">Ready to Schedule Service?</h2>
              <p className="text-xl mb-8 text-slate-200">
                Our expert technicians are ready to keep your vehicle running at its best. Schedule your appointment
                today!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>123 Auto Drive, Dallas, TX 75201</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card-professional p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">Schedule Your Service</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="focus-ring p-3 border border-slate-300 rounded-lg text-slate-800"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="focus-ring p-3 border border-slate-300 rounded-lg text-slate-800"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="focus-ring w-full p-3 border border-slate-300 rounded-lg text-slate-800"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="focus-ring w-full p-3 border border-slate-300 rounded-lg text-slate-800"
                />

                <select className="focus-ring w-full p-3 border border-slate-300 rounded-lg text-slate-800">
                  <option>Select Service Type</option>
                  <option>Oil Change</option>
                  <option>Brake Service</option>
                  <option>Tire Service</option>
                  <option>General Maintenance</option>
                  <option>Diagnostics</option>
                  <option>Other</option>
                </select>

                <textarea
                  placeholder="Describe your service needs..."
                  rows={4}
                  className="focus-ring w-full p-3 border border-slate-300 rounded-lg text-slate-800"
                ></textarea>

                <button type="submit" className="btn-primary w-full">
                  Schedule Appointment
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  )
}
