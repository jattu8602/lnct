import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "TechVista 2025",
      date: "July 15-17, 2025",
      location: "Main Campus Auditorium",
      description:
        "Annual technical symposium featuring workshops, competitions, and guest lectures from industry experts.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Cultural Fest 'Rhythm'",
      date: "September 5-7, 2025",
      location: "LNCT Open Air Theatre",
      description: "A celebration of art, music, dance, and drama with performances from students across colleges.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "National Conference on AI",
      date: "August 12-13, 2025",
      location: "Research Center",
      description: "Research conference on artificial intelligence and machine learning with paper presentations.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const pastEvents = [
    {
      title: "Hackathon 2024",
      date: "February 10-12, 2024",
      location: "Computer Science Block",
      description: "48-hour coding competition where students developed innovative solutions for real-world problems.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Alumni Meet 2024",
      date: "January 20, 2024",
      location: "LNCT Convention Center",
      description: "Annual gathering of alumni to reconnect, network, and share experiences with current students.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Sports Tournament",
      date: "November 5-15, 2023",
      location: "LNCT Sports Complex",
      description: "Inter-college sports competition featuring cricket, football, basketball, and athletics.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Events & Activities</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            LNCT hosts a variety of academic, cultural, and technical events throughout the year to enrich the student
            experience.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-bold">{event.title}</h2>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">
                        <span className="font-medium text-gray-700">Date:</span> {event.date}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Location:</span> {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-sm">Past Event</div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-bold">{event.title}</h2>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">
                        <span className="font-medium text-gray-700">Date:</span> {event.date}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Location:</span> {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Host Your Event at LNCT</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              LNCT offers state-of-the-art venues and facilities for hosting conferences, workshops, and other events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Venues</h3>
              <ul className="space-y-3">
                {[
                  "Main Auditorium (Capacity: 1000)",
                  "Conference Hall (Capacity: 300)",
                  "Open Air Theatre (Capacity: 2000)",
                  "Seminar Halls (Capacity: 150 each)",
                  "Smart Classrooms (Capacity: 60 each)",
                ].map((venue, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {venue}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services Provided</h3>
              <ul className="space-y-3">
                {[
                  "Audio-Visual Equipment",
                  "High-Speed Internet",
                  "Catering Services",
                  "Event Management Support",
                  "Accommodation for Guests",
                  "Transportation Facilities",
                ].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700">Inquire About Venue Booking</Button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates about upcoming events and activities.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
