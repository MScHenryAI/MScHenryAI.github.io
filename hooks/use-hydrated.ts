"use client"

import { useEffect, useState } from 'react'

export function useHydrated() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsHydrated(true)
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return isHydrated
}
