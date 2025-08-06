"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutQuint
    },
  },
}

// ENHANCED form validation types
interface FormData {
  fullname: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormErrors {
  fullname?: string
  email?: string
  phone?: string
  message?: string
}

// Advanced email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Phone validation regex (supports international formats)
const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  // ENHANCED form state with real-time validation
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})

  // Simple validation only on submit
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullname':
        return !value.trim() ? 'Full name is required' : undefined
      case 'email':
        return !value.trim() ? 'Email is required' : !emailRegex.test(value) ? 'Invalid email' : undefined
      case 'phone':
        return !value.trim() ? 'Phone number is required' : undefined
      case 'message':
        return !value.trim() ? 'Message is required' : undefined
      default:
        return undefined
    }
  }
  
  // Memoized input handlers to prevent re-renders
  const handleFullnameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, fullname: e.target.value }))
  }, [])

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }))
  }, [])

  const handleCompanyChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, company: e.target.value }))
  }, [])

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^+\d]/g, '')
    setFormData(prev => ({ ...prev, phone: value }))
  }, [])

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, 500) // Limit to 500 characters
    setFormData(prev => ({ ...prev, message: value }))
  }, [])
  
  // ENHANCED form submission with validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    
    // Validate all fields
    const newErrors: FormErrors = {}
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key as keyof FormData, value)
      if (error) newErrors[key as keyof FormErrors] = error
    })
    
    setErrors(newErrors)
    
    // Check if form is valid
    if (Object.keys(newErrors).length > 0 || !agreed) {
      return
    }
    
    // Simulate form submission
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ fullname: '', email: '', company: '', phone: '', message: '' })
        setErrors({})
        setAgreed(false)
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  
  return (
    <div className="flex flex-col min-h-[100dvh] text-gray-50 relative">
      {/* ENHANCED Animated particle background */}
      <AnimatedBackground />
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent z-0" />
      <Header />
      <main className="flex-1 flex flex-col justify-center pt-20 relative z-10">
        <motion.section
          id="contact"
          className="w-full py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <motion.div className="space-y-6 flex flex-col justify-center" custom="left" variants={itemVariants}>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
                  Let's Build Together
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                  Have a project in mind or just want to learn more? We'd love to hear from you. Fill out the form, and
                  we'll get back to you as soon as possible.
                </p>
                <div className="space-y-3 pt-2">
                  <p className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-purple-400" />
hello@kaloyan.gantchev.com
                  </p>
                  <p className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-purple-400" />
                    +48 731 499 788
                  </p>
                  <p className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    Stephansplatz 1, 1010 Wien, Austria
                  </p>
                </div>
              </motion.div>
              <motion.div custom="right" variants={itemVariants}>
                <div className="p-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm relative overflow-hidden">
                  {/* Premium gradient border effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* ENHANCED success/error status display */}
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="text-green-400 font-medium">Message sent successfully!</p>
                            <p className="text-green-300 text-sm">We'll get back to you within 24 hours.</p>
                          </div>
                        </motion.div>
                      )}
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-400" />
                          <div>
                            <p className="text-red-400 font-medium">Failed to send message</p>
                            <p className="text-red-300 text-sm">Please try again or contact us directly.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleFullnameChange}
                            placeholder="Your Name"
                            className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500 text-gray-400"
                            style={{
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: '#9ca3af'
                            }}
                          />
                          {errors.fullname && (
                            <p className="text-red-400 text-sm mt-1">{errors.fullname}</p>
                          )}
                        </div>
                        <div>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleEmailChange}
                            placeholder="youremail@example.com"
                            className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500 text-gray-400"
                            style={{
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: '#9ca3af'
                            }}
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleCompanyChange}
                          placeholder="Your Company (Optional)"
                          className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500 text-gray-400"
                          style={{
                            WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                            WebkitTextFillColor: '#9ca3af'
                          }}
                        />
                        <div>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="+43 1 234 5678"
                            className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500 text-gray-400"
                            style={{
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: '#9ca3af'
                            }}
                          />
                          {errors.phone && (
                            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleMessageChange}
                          placeholder="Describe your project, goals, and requirements. How can we help you achieve your digital objectives?"
                          rows={5}
                          className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500 text-gray-400 resize-y"
                        />
                        <div className="flex justify-between items-center mt-1">
                          {errors.message && (
                            <p className="text-red-400 text-sm">{errors.message}</p>
                          )}
                          <p className="text-gray-500 text-sm ml-auto">
                            {formData.message.length}/500
                          </p>
                        </div>
                      </div>
                    <div className="flex items-center space-x-3 pt-2">
                      <Checkbox
                        id="privacy"
                        checked={agreed}
                        onCheckedChange={setAgreed}
                        className="border-gray-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                      />
                      <Label htmlFor="privacy" className="text-sm font-normal text-gray-400">
                        I agree to the{" "}
                        <Link href="/privacy" className="underline hover:text-purple-400 transition-colors">
                          Privacy Policy
                        </Link>
                        .
                      </Label>
                    </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={!agreed || isSubmitting || Object.keys(errors).some(key => errors[key as keyof FormErrors])}
                          className="w-full rounded-lg border border-purple-500/30 bg-purple-500/10 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-500/10 disabled:hover:shadow-none"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
                              Sending Message...
                            </>
                          ) : submitStatus === 'success' ? (
                            <>
                              <CheckCircle className="w-4 h-4 inline mr-2" />
                              Message Sent!
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}