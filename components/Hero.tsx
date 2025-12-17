"use client"

import Reveal from "./Reveal"
import HeroPhoto from "./HeroPhoto"
import TypingText from "./TypingText"
import { Download, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        flex items-center
        overflow-x-clip
        px-6 sm:px-10 lg:px-24
        pt-10 pb-24

        /* ☀️ LIGHT MODE */
        bg-white text-gray-900

        /* 🌙 DARK MODE */
        dark:bg-gray-950 dark:text-gray-100
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">

        {/* Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-blue-50 via-white to-indigo-50
            dark:from-blue-950/30 dark:via-transparent dark:to-indigo-950/20
          "
        />

        {/* Glow — focus to right (photo) */}
        <div
          className="
            absolute
            top-1/4
            right-0
            w-[55%]
            h-[60%]
            bg-blue-300/25
            dark:bg-blue-500/10
            blur-[160px]
          "
        />
      </div>

      <Reveal>
        <div
          className="
            relative
            mx-auto
            max-w-[1400px]
            grid
            gap-16
            md:grid-cols-[1.1fr_0.9fr]
            xl:grid-cols-[1.2fr_1fr]
            items-center
          "
        >
          {/* ================= TEXT ================= */}
          <div className="order-2 md:order-1 space-y-7 md:pr-12">

            {/* GREETING */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                text-xs uppercase tracking-widest
                text-gray-500
                dark:text-gray-400
              "
            >
              Hi there 👋
            </motion.p>

            {/* NAME */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              I&apos;m{" "}
              <span className="relative text-blue-700 dark:text-blue-500">
                <TypingText text="Depray" speed={120} />
                <span
                  className="
                    absolute -bottom-1 left-0 w-full h-[3px]
                    bg-blue-500/40 dark:bg-blue-500/50
                    rounded-full
                  "
                />
              </span>
            </h1>

            {/* FULL NAME */}
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
              Ade Prayoga Nugraha
            </p>

            {/* ROLE */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-xl leading-relaxed">
              IT Infrastructure • COBOL Developer • System Support
              <span className="block text-sm mt-2 text-gray-500 dark:text-gray-500">
                Enterprise systems · Banking environment · Mission-critical ops
              </span>
            </p>

            {/* ================= CTA ================= */}
            <div className="pt-8 flex items-center gap-4">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/adeprayoganugraha/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  bg-white
                  border border-gray-200
                  text-gray-700
                  shadow-sm

                  hover:text-blue-600
                  hover:border-blue-500
                  hover:bg-blue-50

                  dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400
                  dark:hover:bg-blue-950/30
                  transition
                "
              >
                <Linkedin size={20} />
              </a>

              {/* DOWNLOAD CV */}
              <a
                href="/cv/CV_Ade Prayoga Nugraha.pdf"
                download
                className="
                  inline-flex items-center gap-2
                  px-6 py-3
                  rounded-xl

                  bg-blue-600 text-white
                  hover:bg-blue-700

                  shadow-lg shadow-blue-500/30
                  transition
                "
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* ================= PHOTO ================= */}
          <HeroPhoto />
        </div>
      </Reveal>
    </section>
  )
}
