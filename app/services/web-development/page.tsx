"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Code, Smartphone, Search, Zap, Shield, Layers, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedGradientButton } from "@/components/ui/animated-gradient-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
  "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", 
  "Firebase", "Vercel", "AWS", "Docker", "Git"
]

const features = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect display across all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed with fast loading times and smooth user interactions."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engine optimization in mind to improve your online visibility."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Industry-standard security practices and reliable hosting solutions."
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Future-proof solutions that can grow with your business needs."
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code following industry best practices."
  }
]

const services = [
  {
    title: "Custom Website Development",
    description: "Tailored websites built from scratch to meet your specific business requirements",
    features: ["Custom Design", "Content Management", "Performance Optimization", "Browser Compatibility"]
  },
  {
    title: "Single Page Applications (SPA)",
    description: "Dynamic, fast-loading applications for enhanced user experience",
    features: ["React/Next.js", "Real-time Updates", "Smooth Navigation", "API Integration"]
  },
  {
    title: "Progressive Web Apps (PWA)",
    description: "Web applications that work like native mobile apps",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"]
  },
  {
    title: "Website Redesign & Migration",
    description: "Modernize your existing website with updated design and technology",
    features: ["Modern UI/UX", "Technology Upgrade", "Data Migration", "SEO Preservation"]
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your business goals, target audience, and technical requirements to create a comprehensive project plan."
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes and design mockups to visualize the user interface and experience before development."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building your website with clean, maintainable code and rigorous testing across different devices and browsers."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploying your website to production and providing ongoing maintenance and support services."
  }
]

export default function WebDevelopmentPage() {
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
              href="/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Web Development
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Custom websites and web applications built with modern technologies. 
              From simple landing pages to complex web applications, I create digital solutions that drive results.
            </p>
            <AnimatedGradientButton size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedGradientButton>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies I Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I work with modern, industry-standard technologies to ensure your website is fast, secure, and scalable.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="bg-black/40 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-4 py-2 text-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
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
              What You Get
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every website I build comes with these essential features to ensure optimal performance and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Services Section */}
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
              Web Development Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your specific business needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 mb-6">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
              My Development Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach ensuring quality results and clear communication throughout your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  {/* Desktop horizontal connector line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-purple-600/50 transform translate-x-8" 
                         style={{ width: 'calc(100% + 2rem)' }} />
                  )}
                  
                  {/* Mobile vertical connector line */}
                  {index < process.length - 1 && (
                    <div className="block lg:hidden absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-600/50 to-purple-600/50 -translate-x-0.5" />
                  )}
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
              Ready to Start Your Web Project?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss your requirements and create a website that perfectly represents your business and engages your audience.
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