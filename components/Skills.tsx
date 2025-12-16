"use client"

import { motion, useMotionValue, useAnimationControls } from "framer-motion"
import {
  Cpu,
  Code,
  Server,
  Database,
  Terminal,
  Network,
  Layers,
} from "lucide-react"
import { useEffect, useRef } from "react"

/* =========================
   DATA (FROM CV)
========================= */
const skills = [
  {
    name: "COBOL Programming",
    level: 80,
    desc: "Fundamental COBOL development, debugging, membaca alur program legacy, dan core banking flow.",
    icon: Code,
  },
  {
    name: "JCL & Mainframe Fundamentals",
    level: 75,
    desc: "Create & manage jobs, job execution flow, z/OS basic commands, dan mainframe concepts.",
    icon: Layers,
  },
  {
    name: "IBM z/OS & IBM Z",
    level: 70,
    desc: "z/OS environment understanding, system concepts, commands, panels, dan IBM Z ecosystem.",
    icon: Cpu,
  },
  {
    name: "LinuxONE (Hybrid Mainframe)",
    level: 72,
    desc: "LPAR provisioning, Linux installation, basic configuration, dan hybrid infrastructure exposure.",
    icon: Server,
  },
  {
    name: "Database (IMS DB, DB2, SQL)",
    level: 65,
    desc: "Basic IMS DB concepts, DB2 exposure, PostgreSQL & SQL Server fundamentals.",
    icon: Database,
  },
  {
    name: "System Administration Basics",
    level: 68,
    desc: "Linux system administration, monitoring, configuration, dan performance awareness.",
    icon: Terminal,
  },
  {
    name: "IT Infrastructure & Preventive Maintenance",
    level: 70,
    desc: "Preventive maintenance activities, infrastructure readiness, dan operational support mindset.",
    icon: Network,
  },
]

export default function Skills() {
  const controls = useAnimationControls()
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  /* =========================
     AUTO SCROLL
  ========================= */
  const startAutoScroll = async () => {
    const width = containerRef.current?.scrollWidth ?? 0

    await controls.start({
      x: -width / 2,
      transition: {
        duration: 32,
        ease: "linear",
      },
    })

    x.set(0)
    startAutoScroll()
  }

  useEffect(() => {
    startAutoScroll()
    return () => controls.stop()
  }, [])

  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-400/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Technical Skills & Learning Focus
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Fokus pada pengembangan COBOL, mainframe, dan hybrid infrastructure
            dengan pendekatan learning-by-doing dan exposure enterprise environment.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            animate={controls}
            drag="x"
            dragElastic={0.06}

            /* PAUSE / RESUME */
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startAutoScroll()}
            onDragStart={() => controls.stop()}
            onDragEnd={() => startAutoScroll()}
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="
                    w-80
                    flex-shrink-0
                    rounded-2xl
                    border border-gray-200 dark:border-gray-700
                    bg-white/80 dark:bg-gray-900/80
                    backdrop-blur-xl
                    p-6
                    shadow-xl
                    hover:border-blue-600/60
                    hover:shadow-blue-500/30
                    transition
                  "
                >
                  {/* ICON */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <Icon size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>

                  {/* LEVEL */}
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
