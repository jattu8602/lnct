'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Globe,
  Calendar,
  Building2,
  Award,
  BookOpen,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Star,
  MapPin,
  Clock,
} from 'lucide-react'

export default function GALAPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with 25,000+ alumni across the globe',
      stat: '25K+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Worldwide Presence',
      description: 'Active communities in 45+ countries',
      stat: '45+',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Monthly meetups, webinars, and conferences',
      stat: '50+/year',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Building2,
      title: 'Career Growth',
      description: 'Mentorship programs and job opportunities',
      stat: '1000+',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: 'Excellence Recognition',
      description: 'Annual awards celebrating outstanding achievements',
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Access to webinars, workshops, and skill development',
    },
    {
      icon: MessageSquare,
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations with peers',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Opportunities for partnerships and collaborations',
    },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer, Google',
      year: '2018',
      quote:
        'GALA helped me connect with mentors who guided my career transition to tech giants.',
      rating: 5,
    },
    {
      name: 'Rajesh Patel',
      role: 'Startup Founder',
      year: '2015',
      quote:
        'The networking opportunities through GALA were instrumental in building my business.',
      rating: 5,
    },
    {
      name: 'Anjali Verma',
      role: 'Data Scientist, Microsoft',
      year: '2020',
      quote:
        'From student to professional - GALA supported my journey every step of the way.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Alumni Network
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Global Association
              </span>
              <br />
              <span className="text-gray-900">of LNCT Alumni</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connecting LNCT alumni worldwide through professional networking,
              mentorship, and lifelong learning opportunities that transcend
              borders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="https://www.lnctalumni.in/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg group cursor-pointer"
                >
                  Join GALA Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="https://www.lnctalumni.in/">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg cursor-pointer"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-1`}
                  >
                    {feature.stat}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {feature.title.split(' ')[0]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Features Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="py-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join GALA?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of our thriving global
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="h-full border-0 shadow-lg hover:shadow-1xl transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.stat}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="py-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Member Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exclusive advantages for our global alumni community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group-hover:from-blue-50 group-hover:to-purple-50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="py-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni about their GALA experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        Class of {testimonial.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24"
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90"></div>
            <CardContent className="p-8 md:p-12 lg:p-16 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Join Our Global Family?
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Become part of our growing global network and unlock
                  opportunities for professional growth, mentorship, and
                  lifelong connections.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="https://www.lnctalumni.in/">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold group cursor-pointer"
                    >
                      Register Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="https://www.lnctalumni.in/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/10 px-8 py-3 text-lg cursor-pointer"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Free registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Global community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>25,000+ members</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
