"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  category: string
  featured?: boolean
  icon: LucideIcon
  color: string
  link?: string
  github?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  category,
  featured,
  icon: Icon,
  color,
  link,
  github,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`relative h-full min-h-[320px] ${featured ? 'md:min-h-[500px]' : ''} p-6 bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10`}>
        {/* Animated gradient background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-50`}
        />

        {/* Category badge */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
            {category}
          </span>
          {featured && (
            <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full border border-accent/30">
              Destacado
            </span>
          )}
        </div>

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="inline-flex p-4 rounded-2xl bg-secondary/50 border border-border/50"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className={`font-bold text-foreground mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className={`text-muted-foreground leading-relaxed mb-6 ${featured ? 'text-base' : 'text-sm'}`}>
            {description}
          </p>

          {/* Technologies - revealed on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="mb-6"
              >
                <p className="text-xs font-mono text-muted-foreground mb-2">Stack tecnológico:</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-background/80 text-foreground rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Links */}
          <div className="flex items-center gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-xl border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Proyecto
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary/50 text-foreground rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Código
              </a>
            )}
            {!link && !github && (
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4" />
                Más detalles próximamente
              </span>
            )}
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full pointer-events-none" />
      </div>
    </motion.article>
  )
}
