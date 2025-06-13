
import Header from "@/components/header"
import CollegesSection from "@/components/colleges-section"
import IndustryPartners from '@/components/industry-partners'
import InternationalConference from '@/components/international-conference'
import StudentNews from '@/components/student-news'
import Achievements from '@/components/achievements'
import LNCTAdvantages from '@/components/lnct-advantages'
import WhyLNCT from '@/components/why-lnct'
import ResearchDevelopment from '@/components/research-development'
import BlogPosts from '@/components/blog-posts'
import AICTEFeedback from '@/components/aicte-feedback'
import School from '@/components/school'
import CampusLife from '@/components/campuslife'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CollegesSection />
      <School />
      <IndustryPartners />
      <InternationalConference />


      <StudentNews />
      <Achievements />

      
      <LNCTAdvantages />
      <WhyLNCT />

      <CampusLife />
      <ResearchDevelopment />
      <BlogPosts />
      <AICTEFeedback />
      {/* <Gallery /> */}
    </div>
  )
}
