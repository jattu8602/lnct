'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { User, Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: "Google's Bard has transformed into Gemini What's Different?",
    image: '/placeholder.svg?height=200&width=300',
    date: 'February 9, 2024',
    author: 'admin',
    excerpt:
      'Exploring the evolution from Google Bard to Gemini and understanding the key differences in AI capabilities.',
  },
  {
    title: 'What is the Future of Blockchain Technology by 2025?',
    image: '/placeholder.svg?height=200&width=300',
    date: 'February 8, 2024',
    author: 'admin',
    excerpt:
      'Analyzing the potential developments and applications of blockchain technology in the coming years.',
  },
  {
    title: 'Artificial Intelligence in Cybersecurity Enhancing Digital Defense',
    image: '/placeholder.svg?height=200&width=300',
    date: 'February 7, 2024',
    author: 'admin',
    excerpt:
      'How AI is revolutionizing cybersecurity measures and protecting digital infrastructure.',
  },
  {
    title: 'The Rise of Quantum Computing in Modern Technology',
    image: '/placeholder.svg?height=200&width=300',
    date: 'February 5, 2024',
    author: 'admin',
    excerpt:
      "Understanding quantum computing's impact on various industries and future applications.",
  },
]

export default function BlogPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Articles & Blog Posts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest insights, research, and technological
            developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-102 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-yellow-500 text-black mb-3 text-xs">
                  Blog
                </Badge>
                <h3 className="font-semibold mb-3 line-clamp-2 text-gray-800 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <User className="w-3 h-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{post.date}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Read More <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-purple-600 hover:bg-purple-700">
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
