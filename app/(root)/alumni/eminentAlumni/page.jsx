// app/(root)/(alumni)/eminentAlumni/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import AlumniCard from '@/components/ui/alumni/alumniCard'
import { eminentAlumni } from '@/constants/eminentAlllumni'
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Globe,
  Briefcase,
  Microscope,
  Shield,
  GraduationCap,
  Landmark,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const sectors = [
  {
    id: 'civilServices',
    title: 'Civil Services',
    icon: Landmark,
    description: 'Distinguished civil servants serving the nation',
  },
  {
    id: 'publicSector',
    title: 'Public Sector',
    icon: Building2,
    description: 'Leaders in government organizations',
  },
  {
    id: 'nri',
    title: 'NRI',
    icon: Globe,
    description: 'Global achievers making their mark worldwide',
  },
  {
    id: 'corporate',
    title: 'Corporate Sector',
    icon: Briefcase,
    description: 'Industry leaders and corporate executives',
  },
  {
    id: 'scientists',
    title: 'Scientists',
    icon: Microscope,
    description: 'Innovators and researchers in science',
  },
  {
    id: 'defense',
    title: 'Defense',
    icon: Shield,
    description: 'Protectors of our nation',
  },
  {
    id: 'professors',
    title: 'Professors',
    icon: GraduationCap,
    description: 'Academic leaders and educators',
  },
]

const SectorSlider = ({ sector, alumni }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef(null)

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) =>
          prev + 1 >= Math.ceil(alumni.length / 3) ? 0 : prev + 1
        )
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [alumni.length, isDragging])

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount =
        currentIndex * (containerRef.current.offsetWidth + 24)
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.ceil(alumni.length / 3) - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= Math.ceil(alumni.length / 3) ? 0 : prev + 1
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 px-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <sector.icon className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {sector.title}
            </h2>
            <p className="text-sm text-gray-600">{sector.description}</p>
          </div>
        </div>
        <div className="hidden md:block h-px flex-1 bg-gray-200" />
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full h-12 w-12 hidden group-hover:flex items-center justify-center"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Alumni Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden px-4 py-4"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {alumni.map((alum, index) => (
            <motion.div
              key={alum.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
            >
              <AlumniCard
                alumni={alum}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full h-12 w-12 hidden group-hover:flex items-center justify-center"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

export default function EminentAlumniPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="space-y-12">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eminent Alumni
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the achievements of our distinguished alumni who have
            made significant contributions to their fields
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
            Eminent Alumni
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the achievements of our distinguished alumni who have
            made significant contributions to their fields
          </p>
        </motion.div>
      </section>

      {/* Sectors with Individual Sliders */}
      {sectors.map((sector) => (
        <SectorSlider
          key={sector.id}
          sector={sector}
          alumni={eminentAlumni[sector.id] || []}
        />
      ))}
    </div>
  )
}
