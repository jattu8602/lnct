'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function ResearchDevelopment() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBar, setHoveredBar] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('research-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const chartData = [
    { year: '2019', value: 15, height: '20%' },
    { year: '2020', value: 27, height: '35%' },
    { year: '2021', value: 60, height: '80%' },
    { year: '2022', value: 44, height: '60%' },
    { year: '2023', value: 53, height: '70%' },
  ]

  const stats = [
    {
      number: 1200,
      suffix: '+',
      label: 'Publications in National & International Journals',
    },
    {
      number: 191,
      suffix: '+',
      label: 'Patents filed Successfully by LNCT Group',
    },
    { number: 54, suffix: '+', label: 'Departmental Research Groups' },
    {
      number: 20,
      suffix: '+',
      label: 'Industry Sponsored Advanced Research Labs',
    },
  ]

  return (
    <section id="research-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-600 mb-4 text-sm px-4 py-2">
            Research & Development Cell (R&D)
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Study at India's No.1 Research-Intensive Educational Group
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Start your Journey to Innovation here at LNCT Group of Colleges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl font-bold text-purple-600 mb-3">
                  {isVisible && (
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Interactive Chart */}
          <div className="relative">
            <h3 className="text-xl font-semibold text-center mb-6 text-red-600">
              Intellectual Property Rights
            </h3>
            <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
              <div className="flex items-end justify-between h-80 space-x-6">
                {chartData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 relative"
                  >
                    <div
                      className="bg-purple-600 rounded-t transition-all duration-1000 ease-out flex items-end justify-center text-white text-sm font-semibold cursor-pointer hover:bg-purple-700 relative"
                      style={{
                        height: isVisible ? data.height : '0%',
                        minHeight: '40px',
                        transitionDelay: `${index * 200}ms`,
                      }}
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {data.value}

                      {/* Tooltip */}
                      {hoveredBar === index && (
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap">
                          <div className="font-semibold">{data.year}</div>
                          <div>{data.value} Patents</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 text-sm text-gray-600 font-medium">
                      {data.year}
                    </div>
                  </div>
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-2 top-8 bottom-16 flex flex-col justify-between text-xs text-gray-500">
                <span>70</span>
                <span>60</span>
                <span>50</span>
                <span>40</span>
                <span>30</span>
                <span>20</span>
                <span>10</span>
                <span>0</span>
              </div>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center text-sm text-purple-600">
                  <div className="w-4 h-4 bg-purple-600 rounded mr-2"></div>
                  IPR (Patents/Design/Copyright)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
