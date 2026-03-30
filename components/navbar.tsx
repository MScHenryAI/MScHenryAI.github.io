"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Rocket, Code, FlaskConical, Briefcase, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/projects', label: 'Proyectos', icon: Code },
  { href: '/lab', label: 'El Laboratorio', icon: FlaskConical },
  { href: '/freelance', label: 'Freelance', icon: Briefcase },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
          isScrolled ? "w-[calc(100%-2rem)] max-w-4xl" : "w-[calc(100%-2rem)] max-w-5xl"
        )}
      >
        <nav className={cn(
          "glass rounded-2xl px-4 py-3 flex items-center justify-between transition-all duration-500",
          isScrolled && "shadow-lg shadow-primary/10"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-primary/20 bg-secondary/50">
              <Image
                src="/placeholder-user.jpg"
                alt="Foto de perfil de Henry"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="hidden sm:block font-medium text-foreground/90">
              Henry<span className="text-primary">.</span>dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2",
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Startup Button */}
          <div className="hidden md:block">
            <Link
              href="/startup"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Startup
              </span>
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 glass rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="/startup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-xl bg-primary text-primary-foreground font-medium"
              >
                <Rocket className="w-5 h-5" />
                Startup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
