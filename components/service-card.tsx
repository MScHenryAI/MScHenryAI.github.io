"use client"

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  color: string
  glowColor: string
  index: number
}

export function ServiceCard({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  color, 
  glowColor,
  index 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50">
        {/* Glow effect on hover */}
        <div 
          className={`absolute -inset-1 ${glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
          aria-hidden="true"
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className={`inline-flex p-4 rounded-2xl ${color} mb-6`}
          >
            <Icon className="w-8 h-8" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
            Más información
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full pointer-events-none" />
      </div>
    </motion.div>
  )
}
