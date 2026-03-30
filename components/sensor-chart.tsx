"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Cpu, Thermometer, Zap } from 'lucide-react'
import { useHydrated } from '@/hooks/use-hydrated'

interface SensorData {
  time: string
  value: number
}

interface SensorChartProps {
  title: string
  unit: string
  icon: 'activity' | 'cpu' | 'temperature' | 'power'
  color: string
  minValue?: number
  maxValue?: number
  warningThreshold?: number
}

const icons = {
  activity: Activity,
  cpu: Cpu,
  temperature: Thermometer,
  power: Zap,
}

export function SensorChart({ 
  title, 
  unit, 
  icon, 
  color,
  minValue = 0,
  maxValue = 100,
  warningThreshold = 80 
}: SensorChartProps) {
  const isHydrated = useHydrated()
  const defaultValue = (minValue + maxValue) / 2

  const [data, setData] = useState<SensorData[]>(() => {
    const initialData: SensorData[] = []
    for (let i = 0; i < 20; i++) {
      initialData.push({
        time: `${i}s`,
        value: defaultValue,
      })
    }
    return initialData
  })

  useEffect(() => {
    // Update data periodically
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)]
        const newValue = Math.max(
          minValue,
          Math.min(
            maxValue,
            prev[prev.length - 1].value + (Math.random() - 0.5) * 20
          )
        )
        newData.push({
          time: `${Date.now()}`,
          value: newValue,
        })
        return newData
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [minValue, maxValue])

  const Icon = icons[icon]
  const currentValue = isHydrated ? (data[data.length - 1]?.value ?? minValue) : defaultValue
  const isWarning = currentValue > warningThreshold
  const percentage = ((currentValue - minValue) / (maxValue - minValue)) * 100

  // Create SVG path for the chart
  const chartPath = data.length > 0 
    ? data.map((point, index) => {
        const x = (index / (data.length - 1)) * 100
        const y = 100 - ((point.value - minValue) / (maxValue - minValue)) * 100
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
      }).join(' ')
    : ''

  return (
    <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-medium text-sm text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">{unit}</p>
          </div>
        </div>
        <div className={`text-right ${isWarning ? 'text-red-400' : 'text-foreground'}`}>
          <motion.span
            key={currentValue}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl font-mono font-bold"
          >
            {currentValue.toFixed(1)}
          </motion.span>
          {isWarning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-red-400"
            >
              WARNING
            </motion.div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-20 mb-3">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Grid lines */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2" />
          <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2" />
          
          {/* Warning threshold line */}
          {warningThreshold && (
            <line 
              x1="0" 
              y1={100 - ((warningThreshold - minValue) / (maxValue - minValue)) * 100} 
              x2="100" 
              y2={100 - ((warningThreshold - minValue) / (maxValue - minValue)) * 100}
              stroke="rgb(248, 113, 113)"
              strokeOpacity="0.3"
              strokeDasharray="4"
            />
          )}
          
          {/* Data line */}
          <path
            d={chartPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={isWarning ? 'text-red-400' : 'text-primary'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Gradient fill */}
          <defs>
            <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${chartPath} L 100 100 L 0 100 Z`}
            fill={`url(#gradient-${title})`}
            className={isWarning ? 'text-red-400' : 'text-primary'}
          />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${isWarning ? 'bg-red-400' : 'bg-primary'}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
        <span>{minValue}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  )
}
