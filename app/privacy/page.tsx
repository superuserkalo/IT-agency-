"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  This Privacy Policy explains how we collect, use, and protect your personal information 
                  in compliance with the EU General Data Protection Regulation (GDPR) and Austrian data protection laws.
                </p>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">1. Data Controller</h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Responsible for data processing:</strong></p>
                    <p>Kaloyan Gantchev<br />
                    Stephansplatz 1<br />
                    1010 Wien, Austria<br />
                    Email: hello@kaloyan.gantchev.com<br />
                    Phone: +43 1 234 5678</p>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">2. What Data We Collect</h2>
                  <div className="text-gray-300 space-y-3">
                    <p><strong>Contact Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Name and company name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Mailing address (if provided)</li>
                    </ul>
                    
                    <p className="mt-4"><strong>Technical Data:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Website usage data</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                  <div className="text-gray-300 space-y-3">
                    <p>We use your personal data for:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Responding to your inquiries and providing services</li>
                      <li>Project communication and management</li>
                      <li>Sending relevant business information (with your consent)</li>
                      <li>Improving our website and services</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
                  <div className="text-gray-300 space-y-3">
                    <p>We process your data based on:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Contract performance:</strong> To provide requested services</li>
                      <li><strong>Legitimate interest:</strong> For business communication and website improvement</li>
                      <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
                      <li><strong>Legal obligation:</strong> To comply with tax and business regulations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    your data only with trusted service providers who assist us in operating our website and 
                    conducting business, and only when they agree to keep this information confidential.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We retain your personal data only as long as necessary for the purposes for which it was collected, 
                    or as required by law. Contact information is typically retained for 7 years after the last 
                    business interaction, in accordance with Austrian business record-keeping requirements.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights Under GDPR</h2>
                  <div className="text-gray-300 space-y-3">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Access your personal data</li>
                      <li>Rectify inaccurate personal data</li>
                      <li>Erase your personal data</li>
                      <li>Restrict processing of your personal data</li>
                      <li>Data portability</li>
                      <li>Object to processing</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                    <p className="mt-3">
                      To exercise these rights, please contact us at: hello@kaloyan.gantchev.com
                    </p>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website uses essential cookies to ensure proper functionality. We do not use tracking 
                    cookies or third-party analytics without your explicit consent. You can control cookie 
                    settings through your browser preferences.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">9. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">10. Complaints</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you believe your data protection rights have been violated, you have the right to 
                    lodge a complaint with the Austrian Data Protection Authority (Datenschutzbehörde) at 
                    <a href="https://www.dsb.gv.at" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
                      www.dsb.gv.at
                    </a>
                  </p>
                </div>
                
                <div className="bg-black/20 rounded-lg p-6 border border-gray-700/30">
                  <h2 className="text-2xl font-bold text-white mb-4">11. Updates to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this privacy policy from time to time. Any changes will be posted on this page 
                    with an updated revision date. We encourage you to review this policy periodically.
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