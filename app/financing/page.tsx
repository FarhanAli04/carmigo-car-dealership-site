"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, DollarSign, Clock, Shield, Zap, Users } from "lucide-react"
import ProfessionalHeader from "@/components/professional-header"
import ProfessionalFooter from "@/components/professional-footer"

export default function FinancingPage() {
  const [loanAmount, setLoanAmount] = useState([35000])
  const [downPayment, setDownPayment] = useState([7000])
  const [loanTerm, setLoanTerm] = useState([60])
  const [interestRate, setInterestRate] = useState([5.9])
  const [creditScore, setCreditScore] = useState("good")
  const [currentTime, setCurrentTime] = useState(new Date())

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    income: "",
    employment: "",
    creditScore: "good",
    desiredPayment: "",
    tradeInValue: "",
  })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Calculate monthly payment
  const calculatePayment = () => {
    const principal = loanAmount[0] - downPayment[0]
    const monthlyRate = interestRate[0] / 100 / 12
    const numPayments = loanTerm[0]

    if (monthlyRate === 0) return principal / numPayments

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    return monthlyPayment
  }

  const monthlyPayment = calculatePayment()
  const totalInterest = monthlyPayment * loanTerm[0] - (loanAmount[0] - downPayment[0])
  const totalCost = monthlyPayment * loanTerm[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend
    alert("Application submitted! We'll contact you within 60 seconds with your pre-approval decision.")
  }

  const benefits = [
    {
      icon: Zap,
      title: "60-Second Pre-Approval",
      description: "Get instant pre-approval decisions with our advanced AI-powered system",
      highlight: "Instant Decision",
    },
    {
      icon: DollarSign,
      title: "Rates Starting at 2.99%",
      description: "Competitive rates for qualified buyers with excellent credit",
      highlight: "Best Rates",
    },
    {
      icon: Shield,
      title: "Secure & Protected",
      description: "Bank-level encryption protects your personal and financial information",
      highlight: "100% Secure",
    },
    {
      icon: Users,
      title: "All Credit Types Welcome",
      description: "We work with customers of all credit backgrounds to find solutions",
      highlight: "All Credit OK",
    },
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
            <h1 className="text-display mb-6">Auto Financing Made Simple</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Get pre-approved in 60 seconds with competitive rates, flexible terms, and transparent pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{benefit.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{benefit.description}</p>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                  {benefit.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator and Form Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-professional p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="h-6 w-6 mr-3 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-800">Payment Calculator</h2>
                </div>
                <p className="text-slate-600 mb-8">Calculate your estimated monthly payment</p>

                <div className="space-y-8">
                  {/* Vehicle Price */}
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-3">
                      Vehicle Price: ${loanAmount[0].toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      step="1000"
                      value={loanAmount[0]}
                      onChange={(e) => setLoanAmount([Number.parseInt(e.target.value)])}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>$10,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-3">
                      Down Payment: ${downPayment[0].toLocaleString()} (
                      {((downPayment[0] / loanAmount[0]) * 100).toFixed(1)}%)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={Math.min(loanAmount[0] * 0.5, 25000)}
                      step="500"
                      value={downPayment[0]}
                      onChange={(e) => setDownPayment([Number.parseInt(e.target.value)])}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-3">
                      Loan Term: {loanTerm[0]} months ({(loanTerm[0] / 12).toFixed(1)} years)
                    </label>
                    <input
                      type="range"
                      min="24"
                      max="84"
                      step="12"
                      value={loanTerm[0]}
                      onChange={(e) => setLoanTerm([Number.parseInt(e.target.value)])}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="block text-base font-medium text-slate-700 mb-3">
                      Interest Rate: {interestRate[0]}% APR
                    </label>
                    <input
                      type="range"
                      min="2.99"
                      max="15"
                      step="0.1"
                      value={interestRate[0]}
                      onChange={(e) => setInterestRate([Number.parseFloat(e.target.value)])}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Estimated Monthly Payment</h3>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-green-600 mb-2">${monthlyPayment.toFixed(0)}</div>
                      <div className="text-slate-600">per month</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-slate-800 font-medium">
                          ${(loanAmount[0] - downPayment[0]).toLocaleString()}
                        </div>
                        <div className="text-slate-600">Loan Amount</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-slate-800 font-medium">${totalInterest.toFixed(0)}</div>
                        <div className="text-slate-600">Total Interest</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card-professional p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Get Pre-Approved in 60 Seconds</h2>
                <p className="text-slate-600 mb-8">
                  Fill out this secure form to get your instant pre-approval decision
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Annual Income *</label>
                    <input
                      type="number"
                      placeholder="75000"
                      value={formData.income}
                      onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Employment Status *</label>
                    <select
                      value={formData.employment}
                      onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                      className="focus-ring w-full p-3 border border-slate-300 rounded-lg"
                      required
                    >
                      <option value="">Select employment status</option>
                      <option value="full-time">Full-time Employee</option>
                      <option value="part-time">Part-time Employee</option>
                      <option value="self-employed">Self-employed</option>
                      <option value="retired">Retired</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    <Zap className="h-5 w-5 mr-2" />
                    Get Instant Pre-Approval
                  </button>

                  <div className="text-center space-y-2">
                    <p className="text-xs text-slate-500">
                      * Required fields. Your information is secure and will not affect your credit score.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        <span>SSL Secured</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>60-Second Decision</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  )
}
