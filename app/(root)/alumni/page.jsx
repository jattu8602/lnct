import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: 'Dr. Rajesh Kumar',
      batch: '1998',
      position: 'CTO, Tech Innovations Inc.',
      achievement:
        'Pioneered breakthrough technology in renewable energy storage systems.',
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      name: 'Priya Sharma',
      batch: '2005',
      position: 'Founder & CEO, EduTech Solutions',
      achievement: 'Built a successful EdTech startup valued at $50 million.',
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      name: 'Vikram Singh',
      batch: '2010',
      position: 'Senior Scientist, ISRO',
      achievement: "Key contributor to India's Mars Orbiter Mission.",
      image: '/placeholder.svg?height=300&width=300',
    },
    {
      name: 'Ananya Patel',
      batch: '2012',
      position: 'VP Engineering, Global Software Corp',
      achievement: 'Led the development of AI-powered enterprise solutions.',
      image: '/placeholder.svg?height=300&width=300',
    },
  ]

  const upcomingEvents = [
    {
      title: 'Annual Alumni Meet 2025',
      date: 'January 25, 2025',
      description:
        'Join us for a day of reconnecting with your batch mates and faculty members.',
    },
    {
      title: 'Alumni Mentorship Program',
      date: 'Ongoing',
      description:
        'Share your industry experience with current students through our mentorship program.',
    },
    {
      title: 'Global Alumni Chapter Meet - USA',
      date: 'March 15, 2025',
      description:
        'Special gathering for our alumni based in the United States.',
    },
  ]

  return (
    <div className="py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            LNCT Alumni Network
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base break-words">
            Our alumni are our pride and ambassadors. The LNCT Alumni Network
            connects thousands of graduates across the globe.
          </p>
        </div>

        <section className="mb-16 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">
            Distinguished Alumni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {featuredAlumni.map((alumni, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow w-full"
              >
                <div className="h-64 relative w-full">
                  <Image
                    src={alumni.image || '/placeholder.svg'}
                    alt={alumni.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 text-center w-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 break-words">
                    {alumni.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Batch of {alumni.batch}
                  </p>
                  <p className="font-medium text-gray-700 mb-2 text-sm break-words">
                    {alumni.position}
                  </p>
                  <p className="text-gray-600 text-sm break-words">
                    {alumni.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Alumni Events
            </h2>
            <div className="space-y-6 w-full">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="w-full">
                  <CardContent className="p-4 sm:p-6 w-full">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">
                      {event.title}
                    </h3>
                    <p className="text-red-600 font-medium mb-2 text-sm sm:text-base">
                      {event.date}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base break-words">
                      {event.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Get Involved
            </h2>
            <div className="space-y-6 w-full">
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Alumni Registration
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base break-words">
                  Update your information and stay connected with your alma
                  mater.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                  Register Now
                </Button>
              </div>

              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Mentorship Program
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base break-words">
                  Guide current students with your industry expertise and
                  experience.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Become a Mentor
                </Button>
              </div>

              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Contribute
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base break-words">
                  Support scholarships, infrastructure development, and research
                  initiatives.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Make a Donation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 w-full">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Alumni Achievements
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base break-words">
              Our alumni have made significant contributions in various fields
              across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
            {[
              {
                count: '10,000+',
                title: 'Global Alumni Network',
                description: 'LNCT alumni working in 30+ countries worldwide',
              },
              {
                count: '500+',
                title: 'Entrepreneurs',
                description: 'Alumni who have founded their own companies',
              },
              {
                count: '200+',
                title: 'Research Publications',
                description: 'Research papers published by our alumni annually',
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center w-full">
                <CardContent className="p-6 sm:p-8 w-full">
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                    {stat.count}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Share Your Story
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm sm:text-base break-words">
            We'd love to hear about your journey after LNCT. Share your
            achievements, experiences, and how your time at LNCT shaped your
            career.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
          >
            Submit Your Story
          </Button>
        </section>
      </div>
    </div>
  )
}
