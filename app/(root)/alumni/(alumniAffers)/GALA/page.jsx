// app/(root)/(alumni)/GALA/page.jsx
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Globe, Calendar, Building2 } from 'lucide-react'

export default function GALAPage() {
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
            Global Association of LNCT Alumni (GALA)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting LNCT alumni worldwide through professional networking,
            mentorship, and lifelong learning.
          </p>
        </motion.div>
      </section>
      {/* GALA Page */}

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Users,
            title: 'Network',
            description: 'Connect with 25,000+ alumni across the globe',
          },
          {
            icon: Globe,
            title: 'Global Reach',
            description: 'Presence in 45+ countries worldwide',
          },
          {
            icon: Calendar,
            title: 'Events',
            description: 'Regular meetups, webinars, and conferences',
          },
          {
            icon: Building2,
            title: 'Career Growth',
            description: 'Mentorship and job opportunities',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Join Section */}
      <section className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join GALA Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of our growing global network and unlock opportunities
            for professional growth and networking.
          </p>
          <Link href={'https://www.lnctalumni.in/'}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Register Now
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
