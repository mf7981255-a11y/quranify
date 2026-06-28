import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"
import { CoursesHero } from "@/components/courses/hero"
import CourseCard from "@/components/courses/course-card"
import { ClassOptions } from "@/components/courses/class-options"
import { TrialInfo } from "@/components/courses/trial-info"
import { BottomCTA } from "@/components/courses/bottom-cta"

const courses = [
  { id: "noorani-qaida", title: "Noorani Qaida", description: "Learn the Arabic alphabet, pronunciation and reading fundamentals." },
  { id: "nazra-quran", title: "Nazra Quran", description: "Develop fluent Quran recitation with confidence." },
  { id: "tajweed", title: "Tajweed", description: "Master proper pronunciation and recitation rules." },
  { id: "hifz-ul-quran", title: "Hifz-ul-Quran", description: "Structured memorization with continuous revision." },
  { id: "basic-islamic-studies", title: "Basic Islamic Studies", description: "Learn essential Islamic beliefs, manners, Duas and daily practices." },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CoursesHero />

        <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>

        <ClassOptions />
        <TrialInfo />
        <BottomCTA />
      </main>
      <Footer />
    </>
  )
}
