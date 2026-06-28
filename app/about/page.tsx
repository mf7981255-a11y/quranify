import { Navbar } from "@/components/home/navbar"
import { AboutHero } from "@/components/home/about-hero"
import { MissionVision } from "@/components/home/mission-vision"
import { WhyChooseQuranify } from "@/components/home/why-choose-quranify"
import { GlobalLearning } from "@/components/home/global-learning"
import { FinalCTA } from "@/components/home/final-cta"
import { Footer } from "@/components/home/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionVision />
        <WhyChooseQuranify />
        <GlobalLearning />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
