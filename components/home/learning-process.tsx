import { CalendarCheck, ClipboardList, MessageCircle, UserPlus } from "lucide-react"
import { SectionHeader } from "@/components/home/section-header"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up & Assessment",
    description:
      "Create your free account and complete a brief assessment so we can match you with the right teacher and level.",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Book Your Schedule",
    description:
      "Pick times that work for you. Choose 2–5 sessions per week based on your goals and availability.",
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "Live 1-on-1 Classes",
    description:
      "Join interactive video sessions with your dedicated teacher. Practice recitation, get real-time feedback, and ask questions.",
  },
  {
    step: "04",
    icon: ClipboardList,
    title: "Track Your Progress",
    description:
      "Receive weekly progress reports, homework assignments, and milestone celebrations as you advance through your journey.",
  },
]

export function LearningProcess() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Your journey in four simple steps"
          description="Getting started is easy. From sign-up to your first recitation milestone, we guide you every step of the way."
        />

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-12 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />

          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="relative mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-gold/30 bg-background shadow-sm">
                <item.icon className="size-6 text-primary" />
                <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
