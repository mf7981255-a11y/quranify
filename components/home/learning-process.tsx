import {
  CalendarCheck,
  ClipboardList,
  MessageCircle,
  Sparkles,
  UserPlus,
} from "lucide-react"
import { SectionHeader } from "@/components/home/section-header"

const steps = [
  {
    step: "01",
    icon: Sparkles,
    title: "Book Your One Free Trial",
    description:
      "Schedule one complimentary trial session to experience our teaching approach before enrollment.",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Meet Your Quran Instructor",
    description:
      "Get matched with a qualified teacher based on your goals, level, and preferred schedule.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Choose Your Schedule",
    description:
      "Select class timings that fit your routine, timezone, and learning pace.",
  },
  {
    step: "04",
    icon: MessageCircle,
    title: "Start Live Classes",
    description:
      "Begin personalized One-to-One or Group Quran classes through Google Meet.",
  },
  {
    step: "05",
    icon: ClipboardList,
    title: "Track Your Progress",
    description:
      "Monitor attendance, homework, learning milestones, and teacher feedback throughout your journey.",
  },
]

export function LearningProcess() {
  return (
    <section id="process" className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_60%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="How Your Learning Journey Begins"
          description="Starting your Quran learning journey is simple, structured, and personalized."
        />

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/60 via-gold/20 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex ${index % 2 === 0 ? "lg:pr-10" : "lg:pl-10 lg:translate-y-12"}`}
              >
                <div className="relative flex w-full rounded-[1.5rem] border border-slate-900/10 bg-white/85 p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.32)]">
                  <div className="relative mr-4 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 text-primary shadow-sm">
                    <item.icon className="size-5" />
                    <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-gold-foreground">
                      {item.step}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
