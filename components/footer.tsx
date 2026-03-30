"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useHydrated } from '@/hooks/use-hydrated'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/henry-aranzales-lopez-b25398204', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:henry.profesional@outlook.com', icon: Mail, label: 'Email' },
  { href: 'https://github.com/henryaranzales', icon: Github, label: 'GitHub' },
]

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/lab', label: 'El Laboratorio' },
  { href: '/freelance', label: 'Freelance' },
  { href: '/startup', label: 'Startup' },
]

export function Footer() {
  const isHydrated = useHydrated()
  const currentYear = isHydrated ? new Date().getFullYear() : '----'

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-mono font-bold text-primary">HA</span>
              </div>
              <span className="font-semibold text-lg">
                Henry<span className="text-primary">.</span>dev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Ingeniero de Software Embebido y Mecatrónico. Especialista en IA, visión computacional y transformación digital.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navegación</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="mailto:henry.profesional@outlook.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                henry.profesional@outlook.com
              </a>
              <a 
                href="tel:+573011909850"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +57 301 190 9850
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Zipaquirá, Colombia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Henry Aranzales. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs">
            <span className="text-primary">&lt;</span>
            Desarrollado con pasión por la ingeniería
            <span className="text-primary">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
