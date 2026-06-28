import { Globe, Users, Clock, GraduationCap } from "lucide-react"

const businessInfo = [
  { icon: Globe, label: "Online Classes", value: "Google Meet" },
  { icon: Users, label: "Worldwide Students", value: "30+ Countries" },
  { icon: Clock, label: "Flexible Scheduling", value: "Classes Across Time Zones" },
  { icon: GraduationCap, label: "Expert Teachers", value: "Qualified & Experienced" },
]

export function BusinessInfo() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-[1.4rem] border border-slate-900/8 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
                <Icon className="size-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">{label}</p>
              <p className="mt-2 text-base font-semibold text-primary">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
