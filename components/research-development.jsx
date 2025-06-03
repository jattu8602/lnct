'use client'

import { useState, useEffect, useRef } from 'react'

// Badge component (inline since we don't have shadcn/ui)
function Badge({ children, className }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '', shouldAnimate }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0)
      return
    }

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
  }, [end, duration, shouldAnimate])

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
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay for better visual effect
            setTimeout(() => {
              setIsVisible(true)
            }, 200)
          } else {
            // Reset animation when component goes out of view
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '0px 0px -100px 0px', // Start animation 100px before the component is fully visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const chartData = [
    { year: '2019', value: 15, percentage: 25 },
    { year: '2020', value: 27, percentage: 45 },
    { year: '2021', value: 60, percentage: 100 },
    { year: '2022', value: 44, percentage: 73 },
    { year: '2023', value: 53, percentage: 88 },
  ]

  const maxValue = Math.max(...chartData.map((d) => d.value))
  const yAxisLabels = [0, 10, 20, 30, 40, 50, 60, 70].reverse()

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
    <div className="min-h-screen bg-gray-100 py-20">
      {/* Spacer content to demonstrate scroll behavior */}
      <div className="container mx-auto px-4 max-w-7xl mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Scroll Down to See Animation
          </h1>
          <p className="text-gray-600 text-lg">
            The research component will animate when it comes into view
          </p>
        </div>
      </div>

      <section
        ref={sectionRef}
        id="research-section"
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4 text-sm px-4 py-2 font-medium">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div className="text-4xl font-bold text-purple-600 mb-3">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2000 + index * 200}
                      shouldAnimate={isVisible}
                    />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side - Interactive Chart */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <h3 className="text-xl font-semibold text-center mb-6 text-red-600">
                Intellectual Property Rights
              </h3>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="relative">
                  {/* Y-axis */}
                  <div className="absolute left-0 top-0 bottom-12 w-8 flex flex-col justify-between text-xs text-gray-500 z-10">
                    {yAxisLabels.map((label, index) => (
                      <span
                        key={index}
                        className="text-right pr-2 leading-none"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="ml-10 relative">
                    <div className="flex items-end justify-between h-80 space-x-4 relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {yAxisLabels.map((_, index) => (
                          <div
                            key={index}
                            className="border-t border-gray-200 w-full"
                          ></div>
                        ))}
                      </div>

                      {/* Bars */}
                      {chartData.map((data, index) => {
                        const barHeight = isVisible
                          ? (data.value / maxValue) * 280
                          : 0
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center flex-1 relative z-10"
                          >
                            <div className="relative w-full max-w-16">
                              <div
                                className="bg-gradient-to-t from-purple-600 to-purple-500 rounded-t-lg flex items-end justify-center text-white text-sm font-semibold cursor-pointer hover:from-purple-700 hover:to-purple-600 relative shadow-lg transition-all duration-1000 ease-out"
                                style={{
                                  height: `${barHeight}px`,
                                  minHeight: barHeight > 0 ? '40px' : '0px',
                                  transitionDelay: isVisible
                                    ? `${index * 150}ms`
                                    : '0ms',
                                }}
                                onMouseEnter={() => setHoveredBar(index)}
                                onMouseLeave={() => setHoveredBar(null)}
                              >
                                <span className="pb-2 opacity-100 transition-opacity duration-300">
                                  {barHeight > 30 ? data.value : ''}
                                </span>

                                {/* Tooltip */}
                                {hoveredBar === index && (
                                  <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl z-20">
                                    <div className="font-semibold">
                                      {data.year}
                                    </div>
                                    <div>{data.value} Patents</div>
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="mt-3 text-sm text-gray-700 font-medium">
                              {data.year}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* X-axis line */}
                    <div className="border-t-2 border-gray-300 mt-0"></div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-full">
                    <div className="w-3 h-3 bg-gradient-to-t from-purple-600 to-purple-500 rounded mr-2"></div>
                    IPR (Patents/Design/Copyright)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional content to demonstrate scroll behavior */}
      <div className="container mx-auto px-4 max-w-7xl mt-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Scroll Back Up
          </h3>
          <p className="text-gray-600">
            The animation will reset when the component goes out of view
          </p>
        </div>
      </div>
    </div>
  )
}
