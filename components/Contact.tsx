"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
  Zap,
} from "lucide-react"

/* =========================
   DATA
========================= */
const contactItems = [
  {
    name: "Email",
    handle: "adeprayoganugraha@gmail.com",
    href: "mailto:adeprayoganugraha@gmail.com",
    icon: Mail,
    color: "red",
    description:
      "Diskusi cepat, pertanyaan teknis, atau peluang kolaborasi profesional.",
  },
  {
    name: "LinkedIn",
    handle: "Ade Prayoga Nugraha",
    href: "https://www.linkedin.com/in/adeprayoganugraha/",
    icon: Linkedin,
    color: "blue",
    description:
      "Koneksi profesional, riwayat karier, dan aktivitas industri.",
  },
  {
    name: "WhatsApp",
    handle: "+62 8xx-xxxx-xxxx",
    href: "https://wa.me/6281398352259",
    icon: MessageCircle,
    color: "green",
    description:
      "Komunikasi langsung untuk diskusi cepat atau koordinasi proyek.",
  },
]

/* =========================
   HELPERS
========================= */
const colorMap = {
  red: {
    bg: "bg-red-500/10",
    text: "text-red-600",
    hoverBg: "group-hover:bg-red-500",
    hoverText: "group-hover:text-white",
    glow: "from-red-500/20",
  },
  blue: {
    bg: "bg-blue-600/10",
    text: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    hoverText: "group-hover:text-white",
    glow: "from-blue-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-600",
    hoverBg: "group-hover:bg-green-500",
    hoverText: "group-hover:text-white",
    glow: "from-green-500/20",
  },
}

/* =========================
   ANIMATION VARIANTS
========================= */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

/* =========================
   COMPONENT
========================= */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* =========================
          BACKGROUND DECOR
      ========================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* =========================
            HEADER
        ========================= */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-blue-600/10 text-blue-600 font-semibold text-sm"
          >
            <Zap size={14} />
            Contact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Let’s Build Something Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            Siap untuk kolaborasi, diskusi teknis, atau peluang profesional.
            Pilih jalur komunikasi yang paling nyaman buat Anda.
          </motion.p>
        </div>

        {/* =========================
            CONTACT CARDS
        ========================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const c = colorMap[item.color as keyof typeof colorMap]

            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="
                  group
                  relative
                  p-8
                  rounded-2xl
                  border border-gray-200 dark:border-gray-700
                  bg-white/80 dark:bg-gray-900/80
                  backdrop-blur-xl
                  shadow-xl
                  transition
                "
              >
                {/* GLOW */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none`}
                />

                {/* ICON */}
                <div
                  className={`
                    mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl
                    ${c.bg} ${c.text} ${c.hoverBg} ${c.hoverText}
                    transition
                  `}
                >
                  <Icon size={26} />
                </div>

                {/* TEXT */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {item.handle}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* CTA */}
                <div className={`flex items-center font-semibold ${c.text}`}>
                  <span>Connect</span>
                  <ArrowUpRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
