'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Building,
  Award,
  TrendingUp,
  Users,
  GraduationCap,
  Zap,
} from 'lucide-react'

const reasons = [
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Best Infrastructure',
    description:
      'LNCT Group of Colleges have Best Infrastructure with State-of-the-Art laboratories, Latest Machines and Smart Classrooms with A/V facility',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: '32+ Years of Excellence',
    description:
      "Best Engineering Colleges with 32+ Years of Academic Excellence and Discipline. Highest Chancellor's Awards and Highest Placements in Central India.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Unbeatable Placement Record',
    description:
      'Unbeatable Record Placement of Central India with 1800+ Offers by 40 Companies. Closed Campus only for LNCT Group of Colleges',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Sports Excellence',
    description:
      'Other than Best Academics and Placements, Providing Best Sports facilities also. Producing National & International Players in Drop Row Ball, Base Ball, Throw Ball, Kabbaddi etc.',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'NBA Accreditation',
    description:
      'Best Engineering Institutions with NBA Accreditation & 188+ Ph.D Faculties for Academic Excellence. 191+ Patents filed and published in last 3 years leads to Best Research Environment.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Best Campus Infrastructure',
    description:
      'Lush Green Campus having Boys & Girls Hostels with 24 hours Security, Dispensary, Bank ATMs, GYM, Indoor and Outdoor Fields makes it a BEST Infrastructure campus.',
  },
]

export default function WhyLNCT() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY LNCT ?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Synonymous With Excellence in Higher Education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="text-center p-0">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{item.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
