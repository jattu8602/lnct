'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AlumniCard from './ui/alumni/alumniCard'
import { eminentAlumni } from '@/constants/eminentAlllumni'

const categories = {
  civilServices: 'Civil Services',
  publicSector: 'Public Sector',
  nri: 'NRI',
  corporate: 'Corporate',
  scientists: 'Scientists',
  defense: 'Defense',
  professors: 'Professors',
}

const EminentAlumni = () => {
  const [selectedCategory, setSelectedCategory] = useState('civilServices')

  const alumniList = eminentAlumni[selectedCategory] || []

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Eminent Alumni
        </h1>
        <p className="mt-3 text-xl text-gray-500">
          Meet our distinguished alumni who have made remarkable achievements in
          various fields
        </p>
      </div>

      {/* Category Filter */}
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:text-base
                ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="mx-auto mt-12 max-w-7xl">
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
            alumniList.length < 4 ? 'justify-center' : ''
          }`}
        >
          <AnimatePresence>
            {alumniList.map((alumni, index) => (
              <motion.div
                key={`${alumni.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <AlumniCard alumni={alumni} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default EminentAlumni
