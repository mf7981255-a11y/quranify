import { CheckCircle2, Compass, Globe2, Sparkles, Target } from "lucide-react"

const highlights = [
  {
    title: "Qualified Teachers",
    description: "Learn from experienced Quran teachers dedicated to personalized learning.",
    icon: CheckCircle2,
  },
  {
    title: "Flexible Learning",
    description: "Choose class timings that fit your daily routine.",
    icon: CheckCircle2,
  },
  {
    title: "Global Community",
    description: "Connecting students from different countries through quality Islamic education.",
    icon: CheckCircle2,
  },
]

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-[#fffaf0] px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles className="mr-2 size-4 fill-gold text-gold" />
            Faith-led excellence
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-[2.6rem]">
            Our Mission & Vision
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Guided by faith, driven by excellence, and committed to making quality Quran education accessible worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="group rounded-[1.75rem] border border-slate-900/8 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4)] sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Target className="size-7" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-950">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Our mission is to make Quran learning simple, accessible and meaningful for students around the world through qualified teachers, structured lessons and a flexible online learning experience.
            </p>
          </article>

          <article className="group rounded-[1.75rem] border border-slate-900/8 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4)] sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-gold shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Compass className="size-7" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-950">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Our vision is to become one of the world's most trusted online Quran academies by combining authentic Islamic education with modern technology and exceptional student support.
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[1.4rem] border border-slate-900/8 bg-[linear-gradient(145deg,#ffffff_0%,#fffdf8_100%)] p-6 shadow-[0_16px_40px_-25px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.38)]"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                <Icon className="size-4 text-primary" />
                {title}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
