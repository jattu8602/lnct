// app/(root)/(alumni)/news&updates/page.jsx
'use client'

import { motion } from 'framer-motion'
import NewsUpdateCard from '@/components/ui/alumni/news&updateCard'
import { newsUpdates } from '@/constants/news&update'

export default function NewsUpdatesPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with the latest news, events, and achievements from
            our alumni community
          </p>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsUpdates.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NewsUpdateCard news={news} />
          </motion.div>
        ))}
      </section>
    </div>
  )
}
