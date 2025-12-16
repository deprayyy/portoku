"use client"

import { motion } from "framer-motion"
import {
  Code,
  Server,
  ShieldCheck,
  GraduationCap,
  Clock,
} from "lucide-react"

/* =========================
   EXPERIENCE DATA
========================= */
const experiences = [
  {
    role: "COBOL Developer & IT Infrastructure Trainee",
    company: "PT. Intikom Berlian Mustika",
    period: "Februari 2025 — Present",
    icon: Code,
    summary:
      "Mengembangkan fundamental COBOL dan mainframe melalui pembelajaran terstruktur, hands-on environment, serta exposure langsung ke sistem enterprise.",

    highlights: [
      {
        icon: Code,
        title: "COBOL Fundamentals",
        points: [
          "Mempelajari struktur program COBOL, debugging, dan job control.",
          "Membuat dan menjalankan job sederhana untuk memahami alur sistem legacy.",
        ],
      },
      {
        icon: GraduationCap,
        title: "IBM Learning & Workshop",
        points: [
          "Mengikuti IBM Learning untuk COBOL, z/OS, dan ekosistem mainframe.",
          "Berpartisipasi dalam workshop IBM terkait hybrid mainframe dan enterprise workload.",
        ],
      },
      {
        icon: Server,
        title: "LinuxONE & Hybrid Mainframe",
        points: [
          "Exposure langsung pada infrastruktur LinuxONE.",
          "Terlibat provisioning LPAR, instalasi Linux, dan konfigurasi dasar sistem.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Preventive Maintenance",
        points: [
          "Berpartisipasi dalam preventive maintenance sistem dan infrastruktur.",
          "Mendukung monitoring untuk menjaga stabilitas dan reliability layanan.",
        ],
      },
    ],

    tags: [
      "COBOL",
      "IBM Learning",
      "z/OS",
      "LinuxONE",
      "LPAR",
      "Preventive Maintenance",
      "Enterprise System",
    ],
  },
]

/* =========================
   EXPERIENCE CARD
========================= */
const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        p-8 md:p-10
        rounded-3xl

        /* ☀️ LIGHT MODE */
        bg-white
        border border-gray-200
        shadow-lg

        /* 🌙 DARK MODE */
        dark:bg-gray-900/70
        dark:border-gray-800
        dark:backdrop-blur-xl
        dark:shadow-xl
      "
    >
      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">
          {experience.role}
        </h3>

        <p className="font-semibold text-gray-900 dark:text-gray-200">
          {experience.company}
        </p>

        <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <Clock size={13} />
          {experience.period}
        </div>
      </div>

      {/* SUMMARY */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
        {experience.summary}
      </p>

      {/* HIGHLIGHTS */}
      <div className="grid gap-6 md:grid-cols-2">
        {experience.highlights.map((item: any, i: number) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="
                p-5
                rounded-2xl

                /* ☀️ LIGHT */
                bg-gray-50
                border border-gray-200

                /* 🌙 DARK */
                dark:bg-gray-800/60
                dark:border-gray-700
              "
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={18} className="text-blue-600" />
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                {item.points.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* TAGS */}
      <div className="mt-10 flex flex-wrap gap-2">
        {experience.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="
              text-[11px]
              font-mono
              px-3 py-1
              rounded-md

              /* ☀️ LIGHT */
              bg-blue-100
              text-blue-700

              /* 🌙 DARK */
              dark:bg-blue-500/10
              dark:text-blue-300
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* =========================
   MAIN SECTION
========================= */
export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        py-32
        px-6
        overflow-hidden

        /* ☀️ LIGHT */
        bg-white

        /* 🌙 DARK */
        dark:bg-gray-950
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20" />

        {/* GLOW */}
        <div className="absolute top-24 right-0 w-96 h-96 bg-blue-400/25 dark:bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-24 left-0 w-96 h-96 bg-indigo-400/20 dark:bg-gray-400/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-bold mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Learning, Exposure & Professional Growth
          </h2>
        </div>

        {/* CONTENT */}
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  )
}
