// app/(root)/(alumni)/alumniCell/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react' // Added useState import
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlumniCellSection } from './content'
import {
  Users,
  Globe,
  Calendar,
  Building2,
  Award,
  Briefcase,
} from 'lucide-react'

// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [isMounted, setIsMounted] = useState(false) // Add mounted state

  useEffect(() => {
    setIsMounted(true) // Set mounted state to true after component mounts
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  // Return initial state during SSR
  if (!isMounted) {
    return <span className="text-4xl font-bold text-blue-600">0{suffix}</span>
  }

  return (
    <span className="text-4xl font-bold text-blue-600">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function AlumniCellPage() {
  const [isMounted, setIsMounted] = useState(false) // Add mounted state for the page

  useEffect(() => {
    setIsMounted(true) // Set mounted state to true after component mounts
  }, [])

  const stats = [
    {
      icon: Users,
      label: 'Total Alumni',
      value: 25000,
      suffix: '+',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      label: 'Countries',
      value: 45,
      suffix: '+',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Briefcase,
      label: 'Companies',
      value: 500,
      suffix: '+',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      label: 'Awards',
      value: 1000,
      suffix: '+',
      color: 'from-red-500 to-red-600',
    },
  ]

  const objectives = [
    {
      title: 'Networking',
      description: 'Facilitate connections between alumni and current students',
      icon: Users,
    },
    {
      title: 'Career Development',
      description: 'Provide mentorship and career guidance opportunities',
      icon: Briefcase,
    },
    {
      title: 'Knowledge Sharing',
      description: 'Organize workshops and seminars for skill enhancement',
      icon: Calendar,
    },
    {
      title: 'Global Community',
      description: 'Build a strong global alumni network',
      icon: Globe,
    },
  ]

  // Return initial state during SSR
  if (!isMounted) {
    return (
      <div className="space-y-16">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alumni Cell
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fostering lifelong connections and supporting the growth of our
            alumni community
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alumni Cell
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fostering lifelong connections and supporting the growth of our
            alumni community
          </p>
        </motion.div>
      </section>

      {/* About Alumni Cell */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AlumniCellSection />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Objectives Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <objective.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600">{objective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
