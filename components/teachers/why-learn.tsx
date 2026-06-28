import { Bolt, Users, Clock, BookOpen, ShieldCheck, Sparkles } from "lucide-react"

const benefits = [
  { title: "Qualified Teachers", description: "Experienced Quran instructors with a strong Islamic foundation.", icon: ShieldCheck },
  { title: "Personalized Attention", description: "Individual guidance tailored to each student's learning style.", icon: Users },
  { title: "Flexible Scheduling", description: "Class times designed around your daily routine.", icon: Clock },
  { title: "Interactive Classes", description: "Live sessions with real-time feedback and engaging support.", icon: Bolt },
  { title: "Islamic Environment", description: "A respectful and faith-centered atmosphere for every student.", icon: Sparkles },
  { title: "Continuous Guidance", description: "Ongoing mentorship to help students progress steadily.", icon: BookOpen },
]

export function WhyLearn() {
  return (
    <section className="mt-12 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Why Learn From Our Teachers
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Learn with trusted instructors who combine authentic Quran guidance with modern teaching methods.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group rounded-[1.4rem] border border-slate-900/8 bg-[linear-gradient(145deg,#ffffff_0%,#fffdf8_100%)] p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
