'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, ExternalLink } from 'lucide-react'
import { colleges } from '@/constants/colleges-data'

export default function CollegesSection() {
  const [currentCollege, setCurrentCollege] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCollege((prev) => (prev + 1) % colleges.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleCollegeClick = (index) => {
    setCurrentCollege(index)
  }

  const handleWebsiteClick = () => {
    window.open(colleges[currentCollege]?.website, '_blank')
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Our Colleges
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Explore our network of premier educational institutions across
            Central India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Side - College Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
              {colleges.map((college, index) => (
                <div
                  key={college.id}
                  className={`cursor-pointer transition-all duration-300 p-2 sm:p-3 rounded-xl border-2 group hover:scale-105 ${
                    index === currentCollege
                      ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md hover:bg-gray-50'
                  }`}
                  onClick={() => handleCollegeClick(index)}
                >
                  <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                      <Image
                        src={college.logo || '/placeholder.svg'}
                        alt={college.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover ring-2 ring-white shadow-sm"
                      />
                    </div>
                    {/* Show name only on larger screens */}
                    <h3 className="hidden sm:block text-xs font-medium text-gray-800 leading-tight line-clamp-2">
                      {college.name}
                    </h3>
                    {/* Show abbreviated name on mobile */}
                    <h3 className="block sm:hidden text-xs font-medium text-gray-800 leading-tight">
                      {college.name.split(' ')[0]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Featured College */}
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-xl border-0 bg-white">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                <Image
                  src={
                    colleges[currentCollege]?.image ||
                    '/placeholder.svg?height=300&width=400'
                  }
                  alt={colleges[currentCollege]?.name || 'College'}
                  fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* College indicator dots */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {colleges.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentCollege
                          ? 'bg-white shadow-lg'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2">
                  {colleges[currentCollege]?.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-purple-600 flex-shrink-0" />
                  <span className="line-clamp-2">
                    {colleges[currentCollege]?.address}
                  </span>
                </p>

                {/* College description if available */}
                {colleges[currentCollege]?.description && (
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                    {colleges[currentCollege].description}
                  </p>
                )}

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  onClick={handleWebsiteClick}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit College Website
                </Button>
              </CardContent>
            </Card>

            {/* Navigation arrows for mobile */}
            <div className="flex justify-center mt-4 space-x-4 lg:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentCollege(
                    (prev) => (prev - 1 + colleges.length) % colleges.length
                  )
                }
                className="rounded-full w-10 h-10 p-0"
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentCollege((prev) => (prev + 1) % colleges.length)
                }
                className="rounded-full w-10 h-10 p-0"
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
