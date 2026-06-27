import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const journeys = [
  {
    title: "Learn with Quranify",
    subtitle:
      "Join live Quran classes with certified instructors from anywhere in the world.",
    buttonLabel: "Start Learning",
    href: "#courses",
    icon: GraduationCap,
    accent: "from-primary/15 to-gold/15",
    badge: "For learners",
  },
  {
    title: "Teach with Quranify",
    subtitle:
      "Apply as a certified Quran instructor and inspire students worldwide.",
    buttonLabel: "Apply as Instructor",
    href: "#contact",
    icon: BookOpen,
    accent: "from-gold/15 to-primary/15",
    badge: "For teachers",
  },
]

export function WelcomeSelection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_55%,#ffffff_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-16 size-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-10 right-0 size-80 rounded-full bg-gold/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_32%)]" />
        <div className="absolute left-10 top-20 h-24 w-24 rotate-45 rounded-[2rem] border border-slate-900/10 opacity-60" />
        <div className="absolute bottom-16 right-16 h-20 w-20 rounded-full border border-gold/25 opacity-70" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
          <Sparkles className="size-4 text-gold" />
          Welcome to Quranify
        </div>

        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
          Choose the path that fits your Quran journey
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Begin with a premium experience crafted for learners and teachers seeking clarity, excellence, and meaningful connection.
        </p>

        <div className="mt-10 grid w-full gap-6 lg:grid-cols-2">
          {journeys.map(({ title, subtitle, buttonLabel, href, icon: Icon, accent, badge }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-8 text-left shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-70`} />
              <div className="absolute right-0 top-0 size-32 rounded-bl-full bg-white/50" />
              <div className="relative">
                <div className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm">
                  {badge}
                </div>

                <div className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-gold shadow-lg shadow-slate-950/10">
                  <Icon className="size-7" />
                </div>

                <h2 className="mt-6 font-heading text-2xl font-semibold text-slate-950 sm:text-[1.75rem]">
                  {title}
                </h2>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  {subtitle}
                </p>

                <Button
                  size="lg"
                  className="mt-8 h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-16px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
                  asChild
                >
                  <Link href={href}>
                    {buttonLabel}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          A premium entry experience for learners and teachers alike.
        </p>
      </div>
    </section>
  )
}
