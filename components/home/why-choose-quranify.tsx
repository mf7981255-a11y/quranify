import { BookOpen, CalendarDays, Globe2, GraduationCap, MessageCircleMore, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  {
    title: "Qualified Quran Teachers",
    description:
      "Learn from dedicated Quran teachers committed to helping every student grow with confidence.",
    icon: GraduationCap,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose class timings that fit your daily routine, regardless of your country or time zone.",
    icon: CalendarDays,
  },
  {
    title: "Personalized Learning",
    description:
      "Every student learns at their own pace with individual attention and structured guidance.",
    icon: BookOpen,
  },
  {
    title: "Live Interactive Classes",
    description:
      "Attend engaging live sessions through Google Meet with real-time teacher support.",
    icon: MessageCircleMore,
  },
  {
    title: "Global Learning Community",
    description:
      "Students from different countries can learn together in a respectful Islamic environment.",
    icon: Globe2,
  },
  {
    title: "Safe & Supportive Environment",
    description:
      "A professional, respectful and student-focused platform designed for children and adults.",
    icon: ShieldCheck,
  },
]

export function WhyChooseQuranify() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.03),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-[#fffaf0] px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles className="mr-2 size-4 fill-gold text-gold" />
            Premium learning experience
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-[2.6rem]">
            Why Choose Quranify?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We combine authentic Islamic education with modern technology to provide a comfortable, structured and inspiring learning experience for students worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[1.35rem] border border-slate-900/8 bg-[linear-gradient(145deg,#ffffff_0%,#fffdf8_100%)] p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gold/10" />
              <div className="absolute left-0 bottom-0 h-20 w-20 rounded-tr-full bg-primary/8" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-[-0.02em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                <div className="mt-5 flex items-center text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-1">
                  Learn more
                  <span className="ml-2">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
