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

const technologies = [
  "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", 
  "Redis", "Docker", "AWS", "Google Cloud", "Firebase", "Supabase",
  "Prisma", "GraphQL", "REST APIs", "Microservices"
]

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

const services = [
  {
    title: "Custom Business Software",
    description: "Tailored applications designed specifically for your business processes and requirements",
    features: ["Custom Workflows", "Business Logic", "Integration APIs", "User Training"]
  },
  {
    title: "CRM & ERP Systems",
    description: "Customer relationship management and enterprise resource planning solutions",
    features: ["Contact Management", "Sales Pipeline", "Inventory Tracking", "Financial Reports"]
  },
  {
    title: "Document Management",
    description: "Digital document storage, organization, and workflow management systems",
    features: ["File Storage", "Version Control", "Access Control", "Search & Filter"]
  },
  {
    title: "Project Management Tools",
    description: "Custom project management applications with task tracking and team collaboration",
    features: ["Task Management", "Time Tracking", "Team Collaboration", "Progress Reports"]
  }
]

const industries = [
  {
    title: "Healthcare",
    description: "Patient management systems, appointment scheduling, and medical record keeping.",
    icon: "🏥"
  },
  {
    title: "Education",
    description: "Learning management systems, student portals, and educational content delivery.",
    icon: "🎓"
  },
  {
    title: "Finance",
    description: "Financial planning tools, expense tracking, and compliance reporting systems.",
    icon: "💼"
  },
  {
    title: "Manufacturing",
    description: "Inventory management, production planning, and quality control systems.",
    icon: "🏭"
  },
  {
    title: "Retail",
    description: "Point-of-sale systems, inventory management, and customer loyalty programs.",
    icon: "🛍️"
  },
  {
    title: "Non-Profit",
    description: "Donor management, volunteer coordination, and impact tracking systems.",
    icon: "🤝"
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
              href="/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <div className="flex items-center justify-center gap-4 mb-6">
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
              Technologies & Platforms
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I use modern, scalable technologies to build robust business applications that grow with your company.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
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
              Business Application Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From simple workflow automation to complex enterprise systems, I deliver solutions that transform your business operations.
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

      {/* Industries Section */}
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
              Industries I Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience across various industries with deep understanding of sector-specific requirements and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full group hover:bg-black/60 text-center">
                  <CardHeader>
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {industry.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
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
              Development Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach ensuring your business application meets your exact requirements and delivers measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-transparent -translate-y-0.5" />
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