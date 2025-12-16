"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  /* ================= PARALLAX SPEED ================= */
  const yMain = useTransform(scrollYProgress, [0, 1], [0, -30])
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <div className="order-1 md:order-2 flex justify-center md:pl-12 py-14 md:py-0">
      
      {/* ================= MASTER CONTAINER ================= */}
      <motion.div
        ref={ref}
        style={{ y: yMain }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative
          w-full
          max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]
          aspect-[3/4]
        "
      >

        {/* ================= BACK DECOR ================= */}
        <motion.div
          style={{ y: yBack }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            -top-10 -left-14
            w-[85%] aspect-square
            rounded-[40%_60%_70%_30%]
            bg-gradient-to-br from-blue-600/60 to-indigo-600/60
            blur-2xl
            z-0
          "
        />

        {/* Ring Accent */}
        <motion.div
          style={{ y: yBack }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="
            absolute
            top-6 -right-8
            w-20 aspect-square
            rounded-full
            border-[6px] border-cyan-400/40
            blur-sm
            z-0
          "
        />

        {/* ================= MAIN PHOTO ================= */}
        <div
          className="
            relative
            z-10
            w-full h-full
            flex items-end justify-center
            drop-shadow-[0_18px_25px_rgba(0,0,0,0.18)]
          "
        >
          <Image
            src="/profile1.png"
            alt="Ade Prayoga Nugraha"
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 420px"
            className="
              object-contain
              object-bottom
            "
          />
        </div>

        {/* ================= FOREGROUND DECOR ================= */}
        <motion.div
          style={{ y: yFront }}
          className="
            absolute
            -bottom-4
            left-1/2 -translate-x-1/2
            w-[120%]
            h-[22%]
            rounded-[50%_50%_40%_40%]
            bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800
            blur-xl
            opacity-90
            z-0
          "
        />

        {/* Floating Diamond */}
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [45, 60, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            top-[35%] -left-6
            w-12 aspect-square
            bg-sky-300/50
            rounded-lg
            rotate-45
            backdrop-blur-md
            z-20
          "
        />

        {/* Spark Dots */}
        <div className="absolute top-12 right-8 flex flex-col gap-3 z-20">
          <span className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-blue-300 ml-4" />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
        </div>

      </motion.div>
    </div>
  )
}
