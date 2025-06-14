// components/ui/alumni/alumniCard.jsx
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function AlumniCard({ alumni, className = '' }) {
  return (
    <Card
      className={`overflow-hidden border-0 shadow-lg transition-all duration-300 ${className}`}
    >
      <div className="relative h-64">
        <Image
          src={alumni.image || '/placeholder.svg'}
          alt={alumni.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{alumni.name}</h3>
          <p className="text-sm text-blue-200">{alumni.position}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">{alumni.batch} Batch</p>
          <p className="font-medium text-gray-900">{alumni.company}</p>
          <ul className="mt-4 space-y-2">
            {alumni.achievements?.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span className="text-sm text-gray-600">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
