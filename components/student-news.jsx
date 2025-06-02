'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

const newsItems = [
  {
    category: 'LNCT&S',
    title: 'Heartiest congratulations to Mr. Aditya Jain',
    date: 'May 29, 2025',
    description:
      'For securing placement in top MNC with excellent package. This achievement reflects the quality of education and industry readiness of our students.',
  },
  {
    category: 'Achievement',
    title: 'LNCT Students Win National Hackathon',
    date: 'May 25, 2025',
    description:
      'Team secured first position in Smart India Hackathon 2025, competing against 10,000+ teams nationwide with their innovative IoT solution.',
  },
  {
    category: 'Research',
    title: 'New Patent Filed by LNCT Faculty',
    date: 'May 20, 2025',
    description:
      'Innovative solution for renewable energy storage system that could revolutionize clean energy adoption in rural areas.',
  },
  {
    category: 'Placement',
    title: 'Record Breaking Placement Season',
    date: 'May 15, 2025',
    description:
      '1600+ students placed with highest package of ₹1.12 Cr. Major recruiters include Google, Microsoft, Amazon, and leading startups.',
  },
  {
    category: 'Event',
    title: 'Annual Tech Fest 2025 Announced',
    date: 'May 10, 2025',
    description:
      'Three-day technical festival with industry experts, workshops, competitions, and networking opportunities for students.',
  },
]

const categoryColors = {
  'LNCT&S': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
  Achievement: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
  Research: 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white',
  Placement: 'bg-gradient-to-r from-purple-400 to-pink-500 text-white',
  Event: 'bg-gradient-to-r from-orange-400 to-red-500 text-white',
}

export default function StudentNews() {
  const [currentNews, setCurrentNews] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentNews((prev) => (prev + 1) % newsItems.length)
        setIsTransitioning(false)
      }, 150)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextNews = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevNews = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToNews = (index) => {
    if (index === currentNews) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentNews(index)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <section className="py-4 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-[auto] flex items-start lg:items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-12">
          <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-white rounded-full shadow-md mb-2 sm:mb-4">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full animate-pulse mr-1 sm:mr-2"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              Live Updates
            </span>
          </div>
          <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-4">
            Student News & Notifications
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm">
            Stay updated with the latest achievements and announcements from
            LNCT
          </p>
        </div>

        <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="relative">
            {/* Main News Card */}
            <Card
              className={`w-full overflow-hidden shadow-2xl border-0 transition-all duration-300 ${
                isTransitioning
                  ? 'scale-95 opacity-75'
                  : 'scale-100 opacity-100'
              }`}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-6">
                  <Badge
                    className={`${
                      categoryColors[newsItems[currentNews].category]
                    } px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold mb-2 sm:mb-0 shadow-md`}
                  >
                    {newsItems[currentNews].category}
                  </Badge>
                  <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span>{newsItems[currentNews].date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 leading-snug">
                  {newsItems[currentNews].title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[12px] sm:text-sm lg:text-base">
                  {newsItems[currentNews].description}
                </p>

                {/* Progress Bar & Controls */}
                <div className="mt-4 sm:mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs text-gray-400">
                      {currentNews + 1} of {newsItems.length}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          ((currentNews + 1) / newsItems.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Desktop Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:bg-white hover:scale-110 transition-all duration-200"
              onClick={prevNews}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:bg-white hover:scale-110 transition-all duration-200"
              onClick={nextNews}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center space-x-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevNews}
              className="bg-white/90 backdrop-blur-sm shadow-md border-0 text-xs px-2 py-1"
            >
              <ChevronLeft className="w-4 h-4 inline-block mr-1" />
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextNews}
              className="bg-white/90 backdrop-blur-sm shadow-md border-0 text-xs px-2 py-1"
            >
              Next
              <ChevronRight className="w-4 h-4 inline-block ml-1" />
            </Button>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-8 space-x-1 sm:space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentNews
                    ? 'w-6 h-2 sm:w-8 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md'
                    : 'w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToNews(index)}
                aria-label={`Go to news ${index + 1}`}
              />
            ))}
          </div>

          {/* News Thumbnails - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-3 lg:gap-4 mt-6 lg:mt-8">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentNews
                    ? 'ring-2 ring-purple-500 shadow-lg scale-105'
                    : 'hover:shadow-md hover:scale-[1.02] opacity-70'
                }`}
                onClick={() => goToNews(index)}
              >
                <CardContent className="p-2 sm:p-3">
                  <Badge
                    className={`${
                      categoryColors[item.category]
                    } text-[10px] sm:text-xs mb-1`}
                  >
                    {item.category}
                  </Badge>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    {item.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
