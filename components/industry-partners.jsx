'use client'
import { useState, useEffect, useRef } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const companies = [
  {
    name: 'Ananjay Private Limited',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898183/link-generator/ie6bl8b3b38wxiwqge1a.png',
    website: 'https://ananjay.co.in',
  },
  {
    name: 'Dabra Alcobrew Private Limited',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898180/link-generator/llf1cielubw3h1meqppb.png',
    website: 'https://dabraalcobrew.com',
  },
  {
    name: 'Rishiraj College of Dental Sciences and Research Centre',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898975/link-generator/n5anugahl8buluf1rlgn.jpg',
    website: 'https://lnctrishiraj.ac.in',
  },
  {
    name: 'Ananjay Pharmaceuticals Private Limited',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898178/link-generator/vfqez1snk32xnsxd5k6f.png',
    website: 'https://ananjaypharma.co.in',
  },
  {
    name: 'Vitamax',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898177/link-generator/ijmimlqjxf6zgu2pk26v.png',
    website: 'https://vitamax.co.in',
  },
  {
    name: 'Parvati Sweetners and Power Limited',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898173/link-generator/nd4l7pgzzzp77fi1htq0.jpg',
    website: 'https://parvatisweetners.co.in',
  },
  {
    name: 'Kalchuri Contractors Ltd.',
    image:
      'https://res.cloudinary.com/doxmvuss9/image/upload/v1748898175/link-generator/tq3kxn0tq6fgyftu4wys.png',
    website: 'https://kalchuricontractors.ltd',
  },
]

export default function IndustrySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % companies.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrev()
    }

    setIsDragging(false)
  }

  // Mouse handlers for desktop drag
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX)
    setIsDragging(true)
    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setTouchEnd(e.clientX)
  }

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrev()
    }

    setIsDragging(false)
  }

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-center text-gray-800">
          Our Industry & Partners
        </h2>

        <div className="relative">
          {/* Main slider container */}
          <div
            ref={sliderRef}
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {companies.map((company, index) => (
                <div key={index} className="min-w-full relative">
                  {/* Large image container */}
                  <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      draggable={false}
                    />

                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Company info in bottom left */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10">
                      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 leading-tight max-w-xs md:max-w-md">
                        {company.name}
                      </h3>
                      <button
                        onClick={() => window.open(company.website, '_blank')}
                        className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white hover:scale-105 px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        Visit Website
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-20 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-20 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Swipe instruction for mobile */}
        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
          Swipe left or right to navigate
        </p>
      </div>
    </section>
  )
}
