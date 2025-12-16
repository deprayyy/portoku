"use client"

import Reveal from "./Reveal"
import { motion } from "framer-motion"
import { ShieldCheck, Server, Layers, Code2 } from "lucide-react"

const highlights = [
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    desc: "Menjaga stabilitas dan reliability sistem enterprise melalui monitoring dan maintenance terjadwal.",
  },
  {
    icon: Code2,
    title: "COBOL & Legacy Systems",
    desc: "Fondasi kuat pada sistem mainframe dan aplikasi legacy berbasis COBOL.",
  },
  {
    icon: Server,
    title: "LinuxONE Infrastructure",
    desc: "Pengalaman langsung provisioning LPAR, instalasi Linux, dan konfigurasi sistem enterprise.",
  },
  {
    icon: Layers,
    title: "Hybrid Mainframe",
    desc: "Menghubungkan sistem tradisional dengan workload modern berbasis Linux.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-32
        px-6
        overflow-hidden

        /* ☀️ LIGHT MODE */
        bg-white text-gray-900

        /* 🌙 DARK MODE */
        dark:bg-gray-950 dark:text-gray-100
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">

        {/* ☀️ LIGHT GRADIENT */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-blue-50 via-white to-indigo-50
            dark:from-blue-950/30 dark:via-transparent dark:to-indigo-950/20
          "
        />

        {/* ☀️ GLOW */}
        <div
          className="
            absolute -top-32 -right-32
            w-[520px] h-[520px]
            bg-blue-300/25
            dark:bg-blue-500/10
            blur-[160px]
          "
        />

        {/* DOT GRID */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            absolute
            -bottom-24
            -left-24
            text-gray-200
            dark:text-gray-800
          "
        >
          <svg width="260" height="260" viewBox="0 0 200 200" fill="none">
            <pattern
              id="dot-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
            <rect width="200" height="200" fill="url(#dot-pattern)" />
          </svg>
        </motion.div>
      </div>

      <Reveal>
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* SECTION LABEL */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-10 bg-blue-600" />
            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              About Me
            </span>
          </div>

          {/* MAIN STATEMENT */}
          <h2
            className="
              text-3xl
              md:text-5xl
              font-extrabold
              leading-tight
              max-w-4xl
            "
          >
            Membangun stabilitas sistem enterprise melalui{" "}
            <span className="relative inline-block text-blue-700 dark:text-blue-500">
              <span
                className="
                  absolute -bottom-1 left-0 w-full h-3
                  bg-blue-200/60
                  dark:bg-blue-900/50
                  -z-10 skew-x-12
                "
              />
              preventive maintenance
            </span>{" "}
            dan teknologi hybrid mainframe.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-lg
              leading-relaxed
              text-gray-700
              dark:text-gray-400
              max-w-4xl
            "
          >
            Saya adalah individu yang sangat termotivasi dengan ketertarikan kuat
            pada sistem enterprise dan infrastruktur IT. Terbiasa bekerja di
            lingkungan yang dinamis, saya memiliki komunikasi yang baik,
            pendekatan analitis, serta kolaborasi lintas tim untuk menjaga
            reliability dan kontinuitas layanan.
          </p>

          <p
            className="
              mt-4
              text-lg
              leading-relaxed
              text-gray-700
              dark:text-gray-400
              max-w-4xl
            "
          >
            Perjalanan saya dimulai dari pengembangan keahlian COBOL dan dasar
            mainframe melalui course resmi IBM. Saat ini, saya fokus memperluas
            kompetensi ke hybrid mainframe dengan pengalaman langsung pada
            LinuxONE, termasuk provisioning LPAR, instalasi Linux, dan
            konfigurasi sistem enterprise untuk workload modern.
          </p>

          {/* ================= HIGHLIGHTS ================= */}
          <div
            className="
              mt-20
              grid gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group
                  rounded-2xl
                  p-6

                  /* ☀️ LIGHT CARD */
                  bg-white
                  border border-gray-200
                  shadow-sm

                  hover:shadow-md
                  hover:border-blue-500/50

                  /* 🌙 DARK CARD */
                  dark:bg-gray-900/60
                  dark:border-gray-800
                  dark:backdrop-blur
                  dark:hover:border-blue-500/50

                  transition
                "
              >
                <item.icon
                  size={28}
                  className="
                    text-blue-600
                    mb-4
                    group-hover:scale-110
                    transition
                  "
                />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  )
}
