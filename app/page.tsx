import { Navbar } from "@/components/home/navbar"
import { WelcomeSelection } from "@/components/home/welcome-selection"
import { Hero } from "@/components/home/hero"
import { WhyQuranify } from "@/components/home/why-quranify"
import { Courses } from "@/components/home/courses"
import { Teachers } from "@/components/home/teachers"
import { LearningProcess } from "@/components/home/learning-process"
import { FreeTrial } from "@/components/home/free-trial"
import { Testimonials } from "@/components/home/testimonials"
import { FAQ } from "@/components/home/faq"
import { Contact } from "@/components/home/contact"
import { Footer } from "@/components/home/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <WelcomeSelection />
        <Hero />
        <WhyQuranify />
        <Courses />
        <Teachers />
        <LearningProcess />
        <FreeTrial />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
