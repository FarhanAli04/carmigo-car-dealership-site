"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  Clock,
  Shield,
  Users,
  CheckCircle,
  CreditCard,
  Calculator,
  Zap,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export function FinancingOptions() {
  const financingPlans = [
    {
      title: "Excellent Credit",
      subtitle: "750+ Credit Score",
      apr: "2.99%",
      features: [
        "Lowest available rates",
        "Flexible terms up to 84 months",
        "No down payment required",
        "Same-day approval",
        "Premium vehicle access",
      ],
      badge: "Best Rate",
      badgeColor: "from-green-500 to-emerald-500",
      icon: Award,
      gradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Good Credit",
      subtitle: "650-749 Credit Score",
      apr: "4.99%",
      features: [
        "Competitive rates",
        "Terms up to 72 months",
        "Low down payment options",
        "Quick approval process",
        "Wide vehicle selection",
      ],
      badge: "Popular",
      badgeColor: "from-blue-500 to-cyan-500",
      icon: TrendingUp,
      gradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Building Credit",
      subtitle: "550-649 Credit Score",
      apr: "7.99%",
      features: [
        "Credit building opportunity",
        "Flexible terms available",
        "Reasonable down payments",
        "Personal consultation",
        "Credit improvement tips",
      ],
      badge: "Most Flexible",
      badgeColor: "from-purple-500 to-pink-500",
      icon: Users,
      gradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Fresh Start",
      subtitle: "All Credit Situations",
      apr: "Starting at 9.99%",
      features: [
        "No credit turned away",
        "Second chance financing",
        "Bankruptcy OK",
        "Specialized programs",
        "Dedicated support team",
      ],
      badge: "All Welcome",
      badgeColor: "from-orange-500 to-red-500",
      icon: Shield,
      gradient: "from-orange-50 to-red-50",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "60-Second Pre-Approval",
      description: "Get instant decisions with our advanced AI-powered approval system",
      gradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "We work with 20+ lenders to find you the best possible rate",
      gradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Bank-level encryption protects your personal information",
      gradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our finance specialists help you every step of the way",
      gradient: "from-amber-50 to-orange-50",
    },
  ]

  const lenders = [
    "Chase Auto Finance",
    "Wells Fargo Dealer Services",
    "Bank of America",
    "Capital One Auto Finance",
    "Ally Financial",
    "Santander Consumer USA",
    "Credit Union Partners",
    "Local Texas Banks",
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">Financing Solutions</span>
            </div>
            <h2 className="text-heading mb-4 bg-gradient-to-r from-slate-800 to-green-600 bg-clip-text text-transparent">
              Financing Made Simple
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Get pre-approved in 60 seconds with competitive rates for all credit types. We make car financing easy and
              transparent.
            </p>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-500 hover:scale-105 h-full border-0 bg-white/80 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <benefit.icon className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Financing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full border-0 bg-white/80 backdrop-blur-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={`bg-gradient-to-r ${plan.badgeColor} text-white border-0 shadow-lg`}>
                      {plan.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{plan.title}</CardTitle>
                  <p className="text-slate-600 text-sm">{plan.subtitle}</p>
                  <div className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mt-3">
                    {plan.apr}
                    <span className="text-sm text-slate-500 font-normal"> APR*</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                  >
                    <Link href="/financing">
                      <Zap className="h-4 w-4 mr-2" />
                      Get Pre-Approved
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lender Network */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border-0"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Lender Network</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            We partner with 20+ trusted financial institutions to ensure you get the best possible rate and terms
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {lenders.map((lender, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-slate-700 font-semibold text-sm">{lender}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl"
            >
              <Link href="/financing">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Payment
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 shadow-xl"
            >
              <Link href="/contact">
                <CreditCard className="h-5 w-5 mr-2" />
                Speak with Expert
              </Link>
            </Button>
          </div>

          <p className="text-xs text-slate-500 mt-6">
            * APR (Annual Percentage Rate) varies based on creditworthiness, loan term, and other factors. Rates shown
            are for qualified buyers and subject to credit approval.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
