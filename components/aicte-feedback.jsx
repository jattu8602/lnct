'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const facilityImages = [
  { title: 'DIGITAL LIBRARY', image: '/placeholder.svg?height=200&width=300' },
  { title: 'HAPPY CLASSROOM', image: '/placeholder.svg?height=200&width=300' },
  { title: 'HEALTH CARE', image: '/placeholder.svg?height=200&width=300' },
  { title: 'LNCT CANTEEN', image: '/placeholder.svg?height=200&width=300' },
  { title: 'TRANSPORTATION', image: '/placeholder.svg?height=200&width=300' },
  { title: 'SPORTS ACADEMY', image: '/placeholder.svg?height=200&width=300' },
  { title: 'LNCT HOSTEL', image: '/placeholder.svg?height=200&width=300' },
  {
    title: 'RECREATION CENTER',
    image: '/placeholder.svg?height=200&width=300',
  },
]

export default function AICTEFeedback() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AICTE Feedback
          </h2>
          <p className="text-xl opacity-90 mb-6">
            AICTE Feedback for Faculty and Student
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 px-8 py-3">
            AICTE Feedback Portal
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facilityImages.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-center text-sm px-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-lg opacity-90">
            Experience our world-class facilities and infrastructure designed
            for holistic student development
          </p>
        </div>
      </div>
    </section>
  )
}
