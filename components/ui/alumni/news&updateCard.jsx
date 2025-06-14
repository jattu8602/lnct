'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'

export default function NewsUpdateCard({ news }) {
  // Early return if news is not provided
  if (!news) {
    return null
  }

  // Function to get time ago
  const getTimeAgo = (dateString) => {
    if (!dateString) return 'Recently'
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return `${Math.floor(diffDays / 30)} months ago`
  }

  // Function to get tag color
  const getTagColor = (tag) => {
    const colors = {
      Event: 'bg-blue-100 text-blue-800 border-blue-200',
      'Success Story': 'bg-green-100 text-green-800 border-green-200',
      Career: 'bg-purple-100 text-purple-800 border-purple-200',
      Research: 'bg-orange-100 text-orange-800 border-orange-200',
      Technology: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      Startup: 'bg-pink-100 text-pink-800 border-pink-200',
      Networking: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      default: 'bg-gray-100 text-gray-800 border-gray-200',
    }
    return colors[tag] || colors.default
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-white/20 overflow-hidden group h-full">
        {/* Card Header with Gradient */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <CardContent className="p-6 flex flex-col h-full">
          {/* Date and Time Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="font-medium">{news.date || 'No date'}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{getTimeAgo(news.date)}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {news.title || 'Untitled'}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
            {news.description || 'No description available.'}
          </p>

          {/* Tags */}
          {news.tags && news.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {news.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${getTagColor(
                    tag
                  )} border text-xs font-medium px-3 py-1 hover:scale-105 transition-transform duration-200`}
                >
                  {tag}
                </Badge>
              ))}
              {news.tags.length > 3 && (
                <Badge variant="outline" className="text-xs text-gray-500">
                  +{news.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
