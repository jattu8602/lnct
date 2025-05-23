"use client"

import { useEffect, useState, useRef } from "react"
import ChatBot from "./chat-bot"

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [showAI, setShowAI] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef(null)
  const animationIntervalRef = useRef(null)

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

  // Toggle LNCT (3s) and AI (7s)
  useEffect(() => {
    function loopToggle(state) {
      setShowAI(state)
      timeoutRef.current = setTimeout(() => {
        loopToggle(!state)
      }, state ? 7000 : 3000) // AI 7s, LNCT 3s
    }

    loopToggle(false) // Start with LNCT

    return () => clearTimeout(timeoutRef.current)
  }, [])

  // Animation pulse effect
  useEffect(() => {
    const startAnimation = () => {
      if (!isChatOpen) {
        setIsAnimating(true)
        setTimeout(() => {
          setIsAnimating(false)
        }, 3000)
      }
    }

    animationIntervalRef.current = setInterval(startAnimation, 10000) // Activate every 10 seconds

    return () => clearInterval(animationIntervalRef.current)
  }, [isChatOpen])

  const radius = 30
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference - (scrollPercentage / 100) * circumference

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
    setIsAnimating(false) // Stop animation when chat is opened
  }

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-50 h-20 w-20 flex items-center justify-center cursor-pointer"
        onClick={toggleChat}
        aria-label="Open chat assistant"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="4"
            className="drop-shadow-md"
          />
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

          {/* AI Video or LNCT Text */}
          {showAI ? (
            <foreignObject x="22" y="22" width="56" height="56">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#111827",
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

        {/* Slow pulse effect that activates every 10 seconds */}
        {!isChatOpen && isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-full w-full rounded-full bg-red-400 opacity-0 animate-pulse-slow"></span>
          </div>
        )}
      </div>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}