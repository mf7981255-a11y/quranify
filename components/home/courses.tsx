import Link from "next/link"
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  GraduationCap,
  Languages,
  Sparkles,
  SunMedium,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/home/section-header"

const courses = [
  {
    icon: BookOpen,
    title: "Noorani Qaida",
    description: "Build a strong foundation in Arabic letters, pronunciation, and early reading fluency.",
    duration: "Flexible",
  },
  {
    icon: BookMarked,
    title: "Quran Reading (Nazra)",
    description: "Develop steady Quran reading with guided practice, correction, and confidence.",
    duration: "Flexible",
  },
  {
    icon: Sparkles,
    title: "Tajweed",
    description: "Master recitation rules with clarity, rhythm, and authentic articulation.",
    duration: "Flexible",
  },
  {
    icon: GraduationCap,
    title: "Hifz-ul-Quran",
    description: "Follow a structured memorization journey with revision plans and teacher support.",
    duration: "Flexible",
  },
  {
    icon: Languages,
    title: "Islamic Studies",
    description: "Explore core Islamic knowledge with a strong balance of tradition and understanding.",
    duration: "Flexible",
  },
  {
    icon: SunMedium,
    title: "Duas & Sunnah",
    description: "Help children learn essential duas, sunnah, and daily Islamic habits with joy.",
    duration: "Flexible",
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_65%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Courses"
          title="Explore Our Courses"
          description="Personalized Quran and Islamic education for children, adults and families around the world."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex h-full flex-col rounded-[1.5rem] border border-slate-900/10 bg-white/80 p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.32)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:from-primary/20 group-hover:to-gold/20">
                  <course.icon className="size-5" />
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  <Badge className="border-gold/30 bg-gold/10 text-gold-foreground">
                    One-to-One Classes
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    Group Classes
                  </Badge>
                </div>
              </div>

              <div className="mt-6 flex-1">
                <h3 className="font-heading text-xl font-semibold text-slate-950">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-600">
                  <span className="font-medium">Duration</span>
                  <span className="font-semibold text-slate-900">{course.duration}</span>
                </div>

                <div className="rounded-2xl border border-slate-900/10 bg-white px-3 py-2.5 text-sm text-slate-600">
                  Fee decided after consultation
                </div>

                <Button
                  size="sm"
                  className="h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-16px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
                  asChild
                >
                  <Link href="#trial">
                    Learn More
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
