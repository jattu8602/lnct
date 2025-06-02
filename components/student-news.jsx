'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const newsItems = [
  {
    category: 'LNCT&S',
    title: 'Heartiest congratulations to Mr. Aditya Jain',
    date: 'May 29, 2025',
    description: 'For securing placement in top MNC with excellent package',
  },
  {
    category: 'Achievement',
    title: 'LNCT Students Win National Hackathon',
    date: 'May 25, 2025',
    description: 'Team secured first position in Smart India Hackathon 2025',
  },
  {
    category: 'Research',
    title: 'New Patent Filed by LNCT Faculty',
    date: 'May 20, 2025',
    description: 'Innovative solution for renewable energy storage system',
  },
  {
    category: 'Placement',
    title: 'Record Breaking Placement Season',
    date: 'May 15, 2025',
    description: '1600+ students placed with highest package of ₹1.12 Cr',
  },
  {
    category: 'Event',
    title: 'Annual Tech Fest 2025 Announced',
    date: 'May 10, 2025',
    description: 'Three-day technical festival with industry experts',
  },
]

export default function StudentNews() {
  const [currentNews, setCurrentNews] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length)
  }

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student News & Notifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest achievements and announcements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    className={`${
                      newsItems[currentNews].category === 'LNCT&S'
                        ? 'bg-yellow-500 text-black'
                        : newsItems[currentNews].category === 'Achievement'
                        ? 'bg-green-500 text-white'
                        : newsItems[currentNews].category === 'Research'
                        ? 'bg-blue-500 text-white'
                        : newsItems[currentNews].category === 'Placement'
                        ? 'bg-purple-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}
                  >
                    {newsItems[currentNews].category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {newsItems[currentNews].date}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {newsItems[currentNews].title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {newsItems[currentNews].description}
                </p>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={prevNews}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={nextNews}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentNews ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentNews(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
