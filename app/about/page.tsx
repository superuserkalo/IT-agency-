"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] text-gray-50 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 z-0" />
      <Header />
      
      <main className="flex-1 pt-20 relative z-10">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                About Me
              </h1>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Hello, I'm Kaloyan Gantchev, a passionate software developer and digital solutions consultant based in Austria. 
                  With years of experience in web development, e-commerce, and business applications, I help companies 
                  transform their digital presence and streamline their operations.
                </p>
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">My Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Web Development</h3>
                    <p className="text-gray-300">
                      Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript. 
                      I focus on performance, accessibility, and user experience.
                    </p>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">E-Commerce Solutions</h3>
                    <p className="text-gray-300">
                      From small online stores to enterprise-level e-commerce platforms, I create solutions that 
                      drive sales and provide exceptional shopping experiences.
                    </p>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Business Applications</h3>
                    <p className="text-gray-300">
                      Custom software solutions that automate workflows, improve efficiency, and help businesses 
                      scale their operations effectively.
                    </p>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Digital Marketing & SEO</h3>
                    <p className="text-gray-300">
                      Strategic digital marketing campaigns and SEO optimization to help businesses reach their 
                      target audience and grow their online presence.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">My Approach</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I believe in building long-term partnerships with my clients. Every project starts with understanding your 
                  business goals, challenges, and vision. I then create tailored solutions that not only meet your current 
                  needs but also scale with your future growth.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Quality and transparency are at the core of my work. You'll always know where your project stands, 
                  what's being built, and why certain decisions are made. I provide regular updates and maintain 
                  open communication throughout the entire development process.
                </p>
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Let's Work Together</h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're a startup looking to establish your digital presence or an established business 
                  seeking to optimize your operations, I'm here to help. Let's discuss how we can bring your vision to life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}