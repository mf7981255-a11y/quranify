import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/home/section-header"

const teachers = [
  {
    initials: "AK",
    name: "Ustadha Amina Khan",
    specialty: "Tajweed & Recitation",
    experience: "12 years",
    rating: 4.9,
    students: 340,
  },
  {
    initials: "MR",
    name: "Ustadh Muhammad Rahman",
    specialty: "Hifz Program",
    experience: "15 years",
    rating: 5.0,
    students: 520,
  },
  {
    initials: "FS",
    name: "Ustadha Fatima Siddiq",
    specialty: "Children's Quran",
    experience: "8 years",
    rating: 4.9,
    students: 280,
  },
  {
    initials: "YA",
    name: "Ustadh Yusuf Ali",
    specialty: "Quranic Arabic",
    experience: "10 years",
    rating: 4.8,
    students: 195,
  },
]

export function Teachers() {
  return (
    <section id="teachers" className="bg-green-light/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Teachers"
          title="Learn from certified scholars"
          description="Our teachers are hand-selected for their knowledge, teaching ability, and dedication to nurturing every student's relationship with the Quran."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="rounded-2xl border border-border/60 bg-background p-6 text-center transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground">
                {teacher.initials}
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                {teacher.name}
              </h3>
              <p className="mt-1 text-sm text-primary">{teacher.specialty}</p>
              <div className="mt-3 flex items-center justify-center gap-1">
                <Star className="size-3.5 fill-gold text-gold" />
                <span className="text-sm font-medium">{teacher.rating}</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">{teacher.experience}</Badge>
                <Badge variant="outline">{teacher.students}+ students</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
