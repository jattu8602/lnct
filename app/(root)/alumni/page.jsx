'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Globe,
  Calendar,
  Building2,
  Quote,
  ArrowRight,
  Star,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'




// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Floating Confetti Component
const FloatingConfetti = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            y: window.innerHeight + 10,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default function AlumniPage() {
  const [activeStory, setActiveStory] = useState(0)

  const stats = [
    { icon: Users, label: 'Total Alumni', value: 25000, suffix: '+' },
    { icon: Globe, label: 'Countries Present', value: 45, suffix: '+' },
    { icon: Calendar, label: 'Alumni Events', value: 150, suffix: '+' },
    {
      icon: Building2,
      label: 'MNCs Our Alumni Work In',
      value: 500,
      suffix: '+',
    },
  ]

  const alumniStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      image: '/placeholder.svg?height=300&width=300',
      position: 'Senior Software Engineer at Google',
      quote:
        'LNCT gave me the foundation to dream big and achieve bigger. The technical skills and leadership qualities I developed here shaped my career.',
      year: '2018',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      image: '/placeholder.svg?height=300&width=300',
      position: 'Product Manager at Microsoft',
      quote:
        'The innovative environment at LNCT taught me to think outside the box. Today, I lead product strategies for millions of users.',
      year: '2017',
    },
    {
      id: 3,
      name: 'Anita Patel',
      image: '/placeholder.svg?height=300&width=300',
      position: 'Founder & CEO at TechStart',
      quote:
        'LNCT not only provided excellent education but also instilled entrepreneurial spirit. My startup journey began with the confidence I gained here.',
      year: '2016',
    },
  ]

  const events = [
    {
      year: '2024',
      title: 'Global Alumni Meet',
      description: 'Virtual reunion connecting 5000+ alumni worldwide',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      year: '2023',
      title: 'Industry Connect Summit',
      description:
        'Career guidance and networking event with 200+ industry leaders',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      year: '2022',
      title: 'Innovation Showcase',
      description: 'Alumni startups and innovations exhibition',
      image: '/placeholder.svg?height=200&width=300',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        <div className="absolute inset-0 bg-black/20" />
        <FloatingConfetti />

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Alumni Network
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Proud Alumni of LNCT
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join a network of successful professionals, innovators, and
              leaders who are making a difference across the globe.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Join the Alumni Network
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the reach and influence of our alumni community across
              the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished alumni who are leading innovation and
              making impact worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveStory(index)}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="relative">
                    <Image
                      src={story.image || '/placeholder.svg'}
                      alt={story.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">
                        Class of {story.year}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {story.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {story.position}
                    </p>
                    <div className="relative">
                      <Quote className="w-6 h-6 text-blue-300 mb-2" />
                      <p className="text-gray-600 italic leading-relaxed">
                        {story.quote}
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Alumni Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected through our regular meetups, networking events, and
              celebrations
            </p>
          </motion.div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={event.image || '/placeholder.svg'}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </Card>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <Badge className="mb-4 bg-blue-100 text-blue-800">
                    {event.year}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Reconnect. Inspire. Grow.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of a community that continues to learn, share, and create
              opportunities for each other.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
