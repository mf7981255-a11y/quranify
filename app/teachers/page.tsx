import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"
import { TeachersHero } from "@/components/teachers/hero"
import { TeacherCard } from "@/components/teachers/teacher-card"
import { WhyLearn } from "@/components/teachers/why-learn"
import { TeachingMethod } from "@/components/teachers/teaching-method"
import { TeacherQualities } from "@/components/teachers/teacher-qualities"
import { JoinTeacherCTA } from "@/components/teachers/join-teacher-cta"
import { teachers } from "@/data/teachers"

export default function TeachersPage() {
  const activeTeachers = teachers.filter((teacher) => teacher.enabled && teacher.applicationStatus === "active")

  return (
    <>
      <Navbar />
      <main>
        <TeachersHero />

        <section id="teachers" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </section>

        <WhyLearn />
        <TeachingMethod />
        <TeacherQualities />
        <JoinTeacherCTA />
      </main>
      <Footer />
    </>
  )
}
