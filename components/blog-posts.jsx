'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { User, Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: "Google's Bard has transformed into Gemini What's Different?",
    image:
      'https://imgs.search.brave.com/cwwbYPU2MSoYkzlYDPBy0cP4pJO4BPup5U9u6ak_p0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0RY/Q0Z1U05UNUczdlp2/THVtaVBSTDguanBn',
    date: 'February 9, 2024',
    author: 'admin',
    excerpt:
      'Exploring the evolution from Google Bard to Gemini and understanding the key differences in AI capabilities.',
  },
  {
    title: 'What is the Future of Blockchain Technology by 2025?',
    image:
      'https://imgs.search.brave.com/Vqx_O8S_ZRHh26hIo9LPtOz5YALN8BAxL5uMaAPZwvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1yZW5kZXJpbmct/YmxvY2tjaGFpbi10/ZWNobm9sb2d5XzIz/LTIxNTE0ODAxOTIu/anBnP3NlbXQ9YWlz/X2l0ZW1zX2Jvb3N0/ZWQmdz03NDA',
    date: 'February 8, 2024',
    author: 'admin',
    excerpt:
      'Analyzing the potential developments and applications of blockchain technology in the coming years.',
  },
  {
    title: 'Artificial Intelligence in Cybersecurity Enhancing Digital Defense',
    image:
      'https://imgs.search.brave.com/RlyzZqKF30obDGaBQqPjyeBMnbpk6cyQexvq8EVXXb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zbWFy/dHBob25lLXNob3dz/LWhpZ2gtdGVjaC1m/dXR1cmlzdGljLWlu/dGVyZmFjZS1hZ2Fp/bnN0LXVyYmFuLWlu/ZnJhc3RydWN0dXJl/LWJhY2tkcm9wLXN1/aXRhYmxlLW1hcmtl/dGluZy1haS1jeWJl/cnNlY3VyaXR5LTM2/OTUxNzM0MC5qcGc',
    date: 'February 7, 2024',
    author: 'admin',
    excerpt:
      'How AI is revolutionizing cybersecurity measures and protecting digital infrastructure.',
  },
  {
    title: 'The Rise of Quantum Computing in Modern Technology',
    image:
      'https://imgs.search.brave.com/AywYAKVBAWFPFqFaOdm6Jis_bw-UqFMK8cimrqlKPEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzA5LzM2LzA3/LzM2MF9GXzUwOTM2/MDc0MV9HYnRiNkpG/ZVdTR21FVG5NWVV0/NlRVZzNzSURNMTVF/TS5qcGc',
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
          <Link href="https://lnct.ac.in/blog">
            <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer">
              View All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
