'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import NewsUpdateCard from '@/components/ui/alumni/news&updateCard'
import { newsUpdates } from '@/constants/news&update'
import { TrendingUp } from 'lucide-react'

export default function NewsUpdatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')
  const [sortBy, setSortBy] = useState('date')

  // Extract all unique tags
  const allTags = useMemo(() => {
    // Handle case where newsUpdates might be undefined
    if (!newsUpdates || !Array.isArray(newsUpdates)) {
      return ['All']
    }

    const tags = newsUpdates
      .filter((news) => news && news.tags)
      .flatMap((news) => news.tags || [])
    return ['All', ...new Set(tags)]
  }, [])

  // Filter and sort news
  const filteredAndSortedNews = useMemo(() => {
    // Handle case where newsUpdates might be undefined or empty
    if (!newsUpdates || !Array.isArray(newsUpdates)) {
      return []
    }

    let filtered = newsUpdates.filter((news) => {
      // Skip if news item is invalid
      if (!news) return false

      const matchesSearch =
        (news.title &&
          news.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (news.description &&
          news.description.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesTag =
        selectedTag === 'All' || (news.tags && news.tags.includes(selectedTag))
      return matchesSearch && matchesTag
    })

    // Sort by date (newest first) or relevance
    if (sortBy === 'date') {
      filtered.sort((a, b) => {
        const dateA = a.date ? new Date(a.date) : new Date(0)
        const dateB = b.date ? new Date(b.date) : new Date(0)
        return dateB - dateA
      })
    }

    return filtered
  }, [searchTerm, selectedTag, sortBy])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-16 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Latest Updates
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay connected with the latest news, events, and achievements from
              our vibrant alumni community
            </p>
          </motion.div>

          {/* Static Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>
        </section>

        {/* News Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredAndSortedNews.length > 0 ? (
            filteredAndSortedNews.map((news, index) => (
              <motion.div
                key={`${news.title}-${index}`}
                variants={itemVariants}
                transition={{ duration: 0.3 }}
              >
                <NewsUpdateCard news={news} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <div className="text-gray-400 text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No updates found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  )
}
