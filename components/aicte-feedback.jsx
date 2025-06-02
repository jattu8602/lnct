'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import Link from 'next/link'

const facilityImages = [
  {
    title: 'DIGITAL LIBRARY',
    image: 'https://lnct.ac.in/wp-content/uploads/2024/09/7.jpeg',
    description: 'State-of-the-art digital resources and learning spaces',
  },
  {
    title: 'HAPPY CLASSROOM',
    image:
      'https://lnct.ac.in/wp-content/uploads/2022/02/Online-Campus-Preneur-Masterclass-by-Dr.-Vivek-Bindra.jpg',
    description: 'Interactive learning environments for engaged education',
  },
  {
    title: 'HEALTH CARE',
    image:
      'https://lnct.ac.in/wp-content/uploads/2024/11/Debate-Competition-2024-Elevating-Professional-Speaking-and-Critical-Thinking.jpg',
    description: 'Comprehensive healthcare services for student wellness',
  },
  {
    title: 'LNCT CANTEEN',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/04/Canteen-min-1.jpg',
    description: 'Nutritious meals and vibrant dining experiences',
  },
  {
    title: 'TRANSPORTATION',
    image:
      'https://lnct.ac.in/wp-content/uploads/2024/12/Transportation-LNCT-Group-of-Colleges-5-768x508-1.jpeg',
    description: 'Safe and reliable campus transportation services',
  },
  {
    title: 'SPORTS ACADEMY',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/12/Sports-LNCT-6-1.jpeg',
    description: 'World-class sports facilities for athletic excellence',
  },
  {
    title: 'LNCT HOSTEL',
    image:
      'https://lnct.ac.in/wp-content/uploads/2021/04/best-hostels-for-students-7.jpeg',
    description: 'Comfortable accommodation for a home away from home',
  },
  {
    title: 'RECREATION CENTER',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/04/Canteen-min-1.jpg',
    description: 'Entertainment and relaxation spaces for student life',
  },
]

export default function AICTEFeedback() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                AICTE
                <span className="block text-4xl md:text-6xl mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Feedback Portal
                </span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your voice shapes excellence. Share your experience and help us
              create
              <span className="text-purple-300 font-semibold">
                {' '}
                world-class education
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="https://aicte.gov.in/feedback">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-400/30">
                  <span className="flex items-center gap-2">
                    🚀 Submit Feedback
                  </span>
                </Button>
              </Link>

              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Portal Active</span>
              </div>
            </div>
          </div>

          {/* Facilities Grid */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Explore Our
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}
                Premium Facilities
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {facilityImages.map((item, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:bg-white/10 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* Image */}
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <h3 className="text-white font-bold text-lg mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </h3>

                      <p
                        className={`text-gray-300 text-sm leading-relaxed transform transition-all duration-300 ${
                          hoveredCard === index
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-sm"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-white">
                Shape the Future of Education
              </h4>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience our world-class facilities and infrastructure
                designed for holistic student development. Your feedback drives
                continuous improvement and excellence in everything we do.
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-4">
                {[
                  '🎓 Academic Excellence',
                  '🏆 World-Class Facilities',
                  '💡 Innovation Hub',
                  '🌟 Student Success',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-purple-200 bg-white/5 px-4 py-2 rounded-full border border-purple-400/30"
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}
