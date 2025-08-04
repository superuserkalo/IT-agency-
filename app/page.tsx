"use client"

import type React from "react"

import { useRef, Fragment } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Gem, Milestone, Server, Code, Asterisk } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion"
import { AnimatedGradientButton } from "@/components/ui/animated-gradient-button"

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const containerVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const keywords = [
  "Partner in Digital Growth",
  "Custom Web Development",
  "UX & UI Design",
  "Enterprise E-Commerce",
  "Digital Strategy That Drives Results",
  "Future-Proof & Scalable Architectures",
  "Performance Optimization",
  "Brand Identity",
  "Secure & Reliable Solutions",
]

export default function Component() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-gray-50" onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1] transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(148, 106, 223, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <Header />
      <main className="flex-1">
        <section id="hero" ref={heroRef} className="w-full h-[100vh] flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Empowering Businesses to Reach
                <br />
                New Digital Heights
              </h1>
            </motion.div>

            <div className="w-full max-w-6xl mx-auto overflow-hidden mt-20">
              <motion.div className="flex items-center gap-x-2" style={{ x }}>
                {[...keywords, ...keywords].map((keyword, i) => (
                  <Fragment key={i}>
                    <span className="text-gray-400 whitespace-nowrap text-xs shrink-0">{keyword}</span>
                    <Asterisk className="w-3 h-3 text-purple-500 shrink-0" />
                  </Fragment>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatedGradientButton>
                <Link href="/contact">Request a Consultation</Link>
              </AnimatedGradientButton>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="services"
          className="w-full pt-0 md:pt-8 pb-12 md:pb-24 lg:pb-32"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: "Custom Websites",
                  description:
                    "More than just beautiful — engineered for results. Your website is your digital flagship. We build modern, high-performance sites that reflect your brand and drive conversions.",
                  icon: <Code className="h-8 w-8 text-white" />,
                },
                {
                  title: "E-Commerce",
                  description:
                    "Enterprise-grade online stores that scale. Whether B2B or B2C, we create e-commerce platforms that deliver, optimizing every step of the buyer journey for growth.",
                  icon: <Gem className="h-8 w-8 text-white" />,
                },
                {
                  title: "Business Applications",
                  description:
                    "Custom-built tools to streamline your operations. We design and develop secure, scalable business applications tailored to your workflow, from internal platforms to client-facing portals.",
                  icon: <Server className="h-8 w-8 text-white" />,
                },
                {
                  title: "Marketing & SEO",
                  description:
                    "We architect digital growth — not just presence. Get found, get clicks, get results with full-service SEO, Google Ads, and social media campaigns tailored to your market.",
                  icon: <Milestone className="h-8 w-8 text-white" />,
                },
              ].map((service) => (
                <motion.div
                  key={service.title}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/5"
                  variants={cardVariants}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center text-purple-400 group-hover:text-purple-300"
                    >
                      Details{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={cardVariants}
            >
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the most common questions we get.
              </p>
            </motion.div>
            <motion.div className="max-w-3xl w-full mx-auto mt-12" variants={containerVariants}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "How long will it take to develop my website / app?",
                    a: "The timeline depends on the complexity of your project and your requirements. We focus on quality, not shortcuts. For most projects, we provide clear milestones and realistic deadlines after a detailed consultation.",
                  },
                  {
                    q: "Do you build custom solutions or use templates/CMS?",
                    a: "We specialize in tailored solutions. For business-critical systems, we recommend fully custom-built applications using modern frameworks. For smaller projects, we may use a CMS if it fits the client's needs.",
                  },
                  {
                    q: "Can you integrate my current systems (CRM, ERP, etc.)?",
                    a: "Yes, absolutely. We have extensive experience with third-party system integrations and APIs. We analyze your current setup and ensure a smooth connection between your tools and the new solution.",
                  },
                  {
                    q: "Will I be able to update the content on my own after launch?",
                    a: "Absolutely. If needed, we provide intuitive admin panels or CMS solutions that allow you to manage your content without technical knowledge. Training and documentation can be included.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} variants={cardVariants}>
                    <AccordionItem value={`item-${i + 1}`} className="border-b border-gray-700/50">
                      <AccordionTrigger className="text-left text-lg hover:text-purple-400 transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">{item.a}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contact-section-cta"
          className="w-full py-12 md:py-24 lg:py-32"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-[600px] mx-auto flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                  Let's talk about your project
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start? We're here to help you achieve your business goals.
                </p>
              </div>
              <div className="mt-6">
                <AnimatedGradientButton>
                  <Link href="/contact">GET IN TOUCH</Link>
                </AnimatedGradientButton>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
