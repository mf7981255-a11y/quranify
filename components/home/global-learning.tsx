import { Globe2, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Students Worldwide",
    subtitle: "Growing International Community",
    icon: Users,
  },
  {
    title: "Flexible Time Zones",
    subtitle: "Classes scheduled according to student availability.",
    icon: Clock,
  },
  {
    title: "Live Online Learning",
    subtitle: "Interactive classes through Google Meet.",
    icon: Globe2,
  },
  {
    title: "Personalized Learning",
    subtitle: "Every student receives individual attention and structured guidance.",
    icon: MapPin,
  },
]

export function GlobalLearning() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-8 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-[#fffaf0] px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Globe2 className="mr-2 size-4 fill-gold text-gold" />
            Global learning reach
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-[2.6rem]">
            Learning Beyond Borders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Quranify is committed to making authentic Quran education accessible to students around the world through flexible online learning.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="relative mx-auto w-full max-w-[40rem]">
            <div className="relative rounded-[1.6rem] border border-slate-900/10 bg-[linear-gradient(180deg,#fffaf6_0%,#ffffff_100%)] p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)]">
              <div className="absolute inset-0 opacity-30">
                <svg className="h-full w-full" viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fff7ec" />
                      <stop offset="100%" stopColor="#fffdf7" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="480" fill="url(#g)" />
                  <g opacity="0.08" stroke="#d6c6a2" strokeWidth="1">
                    <path d="M40 120 C180 40, 620 40, 760 120" />
                    <path d="M40 240 C180 160, 620 160, 760 240" />
                    <path d="M40 360 C180 280, 620 280, 760 360" />
                  </g>
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center p-6">
                <div className="relative mx-auto h-[260px] w-full max-w-[32rem] rounded-[1.25rem] border border-gold/20 bg-gradient-to-br from-[#fff9ee] to-white shadow-inner">
                  <svg viewBox="0 0 600 360" className="h-full w-full">
                    <defs>
                      <linearGradient id="goldGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fff6e6" />
                        <stop offset="100%" stopColor="#fff9ef" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="600" height="360" rx="20" fill="url(#goldGlow)" />
                    <g fill="#ffffff" opacity="0.06">
                      <circle cx="120" cy="80" r="40" />
                      <circle cx="260" cy="140" r="36" />
                      <circle cx="420" cy="100" r="30" />
                      <circle cx="320" cy="220" r="28" />
                    </g>
                    <g stroke="#d6c6a2" strokeWidth="1.2" opacity="0.85" fill="none">
                      <path d="M40 180 C120 70, 480 70, 560 180" />
                      <path d="M60 240 C140 150, 460 150, 540 240" />
                    </g>
                    <g fill="#fff4d9">
                      <circle cx="120" cy="80" r="6" />
                      <circle cx="260" cy="140" r="6" />
                      <circle cx="420" cy="100" r="6" />
                      <circle cx="320" cy="220" r="6" />
                    </g>
                    <g opacity="0.06" fill="#d6c6a2">
                      <path d="M50 40 L90 40 L70 80 Z" />
                      <path d="M310 20 L350 20 L330 60 Z" />
                    </g>
                  </svg>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600">Subtle world map with Islamic geometry accents</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {stats.map(({ title, subtitle, icon: Icon }) => (
              <div key={title} className="group rounded-[1.35rem] border border-slate-900/8 bg-[linear-gradient(145deg,#ffffff_0%,#fffdf8_100%)] p-6 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.38)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-slate-950">{title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-span-full mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <Link href="#trial" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90">
                Book Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                Contact Us
              </Link>
            </div>

            <div className="col-span-full mt-4 text-center text-sm text-slate-600">"Our vision is to connect students worldwide with authentic Quran education through modern technology and qualified teachers."</div>
          </div>
        </div>
      </div>
    </section>
  )
}
