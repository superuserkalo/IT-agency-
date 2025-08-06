"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] text-gray-50 relative">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent z-0" />
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
                Terms of Service
              </h1>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  These Terms of Service govern your use of our website and services. By engaging our services, 
                  you agree to these terms.
                </p>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Services</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We provide IT consulting, web development, e-commerce solutions, business applications, 
                    and digital marketing services. All services are provided according to Austrian business standards 
                    and regulations.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">2. Project Scope and Changes</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Project scope will be defined in a separate project agreement or statement of work. 
                    Any changes to the agreed scope must be approved in writing and may result in additional costs 
                    and timeline adjustments.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
                  <div className="text-gray-300 leading-relaxed space-y-3">
                    <p>• Projects are typically billed according to milestone-based payments</p>
                    <p>• Invoices are due within 14 days of receipt</p>
                    <p>• Late payments may incur interest charges according to Austrian law</p>
                    <p>• All prices are quoted in EUR and include applicable VAT</p>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Upon full payment, clients retain ownership of custom-developed code and designs specific to their project. 
                    We retain rights to general methodologies, frameworks, and reusable components developed during the project.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain strict confidentiality regarding all client information, business processes, 
                    and proprietary data. This confidentiality continues indefinitely beyond the termination of our services.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our liability is limited to the amount paid for services. We are not liable for indirect, 
                    consequential, or punitive damages. This limitation applies to the fullest extent permitted by Austrian law.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Either party may terminate services with 30 days written notice. In case of termination, 
                    payment is due for all work completed up to the termination date, and any deliverables 
                    will be provided as agreed.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                  <p className="text-gray-300 leading-relaxed">
                    These terms are governed by Austrian law. Any disputes will be resolved in the competent 
                    courts of Vienna, Austria.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">9. Updates to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to update these terms. Clients will be notified of any material changes, 
                    and continued use of our services constitutes acceptance of the updated terms.
                  </p>
                </div>
                
                <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-gray-400">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}