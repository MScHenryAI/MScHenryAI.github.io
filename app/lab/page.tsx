"use client"

import { motion } from 'framer-motion'
import {
  FlaskConical,
  Brain,
  Cpu,
  Wifi,
  Server,
  Database,
  GitBranch,
  Activity,
  Building2,
  Users,
  Workflow,
  ShieldCheck,
  Target,
  Bot,
} from 'lucide-react'
import { Terminal } from '@/components/terminal'
import { SensorChart } from '@/components/sensor-chart'
import { useReveal } from '@/hooks/use-reveal'

const aiTerminalLines = [
  { type: 'command' as const, content: 'python train_vision_model.py --dataset quality_inspection --epochs 120', delay: 500 },
  { type: 'output' as const, content: 'Loading dataset: multisite_quality_images_v3' },
  { type: 'output' as const, content: 'Applying augmentation and class balancing...' },
  { type: 'info' as const, content: 'Using GPU: NVIDIA RTX 4090 | mixed_precision=true' },
  { type: 'output' as const, content: 'Epoch 1/120 - loss: 0.9124 - f1: 0.5412' },
  { type: 'output' as const, content: 'Epoch 40/120 - loss: 0.3118 - f1: 0.8426' },
  { type: 'output' as const, content: 'Epoch 80/120 - loss: 0.1431 - f1: 0.9142' },
  { type: 'output' as const, content: 'Epoch 120/120 - loss: 0.0713 - f1: 0.9584' },
  { type: 'success' as const, content: 'Model validated and exported: vision_inspector_v4.onnx' },
  { type: 'info' as const, content: 'Registering model: mlflow://innovation-lab/vision-inspector-v4' },
]

const embeddedTerminalLines = [
  { type: 'command' as const, content: 'embeddedctl deploy --target=edge-gateway --profile=prod', delay: 500 },
  { type: 'info' as const, content: 'Provisioning RTOS services, secure boot and OTA...' },
  { type: 'output' as const, content: 'Firmware v1.8.2 flashed | checksum OK' },
  { type: 'output' as const, content: 'MQTT broker connected | QoS:2 | latency: 18ms' },
  { type: 'output' as const, content: 'OPC-UA bridge online | tags synchronized: 248' },
  { type: 'command' as const, content: 'automation run --flow=invoice-validation --batch=500' },
  { type: 'output' as const, content: 'RPA jobs completed: 500/500 | exceptions: 7' },
  { type: 'output' as const, content: 'Power Platform approvals triggered successfully' },
  { type: 'success' as const, content: 'Operational stack healthy | SLA 99.95%' },
  { type: 'info' as const, content: 'Publishing observability metrics to Grafana Cloud' },
]

const experiments = [
  {
    title: 'Visión Computacional para Control de Calidad',
    description: 'Pipeline de detección de defectos y clasificación de anomalías en líneas de producción con inferencia en edge y alertamiento en tiempo real.',
    status: 'activo',
    progress: 81,
    icon: Activity,
  },
  {
    title: 'Redes Neuronales para Forecast Operativo',
    description: 'Modelos de series temporales para anticipar demanda, carga de operación y ventanas óptimas de mantenimiento en entornos empresariales.',
    status: 'piloto',
    progress: 69,
    icon: Brain,
  },
  {
    title: 'Automatización Inteligente End-to-End',
    description: 'Orquestación de flujos con Power Platform, RPA y microservicios para reducir tiempos de ciclo en procesos críticos de negocio.',
    status: 'implementacion',
    progress: 54,
    icon: Cpu,
  },
]

const prototypes = [
  {
    title: 'Plataforma Edge AI para Inspección Visual',
    description: 'Arquitectura modular para desplegar modelos de visión computacional en plantas y consolidar hallazgos en tableros ejecutivos.',
    components: ['Python', 'OpenCV', 'ONNX Runtime', 'FastAPI', 'Docker'],
    status: 'Piloto empresarial',
  },
  {
    title: 'Copiloto RAG para Operaciones',
    description: 'Asistente interno para consultar SOPs, políticas y manuales técnicos con respuestas trazables para equipos de soporte y operaciones.',
    components: ['RAG', 'LangChain', 'FAISS', 'Azure OpenAI', 'Power Apps'],
    status: 'En despliegue',
  },
  {
    title: 'Suite de Transformación Digital Industrial',
    description: 'Integración entre software embebido, telemetría IoT y automatización empresarial para decisiones operativas en tiempo real.',
    components: ['ESP32/STM32', 'MQTT', 'Node-RED', 'Power Automate', 'Power BI'],
    status: 'Investigación aplicada',
  },
]

const formationProjects = [
  {
    title: 'Generador de Textos Académicos por Edades',
    description:
      'Proyecto de formación para colegios de Bogotá que genera contenidos académicos adaptados por rango de edad, grado escolar y nivel de lectura, con apoyo de IA generativa y validación pedagógica.',
    stack: ['NLP', 'RAG', 'Python', 'FastAPI', 'Power Apps', 'Azure OpenAI'],
    status: 'en validación',
    progress: 64,
    icon: Brain,
  },
  {
    title: 'Simulador de Producción para Manufactura Automotriz',
    description:
      'Liderazgo en la construcción de un simulador para modelar líneas de producción, identificar cuellos de botella, evaluar escenarios de capacidad y optimizar tiempos de ciclo en planta.',
    stack: ['Simulación de eventos discretos', 'Python', 'Modelado de procesos', 'SQL', 'Power BI', 'Digital Twin'],
    status: 'liderando',
    progress: 57,
    icon: Cpu,
  },
]

const enterpriseAdoptionRoadmap = [
  {
    phase: '01',
    title: 'Diagnóstico de Madurez',
    description:
      'Evaluación integral de procesos, talento, cultura digital y capacidades de datos para definir prioridades reales de transformación.',
    focus: 'Personas + procesos + información',
    icon: Target,
  },
  {
    phase: '02',
    title: 'Diseño de Casos de Valor',
    description:
      'Selección de casos con impacto de negocio medible: costos, tiempos, calidad, riesgo operativo y experiencia del cliente interno.',
    focus: 'ROI y priorización por impacto',
    icon: Building2,
  },
  {
    phase: '03',
    title: 'Implementación y Cambio',
    description:
      'Despliegue progresivo con gobierno, capacitación por roles, gestión del cambio y adopción operacional en áreas piloto.',
    focus: 'Adopción real y gestión de equipos',
    icon: Users,
  },
  {
    phase: '04',
    title: 'Escalado y Gobernanza',
    description:
      'Estandarización, controles de calidad, seguridad, trazabilidad y observabilidad para escalar innovación en toda la empresa.',
    focus: 'Sostenibilidad y cumplimiento',
    icon: ShieldCheck,
  },
]

const enterpriseAgentPortfolio = [
  {
    title: 'Agente Académico Adaptativo para Colegios',
    impact: 'Personalización de contenidos por edad y nivel, soporte a docentes y mejora de tiempos de diseño curricular.',
    stack: ['RAG', 'NLP', 'Rubricas pedagógicas', 'Validación docente'],
    stage: 'Piloto educativo',
    icon: Bot,
  },
  {
    title: 'Simulador de Producción para Manufactura',
    impact: 'Soporte a decisiones de capacidad, reducción de cuellos de botella y experimentación segura de escenarios.',
    stack: ['Simulación', 'Digital Twin', 'Modelado de procesos', 'KPIs operativos'],
    stage: 'Liderando diseño',
    icon: Workflow,
  },
  {
    title: 'Agente de Adopción Tecnológica Interna',
    impact: 'Acompaña onboarding de herramientas, responde dudas operativas y acelera la curva de aprendizaje de equipos.',
    stack: ['Base de conocimiento', 'RAG empresarial', 'Playbooks de cambio', 'Analítica de uso'],
    stage: 'Propuesta activa',
    icon: Users,
  },
]

export default function LabPage() {
  const { ref: experimentsRef, isInView: experimentsInView } = useReveal()
  const { ref: prototypesRef, isInView: prototypesInView } = useReveal()
  const { ref: formationRef, isInView: formationInView } = useReveal()
  const { ref: adoptionRef, isInView: adoptionInView } = useReveal()

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Grid background */}
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
            <FlaskConical className="w-4 h-4" />
            {'// El Laboratorio'}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Centro de <span className="text-primary glow-text">Innovación</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un espacio de I+D donde convergen visión computacional, redes neuronales,
            automatización inteligente, software embebido y transformación digital empresarial.
          </p>
        </motion.div>

        {/* Live Terminals Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <Server className="w-6 h-6 text-primary" />
            Consolas en Vivo
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Terminal 
                lines={aiTerminalLines} 
                title="vision-ai-pipeline" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Terminal 
                lines={embeddedTerminalLines} 
                title="embedded-automation-core" 
              />
            </motion.div>
          </div>
        </section>

        {/* Sensor Dashboard */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <Activity className="w-6 h-6 text-primary" />
            Panel de Operación Técnica
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <SensorChart
                title="Carga de Inferencia"
                unit="Porcentaje"
                icon="cpu"
                color="bg-blue-500/20 text-blue-400"
                minValue={0}
                maxValue={100}
                warningThreshold={85}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <SensorChart
                title="Latencia de APIs"
                unit="Milisegundos"
                icon="temperature"
                color="bg-orange-500/20 text-orange-400"
                minValue={20}
                maxValue={600}
                warningThreshold={420}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <SensorChart
                title="Flujo de Automatizaciones"
                unit="Ejecuciones/h"
                icon="power"
                color="bg-green-500/20 text-green-400"
                minValue={0}
                maxValue={1200}
                warningThreshold={900}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <SensorChart
                title="Eventos de Integración"
                unit="Msgs/min"
                icon="activity"
                color="bg-purple-500/20 text-purple-400"
                minValue={0}
                maxValue={5000}
                warningThreshold={4200}
              />
            </motion.div>
          </div>
        </section>

        {/* AI Experiments */}
        <section ref={experimentsRef} className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={experimentsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <Brain className="w-6 h-6 text-primary" />
            Iniciativas de IA y Automatización
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiments.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={experimentsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                      exp.status === 'activo' ? 'bg-green-500/20 text-green-400' :
                      exp.status === 'piloto' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progreso</span>
                      <span className="font-mono">{exp.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={experimentsInView ? { width: `${exp.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Mechatronic Prototypes */}
        <section ref={prototypesRef}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={prototypesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <Cpu className="w-6 h-6 text-primary" />
            Proyectos de Innovación Empresarial
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prototypes.map((proto, index) => (
              <motion.div
                key={proto.title}
                initial={{ opacity: 0, y: 20 }}
                animate={prototypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                    <Wifi className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full">
                    {proto.status}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{proto.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{proto.description}</p>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <Database className="w-3 h-3" />
                    Componentes:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proto.components.map((comp) => (
                      <span
                        key={comp}
                        className="px-2 py-0.5 text-xs font-mono bg-background/50 text-muted-foreground rounded-md border border-border/50"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Training and Digital Transformation */}
        <section ref={formationRef} className="mt-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={formationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <FlaskConical className="w-6 h-6 text-primary" />
            Formación & Transformación
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {formationProjects.map((project, index) => {
              const Icon = project.icon

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={formationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                      project.status === 'liderando'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-xs font-mono bg-background/50 text-muted-foreground rounded-md border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progreso</span>
                      <span className="font-mono">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={formationInView ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Enterprise Adoption and Change Management */}
        <section ref={adoptionRef} className="mt-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={adoptionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-4 flex items-center gap-3"
          >
            <Building2 className="w-6 h-6 text-primary" />
            Adopción Empresarial & Gestión del Cambio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={adoptionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-muted-foreground max-w-3xl mb-8"
          >
            La innovación no depende solo de tecnología: también involucra estrategia,
            cultura organizacional, liderazgo, rediseño de procesos, capacitación y
            medición de resultados para sostener el cambio en el tiempo.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {enterpriseAdoptionRoadmap.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={adoptionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-1">
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <p className="text-xs font-mono text-primary/90">{item.focus}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.h3
            initial={{ opacity: 0, x: -16 }}
            animate={adoptionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-xl font-semibold mb-5 flex items-center gap-2"
          >
            <Bot className="w-5 h-5 text-primary" />
            Portafolio de Agentes y Transformación
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {enterpriseAgentPortfolio.map((project, index) => {
              const Icon = project.icon

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={adoptionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.28 + index * 0.08 }}
                  className="p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full px-2 py-1">
                      {project.stage}
                    </span>
                  </div>

                  <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.impact}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-xs font-mono bg-background/50 text-muted-foreground rounded-md border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Version control indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-sm text-muted-foreground font-mono">
            <GitBranch className="w-4 h-4" />
            <span>innovation-lab</span>
            <span className="text-primary">@</span>
            <span>v3.2.0</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
