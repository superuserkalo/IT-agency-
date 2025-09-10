"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ImprintPage() {
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
                Impressum
              </h1>

              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">Information according to § 5 TMG</h2>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Business Owner:</strong> Kaloyan Gantchev</p>
                    <p><strong>Address:</strong> Inge-Konradi-Gasse<br />1210 Wien<br />Austria</p>
                    <p><strong>Phone:</strong> +43 676 380 3688</p>
                    <p><strong>Email:</strong> kaloyangantchev@gmail.com</p>
                  </div>
                </div>


              {/*
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">VAT Information</h3>
                  <p className="text-gray-300">VAT ID according to § 27 a VAT Tax Act: ATU12345678</p>
                </div>
              */}
                {/*
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Professional Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Professional Title:</strong> IT Consultant & Software Developer</p>
                    <p><strong>Country of Award:</strong> Austria</p>
                    <p><strong>Regulatory Authority:</strong> Wirtschaftskammer Österreich</p>
                  </div>
                </div>
                */}
                {/*
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Dispute Resolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The European Commission provides a platform for online dispute resolution (ODR):
                    <a href="https://ec.europa.eu/consumers/odr/" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                  </p>
                </div>
                */}
                {/*
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Liability for Contents</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As service providers, we are liable for own contents of these websites according to Sec. 7, Para. 1 TMG (Telemediengesetz – Tele Media Act by German law). However, we do not undertake to monitor the transmitted or stored information of third parties, or investigate circumstances pointing to illegal activity.
                  </p>
                </div>
                */}
                {/*
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Liability for Links</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
                  </p>
                </div>
                */}
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Copyright</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Contents and compilations published on these websites by the providers are subject to Austrian copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
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
