"use client"

import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate how much has been scrolled
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollPercentage(Math.min(scrolled, 100))
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial calculation
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate the stroke-dasharray and stroke-dashoffset for the circle
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference - (scrollPercentage / 100) * circumference

  return (
    <div className="fixed bottom-6 right-6 z-50 h-20 w-20 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle cx="50" cy="50" r={radius} fill="white" stroke="#e5e7eb" strokeWidth="4" className="drop-shadow-md" />

        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#dc2626"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform="rotate(-90 50 50)"
          className="transition-all duration-200 ease-out"
        />

        {/* LNCT text */}
        <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#111827">
          LNCT
        </text>
      </svg>
    </div>
  )
}
