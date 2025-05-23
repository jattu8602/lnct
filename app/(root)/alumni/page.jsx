import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "1998",
      position: "CTO, Tech Innovations Inc.",
      achievement: "Pioneered breakthrough technology in renewable energy storage systems.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Sharma",
      batch: "2005",
      position: "Founder & CEO, EduTech Solutions",
      achievement: "Built a successful EdTech startup valued at $50 million.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vikram Singh",
      batch: "2010",
      position: "Senior Scientist, ISRO",
      achievement: "Key contributor to India's Mars Orbiter Mission.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ananya Patel",
      batch: "2012",
      position: "VP Engineering, Global Software Corp",
      achievement: "Led the development of AI-powered enterprise solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual Alumni Meet 2025",
      date: "January 25, 2025",
      description: "Join us for a day of reconnecting with your batch mates and faculty members.",
    },
    {
      title: "Alumni Mentorship Program",
      date: "Ongoing",
      description: "Share your industry experience with current students through our mentorship program.",
    },
    {
      title: "Global Alumni Chapter Meet - USA",
      date: "March 15, 2025",
      description: "Special gathering for our alumni based in the United States.",
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">LNCT Alumni Network</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our alumni are our pride and ambassadors. The LNCT Alumni Network connects thousands of graduates across the
            globe.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Distinguished Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 relative">
                  <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{alumni.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">Batch of {alumni.batch}</p>
                  <p className="font-medium text-gray-700 mb-2">{alumni.position}</p>
                  <p className="text-gray-600 text-sm">{alumni.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Alumni Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-red-600 font-medium mb-2">{event.date}</p>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Alumni Registration</h3>
                <p className="text-gray-600 mb-4">Update your information and stay connected with your alma mater.</p>
                <Button className="bg-red-600 hover:bg-red-700">Register Now</Button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Mentorship Program</h3>
                <p className="text-gray-600 mb-4">
                  Guide current students with your industry expertise and experience.
                </p>
                <Button variant="outline">Become a Mentor</Button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Contribute</h3>
                <p className="text-gray-600 mb-4">
                  Support scholarships, infrastructure development, and research initiatives.
                </p>
                <Button variant="outline">Make a Donation</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Alumni Achievements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our alumni have made significant contributions in various fields across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                count: "10,000+",
                title: "Global Alumni Network",
                description: "LNCT alumni working in 30+ countries worldwide",
              },
              {
                count: "500+",
                title: "Entrepreneurs",
                description: "Alumni who have founded their own companies",
              },
              {
                count: "200+",
                title: "Research Publications",
                description: "Research papers published by our alumni annually",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.count}</div>
                  <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We'd love to hear about your journey after LNCT. Share your achievements, experiences, and how your time at
            LNCT shaped your career.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Submit Your Story
          </Button>
        </section>
      </div>
    </div>
  )
}
