"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShoppingCart, CreditCard, Package, BarChart3, Users, Shield, CheckCircle, ArrowRight, Smartphone, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedGradientButton } from "@/components/ui/animated-gradient-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const features = [
  {
    icon: ShoppingCart,
    title: "Advanced Shopping Cart",
    description: "Intuitive cart with save for later, guest checkout, and abandoned cart recovery."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment gateways with SSL encryption and PCI compliance."
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time stock tracking, low inventory alerts, and automated reordering."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive sales reports, customer insights, and performance analytics."
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Customer accounts, order history, wishlist, and loyalty programs."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "GDPR compliance, data protection, and secure customer information handling."
  }
]


const process = [
  {
    step: "01",
    title: "Business Analysis",
    description: "Understanding your products, target market, and business model to design the perfect e-commerce solution."
  },
  {
    step: "02",
    title: "Platform Selection",
    description: "Choosing the right e-commerce platform and payment gateways based on your specific needs and budget."
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Creating a beautiful, user-friendly store with all necessary features and integrations."
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Thorough testing of all features, payment processing, and performance optimization before going live."
  }
]

const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Sell to customers worldwide with multi-currency and multi-language support."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Fully responsive design that works perfectly on all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with fast loading times and smooth checkout process."
  }
]

export default function EcommercePage() {
  return (
    <div className="flex flex-col text-gray-50 relative bg-black">
      {/* Animated particle background */}
      {/* Fixed background gradient that stays in place */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 z-0" />
      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-2 sm:gap-4 mb-6">
              <div className="p-3 rounded-full bg-purple-500/20">
                <ShoppingCart className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                E-Commerce Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Complete online stores with payment integration, inventory management, and powerful admin dashboards. 
              Turn your products into profitable online businesses.
            </p>
            <div className="flex justify-center">
              <AnimatedGradientButton size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Store
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedGradientButton>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              E-Commerce Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive features to help you sell more and manage your store efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full group hover:bg-black/60">
                  <CardHeader>
                    <div className="p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors w-fit mb-4">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven process to deliver your e-commerce store on time and within budget.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center gap-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="block lg:hidden space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Let's build an e-commerce solution that converts visitors into customers and grows your business online.
            </p>
            <div className="flex justify-center">
              <AnimatedGradientButton size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Selling Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedGradientButton>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}