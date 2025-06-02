'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'

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

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('achievements-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      number: 112,
      suffix: 'Cr.',
      label: 'Highest Package',
      color: 'text-purple-600',
    },
    {
      number: 1600,
      suffix: '+',
      label: 'Offers For 2024 Batch',
      color: 'text-blue-600',
    },
    {
      number: 9877,
      suffix: '+',
      label: 'Total Offers in last 5 Years',
      color: 'text-green-600',
    },
    {
      number: 208,
      suffix: '+',
      label: 'Offers 10 Lakhs & Above',
      color: 'text-red-600',
    },
    {
      number: 171,
      suffix: '',
      label: 'NIRF All India Rank',
      color: 'text-yellow-600',
    },
    {
      number: 500,
      suffix: '+',
      label: 'Top Recruiters',
      color: 'text-indigo-600',
    },
    {
      number: 191,
      suffix: '+',
      label: 'Patent Publications',
      color: 'text-pink-600',
    },
    {
      number: 211,
      suffix: '+',
      label: 'Ph.D Faculties',
      color: 'text-teal-600',
    },
  ]

  return (
    <section id="achievements-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our excellence in education and placements
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                >
                  {isVisible && (
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
