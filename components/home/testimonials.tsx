import { Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/home/section-header"

const placeholders = [
  {
    title: "Verified Reviews Coming Soon",
    description: "Authentic student and parent feedback will appear here once classes begin.",
  },
  {
    title: "Real Ratings Pending",
    description: "This space is being prepared for verified ratings and testimonials from our community.",
  },
  {
    title: "Database Ready",
    description: "The layout is structured so reviewed content can be loaded dynamically later.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_60%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="Student Reviews Coming Soon"
          description="We are preparing this section to showcase verified reviews from our students and parents. Once classes begin, authentic testimonials and ratings will appear here."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {placeholders.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[1.5rem] border border-slate-900/10 bg-white/80 p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 text-primary shadow-sm">
                  <Sparkles className="size-5" />
                </div>
                <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Coming Soon
                </span>
              </div>

              <div className="mt-6 flex-1">
                <p className="font-heading text-lg font-semibold text-slate-950">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
