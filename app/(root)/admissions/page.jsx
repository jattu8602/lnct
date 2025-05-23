import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function AdmissionsPage() {
  const programs = [
    {
      name: "B.Tech",
      duration: "4 years",
      eligibility: "10+2 with PCM, JEE Main/State Level Entrance",
      specializations: "Computer Science, Mechanical, Electrical, Civil, Electronics",
    },
    {
      name: "M.Tech",
      duration: "2 years",
      eligibility: "B.Tech or equivalent, GATE score preferred",
      specializations: "AI & ML, Structural Engineering, Power Systems, VLSI Design",
    },
    {
      name: "MBA",
      duration: "2 years",
      eligibility: "Bachelor's degree, CAT/MAT/CMAT score",
      specializations: "Marketing, Finance, HR, Operations, IT",
    },
    {
      name: "B.Pharm",
      duration: "4 years",
      eligibility: "10+2 with PCB/PCM",
      specializations: "Pharmaceutics, Pharmacology, Pharmaceutical Chemistry",
    },
  ]

  const faqs = [
    {
      question: "What is the admission process for B.Tech programs?",
      answer:
        "Admissions to B.Tech programs are based on JEE Main scores or state-level entrance exams. Candidates need to apply online through our portal and participate in the counseling process.",
    },
    {
      question: "Are there any scholarships available?",
      answer:
        "Yes, LNCT offers merit-based scholarships for outstanding students. We also have scholarships for economically disadvantaged students and sports achievers. Details are available on the scholarships page.",
    },
    {
      question: "What are the hostel facilities like?",
      answer:
        "LNCT provides separate hostels for boys and girls with well-furnished rooms, mess facilities, recreation areas, Wi-Fi, and 24/7 security. Both AC and non-AC accommodation options are available.",
    },
    {
      question: "How is the placement record at LNCT?",
      answer:
        "LNCT has an excellent placement record with over 90% placement for eligible students. Top recruiters include Microsoft, Amazon, Infosys, TCS, Wipro, and many more. The highest package offered was 42 LPA last year.",
    },
    {
      question: "Can I transfer from another college to LNCT?",
      answer:
        "Yes, lateral entry is possible subject to availability of seats and fulfillment of eligibility criteria. Transfer students need to apply separately and may need to appear for an interview.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include mark sheets of qualifying exams, entrance test score card, transfer certificate, character certificate, migration certificate, domicile certificate, and passport-sized photographs.",
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join LNCT to embark on a journey of academic excellence, innovation, and holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose LNCT?</h2>
            <ul className="space-y-4">
              {[
                "NAAC 'A++' accredited institution with excellent academic reputation",
                "State-of-the-art infrastructure and modern laboratories",
                "Distinguished faculty with industry and research experience",
                "Strong industry connections and excellent placement record",
                "Vibrant campus life with numerous clubs and activities",
                "Opportunities for international exposure through exchange programs",
                "Focus on research, innovation, and entrepreneurship",
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="LNCT Campus" fill className="object-cover" />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span> {program.duration}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Eligibility:</span> {program.eligibility}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Specializations:</span> {program.specializations}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Program Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Admission Process</h2>
          <Tabs defaultValue="undergraduate">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
                <TabsTrigger value="international">International</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="undergraduate">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Undergraduate Admission Process</h3>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Entrance Examination",
                      description: "Appear for JEE Main or state-level entrance examination.",
                    },
                    {
                      title: "Online Application",
                      description: "Complete the online application form on our admission portal.",
                    },
                    {
                      title: "Document Verification",
                      description: "Submit required documents for verification.",
                    },
                    {
                      title: "Counseling",
                      description: "Participate in the counseling process for seat allocation.",
                    },
                    {
                      title: "Fee Payment",
                      description: "Pay the admission fee to confirm your seat.",
                    },
                  ].map((step, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 text-center">
                  <Button className="bg-red-600 hover:bg-red-700">Apply for Undergraduate Programs</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="postgraduate">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Postgraduate Admission Process</h3>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Entrance Examination",
                      description: "Appear for GATE/CAT/MAT/CMAT or other relevant entrance exams.",
                    },
                    {
                      title: "Online Application",
                      description: "Complete the online application form on our admission portal.",
                    },
                    {
                      title: "Interview",
                      description: "Shortlisted candidates will be called for an interview.",
                    },
                    {
                      title: "Selection",
                      description: "Final selection based on entrance score, interview, and academic record.",
                    },
                    {
                      title: "Fee Payment",
                      description: "Pay the admission fee to confirm your seat.",
                    },
                  ].map((step, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 text-center">
                  <Button className="bg-red-600 hover:bg-red-700">Apply for Postgraduate Programs</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="international">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">International Student Admission</h3>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Eligibility Check",
                      description: "Ensure your qualifications are equivalent to Indian standards.",
                    },
                    {
                      title: "Online Application",
                      description: "Complete the international student application form.",
                    },
                    {
                      title: "Document Submission",
                      description: "Submit academic transcripts, passport, and other required documents.",
                    },
                    {
                      title: "Application Review",
                      description: "Your application will be reviewed by the international admissions committee.",
                    },
                    {
                      title: "Offer Letter",
                      description: "Receive an offer letter if selected.",
                    },
                    {
                      title: "Visa Process",
                      description: "Apply for a student visa with the offer letter.",
                    },
                  ].map((step, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 text-center">
                  <Button className="bg-red-600 hover:bg-red-700">International Student Application</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="bg-red-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Take the first step towards a successful career by applying to LNCT. Our admissions team is here to guide
            you through the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Apply Now
            </Button>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Contact Admissions
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
