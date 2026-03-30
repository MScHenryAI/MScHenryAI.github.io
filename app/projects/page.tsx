"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, Brain, Cloud, Database, Code, Cpu, Zap, Eye, MessageSquare, BarChart3 } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'ai', label: 'Inteligencia Artificial' },
  { id: 'embedded', label: 'Sistemas Embebidos' },
  { id: 'cloud', label: 'Cloud & Data' },
  { id: 'automation', label: 'Automatización' },
]

const projects = [
  {
    id: 1,
    title: 'Movilidad Eléctrica Colombia',
    description: 'Desarrollo de firmware y sistemas de control para buses eléctricos e hidrógeno. Implementación de ECUs, análisis de protocolos J1939/CAN Bus y telemetría avanzada para vehículos de transporte masivo.',
    technologies: ['C/C++', 'MATLAB/Simulink', 'CAN Bus', 'J1939', 'ESP32', 'Python'],
    category: 'embedded',
    featured: true,
    icon: Car,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Visión Computacional para Movilidad Autónoma',
    description: 'Modelos en Google Colab para detección de peatones, señales de tránsito, lectura de líneas de carril y simulación de sensores aplicados a navegación inteligente.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Google Colab'],
    category: 'ai',
    featured: true,
    icon: Eye,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'Análisis Predictivo Industrial',
    description: 'Proyectos aplicados a limpieza, visualización y modelado de datos usando algoritmos supervisados en escenarios industriales para predicción de mantenimiento.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    category: 'ai',
    icon: BarChart3,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 4,
    title: 'IBM SkillsBuild - IA Generativa',
    description: 'Desarrollo de soluciones basadas en inteligencia artificial generativa, visualización de datos y automatización con herramientas Watsonx y Jupyter Notebooks.',
    technologies: ['Python', 'IBM Watsonx', 'RAG', 'LLMs', 'Jupyter'],
    category: 'ai',
    icon: Brain,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 11,
    title: 'Asistente Técnico RAG para Mantenimiento de Movilidad Eléctrica',
    description: 'Proyecto de IA aplicada orientado a soporte técnico y mantenimiento asistido. Se implementó una arquitectura RAG para consultar documentación técnica autorizada, manuales operativos y procedimientos de servicio, permitiendo responder preguntas de diagnóstico con trazabilidad de fuentes. El alcance incluyó: ingesta y segmentación de documentos, generación de embeddings, búsqueda semántica, re-ranking de contexto y generación de respuestas con citas para reducir alucinaciones y mejorar la confiabilidad en entornos industriales.',
    technologies: ['Python', 'RAG', 'LLMs', 'LangChain', 'FAISS', 'Sentence Transformers', 'FastAPI', 'Docker'],
    category: 'ai',
    featured: true,
    icon: Brain,
    color: 'from-fuchsia-500/20 to-violet-500/20',
  },
  {
    id: 5,
    title: 'Integración Cloud AWS',
    description: 'Exploración de infraestructura, servicios cognitivos y entrenamiento de modelos en Amazon SageMaker y AWS Lambda para despliegue de soluciones inteligentes.',
    technologies: ['AWS', 'SageMaker', 'Lambda', 'S3', 'EC2'],
    category: 'cloud',
    icon: Cloud,
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 6,
    title: 'Dashboard Power BI - KPIs Operativos',
    description: 'Diseño de dashboards interactivos para visualización de indicadores de desempeño y predicción de tendencias operativas en entornos de manufactura.',
    technologies: ['Power BI', 'Python ETL', 'SQL', 'DAX'],
    category: 'cloud',
    icon: Database,
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    id: 7,
    title: 'Automatización Empresarial',
    description: 'Desarrollo de aplicaciones empresariales y flujos de trabajo automatizados con Microsoft Power Platform, reduciendo tiempos de gestión administrativa.',
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'APIs REST'],
    category: 'automation',
    icon: Zap,
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    id: 8,
    title: 'Sistema de Diagnóstico CAN',
    description: 'Monitoreo de redes multiplexadas y diagnóstico de módulos electrónicos mediante protocolo CAN para vehículos Hyundai.',
    technologies: ['CAN Protocol', 'Diagnóstico OBD', 'Python', 'Serial'],
    category: 'embedded',
    icon: Cpu,
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    id: 9,
    title: 'Plataforma LMS en AWS',
    description: 'Migración y administración técnica de plataformas de e-learning a infraestructura cloud, gestionando servidores y bases de datos para alta disponibilidad.',
    technologies: ['AWS', 'MySQL', 'WordPress', 'PHP', 'Linux'],
    category: 'cloud',
    icon: Code,
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 10,
    title: 'NLP - Procesamiento de Lenguaje',
    description: 'Implementación de modelos de procesamiento de lenguaje natural para análisis de sentimientos y clasificación de texto en aplicaciones empresariales.',
    technologies: ['Python', 'NLTK', 'SpaCy', 'Transformers', 'BERT'],
    category: 'ai',
    icon: MessageSquare,
    color: 'from-indigo-500/20 to-blue-500/20',
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
            {'// Portafolio'}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Mis <span className="text-primary glow-text">Proyectos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en sistemas embebidos, 
            inteligencia artificial y transformación digital.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                category={categories.find(c => c.id === project.category)?.label || project.category}
                featured={project.featured}
                icon={project.icon}
                color={project.color}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">
              No hay proyectos en esta categoría todavía.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
