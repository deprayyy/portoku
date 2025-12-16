"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"

const MENU = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState("about")
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => setMounted(true), [])

  /* =========================
     SMOOTH SCROLL HANDLER
  ========================= */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = navRef.current?.offsetHeight ?? 80
    const y =
      el.getBoundingClientRect().top + window.scrollY - navHeight - 16

    window.scrollTo({
      top: y,
      behavior: "smooth",
    })

    setOpen(false)
  }

  /* =========================
     ACTIVE SECTION OBSERVER
  ========================= */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    MENU.forEach((item) => {
      const section = document.getElementById(item.id)
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(item.id)
          }
        },
        {
          threshold: 0.3,
        }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  if (!mounted) return null

  return (
    <nav
      ref={navRef}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        z-50
        w-[92%] max-w-6xl
        rounded-2xl
        backdrop-blur-xl
        border
        bg-white/70 dark:bg-black/60
        border-gray-200/40 dark:border-gray-800/60
        shadow-lg shadow-black/5
      "
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* BRAND */}
        <span className="font-black tracking-wide text-lg text-gray-900 dark:text-white">
          ABCDEPRAY
        </span>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-2 relative">
          {MENU.map((item) => {
            const isActive = active === item.id

            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium
                    transition
                    ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }
                  `}
                >
                  {item.name}

                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="
                        absolute inset-0
                        rounded-lg
                        bg-blue-500/10 dark:bg-blue-500/15
                        -z-10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              p-2 rounded-lg
              text-gray-700 dark:text-gray-300
              hover:bg-gray-200/60 dark:hover:bg-gray-800/60
              transition
            "
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden p-2 rounded-lg
              text-gray-700 dark:text-gray-300
              hover:bg-gray-200/60 dark:hover:bg-gray-800/60
              transition
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              border-t border-gray-200/40 dark:border-gray-800/60
              px-6 py-4
              bg-white/80 dark:bg-black/70
              backdrop-blur-xl
            "
          >
            <ul className="flex flex-col gap-3">
              {MENU.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        w-full text-left px-4 py-2 rounded-lg text-sm font-medium
                        transition
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
                        }
                      `}
                    >
                      {item.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
