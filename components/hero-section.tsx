"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle, ChevronDown, Sparkles, Code2, Brain, Building2, GraduationCap } from 'lucide-react'
import { ParticleSphere } from './particle-sphere'

const techStack = [
  'Python', 'C/C++', 'TensorFlow', 'PyTorch', 'AWS', 'Azure', 'Power Platform'
]

const headingLines = [
  ['Henry'],
  ['Aranzales', 'Lopez'],
]

const valueHighlights = [
  {
    title: 'Desarrollo Web & Apps',
    detail: 'React, Python y Cloud.',
    icon: Code2,
    accent: 'from-blue-500/25 to-cyan-500/10',
    iconColor: 'text-blue-300',
  },
  {
    title: 'Inteligencia Artificial',
    detail: 'Vision Computacional, NLP y Analisis de Datos.',
    icon: Brain,
    accent: 'from-violet-500/25 to-fuchsia-500/10',
    iconColor: 'text-violet-300',
  },
  {
    title: 'Ecosistema Empresarial',
    detail: 'Automatizacion con Microsoft Power Platform.',
    icon: Building2,
    accent: 'from-emerald-500/25 to-teal-500/10',
    iconColor: 'text-emerald-300',
  },
  {
    title: 'Consultoria & Formacion',
    detail: 'Mentoria tecnica y transferencia de conocimiento.',
    icon: GraduationCap,
    accent: 'from-amber-500/25 to-orange-500/10',
    iconColor: 'text-amber-300',
  },
]

const spotlightTags = [
  'IA Aplicada',
  'Sistemas Embebidos',
  'Arquitecturas Cloud',
  'Power Platform',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 md:py-36">
        {/* Particle Sphere - anchored to content container for stable responsive behavior */}
        <div
          aria-hidden="true"
          className="absolute right-[-52%] sm:right-[-42%] md:right-[-18%] lg:right-[-18%] xl:right-[-16%] 2xl:right-[-14%] top-[36%] sm:top-[34%] md:top-[32%] lg:top-[34%] -translate-y-1/2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[560px] lg:h-[560px] xl:w-[640px] xl:h-[640px] opacity-18 sm:opacity-24 md:opacity-40 lg:opacity-55 pointer-events-none"
        >
          <ParticleSphere />
        </div>

        <div className="max-w-3xl xl:max-w-4xl lg:pr-14">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Disponible para nuevos proyectos
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {headingLines.map((line, lineIndex) => (
              <span key={line.join('-')} className="block">
                {line.map((word, wordIndex) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, delay: 0.12 + lineIndex * 0.1 + wordIndex * 0.08 }}
                    className={`inline-block mr-3 ${word === 'Lopez' ? 'text-primary glow-text' : 'text-foreground'}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtitle with typewriter-like effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              <span className="text-primary">{'<'}</span>
              Embedded Software Engineer
              <span className="text-primary">{' />'}</span>
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Magíster en Inteligencia Artificial Aplicada
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Desarrollador integral en la convergencia de hardware, software y ciencia de datos. 
            Especialista en modelos de IA para predicción, visión computacional y NLP, 
            aplicados a sistemas embebidos y entornos cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative mb-8 max-w-2xl md:max-w-3xl"
          >
            <motion.div
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/35 via-primary/25 to-cyan-400/35 blur-md"
            />
            <div className="relative rounded-2xl border border-primary/30 bg-background/80 backdrop-blur-md p-5 md:p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.14),transparent_55%)] pointer-events-none" />

              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-mono text-primary">Posicionamiento Premium</span>
              </div>

              <p className="text-base md:text-lg leading-relaxed mb-4">
                <span className="font-semibold text-primary">Ingeniero Multidisciplinario & Magister en IA.</span>{' '}
                <span className="text-foreground">Construyo soluciones donde el hardware, el software y los datos convergen.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {valueHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.4 + index * 0.05 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="rounded-xl border border-border/60 bg-card/60 px-3.5 py-3 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className={`inline-flex w-8 h-8 items-center justify-center rounded-lg mb-2 border border-border/50 bg-gradient-to-br ${item.accent}`}>
                      <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {spotlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-primary/25 bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-3 py-1.5 text-sm font-mono bg-secondary/50 text-muted-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[130%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Ver Proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/freelance#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 text-foreground font-medium border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Contáctame
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
