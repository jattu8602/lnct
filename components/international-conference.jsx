'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

export default function InternationalConference() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-white text-purple-600 text-sm px-4 py-2">
            INTERNATIONAL CONFERENCE
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold">
            IEEE International Conference on Engineering Innovations and
            Technologies (ICoEIT)
          </h2>

          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join leading researchers, academicians, and industry experts from
            around the world in this premier conference on engineering
            innovations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Official Website
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
