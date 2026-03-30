"use client"

import { motion } from 'framer-motion'
import { Cpu, Brain, Cloud, Code, Cog, Database } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const expertiseAreas = [
  {
    icon: Cpu,
    title: 'Sistemas Embebidos',
    description: 'Diseño de firmware, control de ECUs, protocolos CAN/J1939 y desarrollo de soluciones para vehículos eléctricos e hidrógeno.',
    technologies: ['C/C++', 'ESP32', 'Arduino', 'MATLAB/Simulink'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Brain,
    title: 'Inteligencia Artificial',
    description: 'Modelos de ML para predicción, visión computacional con CNNs, y procesamiento de lenguaje natural (NLP).',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Arquitectura cloud, despliegue de modelos ML, servicios cognitivos y automatización de infraestructura.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
    iconColor: 'text-orange-400',
  },
  {
    icon: Database,
    title: 'Análisis de Datos',
    description: 'ETL, visualización de datos, dashboards interactivos y análisis predictivo para toma de decisiones.',
    technologies: ['Python', 'Pandas', 'Power BI', 'SQL'],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
  },
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Soluciones web autoadministrables, CMS personalizados y aplicaciones empresariales.',
    technologies: ['WordPress', 'HTML/CSS', 'JavaScript', 'SQL'],
    color: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Cog,
    title: 'Automatización',
    description: 'Flujos de trabajo empresariales, aplicaciones low-code y automatización de procesos.',
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'APIs'],
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'border-teal-500/30',
    iconColor: 'text-teal-400',
  },
]

export function ExpertiseSection() {
  const { ref, isInView } = useReveal()

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
            {'// Áreas de Especialización'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experiencia <span className="text-primary">Multidisciplinaria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinando ingeniería mecatrónica, desarrollo de software y ciencia de datos 
            para crear soluciones integrales.
          </p>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-6 rounded-2xl bg-card/50 border ${area.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-secondary/50 ${area.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {area.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-background/50 text-muted-foreground rounded-md border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
