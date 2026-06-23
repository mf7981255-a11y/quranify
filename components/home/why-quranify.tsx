import {
  Clock,
  Globe,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react"
import { SectionHeader } from "@/components/home/section-header"

const features = [
  {
    icon: GraduationCap,
    title: "Certified Teachers",
    description:
      "Every instructor holds Ijazah certification and years of teaching experience with proven student outcomes.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book classes around your life — mornings, evenings, or weekends. Reschedule easily when plans change.",
  },
  {
    icon: Globe,
    title: "Learn From Anywhere",
    description:
      "High-quality live video sessions accessible from any device, anywhere in the world.",
  },
  {
    icon: Users,
    title: "All Ages Welcome",
    description:
      "Tailored curricula for children, teens, and adults — from first letters to advanced Tajweed mastery.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Background-checked teachers, secure payments, and a child-safe learning environment you can trust.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Path",
    description:
      "Custom learning plans based on your goals — whether Hifz, recitation fluency, or Arabic foundations.",
  },
]

export function WhyQuranify() {
  return (
    <section id="why" className="bg-green-light/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Quranify"
          title="A premium learning experience rooted in tradition"
          description="We combine authentic Islamic scholarship with modern technology to make Quran learning accessible, effective, and inspiring."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/60 bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
