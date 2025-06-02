'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, ExternalLink } from 'lucide-react'

const industries = [
  {
    name: 'Amazon',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Seattle, USA',
    website: 'https://amazon.com',
  },
  {
    name: 'Google',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Mountain View, USA',
    website: 'https://google.com',
  },
  {
    name: 'Microsoft',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Redmond, USA',
    website: 'https://microsoft.com',
  },
  {
    name: 'IBM',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Armonk, USA',
    website: 'https://ibm.com',
  },
  {
    name: 'Wipro',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Bangalore, India',
    website: 'https://wipro.com',
  },
  {
    name: 'TCS',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Mumbai, India',
    website: 'https://tcs.com',
  },
  {
    name: 'Infosys',
    logo: '/placeholder.svg?height=50&width=50',
    image: '/placeholder.svg?height=300&width=400',
    address: 'Bangalore, India',
    website: 'https://infosys.com',
  },
]

export default function IndustryPartners() {
  const [currentIndustry, setCurrentIndustry] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Industry & Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading companies that recruit our graduates worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Industry List */}
          <div className="grid grid-cols-1 gap-3">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentIndustry
                    ? 'ring-2 ring-purple-500 shadow-md bg-purple-50'
                    : 'hover:shadow-sm'
                }`}
                onClick={() => setCurrentIndustry(index)}
              >
                <CardContent className="flex items-center space-x-4 p-4">
                  <Image
                    src={industry.logo || '/placeholder.svg'}
                    alt={industry.name}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-600">{industry.address}</p>
                  </div>
                  {index === currentIndustry && (
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Side - Featured Industry */}
          <div>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={
                    industries[currentIndustry]?.image ||
                    '/placeholder.svg?height=300&width=400'
                  }
                  alt={industries[currentIndustry]?.name || 'Company'}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {industries[currentIndustry]?.name}
                </h3>
                {industries[currentIndustry]?.address && (
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                    {industries[currentIndustry]?.address}
                  </p>
                )}
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Company Website
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
