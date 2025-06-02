'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function InternationalConference() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <Badge className="bg-white text-purple-600 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
          INTERNATIONAL CONFERENCE
        </Badge>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          IEEE International Conference on Engineering Innovations and
          Technologies (ICoEIT)
        </h2>

        <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Join leading researchers, academicians, and industry experts from
          around the world in this premier conference on engineering
          innovations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="https://www.icoeit.org/" passHref>
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-purple-700 px-6 py-2 sm:px-8 sm:py-3 transition-colors duration-200 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Official Website
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
