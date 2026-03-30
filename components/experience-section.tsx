"use client"

import { motion } from 'framer-motion'
import { Building2, GraduationCap, Calendar } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const experiences = [
  {
    type: 'work',
    title: 'Embedded Software Engineer',
    company: 'Marcopolo Superpolo',
    period: '2025 - Actualidad',
    description: 'Diseño de firmware, control de ECUs en buses eléctricos/hidrógeno, análisis de protocolos J1939/CAN Bus y simulación de sistemas mecatrónicos.',
    highlights: ['C/C++', 'MATLAB/Simulink', 'CAN Bus', 'J1939'],
  },
  {
    type: 'work',
    title: 'E-Learning and Digital Transformation Analyst',
    company: 'Marcopolo Superpolo',
    period: '2023 - 2025',
    description: 'Migración a AWS, desarrollo de apps empresariales con Power Platform, y creación de dashboards en Power BI para análisis predictivo.',
    highlights: ['AWS', 'Power Apps', 'Power BI', 'Python ETL'],
  },
  {
    type: 'work',
    title: 'Technical Training Engineer',
    company: 'Marcopolo Superpolo',
    period: '2022 - 2023',
    description: 'Soporte de ingeniería en campo para diagnóstico de fallas mecatrónicas y desarrollo de programas de capacitación técnica.',
    highlights: ['Diagnóstico', 'Capacitación', 'Manufactura'],
  },
  {
    type: 'work',
    title: 'Training Assistant',
    company: 'Hyundai Colombia',
    period: '2021 - 2022',
    description: 'Monitoreo de redes CAN, diagnóstico de módulos electrónicos y análisis de arquitectura electrónica vehicular.',
    highlights: ['CAN Protocol', 'Diagnóstico', 'Electrónica'],
  },
  {
    type: 'education',
    title: 'Maestría en Inteligencia Artificial Aplicada',
    company: 'Tecnológico de Monterrey',
    period: '2023 - 2025',
    description: 'Especialización en ciencia de datos, visión computacional, ML y NLP. Becario MinTIC.',
    highlights: ['Machine Learning', 'Computer Vision', 'NLP'],
  },
  {
    type: 'education',
    title: 'Ingeniería Mecatrónica',
    company: 'Universidad Antonio Nariño',
    period: '2016 - 2021',
    description: 'Graduado Cum Laude. Asistente de docencia e investigación en programación, IA y modelado computacional.',
    highlights: ['Cum Laude', 'Investigación', 'Docencia'],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useReveal()

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
            {'// Trayectoria Profesional'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experiencia & <span className="text-primary">Educación</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-primary/50 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const Icon = exp.type === 'work' ? Building2 : GraduationCap
              
              return (
                <motion.div
                  key={`${exp.title}-${exp.period}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                    <div className={`p-6 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 ${
                      isLeft ? 'md:ml-auto' : ''
                    } max-w-md`}>
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-mono text-primary">{exp.period}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
