import { Quote, Star } from "lucide-react"
import { SectionHeader } from "@/components/home/section-header"

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Parent · London, UK",
    quote:
      "My 8-year-old daughter went from struggling with letters to reciting Surah Al-Fatiha beautifully in just three months. The teachers are patient, kind, and truly gifted.",
    rating: 5,
  },
  {
    name: "Omar Hassan",
    role: "Adult Learner · Toronto, CA",
    quote:
      "As a busy professional, I needed flexibility. Quranify matched me with an excellent Tajweed teacher who works around my schedule. My recitation has improved dramatically.",
    rating: 5,
  },
  {
    name: "Aisha Malik",
    role: "Hifz Student · Dubai, UAE",
    quote:
      "The structured Hifz program with daily revision tracking kept me accountable. I've memorized 5 juz so far and feel confident in my retention thanks to my teacher's method.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-green-light/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="Stories from our community"
          description="Hear from students and parents who have transformed their Quran journey with Quranify."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border/60 bg-background p-6"
            >
              <Quote className="size-8 text-gold/60" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
