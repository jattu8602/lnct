'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const AlumniCard = ({ alumni }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-6"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Image Container */}
        <div className="relative h-48 w-48 overflow-hidden rounded-full">
          <Image
            src={alumni.image}
            alt={alumni.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">{alumni.name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-600">
            {alumni.position}
          </p>
          <p className="text-sm text-gray-500">{alumni.company}</p>

          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Batch:</span> {alumni.batch}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Department:</span>{' '}
              {alumni.department}
            </p>
          </div>

          {/* Achievements */}
          {alumni.achievements && alumni.achievements.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900">
                Achievements
              </h4>
              <ul className="mt-2 space-y-1">
                {alumni.achievements.map(
                  (achievement, index) =>
                    achievement && (
                      <li key={index} className="text-sm text-gray-600">
                        {achievement}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default AlumniCard
