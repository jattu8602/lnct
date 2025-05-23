import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CollegesPage() {
  const colleges = [
    {
      name: "LNCT Bhopal",
      established: "1994",
      programs: "Engineering, Management, Pharmacy",
      description: "The flagship campus with state-of-the-art facilities and research centers.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "LNCT University",
      established: "2015",
      programs: "Engineering, Medical, Law, Arts",
      description: "A comprehensive university offering diverse programs across multiple disciplines.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "LNCT Indore",
      established: "2008",
      programs: "Engineering, Computer Applications",
      description: "Known for its industry connections and placement opportunities.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      name: "LNCT Jabalpur",
      established: "2010",
      programs: "Engineering, Pharmacy, Management",
      description: "Focused on innovation and entrepreneurship development.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Colleges</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The LNCT Group has established multiple colleges across Madhya Pradesh, each with its own specializations
            and strengths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {colleges.map((college, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src={college.image || "/placeholder.svg"} alt={college.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">{college.name}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Est. {college.established}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {college.programs}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{college.description}</p>
                <Button variant="outline" className="mt-2">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose LNCT Group?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The LNCT Group of Colleges has established itself as a leader in technical education with a focus on
              quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Excellence",
                description: "Rigorous academic programs designed to meet industry standards and requirements.",
              },
              {
                title: "Industry Connections",
                description: "Strong ties with leading companies ensuring excellent placement opportunities.",
              },
              {
                title: "Research Focus",
                description: "Emphasis on research and innovation with well-equipped laboratories and centers.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the LNCT Family?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Take the first step towards a successful career by applying to one of our prestigious institutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Apply Now
            </Button>
            <Button size="lg" variant="outline">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
