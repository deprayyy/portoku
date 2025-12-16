"use client"

import { motion } from "framer-motion"
import { ArrowUp, Code, Zap } from "lucide-react"

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 border-t border-gray-200/60 dark:border-gray-800/60">
      
      {/* =========================
          DECORATIVE SIGNAL LINE
      ========================= */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "40%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="mx-auto h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />

      {/* =========================
          BACKGROUND GLOW
      ========================= */}
      <div className="absolute -top-32 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        
        {/* =========================
            MAIN GRID
        ========================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 mb-10 border-b border-gray-200/50 dark:border-gray-800/50">
          
          {/* BRAND */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Zap size={20} className="text-blue-600" />
              <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                ABCDEPRAY
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              IT Infrastructure & COBOL Developer focused on building reliable,
              scalable, and enterprise-grade systems.
            </p>

            <p className="mt-3 text-xs italic text-gray-500">
              “Stability is not optional. It’s engineered.”
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>

            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-sm
                    text-gray-600 dark:text-gray-400
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* SCROLL TO TOP */}
          <div className="flex justify-center md:justify-end items-start">
          <motion.button
  whileHover={{ y: -4 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Scroll to top"
  className="
    flex items-center justify-center   /* ✅ INI KUNCI */
    w-12 h-12
    rounded-full
    bg-blue-600 text-white
    shadow-lg
    hover:bg-blue-700
    hover:shadow-blue-500/40
    transition
  "
>
  <ArrowUp size={20} className="relative top-[1px]" />
</motion.button>

          </div>
        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          
          <span>
            © {year} <strong className="font-semibold">Depray</strong>. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Built with
            <Code size={13} className="text-blue-500 animate-pulse" />
            Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
