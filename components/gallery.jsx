'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const galleryImages = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'Campus View 1' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Laboratory' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Library' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Sports Complex' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Auditorium' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Hostel' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Cafeteria' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Campus View 2' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Classroom' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Research Lab' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Garden Area' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Event Hall' },
]

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our vibrant campus life, state-of-the-art facilities, and
            memorable moments
          </p>
        </div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 12).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer ${
                index % 7 === 0 ? 'md:row-span-2' : ''
              } ${index % 5 === 0 ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`relative ${
                  index % 7 === 0 ? 'h-64 md:h-96' : 'h-48'
                }`}
              >
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
            See More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
