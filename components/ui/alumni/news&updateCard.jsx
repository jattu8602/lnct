// components/ui/alumni/news&updateCard.jsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

export default function NewsUpdateCard({ news }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-500">{news.date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
          <p className="text-gray-600 mb-4">{news.description}</p>
          {news.tags && (
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
