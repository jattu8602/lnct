import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Header/>

      {/* Announcements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Latest Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Admission Open for 2025",
                content:
                  "Applications are now open for the academic year 2025-26. Apply before June 30th for early admission benefits.",
              },
              {
                title: "National Technical Symposium",
                content:
                  "Join us for the annual technical symposium 'TechVista 2025' on July 15-17. Register now to participate.",
              },
              {
                title: "New Research Center",
                content:
                  "LNCT inaugurates a new AI & Machine Learning Research Center in collaboration with leading tech companies.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                  <Link href="#" className="text-red-600 font-medium mt-4 inline-block hover:underline">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Academic Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              LNCT offers a wide range of undergraduate and postgraduate programs across various disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Computer Science", students: "1200+", icon: "💻" },
              { name: "Mechanical Engineering", students: "950+", icon: "⚙️" },
              { name: "Electrical Engineering", students: "850+", icon: "⚡" },
              { name: "Civil Engineering", students: "750+", icon: "🏗️" },
              { name: "Electronics & Communication", students: "800+", icon: "📡" },
              { name: "Information Technology", students: "1100+", icon: "🖥️" },
              { name: "Business Administration", students: "600+", icon: "📊" },
              { name: "Biotechnology", students: "450+", icon: "🧬" },
            ].map((program, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{program.name}</h3>
                  <p className="text-gray-500">{program.students} Students</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-red-600 hover:bg-red-700">View All Programs</Button>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Life at LNCT</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant campus life with modern facilities, cultural events, sports activities, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Campus life ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    {item === 1 ? "Modern Infrastructure" : item === 2 ? "Cultural Festivals" : "Sports Facilities"}
                  </h3>
                  <p className="text-gray-600">
                    {item === 1
                      ? "State-of-the-art classrooms, labs, and research centers equipped with the latest technology."
                      : item === 2
                        ? "Annual cultural festivals, technical events, and inter-college competitions."
                        : "World-class sports facilities including indoor and outdoor courts, swimming pool, and gymnasium."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add more content to make the page scrollable for testing the scroll indicator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              LNCT has been recognized for its excellence in education, research, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "NAAC 'A++' Accreditation",
                description: "Highest grade awarded by National Assessment and Accreditation Council",
              },
              {
                title: "Top 50 Engineering Colleges",
                description: "Ranked among the top 50 engineering colleges in India",
              },
              {
                title: "Research Excellence",
                description: "Over 500 research papers published in international journals",
              },
              {
                title: "Industry Partnerships",
                description: "Collaborations with 100+ leading companies for placements and research",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
