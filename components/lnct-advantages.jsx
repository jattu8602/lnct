import {
  CheckCircle,
  TrendingUp,
  Users2,
  Lightbulb,
  MapPin,
  Heart,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LNCTAdvantages() {
  const advantages = [
    {
      category: 'Academic Excellence',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600',
      items: [
        'Student-to-faculty ratio of 20:1 for personalized attention',
        'NBA accredited engineering programs',
        'Partnership with Coursera and NPTEL for global courses',
        'Regular curriculum updates aligned with industry trends',
      ],
    },
    {
      category: 'Career Success',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600',
      items: [
        'Average salary package: ₹3-5 lakh per annum',
        '150+ companies across IT, consulting, manufacturing',
        'Comprehensive placement training and preparation',
        'Consistent high placement rates year over year',
      ],
    },
    {
      category: 'Innovation Hub',
      icon: Lightbulb,
      color: 'bg-purple-100 text-purple-600',
      items: [
        'Idea Lab, Electric Vehicle Lab, and Drone Lab',
        'Three innovation centers: KLICK, EDIIC, and AIIC',
        'Startup incubation and entrepreneurship support',
        'Research and development opportunities',
      ],
    },
    {
      category: 'Student Support',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      items: [
        'Merit scholarships up to ₹50,000 per year',
        'Full tuition waivers for SC/ST students',
        'Modern hostel facilities for 1,000+ students',
        '30+ clubs for technical and cultural development',
      ],
    },
    {
      category: 'Global Network',
      icon: Users2,
      color: 'bg-orange-100 text-orange-600',
      items: [
        'Alumni working in multinational companies worldwide',
        'Mentorship opportunities from industry professionals',
        'International exposure through global partnerships',
        'Career connections across various industries',
      ],
    },
    {
      category: 'Prime Location',
      icon: MapPin,
      color: 'bg-teal-100 text-teal-600',
      items: [
        '50-acre lush green campus in Bhopal',
        '15km from Habibganj Railway Station',
        '25km from Raja Bhoj Airport',
        'Excellent connectivity via road, rail, and air',
      ],
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Comprehensive Benefits
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-green-600">LNCT</span> Advantages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive advantages that make LNCT Group the
            preferred choice for students seeking quality higher education and
            successful career outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${advantage.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {advantage.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {advantage.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join LNCT's Legacy of Excellence?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Be part of Central India's most prestigious educational institution
            and shape your future with world-class education, industry
            connections, and lifelong opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://lnct.ac.in/admissions">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold cursor-pointer"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
