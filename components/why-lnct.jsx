import {
  GraduationCap,
  Award,
  Users,
  Globe,
  Building,
  BookOpen,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function WhyChooseLNCT() {
  const reasons = [
    {
      icon: Award,
      title: 'NIRF Ranked #1',
      description:
        'Top engineering college in Bhopal, Madhya Pradesh with ISO-9001 certification and NBA accreditation',
      highlight: '32+ Years Legacy',
    },
    {
      icon: Building,
      title: 'World-Class Infrastructure',
      description:
        '50-acre lush green campus with smart classrooms, advanced labs, and 50,000+ books digital library',
      highlight: 'Modern Facilities',
    },
    {
      icon: BookOpen,
      title: '100+ Academic Programs',
      description:
        'Comprehensive portfolio across engineering, management, pharmacy, and medical education',
      highlight: 'Diverse Options',
    },
    {
      icon: Users,
      title: '260+ Industry Partners',
      description:
        'Strong placement network with Amazon, Wipro, IBM, Cognizant, and Capgemini',
      highlight: 'Career Success',
    },
    {
      icon: Globe,
      title: 'Global Alumni Network',
      description:
        '2,000+ professionals worldwide providing mentorship and career opportunities',
      highlight: 'Worldwide Reach',
    },
    {
      icon: GraduationCap,
      title: 'Innovation Centers',
      description:
        'KLICK, EDIIC, and AIIC centers fostering entrepreneurship and startup culture',
      highlight: 'Future Ready',
    },
  ]

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Central India's Premier Educational Institution
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why Choose <span className="text-blue-600">LNCT Group?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join over 32 years of academic excellence at Central India's most
            preferred destination for engineering, management, pharmacy, and
            medical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {reason.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {reason.highlight}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <Award className="w-4 h-4" />
            <span>Established 1994 • AICTE Approved • RGPV Affiliated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
