'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight,MapPin, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function School() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const schoolImages = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
  ]

  // Auto-rotate school images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schoolImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [schoolImages.length])


  return (
    <div>
      {/* School Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              LNCT School
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence in primary and secondary education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Slider */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={schoolImages[currentSlide] || '/placeholder.svg'}
                alt="School Image"
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {schoolImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* School Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                LNCT World School
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our school provides world-class education with modern
                facilities, experienced faculty, and a nurturing environment
                that helps students excel academically and personally.
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                  Kalchuri Nagar, Raisen Road, Bhopal, MP
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-purple-600" />
                  +91 755 4077111
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Globe className="w-4 h-4 mr-2" />
                Visit School Website
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}