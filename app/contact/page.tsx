"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageSquare, Car, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend
    alert("Message sent! We'll get back to you within 24 hours.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "email",
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(555) 123-4567",
      secondary: "Mon-Sat: 9AM-8PM",
      action: "tel:+15551234567",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      primary: "Chat with us now",
      secondary: "Available 24/7",
      action: "#",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@carmigo.com",
      secondary: "Response within 24hrs",
      action: "mailto:info@carmigo.com",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: MapPin,
      title: "Visit Showroom",
      primary: "123 Auto Drive",
      secondary: "Dallas, TX 75201",
      action: "#",
      color: "from-orange-500 to-red-600",
    },
  ]

  const quickActions = [
    {
      icon: Car,
      title: "Browse Inventory",
      description: "View our latest vehicles",
      link: "/inventory",
    },
    {
      icon: DollarSign,
      title: "Get Financing",
      description: "Apply for auto loans",
      link: "/financing",
    },
    {
      icon: Calendar,
      title: "Schedule Service",
      description: "Book maintenance appointment",
      link: "/services",
    },
  ]

  const departments = [
    { name: "Sales", phone: "(555) 123-4567", email: "sales@carmigo.com" },
    { name: "Service", phone: "(555) 123-4568", email: "service@carmigo.com" },
    { name: "Parts", phone: "(555) 123-4569", email: "parts@carmigo.com" },
    { name: "Finance", phone: "(555) 123-4570", email: "finance@carmigo.com" },
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
            <h1 className="text-display mb-6">Contact Carmigo</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Have questions? We're here to help you find your perfect car and provide exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Get In Touch</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Choose the contact method that works best for you. We're available to help with all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center hover-lift"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{method.title}</h3>
                <p className="text-slate-600 font-medium mb-1">{method.primary}</p>
                <p className="text-slate-500 text-sm mb-4">{method.secondary}</p>
                <a href={method.action} className="btn-primary text-sm">
                  Contact Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-professional p-8">
                <h2 className="text-subheading mb-6 text-slate-800">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Vehicle Sales</option>
                      <option value="service">Service Question</option>
                      <option value="financing">Financing</option>
                      <option value="trade-in">Trade-In</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Location Info */}
              <div className="card-professional p-8">
                <h3 className="text-xl font-semibold mb-6 text-slate-800">Visit Our Showroom</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-800">Main Location</p>
                      <p className="text-slate-600">123 Auto Drive</p>
                      <p className="text-slate-600">Dallas, TX 75201</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-800">Business Hours</p>
                      <div className="text-slate-600 text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 12:00 PM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="aspect-video w-full bg-slate-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-500">Interactive Map</p>
                      <p className="text-sm text-slate-400">123 Auto Drive, Dallas, TX 75201</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <a href="https://maps.google.com" className="btn-outline flex-1 text-center">
                      Get Directions
                    </a>
                    <a href="tel:5551234567" className="btn-primary flex-1 text-center">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-professional p-8">
                <h3 className="text-xl font-semibold mb-6 text-slate-800">Quick Actions</h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={action.title}
                      href={action.link}
                      className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <action.icon className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-slate-800">{action.title}</p>
                        <p className="text-sm text-slate-600">{action.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Department Contacts</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Need to reach a specific department? Here are direct contact details for faster service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center hover-lift"
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{dept.name}</h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${dept.phone.replace(/\D/g, "")}`}
                    className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{dept.phone}</span>
                  </a>
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{dept.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do you offer financing?",
                answer:
                  "Yes! We work with multiple lenders to offer competitive financing options for all credit types.",
              },
              {
                question: "Can I trade in my current vehicle?",
                answer: "We accept trade-ins and offer competitive values. Use our online estimator to get started.",
              },
              {
                question: "Do you offer warranties?",
                answer:
                  "Yes, we offer extended warranties on most vehicles. Our team can explain the options available.",
              },
              {
                question: "Can I schedule a test drive?",
                answer:
                  "Of course! Contact us to schedule a test drive at your convenience. We're flexible with timing.",
              },
              {
                question: "What documents do I need to buy a car?",
                answer: "You'll need a valid driver's license, proof of insurance, and proof of income for financing.",
              },
              {
                question: "Do you service all vehicle makes?",
                answer:
                  "Our certified technicians can service most makes and models. Contact our service department for details.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6"
              >
                <h3 className="font-semibold mb-3 text-slate-800">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  )
}
