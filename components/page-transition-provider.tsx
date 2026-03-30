"use client"

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  in: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
  },
}

const pageTransition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5,
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}
