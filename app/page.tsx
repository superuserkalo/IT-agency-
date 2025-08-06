"use client"

import { useRef, useState, Fragment } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Gem, Milestone, Server, Code, Asterisk, ShoppingCart, Building, TrendingUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PerformanceOptimizations } from "@/components/performance-optimizations"
import { AnimatedBackground } from "@/components/animated-background"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
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

const halfIndex = Math.ceil(keywords.length / 2)
const firstHalf = keywords.slice(0, halfIndex)
const secondHalf = keywords.slice(halfIndex)

export default function Component() {
  const heroRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState("Web- / App-Development")
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"])

  // Faster transforms for mobile opposite scroll
  const x1 = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"])
  const x2 = useTransform(scrollYProgress, [0.1, 0.9], ["-50%", "0%"])

  // Organized FAQ data by categories
  const faqData = {
    "Web- / App-Development": [
      {
        q: "How long will it take to develop my website / app?",
        a: "The timeline depends on the complexity of your project and your requirements. We focus on quality, not shortcuts. For most projects, we provide clear milestones and realistic deadlines after a detailed consultation. Transparency is key — you will always know where we stand."
      },
      {
        q: "Do you build custom solutions or use templates/CMS like WordPress?",
        a: "We specialize in tailored solutions. For business-critical systems, we recommend fully custom-built applications using modern frameworks like Laravel or Next.js. For smaller projects or landing pages, we may use WordPress if it fits the client's needs. The approach depends on what serves your goals best."
      },
      {
        q: "Can you integrate my current systems (CRM, ERP, payment gateways, etc.) with the new platform?",
        a: "Yes, absolutely. We have experience with various third-party system integrations and APIs. We analyze your current setup and ensure a smooth connection between your tools and the new solution."
      },
      {
        q: "Will I be able to update the content on my own after launch?",
        a: "Absolutely. If needed, we provide intuitive admin panels or CMS solutions that allow you to manage your content without technical knowledge. Training and documentation can be included."
      },
      {
        q: "Do you offer responsive design for mobile and tablet?",
        a: "Yes, all our solutions are fully responsive and mobile-friendly by default. We design with every device in mind to ensure a seamless experience for your users."
      }
    ],
    "Marketing / SEO": [
      {
        q: "Can you help us rank on Google (SEO)?",
        a: "Yes, we offer technical SEO optimization, including keyword analysis, page speed improvements, and on-page SEO. If needed, we work with content specialists for broader SEO campaigns."
      },
      {
        q: "What advertising platforms do you work with (Google Ads, Facebook, LinkedIn, etc.)?",
        a: "We work with Google Ads, Facebook/Meta, LinkedIn, and can advise on other platforms depending on your target audience. We also assist with SEO and organic strategies to complement paid advertising."
      },
      {
        q: "Do you offer ongoing SEO optimization or only initial setup?",
        a: "We offer both. You can choose a one-time SEO audit and optimization, or ongoing monthly work where we continue to improve your rankings and adapt strategies over time."
      },
      {
        q: "What's your approach to keyword research and content strategy?",
        a: "We combine competitive analysis, keyword research tools, and our experience in your industry to define the right strategy. Content is crafted for your audience, not just for search engines."
      },
      {
        q: "Do you offer analytics and reporting on campaign performance?",
        a: "Yes. Our campaigns include performance dashboards and regular reports. We prioritize clarity: you will know exactly where your budget goes and what results it brings."
      }
    ],
    "Process / Communication": [
      {
        q: "How will communication work throughout the project? Slack, Email, Meetings?",
        a: "Typically, we use email for formal communication and MS Teams for day-to-day coordination. WhatsApp is also an option. For milestone meetings and project reviews, we prefer Google Meet. No matter the channel, regular updates and full transparency are part of our process."
      },
      {
        q: "Will we have a dedicated project manager?",
        a: "Yes. You will have a single point of contact who manages the project, coordinates the team, and ensures smooth communication at all stages."
      },
      {
        q: "What happens if we want to add features mid-project?",
        a: "Flexibility is built into our process. We work in Agile iterations. If you want to add features mid-project, we assess the scope, provide a time and cost estimate, and proceed with mutual agreement."
      },
      {
        q: "What project management tools do you use (e.g. Jira, Trello, ClickUp)?",
        a: "We work with ClickUp, Trello, or Jira, depending on the project scale and your preference. You'll have full visibility into your project board."
      }
    ],
    "Design / Branding": [
      {
        q: "Do you offer logo design and branding services?",
        a: "Yes, we provide comprehensive branding services including logo design, brand guidelines, color palettes, and visual identity systems that align with your business goals."
      },
      {
        q: "Can you redesign our existing website while keeping our current branding?",
        a: "Absolutely. We can work within your existing brand guidelines or help evolve your visual identity while maintaining brand consistency across all touchpoints."
      },
      {
        q: "What's your design process from concept to final product?",
        a: "We start with research and discovery, create wireframes and mockups, develop interactive prototypes, then move to final design and implementation. You're involved at every stage."
      }
    ],
    "Pricing / Legal": [
      {
        q: "How do you structure your pricing - fixed price, hourly, or monthly retainer?",
        a: "We offer flexible pricing models depending on your needs: fixed-price projects for well-defined scopes, hourly rates for ongoing work, and monthly retainers for long-term partnerships."
      },
      {
        q: "What's included in ongoing maintenance and support?",
        a: "Maintenance typically includes security updates, bug fixes, performance optimization, and technical support. We offer different support levels depending on your needs and budget."
      },
      {
        q: "Do you offer payment plans or require full payment upfront?",
        a: "We typically work with milestone-based payments. For larger projects, we can discuss payment plans that work for both parties. A deposit is usually required to begin work."
      }
    ],
    "Technical / Hosting": [
      {
        q: "Do you provide hosting services or help with server setup?",
        a: "We can recommend and help set up hosting solutions that fit your needs, from shared hosting to cloud infrastructure. We also provide guidance on server management and optimization."
      },
      {
        q: "What about website security and SSL certificates?",
        a: "Security is built into every project. We implement SSL certificates, security headers, regular backups, and follow industry best practices to protect your website and user data."
      },
      {
        q: "Can you help with website performance and speed optimization?",
        a: "Yes, performance optimization is a core part of our development process. We focus on fast loading times, efficient code, image optimization, and CDN implementation."
      }
    ],
    "Strategy / Business": [
      {
        q: "Do you provide business consulting beyond just development?",
        a: "Yes, we help clients develop digital strategies, choose the right technologies, and make informed decisions about their online presence and business processes."
      },
      {
        q: "Can you help us define our digital transformation roadmap?",
        a: "Absolutely. We work with businesses to assess their current state, define goals, and create step-by-step plans for digital transformation that align with business objectives."
      },
      {
        q: "What industries do you have experience working with?",
        a: "We've worked across various industries including e-commerce, healthcare, finance, education, and professional services. Our flexible approach adapts to any industry's specific needs."
      }
    ]
  }

  const categories = Object.keys(faqData)


  return (
    <div className="flex flex-col min-h-screen text-gray-50 relative">
      {/* Animated particle background */}
      <AnimatedBackground />
      {/* Fixed background gradient that stays in place */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent z-0" />
      {/* ENHANCED Performance optimizations for mobile */}
      <PerformanceOptimizations />
      <Header />
      <main className="flex-1 relative z-10">
        <section id="hero" ref={heroRef} className="w-full h-[100vh] flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="px-4 sm:px-6"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Building{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-600 bg-clip-text text-transparent font-bold">
                  innovative
                </span>
                <br className="hidden sm:block" />
                <span className="block sm:inline">digital solutions</span>
              </h1>
            </motion.div>

            <div className="w-full max-w-6xl mx-auto overflow-hidden mt-20">
              {/* Mobile two-line view */}
              <div className="flex flex-col gap-2 md:hidden">
                <motion.div className="flex items-center gap-x-2" style={{ x: x1 }}>
                  {[...firstHalf, ...firstHalf].map((keyword, i) => (
                    <Fragment key={`mobile-first-${i}`}>
                      <span className="text-gray-400 whitespace-nowrap text-sm shrink-0">{keyword}</span>
                      <Asterisk className="w-3 h-3 text-pink-500 shrink-0" />
                    </Fragment>
                  ))}
                </motion.div>
                <motion.div className="flex items-center gap-x-2" style={{ x: x2 }}>
                  {[...secondHalf, ...secondHalf].map((keyword, i) => (
                    <Fragment key={`mobile-second-${i}`}>
                      <span className="text-gray-400 whitespace-nowrap text-sm shrink-0">{keyword}</span>
                      <Asterisk className="w-3 h-3 text-pink-500 shrink-0" />
                    </Fragment>
                  ))}
                </motion.div>
              </div>

              {/* Desktop single-line view */}
              <div className="hidden md:flex">
                <motion.div className="flex items-center gap-x-2" style={{ x }}>
                  {[...keywords, ...keywords].map((keyword, i) => (
                    <Fragment key={`desktop-${i}`}>
                      <span className="text-gray-400 whitespace-nowrap text-lg shrink-0">{keyword}</span>
                      <Asterisk className="w-4 h-4 text-pink-500 shrink-0" />
                    </Fragment>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-12 sm:mt-16 px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AnimatedGradientButton asChild size="default">
                <Link href="/contact" className="cursor-pointer">Request a Consultation</Link>
              </AnimatedGradientButton>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="services"
          className="w-full pt-8 md:pt-16 pb-12 md:pb-24 lg:pb-32"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
          variants={containerVariants}
        >
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid w-full gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: "Custom Websites",
                  description:
                    "More than just beautiful — engineered for results. Your website is your digital flagship. We build modern, high-performance sites that reflect your brand and drive conversions.",
                  icon: <Code className="h-8 w-8 text-white" />,
                  href: "/services/web-development"
                },
                {
                  title: "E-Commerce",
                  description:
                    "Enterprise-grade online stores that scale. Whether B2B or B2C, we create e-commerce platforms that deliver, optimizing every step of the buyer journey for growth.",
                  icon: <ShoppingCart className="h-8 w-8 text-white" />,
                  href: "/services/ecommerce"
                },
                {
                  title: "Business Applications",
                  description:
                    "Custom-built tools to streamline your operations. We design and develop secure, scalable business applications tailored to your workflow, from internal platforms to client-facing portals.",
                  icon: <Building className="h-8 w-8 text-white" />,
                  href: "/services/business-applications"
                },
                {
                  title: "Marketing & SEO",
                  description:
                    "We architect digital growth — not just presence. Get found, get clicks, get results with full-service SEO, Google Ads, and social media campaigns tailored to your market.",
                  icon: <TrendingUp className="h-8 w-8 text-white" />,
                  href: "/services/marketing-seo"
                },
              ].map((service) => (
                <motion.div
                  key={service.title}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/5 touch-manipulation"
                  variants={cardVariants}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center text-purple-400 group-hover:text-purple-300 cursor-pointer text-sm sm:text-base font-medium active:text-purple-500 transition-colors duration-200"
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
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -20% 0px" }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              variants={cardVariants}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Categories - Mobile Dropdown + Desktop List */}
                <div className="lg:col-span-1">
                  {/* Mobile Category Selector */}
                  <div className="lg:hidden mb-6">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full py-3 px-4 bg-black/20 border border-gray-700/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-black text-white">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Desktop Category List */}
                  <div className="hidden lg:block space-y-2 sticky top-32">
                    <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                          selectedCategory === category
                            ? 'text-white bg-purple-500/20 border-l-2 border-purple-500'
                            : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* FAQ Content */}
                <div className="lg:col-span-3">
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {faqData[selectedCategory]?.map((item, i) => (
                        <motion.div 
                          key={i} 
                          variants={cardVariants}
                          initial="offscreen"
                          animate="onscreen"
                          transition={{ delay: i * 0.1 }}
                        >
                          <AccordionItem value={`item-${i + 1}`} className="border border-gray-700/30 rounded-lg px-6 bg-black/20">
                            <AccordionTrigger className="text-left text-lg hover:text-purple-400 transition-colors py-6">
                              {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                              {item.a}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact-section-cta"
          className="w-full py-12 md:py-24 lg:py-32"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -20% 0px" }}
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
                <AnimatedGradientButton asChild size="lg">
                  <Link href="/contact" className="cursor-pointer">GET IN TOUCH</Link>
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