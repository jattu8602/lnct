'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Users,
  Building,
  ExternalLink,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const campuses = [
    {
      name: 'LNCT Main Campus',
      address: 'Kalchuri Nagar, Raisen Road, Bhopal - 462022',
      phone: '+91-755-2740800',
      email: 'info@lnct.ac.in',
      mapLink: 'https://maps.google.com',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'LNCTE',
      address: 'Kalchuri Nagar, Raisen Road, Bhopal - 462022',
      phone: '+91-755-2740900',
      email: 'info@lncte.ac.in',
      mapLink: 'https://maps.google.com',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'LNCT University',
      address: 'Kalchuri Nagar, Raisen Road, Bhopal - 462022',
      phone: '+91-755-2741000',
      email: 'info@lnctuniversity.ac.in',
      mapLink: 'https://maps.google.com',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
    },
  ]

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer:
        'Admission requirements vary by program. Generally, you need to have completed your previous education with minimum required grades and pass our entrance examination or meet other specified criteria.',
    },
    {
      question: 'How can I apply for scholarships?',
      answer:
        'We offer various scholarship programs based on merit, need, and special categories. You can apply through our online portal during the admission process or contact our financial aid office.',
    },
    {
      question: 'What facilities are available on campus?',
      answer:
        'Our campus features modern laboratories, library, sports facilities, hostels, cafeteria, medical center, and recreational areas. We also provide Wi-Fi connectivity throughout the campus.',
    },
    {
      question: 'Are there placement opportunities?',
      answer:
        'Yes, we have a dedicated placement cell that works with leading companies to provide job opportunities. Our placement rate is consistently high across all programs.',
    },
    {
      question: 'Can I visit the campus before applying?',
      answer:
        'We encourage prospective students to visit our campus. You can schedule a campus tour by contacting our admissions office or through our website.',
    },
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    // Create email body with form data
    const emailBody = `
Hello LNCT Team,

I hope you're doing well. I am interested in learning more about your institution.

Name: ${formData.name}
Email: ${formData.email}

Subject: ${formData.subject}

Message:
${formData.message}

Thank you for your assistance.

Best regards,
${formData.name}
${formData.email}
`

    // Encode the email body and subject
    const encodedSubject = encodeURIComponent(formData.subject)
    const encodedBody = encodeURIComponent(emailBody)

    // Redirect to mail app with pre-filled data
    window.location.href = `mailto:info@lnct.ac.in?subject=${encodedSubject}&body=${encodedBody}`

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help you with any questions about admissions,
              programs, campus life, or anything else. Reach out to us and we'll
              get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LNCT Group of Colleges Contact Info Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              LNCT Group of Colleges
            </h2>
            <div className="w-32 h-1 bg-pink-700 mx-auto mb-4 rounded" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Office Card - exact style and responsive */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
              }}
              className="transition-all duration-250 bg-white rounded-xl shadow-lg px-8 py-6 flex flex-col justify-between border border-gray-100 min-h-[320px]"
            >
              <div className="space-y-3">
                <div className="text-[1rem] md:text-[1.05rem]">
                  <Phone className="w-5 h-5 text-[#8d3267] min-w-[20px] inline-block" />
                  <span className="ml-2 font-bold text-[#8d3267] whitespace-nowrap inline-block">
                    RECEPTION :
                  </span>
                  <span className="ml-2 text-gray-900 font-semibold break-all">
                    0755-6185300, 0755-6185300/1/2/3/4/5
                  </span>
                </div>
                <div className="text-[1rem] md:text-[1.05rem]">
                  <Phone className="w-5 h-5 text-[#b12c6e] min-w-[20px] inline-block" />
                  <span className="ml-2 font-bold text-[#b12c6e] whitespace-nowrap inline-block">
                    ADMISSION CELL :
                  </span>
                  <span className="ml-2 text-gray-900 font-semibold break-all">
                    7440777111, 7201800001, 0755-6185350, 0755-6685400
                  </span>
                </div>
                <div className="text-[1rem] md:text-[1.05rem]">
                  <Phone className="w-5 h-5 text-[#b12c6e] min-w-[20px] inline-block" />
                  <span className="ml-2 font-bold text-[#b12c6e] whitespace-nowrap inline-block">
                    TRAINING & PLACEMENT CELL :
                  </span>
                  <span className="ml-2 text-gray-900 font-semibold break-all">
                    9826062730, 0755-6185341
                  </span>
                </div>
                <div className="text-[1rem] md:text-[1.05rem] flex-wrap">
                  <Mail className="w-5 h-5 text-[#b12c6e] min-w-[20px] inline-block" />
                  <span className="ml-2 font-bold text-[#b12c6e] whitespace-nowrap inline-block">
                    EMAIL ID:
                  </span>
                  <span className="ml-1 text-gray-900 font-semibold break-all">
                    INFO@LNCT.AC.IN, ADMISSION@LNCT.AC.IN, JOBS@LNCT.AC.IN
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[1rem] md:text-[1.05rem] mt-2">
                  <MapPin className="w-5 h-5 text-black min-w-[20px] mt-0.5" />
                  <span className="ml-1 font-bold text-black break-words">
                    LNCT CAMPUS, KALCHURI NAGAR, (P.O. KOLUA) RAISEN ROAD,
                    BHOPAL-462022 (M.P.).
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Rewa & Patna Card - exact style and responsive */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
              }}
              className="transition-all duration-250 bg-white rounded-xl shadow-lg px-8 py-6 flex flex-col justify-between border border-gray-100 min-h-[320px]"
            >
              <div className="space-y-4">
                <div className="text-[1rem] md:text-[1.05rem]">
                  <span className="mr-2 font-bold text-[#8d3267] whitespace-nowrap inline-block">
                    REWA:
                  </span>
                  <span className="text-gray-900 font-semibold break-words">
                    SHOP NO-4 ,FIRST FLOOR, RADHE TOWER NEAR, HOTEL LANDMARK ,
                    RATAHARA, REWA MP-486001. CONTACT: MR. YATENDRA 9109971007
                  </span>
                </div>

                <div className=" text-[1rem] md:text-[1.05rem]">
                  <span className="mr-2 font-bold text-[#b12c6e] whitespace-nowrap inline-block">
                    PATNA:
                  </span>
                  <span className="text-gray-900 font-semibold break-words">
                    K- 93 HANUMAN NAGAR NEAR HDFC BANK ATM PATNA (BIHAR)-800020.
                    CONTACT: MR. AJEET SINGH 9109971002
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LNCT Group of Colleges Campuses Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* LNCT University Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  LNCT UNIVERSITY CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  J K TOWN, KOLAR ROAD BHOPAL – 462042, MADHYA PRADESH
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: 0755-4049666
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  ADMISSION HELPLINE: 9109971012/13/15/18/21
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  TOLL FREE NO.: 7440777222
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  E-MAIL: ADMISSION@LNCTU.AC.IN
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.LNCTU.AC.IN
                </p>
              </CardContent>
            </Card>
            {/* LNCT Vidhyapeeth University Indore Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  LNCT VIDHYAPEETH UNIVERSITY INDORE
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  LNCT CAMPUS KANADIA INDORE, MADHYA PRADESH-452016
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  ADMISSION HELPLINE: 7440777999
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  TOLL FREE NO. 7440777999/222/333
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  EMAIL: ADMISSION@LNCTVU.AC.IN
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.LNCTVU.AC.IN
                </p>
              </CardContent>
            </Card>
            {/* JNCT Professional University Bhopal Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  JNCT PROFESSIONAL UNIVERSITY BHOPAL
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  BAIRASIA ROAD LAMBAKHEDA, CHOUKSEY NAGAR, BHOPAL, MADHYA
                  PRADESH
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: 0755-6615600
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  ADMISSION HELPLINE: 9109180721
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  TOLL FREE NO. 7201800001
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.JNCTBHOPAL.AC.IN
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.JNCTPU.EDU.IN
                </p>
              </CardContent>
            </Card>
            {/* LNCT Jabalpur Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  LNCT JABALPUR CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  LNCT, JABALPUR NEAR BHEDAGHAT CHOWK, NH-12, JABALPUR (M.P)
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: 7024268888
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  ADMISSION: 7759992222
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  E-MAIL: LNCTJABALPUR@LNCT.AC.IN
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.LNCTUJ.COM
                </p>
              </CardContent>
            </Card>
            {/* CEC Bilaspur Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  CEC BILASPUR CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  CHOUKSEY GROUP OF COLLEGES, LAL KHADAN, MASTURI ROAD, NH-49,
                  BILASPUR(C.G.) – 495004
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: +91-9752410911
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  E-MAIL: INFO@CECBILASPUR.AC.IN
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.CECBILASPUR.AC.IN
                </p>
              </CardContent>
            </Card>
            {/* LNCT Bhopal Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  LNCT BHOPAL CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  LNCT CAMPUS KALCHURI NAGAR, RAISEN ROAD, BHOPAL.
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: 0755-6185300/1/2/3/4/5
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  ADMISSION HELPLINE: 9109971001/2/3/4/5/6
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  TOLL FREE NO. 7440777111
                </p>
              </CardContent>
            </Card>
            {/* LNCT Bhopal Indore Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  LNCT BHOPAL INDORE CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  (FORMERLY LORD KRISHNA COLLEGE OF TECHNOLOGY)
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  RAU PITHAMPUR BY PASS ROAD, OPP. STI INDIA LTD. INDORE-452002
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  RECEPTION: 9993560901
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  ADMISSION CELL: 9977062525, 9754711574
                </p>
              </CardContent>
            </Card>
            {/* RCDS Bhopal Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-purple-700 mb-2">
                  RCDS BHOPAL CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  OPPOSITE RAJA BHOJ AIRPORT, GANDHINAGAR, PIPALNER ROAD, BHOPAL
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: +91-7440777333, 8269304518
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  TOLL FREE NO. 7203800001
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  E-MAIL: INFO@LNCTRISHIRAJ.AC.IN
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  WWW.LNCTRISHIRAJ.AC.IN
                </p>
              </CardContent>
            </Card>
            {/* LNCT World School Campus Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  LNCT WORLD SCHOOL CAMPUS
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  LNCT WORLD SCHOOL, NEW CHOUKSEY NAGAR, BAIRASIA RD, BHOPAL
                </p>
                <p className="text-gray-700 font-semibold text-sm">
                  PHONE: 0755-6615640 (BHOPAL)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange('name', e.target.value)
                            }
                            className={`mt-1 ${
                              errors.name ? 'border-red-500' : ''
                            }`}
                            placeholder="Your full name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange('email', e.target.value)
                            }
                            className={`mt-1 ${
                              errors.email ? 'border-red-500' : ''
                            }`}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange('subject', e.target.value)
                          }
                          className={`mt-1 ${
                            errors.subject ? 'border-red-500' : ''
                          }`}
                          placeholder="What is this regarding?"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange('message', e.target.value)
                          }
                          className={`mt-1 min-h-[120px] ${
                            errors.message ? 'border-red-500' : ''
                          }`}
                          placeholder="Tell us more about your inquiry..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions about our programs, admissions, or campus life?
                  We're here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91-755-2740800</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@lnct.ac.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Campuses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our campus locations. We're always happy to
              show you around.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${campus.color}`} />
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${campus.color} rounded-full flex items-center justify-center mb-4`}
                    >
                      <campus.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {campus.name}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">
                          {campus.address}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{campus.phone}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{campus.email}</p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-6 hover:bg-gray-50"
                      onClick={() => window.open(campus.mapLink, '_blank')}
                    >
                      View on Map
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LNCT 3D Virtual Tour */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Campus
            </h2>
            <p className="text-xl text-gray-600">
              Take a virtual 3D tour of LNCT and experience the campus like
              never before
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
              <div className="text-center px-4">
                <MapPin className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  LNCT 3D Virtual Tour
                </h3>
                <p className="text-gray-600">
                  Discover classrooms, labs, auditoriums, and more with a fully
                  immersive experience
                </p>
                <Button
                  className="mt-4"
                  onClick={() =>
                    window.open('https://tour.lnct.ac.in/LNCT/', '_blank')
                  }
                >
                  Start Virtual Tour
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our programs and admissions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We'd Love to Hear from You
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a prospective student, parent, or just curious
              about what we do, don't hesitate to reach out. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:info@lnct.ac.in"
                  onClick={(e) => {
                    // Fallback for devices that don't support mailto:
                    if (!window.location.protocol.includes('mailto:')) {
                      e.preventDefault()
                      window.location.href = 'mailto:info@lnct.ac.in'
                    }
                  }}
                  className="inline-block"
                >
                  <Button
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4"
                    size="lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4"
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps/search/?api=1&query=LNCT+Bhopal+Kalchuri+Nagar+Raisen+Road+Bhopal',
                      '_blank'
                    )
                  }
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
