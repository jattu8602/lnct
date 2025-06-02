'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function School() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const schoolImages = [
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896778/link-generator/dmjz0duxdkwuurrtuebo.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896748/link-generator/hkoyxmye56nmhgr0s8pr.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896752/link-generator/lczivj3zk7t0dp8ccqrq.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896754/link-generator/dq5adjcgotmhj4toxvvt.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896756/link-generator/qygvrqzjqa9snem8uy5c.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896758/link-generator/lviajlp08bkhsau94oss.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896760/link-generator/wtj25oqgvybpl0nxofwc.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896761/link-generator/dn7swejq0rqcsmhinvty.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896763/link-generator/effoeaccrhf2zqxsjees.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896765/link-generator/thr0g3zrcsmvlknsuljl.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896766/link-generator/c97lfv50czeynnottj0x.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896773/link-generator/xrqw7chosk1wlc9n9vs5.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896774/link-generator/eszb0ude2hjy4wekflwo.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896776/link-generator/p34q2szs4vmkvnpi4jvm.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896777/link-generator/clhazdbkkd9adyefjd4i.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896780/link-generator/spxwezph2n2pj2jhjmem.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896782/link-generator/dl358isfss9ygq32zvhf.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896783/link-generator/od9ecw6scfnvafbq1ayp.jpg',
    'https://res.cloudinary.com/doxmvuss9/image/upload/v1748896784/link-generator/zy19ts2krsmryrixylbe.jpg',
    
  ]

  // Auto-rotate school images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % schoolImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [schoolImages.length])

  return (
    <div>
      {/* School Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              LNCT School
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence in primary and secondary education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Slider */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={schoolImages[currentSlide] || '/placeholder.svg'}
                alt="School Image"
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {schoolImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* School Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                LNCT World School
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our school provides world-class education with modern
                facilities, experienced faculty, and a nurturing environment
                that helps students excel academically and personally.
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                  New Chouksey Nagar, Lambakhera, Berasia Road, Karond, Bhopal –
                  462038
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-purple-600" />
                  0755-6615640, 9109180266
                </p>
              </div>
              <a
                href="https://www.lnctworldschools.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Globe className="w-4 h-4 mr-2" />
                  Visit School Website
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
