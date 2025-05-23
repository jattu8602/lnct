"use client"

import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [showAI, setShowAI] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollPercentage(Math.min(scrolled, 100))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle between LNCT and AI every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAI(prev => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const radius = 30
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference - (scrollPercentage / 100) * circumference

  return (
    <div className="fixed bottom-6 right-6 z-50 h-20 w-20 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="white" stroke="#e5e7eb" strokeWidth="4" className="drop-shadow-md" />

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

        {/* Toggle between LNCT text and AI video */}
      {showAI ? (
  <foreignObject x="22" y="22" width="56" height="56">
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#111827", // dark background
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <video
        src="/ai.webm"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  </foreignObject>
) : (
  <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#111827">
    LNCT
  </text>
)}

      </svg>
    </div>
  )
}
