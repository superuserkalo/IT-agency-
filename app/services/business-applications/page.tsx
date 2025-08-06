"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Building, Database, Workflow, Cloud, Users, BarChart3, CheckCircle, ArrowRight, Cpu, Lock, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedGradientButton } from "@/components/ui/animated-gradient-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"


const features = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows to increase efficiency and reduce errors."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust database architecture optimized for performance and scalability."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with cloud services for enhanced functionality and reliability."
  },
  {
    icon: Users,
    title: "User Management",
    description: "Advanced user roles, permissions, and authentication systems."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and comprehensive reporting capabilities."
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance to industry standards."
  }
]



const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Deep dive into your business processes to understand current workflows and identify improvement opportunities."
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Design scalable architecture and select the best technologies for your specific requirements."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with regular testing and feedback loops to ensure quality and functionality."
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Smooth deployment to production with comprehensive user training and documentation."
  }
]

const benefits = [
  {
    icon: Cpu,
    title: "Increased Efficiency",
    description: "Automate manual processes and reduce time spent on repetitive tasks."
  },
  {
    icon: BarChart3,
    title: "Better Decision Making",
    description: "Real-time data and analytics to make informed business decisions."
  },
  {
    icon: Zap,
    title: "Competitive Advantage",
    description: "Custom solutions that give you an edge over competitors using generic software."
  }
]

export default function BusinessApplicationsPage() {
  return (
    <div className="flex flex-col text-gray-50 relative">
      {/* Animated particle background */}
      <AnimatedBackground />
      {/* Fixed background gradient that stays in place */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent z-0" />
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
                <Building className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Business Applications
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Custom software solutions designed to streamline your business processes, increase efficiency, 
              and give you a competitive advantage in your industry.
            </p>
            <div className="flex justify-center">
              <AnimatedGradientButton size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Streamline Your Business
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
              Application Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive features designed to address your specific business needs and challenges.
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

          {/* Benefits */}
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
              A structured approach ensuring your business application meets your exact requirements and delivers measurable results.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how custom business applications can streamline your operations and drive growth.
            </p>
            <div className="flex justify-center">
              <AnimatedGradientButton size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started Today
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