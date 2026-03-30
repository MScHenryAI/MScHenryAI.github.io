"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Rocket, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Car,
  Brain,
  Cpu,
  CheckCircle
} from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const ventures = [
  {
    title: 'AI Mobility Solutions',
    description: 'Soluciones de inteligencia artificial para la industria de movilidad eléctrica en Latinoamérica. Desarrollo de sistemas predictivos y telemetría avanzada.',
    status: 'En desarrollo',
    icon: Car,
    features: [
      'Predicción de mantenimiento para flotas',
      'Optimización de rutas con ML',
      'Telemetría en tiempo real',
      'Diagnóstico remoto de vehículos',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'Industrial AI Lab',
    description: 'Laboratorio de I+D enfocado en aplicaciones de machine learning para manufactura e industria 4.0.',
    status: 'Concepto',
    icon: Brain,
    features: [
      'Visión computacional industrial',
      'Control de calidad automatizado',
      'Optimización de procesos',
      'Gemelos digitales',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    title: 'Embedded Systems Studio',
    description: 'Estudio de desarrollo especializado en firmware y sistemas embebidos para startups de hardware.',
    status: 'Activo',
    icon: Cpu,
    features: [
      'Desarrollo de firmware a medida',
      'Prototipado rápido IoT',
      'Certificación y compliance',
      'Soporte técnico continuo',
    ],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
]

const values = [
  {
    icon: Target,
    title: 'Enfoque en Impacto',
    description: 'Cada proyecto busca generar un impacto real en la industria y la sociedad latinoamericana.',
  },
  {
    icon: Zap,
    title: 'Innovación Constante',
    description: 'Investigación y desarrollo continuo en tecnologías emergentes.',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Startup impulsada por dos socios fundadores y abierta a alianzas estrategicas.',
  },
  {
    icon: Shield,
    title: 'Calidad',
    description: 'Estándares de ingeniería de nivel industrial en cada solución.',
  },
]

const milestones = [
  { year: '2021', event: 'Graduación Cum Laude - Ingeniería Mecatrónica' },
  { year: '2022', event: 'Inicio en industria automotriz - Hyundai Colombia' },
  { year: '2023', event: 'Maestría en IA - Tecnológico de Monterrey (Beca MinTIC)' },
  { year: '2024', event: 'Liderazgo en transformación digital - Marcopolo' },
  { year: '2025', event: 'Embedded Software Engineer - Vehículos eléctricos' },
  { year: '2026', event: 'Lanzamiento de iniciativas startup' },
]

export default function StartupPage() {
  const { ref: venturesRef, isInView: venturesInView } = useReveal()
  const { ref: valuesRef, isInView: valuesInView } = useReveal()

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background effects */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              <Rocket className="w-4 h-4" />
              {'// Startup & Ventures'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Construyendo el <span className="text-primary glow-text">Futuro</span>
              <br />
              de la Tecnología en LATAM
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nuestra startup está en construcción. Somos dos socios fundadores y estamos
              validando iniciativas en ingeniería, inteligencia artificial y sistemas
              embebidos para impulsar la transformación digital en Latinoamérica.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/freelance#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 text-foreground font-medium border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                Colaboremos
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Ventures Section */}
        <section ref={venturesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={venturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              {'// Iniciativas'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Áreas de <span className="text-primary">Emprendimiento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proyectos y ventures enfocados en resolver problemas reales con tecnología avanzada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ventures.map((venture, index) => {
              const Icon = venture.icon
              return (
                <motion.div
                  key={venture.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={venturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative h-full p-6 md:p-8 rounded-2xl bg-card/50 border ${venture.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                          venture.status === 'Activo' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : venture.status === 'En desarrollo'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {venture.status}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {venture.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {venture.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {venture.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 border border-border/50"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Valores <span className="text-primary">Fundamentales</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              {'// Trayectoria'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              El <span className="text-primary">Camino</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-primary/50 transform md:-translate-x-1/2" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="inline-block">
                        <span className="text-lg font-mono font-bold text-primary">{milestone.year}</span>
                        <p className="text-muted-foreground mt-1">{milestone.event}</p>
                      </div>
                    </div>

                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50"
          >
            <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Interesado en <span className="text-primary">colaborar</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Somos dos socios fundadores en etapa de construcción y validación.
              Buscamos aliados estratégicos e inversores que compartan la visión de
              transformar la industria tecnológica en Latinoamérica. Conectemos.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:henry.profesional@outlook.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Mail className="w-5 h-5" />
                Contactar
              </a>
              <a
                href="https://www.linkedin.com/in/henry-aranzales-lopez-b25398204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 text-foreground font-medium border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/henryaranzales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 text-foreground font-medium border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border/50">
              <div>
                <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-foreground">5+</span>
                <span className="text-sm text-muted-foreground">Años de experiencia</span>
              </div>
              <div>
                <Cpu className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-foreground">7</span>
                <span className="text-sm text-muted-foreground">Iniciativas activas</span>
              </div>
              <div>
                <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-foreground">2</span>
                <span className="text-sm text-muted-foreground">Socios fundadores</span>
              </div>
              <div>
                <Rocket className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="block text-2xl font-bold text-foreground">En proceso</span>
                <span className="text-sm text-muted-foreground">Startup en construccion</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
