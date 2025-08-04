"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useTranslations, useLocale } from "next-intl"

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
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false)
  const t = useTranslations("Contact")
  const locale = useLocale()

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-gray-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10" />
      <Header />
      <main className="flex-1 flex flex-col justify-center pt-20">
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
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm self-start">{t("label")}</div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                  {t("title")}
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                  {t("description")}
                </p>
                <div className="space-y-3 pt-2">
                  <p className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-purple-400" />
                    contactpartner@k2integris.com
                  </p>
                  <p className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-purple-400" />
                    +48 731 499 788
                  </p>
                  <p className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    os. Szymony 7, 34-500 Zakopane, Poland
                  </p>
                </div>
              </motion.div>
              <motion.div custom="right" variants={itemVariants}>
                <div className="p-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      alert("Form submitted! (Note: This is a demo and does not send data.)")
                    }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder={t("form.fullname")}
                        name="fullname"
                        required
                        className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500"
                      />
                      <Input
                        placeholder={t("form.email")}
                        name="email"
                        type="email"
                        required
                        className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder={t("form.company")}
                        name="company"
                        className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500"
                      />
                      <Input
                        placeholder={t("form.phone")}
                        name="phone"
                        type="tel"
                        required
                        className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500"
                      />
                    </div>
                    <Textarea
                      placeholder={t("form.message")}
                      name="message"
                      required
                      rows={5}
                      className="bg-black/20 border-white/10 focus:border-purple-500 placeholder:text-gray-500"
                    />
                    <div className="flex items-center space-x-3 pt-2">
                      <Checkbox
                        id="privacy"
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(Boolean(checked))}
                        className="border-gray-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                      />
                      <Label htmlFor="privacy" className="text-sm font-normal text-gray-400">
                        {t.rich("form.privacy", {
                          link: (chunks) => (
                            <Link href={`/${locale}/privacy`} className="underline hover:text-purple-400 transition-colors">
                              {chunks}
                            </Link>
                          ),
                        })}
                      </Label>
                    </div>
                    <button
                      type="submit"
                      disabled={!agreed}
                      className="w-full rounded-lg border border-purple-500/30 bg-purple-500/10 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-500/10 disabled:hover:shadow-none"
                    >
                      {t("form.submit")}
                    </button>
                  </form>
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
