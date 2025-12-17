"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroPhoto() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  /* ================= PARALLAX ================= */
  const yMain = useTransform(scrollYProgress, [0, 1], [0, -40])
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -70])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <div
      className="
        order-1 md:order-2
        relative
        flex justify-center md:justify-end
        w-full
        py-14 md:py-0
      "
    >
      {/* ================= MASTER FRAME ================= */}
      <motion.div
        ref={ref}
        style={{ y: yMain }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative
          w-full
          max-w-[300px]
          sm:max-w-[360px]
          md:max-w-[420px]
          xl:max-w-[520px]
          aspect-[3/4]
        "
      >
        {/* ================= BACK GLOW ================= */}
        <motion.div
          style={{ y: yBack }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            -top-16 -left-20
            w-[120%]
            h-[120%]
            rounded-[45%_55%_65%_35%]
            bg-gradient-to-br
            from-blue-600/60
            via-indigo-600/50
            to-cyan-500/40
            blur-[140px]
            z-0
          "
        />

        {/* Ring Accent */}
        <motion.div
          style={{ y: yBack }}
          animate={{ rotate: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            top-8 -right-10
            w-24
            aspect-square
            rounded-full
            border-[6px]
            border-cyan-400/40
            blur-sm
            z-0
          "
        />

        {/* ================= PHOTO ================= */}
        <div
          className="
            relative
            z-10
            w-full
            h-full
            flex
            items-end
            justify-center
            drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)]
          "
        >
          <Image
            src="/profile1.PNG"
            alt="Ade Prayoga Nugraha"
            fill
            priority
            sizes="(max-width: 640px) 300px,
                   (max-width: 1024px) 420px,
                   520px"
            className="
              object-contain
              object-bottom
            "
          />
        </div>

        {/* ================= FRONT GLOW ================= */}
        <motion.div
          style={{ y: yFront }}
          className="
            absolute
            -bottom-6
            left-1/2
            -translate-x-1/2
            w-[130%]
            h-[24%]
            rounded-[50%_50%_40%_40%]
            bg-gradient-to-r
            from-blue-700
            via-blue-600
            to-blue-800
            blur-xl
            opacity-90
            z-0
          "
        />

        {/* Floating Diamond */}
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [45, 60, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            top-[38%]
            -left-8
            w-14
            aspect-square
            bg-sky-300/50
            rounded-lg
            rotate-45
            backdrop-blur-md
            z-20
          "
        />

        {/* Spark Dots */}
        <div className="absolute top-14 right-10 flex flex-col gap-3 z-20">
          <span className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-blue-300 ml-4" />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
        </div>
      </motion.div>
    </div>
  )
}
