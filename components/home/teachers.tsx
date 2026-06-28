import Link from "next/link"
import { ArrowRight, BadgeCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/home/section-header"

const teachers = [
  {
    initials: "QF",
    name: "Qari Muhammad Faheem",
    designation: "Quran Teacher",
    experience: "3 Years",
  },
  {
    initials: "QH",
    name: "Qari Muhammad Hamza",
    designation: "Quran Teacher",
    experience: "2 Years",
  },
  {
    initials: "MM",
    name: "Molana Muhammad Muzammil",
    designation: "Islamic Scholar",
    experience: "4 Years",
  },
]

export function Teachers() {
  return (
    <section id="teachers" className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_60%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Teachers"
          title="Meet Our Expert Instructors"
          description="Learn from dedicated Quran teachers committed to supporting students with clarity and care."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="group flex h-full flex-col rounded-[1.6rem] border border-slate-900/10 bg-white/80 p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.32)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 text-lg font-semibold text-primary shadow-sm transition-all duration-300 group-hover:scale-105">
                  {teacher.initials}
                </div>
                <Badge className="border-gold/30 bg-gold/10 text-gold-foreground">
                  {teacher.experience}
                </Badge>
              </div>

              <div className="mt-6 flex-1">
                <h3 className="font-heading text-xl font-semibold text-slate-950">
                  {teacher.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-primary">
                  {teacher.designation}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-50/80 px-3 py-2.5">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <BadgeCheck className="size-4 text-gold" />
                  Profile Ready
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-9 rounded-full px-3 text-sm font-semibold text-slate-700 hover:bg-white"
                  asChild
                >
                  <Link href="#contact">
                    View Profile
                    <ArrowRight className="ml-1.5 size-4" />
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
