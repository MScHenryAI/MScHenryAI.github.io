"use client"

import { motion } from 'framer-motion'
import { Briefcase, Cpu, Brain, Cloud, Code, Cog, Mail, MessageSquare, Clock, CheckCircle, MessageCircle, ArrowUpRight } from 'lucide-react'
import { ServiceCard } from '@/components/service-card'
import { useReveal } from '@/hooks/use-reveal'

const services = [
  {
    title: 'Desarrollo de Firmware',
    description: 'Diseño e implementación de software embebido para sistemas de control, IoT y automoción.',
    features: [
      'Programación en C/C++ y Python',
      'Protocolos CAN, J1939, I2C, SPI',
      'Microcontroladores ESP32, STM32, Arduino',
      'Integración de sensores y actuadores',
    ],
    icon: Cpu,
    color: 'bg-blue-500/20 text-blue-400',
    glowColor: 'bg-blue-500/20',
  },
  {
    title: 'Consultoría en IA/ML',
    description: 'Desarrollo de modelos de machine learning y deep learning para soluciones empresariales.',
    features: [
      'Visión computacional con CNNs',
      'Procesamiento de lenguaje natural (NLP)',
      'Análisis predictivo y series temporales',
      'Despliegue en cloud (AWS, Azure, GCP)',
    ],
    icon: Brain,
    color: 'bg-purple-500/20 text-purple-400',
    glowColor: 'bg-purple-500/20',
  },
  {
    title: 'Automatización Power Platform',
    description: 'Desarrollo de aplicaciones empresariales y automatización de flujos de trabajo.',
    features: [
      'Power Apps - aplicaciones low-code',
      'Power Automate - flujos automatizados',
      'Integración con SharePoint y Teams',
      'Conexión con APIs externas',
    ],
    icon: Cog,
    color: 'bg-teal-500/20 text-teal-400',
    glowColor: 'bg-teal-500/20',
  },
  {
    title: 'Desarrollo Web',
    description: 'Creación de sitios web autoadministrables y aplicaciones web personalizadas.',
    features: [
      'WordPress con plugins personalizados',
      'Desarrollo frontend moderno',
      'Optimización SEO y rendimiento',
      'Hosting y mantenimiento',
    ],
    icon: Code,
    color: 'bg-orange-500/20 text-orange-400',
    glowColor: 'bg-orange-500/20',
  },
  {
    title: 'Análisis de Datos',
    description: 'Transformación de datos en insights accionables para tu negocio.',
    features: [
      'ETL y limpieza de datos con Python',
      'Dashboards interactivos en Power BI',
      'Reportes automatizados',
      'Visualización de KPIs',
    ],
    icon: Cloud,
    color: 'bg-green-500/20 text-green-400',
    glowColor: 'bg-green-500/20',
  },
  {
    title: 'Consultoría Cloud',
    description: 'Migración y optimización de infraestructura en la nube.',
    features: [
      'Arquitectura AWS/Azure/GCP',
      'Despliegue de aplicaciones ML',
      'Bases de datos y almacenamiento',
      'Seguridad y optimización de costos',
    ],
    icon: Cloud,
    color: 'bg-indigo-500/20 text-indigo-400',
    glowColor: 'bg-indigo-500/20',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico y Objetivos',
    description: 'Levantamos contexto de negocio, riesgos, métricas clave y alcance inicial para priorizar lo que realmente genera valor.',
  },
  {
    step: '02',
    title: 'Diseño de MVP',
    description: 'Defino una versión mínima viable funcional, con arquitectura, backlog priorizado y entregables claros por fase.',
  },
  {
    step: '03',
    title: 'Sprints e Iteración',
    description: 'Ejecución en ciclos ágiles con demos frecuentes, feedback continuo y ajustes técnicos para acelerar resultados.',
  },
  {
    step: '04',
    title: 'Entrega y Escalado',
    description: 'Despliegue, documentación, transferencia de conocimiento y roadmap de mejora para escalar de MVP a producto.',
  },
]

export default function FreelancePage() {
  const { ref: processRef, isInView: processInView } = useReveal()

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
            <Briefcase className="w-4 h-4" />
            {'// Servicios Freelance'}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Soluciones <span className="text-primary glow-text">a Medida</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformo ideas en soluciones técnicas. Desde firmware embebido hasta 
            modelos de IA y automatización empresarial.
          </p>
        </motion.div>

        {/* Services Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                color={service.color}
                glowColor={service.glowColor}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              {'// Proceso de Trabajo'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo <span className="text-primary">Trabajo</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Trabajo con enfoque ágil y orientado a valor: construimos un MVP útil,
              medimos impacto y evolucionamos en iteraciones cortas usando prácticas de
              Scrum, Kanban y Lean Startup según el tipo de proyecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <span className="text-4xl font-bold text-primary/20 font-mono mb-4 block">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 p-6 rounded-2xl bg-card/40 border border-border/50"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">Metodología de ejecución</h3>
            <div className="flex flex-wrap gap-2">
              {['Discovery', 'Sprint Planning', 'Scrum / Kanban', 'Lean Startup', 'Demo & Feedback', 'Mejora Continua'].map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full border border-border/50"
                >
                  {method}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Work With Me */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 border border-border/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Por qué trabajar <span className="text-primary">conmigo</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Combino visión de negocio y ejecución técnica para convertir ideas en productos reales.
                  Mi enfoque es construir rápido, validar temprano y escalar con control, evitando sobrecostos
                  y retrabajos típicos de proyectos sin una estrategia iterativa.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: CheckCircle, text: 'Construcción de MVP funcional para validar rápido y reducir riesgo.' },
                    { icon: Clock, text: 'Iteraciones en sprints con entregables medibles y priorización continua.' },
                    { icon: MessageSquare, text: 'Comunicación clara, demos frecuentes y decisiones guiadas por feedback.' },
                    { icon: CheckCircle, text: 'Documentación y transferencia de conocimiento para que tu equipo continúe.' },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.text} className="flex items-center gap-3 text-foreground">
                        <Icon className="w-5 h-5 text-primary" />
                        {item.text}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-card/80 border border-border/50 text-center">
                    <span className="text-3xl font-bold text-primary block mb-1">5+</span>
                    <span className="text-sm text-muted-foreground">Años de experiencia</span>
                  </div>
                  <div className="p-6 rounded-xl bg-card/80 border border-border/50 text-center">
                    <span className="text-3xl font-bold text-primary block mb-1">15+</span>
                    <span className="text-sm text-muted-foreground">Proyectos completados</span>
                  </div>
                  <div className="p-6 rounded-xl bg-card/80 border border-border/50 text-center">
                    <span className="text-3xl font-bold text-primary block mb-1">100%</span>
                    <span className="text-sm text-muted-foreground">Clientes satisfechos</span>
                  </div>
                  <div className="p-6 rounded-xl bg-card/80 border border-border/50 text-center">
                    <span className="text-3xl font-bold text-primary block mb-1">48h</span>
                    <span className="text-sm text-muted-foreground">Tiempo de respuesta</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              {'// Contacto'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Iniciemos tu <span className="text-primary">Proyecto</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Si quieres avanzar rápido, contáctame por correo o WhatsApp
                y te respondo con un siguiente paso claro.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <a
                  href="mailto:henry.profesional@outlook.com"
                  className="group relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/15 via-card/60 to-blue-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_45%)]" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-sky-500/20 border border-sky-400/30">
                        <Mail className="w-5 h-5 text-sky-300" />
                      </div>
                      <div>
                        <p className="text-sm font-mono text-sky-300">Correo directo</p>
                        <p className="font-semibold text-foreground">henry.profesional@outlook.com</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-sky-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>

                <a
                  href="https://wa.me/573011909850?text=Hola%20Henry%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20de%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-card/60 to-teal-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_45%)]" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
                        <MessageCircle className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-sm font-mono text-emerald-300">WhatsApp</p>
                        <p className="font-semibold text-foreground">+57 301 190 9850</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-emerald-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-green-400">Disponible para nuevos proyectos</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
