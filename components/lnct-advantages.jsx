'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Users,
  Target,
  Globe,
  Briefcase,
} from 'lucide-react'

const advantages = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Explore our state-of-the-art facilities',
    description:
      'Idea Lab, Electric Vehicle Lab, and Drone Lab with cutting-edge technology and equipment for hands-on learning experience.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title:
      '30+ Clubs/Chapters for Technical, Sports, Research, StartUps, Placements',
    description:
      'Active student communities fostering technical skills, sports excellence, research innovation, entrepreneurship, and career development.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title:
      'KLICK, EDIIC & AIIC Innovation & Entrepreneurship Centers to foster startup ideas',
    description:
      'Dedicated incubation centers providing mentorship, funding support, and resources to transform innovative ideas into successful startups.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Coursera, NPTEL Courses for Global Exposure & Knowledge',
    description:
      'Access to international online courses and certifications to enhance global competency and industry-relevant skills.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: '260+ Recruiters like Amazon, Wipro, IBM, Cognizant, CapGemini',
    description:
      'Strong industry partnerships ensuring excellent placement opportunities with top multinational companies and competitive packages.',
  },
]

export default function LNCTAdvantages() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            LNCT ADVANTAGE ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for students across
            India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Advantages FAQ */}
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                          {advantage.icon}
                        </div>
                        <h3 className="font-semibold text-gray-800 text-left">
                          {advantage.title}
                        </h3>
                      </div>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed ml-16">
                        {advantage.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Side - Student Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="LNCT Student"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <h4 className="font-bold text-purple-600 text-lg mb-2">
                  COURSES OFFERED
                </h4>
                <p className="text-sm text-gray-600">
                  B.TECH | M.TECH | MCA | MBA | B.PHARM | D.PHARM | M.PHARM |
                  DIPLOMA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
