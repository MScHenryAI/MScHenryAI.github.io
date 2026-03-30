"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Circle } from 'lucide-react'

interface TerminalLine {
  type: 'command' | 'output' | 'info' | 'success' | 'error'
  content: string
  delay?: number
}

interface TerminalProps {
  lines: TerminalLine[]
  title?: string
  autoPlay?: boolean
}

export function Terminal({ lines, title = 'terminal', autoPlay = true }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!autoPlay || currentIndex >= lines.length) return

    const line = lines[currentIndex]
    const delay = line.delay || (line.type === 'command' ? 800 : 200)

    const timer = setTimeout(() => {
      if (line.type === 'command') {
        setIsTyping(true)
        // Simulate typing effect
        let charIndex = 0
        const typingInterval = setInterval(() => {
          if (charIndex <= line.content.length) {
            setVisibleLines(prev => {
              const newLines = [...prev]
              if (newLines.length === currentIndex) {
                newLines.push({ ...line, content: line.content.slice(0, charIndex) })
              } else {
                newLines[currentIndex] = { ...line, content: line.content.slice(0, charIndex) }
              }
              return newLines
            })
            charIndex++
          } else {
            clearInterval(typingInterval)
            setIsTyping(false)
            setCurrentIndex(prev => prev + 1)
          }
        }, 30)
      } else {
        setVisibleLines(prev => [...prev, line])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [currentIndex, lines, autoPlay])

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command': return 'text-primary'
      case 'success': return 'text-green-400'
      case 'error': return 'text-red-400'
      case 'info': return 'text-blue-400'
      default: return 'text-muted-foreground'
    }
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 border-b border-border/50">
        <div className="flex gap-2">
          <Circle className="w-3 h-3 fill-red-500 text-red-500" />
          <Circle className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <Circle className="w-3 h-3 fill-green-500 text-green-500" />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-mono">{title}</span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm min-h-[200px] max-h-[400px] overflow-y-auto">
        {visibleLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className={`flex items-start gap-2 mb-1 ${getLineColor(line.type)}`}
          >
            {line.type === 'command' && (
              <span className="text-green-400 select-none">$</span>
            )}
            {line.type === 'info' && (
              <span className="text-blue-400 select-none">[i]</span>
            )}
            {line.type === 'success' && (
              <span className="text-green-400 select-none">[✓]</span>
            )}
            {line.type === 'error' && (
              <span className="text-red-400 select-none">[✗]</span>
            )}
            <span className="whitespace-pre-wrap">{line.content}</span>
          </motion.div>
        ))}
        
        {/* Blinking cursor */}
        {(isTyping || currentIndex < lines.length) && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-primary ml-1"
          />
        )}
      </div>
    </div>
  )
}
