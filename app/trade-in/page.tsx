"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Car, DollarSign, Clock, CheckCircle } from "lucide-react"
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

export default function TradeInPage() {
  const [step, setStep] = useState(1)
  const [estimatedValue, setEstimatedValue] = useState(0)
  const [formData, setFormData] = useState({
    // Vehicle Info
    year: "",
    make: "",
    model: "",
    mileage: "",
    condition: "",
    accidents: "",
    maintenance: "",
    modifications: "",

    // Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",

    // Additional Info
    reason: "",
    timeline: "",
    comments: "",
  })

  const calculateEstimate = () => {
    // Simple estimation logic - in production, this would use KBB API or similar
    const baseValue = {
      "2023": 25000,
      "2022": 22000,
      "2021": 19000,
      "2020": 16000,
      "2019": 14000,
      "2018": 12000,
      "2017": 10000,
      "2016": 8000,
      "2015": 7000,
    }

    const conditionMultiplier = {
      excellent: 1.0,
      good: 0.85,
      fair: 0.7,
      poor: 0.5,
    }

    const mileageAdjustment = Math.max(0, 1 - (Number.parseInt(formData.mileage) - 50000) / 200000)
    const base = baseValue[formData.year as keyof typeof baseValue] || 5000
    const condition = conditionMultiplier[formData.condition as keyof typeof conditionMultiplier] || 0.7

    return Math.round(base * condition * mileageAdjustment)
  }

  const handleNext = () => {
    if (step === 1) {
      const estimate = calculateEstimate()
      setEstimatedValue(estimate)
    }
    setStep(step + 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend
    alert("Trade-in request submitted! We'll contact you within 24 hours to schedule an appraisal.")
  }

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
            <h1 className="text-display mb-6">Get Your Trade-In Value</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Get an instant estimate for your current vehicle and apply it toward your next car
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-blue-600" : "bg-slate-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-16 mt-4 text-sm">
            <span className={step >= 1 ? "text-blue-600 font-medium" : "text-slate-500"}>Vehicle Info</span>
            <span className={step >= 2 ? "text-blue-600 font-medium" : "text-slate-500"}>Estimate</span>
            <span className={step >= 3 ? "text-blue-600 font-medium" : "text-slate-500"}>Contact Info</span>
          </div>
        </div>

        {/* Step 1: Vehicle Information */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="card-professional p-8 max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Car className="h-6 w-6 mr-2 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800">Tell Us About Your Vehicle</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                    >
                      <option value="">Select year</option>
                      {Array.from({ length: 15 }, (_, i) => 2024 - i).map((year) => (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Make</label>
                    <select
                      value={formData.make}
                      onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                    >
                      <option value="">Select make</option>
                      {[
                        "Toyota",
                        "Honda",
                        "Ford",
                        "Chevrolet",
                        "Nissan",
                        "Hyundai",
                        "BMW",
                        "Mercedes-Benz",
                        "Audi",
                        "Volkswagen",
                      ].map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Model</label>
                    <input
                      type="text"
                      placeholder="e.g., Camry"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Mileage</label>
                  <input
                    type="number"
                    placeholder="e.g., 45000"
                    value={formData.mileage}
                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                    className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Overall Condition</label>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    {[
                      { value: "excellent", label: "Excellent - Like new, no visible wear" },
                      { value: "good", label: "Good - Minor wear, well maintained" },
                      { value: "fair", label: "Fair - Some wear, needs minor repairs" },
                      { value: "poor", label: "Poor - Significant wear, needs major repairs" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="condition"
                          value={option.value}
                          checked={formData.condition === option.value}
                          onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                          className="text-blue-600"
                        />
                        <span className="text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="btn-primary w-full"
                  disabled={
                    !formData.year || !formData.make || !formData.model || !formData.mileage || !formData.condition
                  }
                >
                  Get My Estimate
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Estimate Results */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="card-professional p-8 max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                <h2 className="text-2xl font-bold text-slate-800">Your Trade-In Estimate</h2>
              </div>

              <div className="bg-green-50 p-8 rounded-lg mb-8">
                <h3 className="text-lg font-medium mb-2">Estimated Trade-In Value</h3>
                <div className="text-5xl font-bold text-green-600 mb-4">${estimatedValue.toLocaleString()}</div>
                <p className="text-slate-600">
                  For your {formData.year} {formData.make} {formData.model}
                </p>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="btn-outline flex-1">
                  Modify Details
                </button>
                <button onClick={handleNext} className="btn-primary flex-1">
                  Schedule Appraisal
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="card-professional p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Schedule Your Appraisal</h2>
              <p className="text-slate-600 mb-8">
                We'll contact you to schedule a time for a physical inspection of your vehicle.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Trade-In Request
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by Carmigo regarding your trade-in request.
                </p>
              </form>
            </div>
          </motion.div>
        )}

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Why Trade In With Carmigo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Competitive Offers",
                description: "We offer fair market value for your trade-in, often beating other dealers",
              },
              {
                icon: Clock,
                title: "Quick Process",
                description: "Get an estimate in minutes and complete the trade-in the same day",
              },
              {
                icon: CheckCircle,
                title: "No Hassle",
                description: "Skip the private sale headaches - we handle all the paperwork",
              },
            ].map((benefit, index) => (
              <div key={index} className="card-professional p-6 text-center hover-lift">
                <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProfessionalFooter />
    </div>
  )
}
