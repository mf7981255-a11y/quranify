import {
  BookOpen,
  Clock3,
  Globe2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { SectionHeader } from "@/components/home/section-header"

const features = [
  {
    icon: Globe2,
    title: "Learn from Anywhere",
    description:
      "Study with high-quality live sessions from any device, anywhere in the world.",
  },
  {
    icon: GraduationCap,
    title: "Certified Quran Instructors",
    description:
      "Learn from experienced teachers with strong credentials and a deep commitment to excellence.",
  },
  {
    icon: Clock3,
    title: "Flexible Class Schedule",
    description:
      "Choose class times that fit your routine with ease and consistency.",
  },
  {
    icon: Users,
    title: "Personalized One-to-One Learning",
    description:
      "Receive tailored guidance that supports your pace, goals, and growth.",
  },
  {
    icon: HeartHandshake,
    title: "Strong Islamic Values",
    description:
      "Grow with a learning experience rooted in respect, discipline, and sincerity.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Families Worldwide",
    description:
      "Join a community that families rely on for safe, meaningful, and lasting Quran education.",
  },
]

export function WhyQuranify() {
  return (
    <section id="why" className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_60%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Quranify"
          title="A premium learning experience rooted in tradition"
          description="We combine authentic Islamic scholarship with modern technology to make Quran learning accessible, effective, and inspiring."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex h-full flex-col rounded-[1.6rem] border border-slate-900/10 bg-white/80 p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.32)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:from-primary/20 group-hover:to-gold/20">
                  <feature.icon className="size-5" />
                </div>
                <div className="rounded-full bg-slate-50 p-1.5 text-gold">
                  <Sparkles className="size-3.5" />
                </div>
              </div>

              <div className="mt-6 flex-1">
                <h3 className="font-heading text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
