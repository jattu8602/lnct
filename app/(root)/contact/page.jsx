import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: [
        'LNCT Group of Colleges',
        'Raisen Road, Bhopal',
        'Madhya Pradesh 462021, India',
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: [
        '+91-755-2616200',
        '+91-755-2616201',
        'Toll Free: 1800-123-4567',
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: [
        'info@lnct.ac.in',
        'admissions@lnct.ac.in',
        'support@lnct.ac.in',
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
      ],
    },
  ]

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+91-755-2616200',
      email: 'admissions@lnct.ac.in',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Academic Office',
      phone: '+91-755-2616201',
      email: 'academic@lnct.ac.in',
      timings: 'Mon-Fri: 9:00 AM - 6:00 PM',
    },
    {
      name: 'Student Affairs',
      phone: '+91-755-2616202',
      email: 'student.affairs@lnct.ac.in',
      timings: 'Mon-Fri: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Hostel Office',
      phone: '+91-755-2616203',
      email: 'hostel@lnct.ac.in',
      timings: '24/7 Support Available',
    },
  ]

  return (
    <div className="py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base break-words">
            Get in touch with LNCT Group of Colleges. We're here to help with
            admissions, academic queries, and any other information you need.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 w-full">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow w-full"
            >
              <CardContent className="p-4 sm:p-6 w-full">
                <div className="flex justify-center mb-4 text-red-600">
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 w-full">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-sm sm:text-base break-words"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 w-full">
          {/* Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academic">Academic Information</option>
                  <option value="campus">Campus Visit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Department Contacts */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Department Contacts
            </h2>
            <div className="space-y-4 w-full">
              {departments.map((dept, index) => (
                <Card key={index} className="w-full">
                  <CardContent className="p-4 sm:p-6 w-full">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 break-words">
                      {dept.name}
                    </h3>
                    <div className="space-y-2 w-full">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base break-words">
                          {dept.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base break-words">
                          {dept.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base break-words">
                          {dept.timings}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 mb-16 w-full overflow-x-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Find Us
          </h2>
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-center break-words">
              Interactive Map Coming Soon
            </p>
          </div>
          <div className="text-center mt-6">
            <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
              Get Directions
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm sm:text-base break-words">
            Have questions? Check out our FAQ section or contact us directly for
            more information.
          </p>
          <Button variant="outline" className="w-full sm:w-auto">
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  )
}
