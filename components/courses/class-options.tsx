import { Users, Users2 } from "lucide-react"

export function ClassOptions() {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="group rounded-[1.4rem] border border-slate-900/8 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
                <Users className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-slate-950">One-to-One Classes</h4>
                <p className="mt-1 text-sm text-slate-600">Personalized learning with individual attention.</p>
              </div>
            </div>
          </div>

          <div className="group rounded-[1.4rem] border border-slate-900/8 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
                <Users2 className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-slate-950">Group Classes</h4>
                <p className="mt-1 text-sm text-slate-600">Interactive learning with small groups of students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
