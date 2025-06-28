"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Car, TrendingUp, Clock } from "lucide-react"

export function LiveInventoryCounter() {
  const [count, setCount] = useState(487)
  const [recentlyAdded, setRecentlyAdded] = useState(3)
  const [viewingNow, setViewingNow] = useState(24)

  useEffect(() => {
    // Simulate live inventory updates
    const interval = setInterval(() => {
      // Randomly update counts to simulate real-time activity
      if (Math.random() > 0.7) {
        setCount((prev) => prev + (Math.random() > 0.5 ? 1 : -1))
      }
      if (Math.random() > 0.8) {
        setRecentlyAdded((prev) => Math.max(1, prev + (Math.random() > 0.6 ? 1 : -1)))
      }
      if (Math.random() > 0.6) {
        setViewingNow((prev) => Math.max(10, prev + Math.floor(Math.random() * 6 - 3)))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-2 text-sm">
        <Car className="h-4 w-4 mr-2" />
        <motion.span key={count} initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          {count} Vehicles Available
        </motion.span>
      </Badge>

      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm">
        <TrendingUp className="h-4 w-4 mr-2" />
        <motion.span key={recentlyAdded} initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          {recentlyAdded} Added Today
        </motion.span>
      </Badge>

      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-4 py-2 text-sm">
        <Clock className="h-4 w-4 mr-2" />
        <motion.span key={viewingNow} initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
          {viewingNow} Viewing Now
        </motion.span>
      </Badge>
    </motion.div>
  )
}
