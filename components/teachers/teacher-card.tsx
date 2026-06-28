import type { Teacher } from "@/lib/types/teacher"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="group rounded-[1.6rem] border border-slate-900/8 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm text-xl font-semibold text-slate-950">
          {teacher.photoUrl ? (
            <img alt={teacher.name} src={teacher.photoUrl} className="h-full w-full rounded-[1.2rem] object-cover" />
          ) : (
            teacher.name
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="font-heading text-xl font-semibold text-slate-950">{teacher.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{teacher.title}</p>
            </div>
            <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {teacher.status ?? "Available"}
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Experience</p>
              <p className="mt-1">{teacher.experience ?? "—"}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Languages</p>
              <p className="mt-1">{teacher.languages?.join(", ") ?? "—"}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {teacher.specialties?.map((specialty) => (
              <span key={specialty} className="rounded-full border border-slate-900/10 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                {specialty}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <Button asChild variant="outline" size="sm" className="rounded-full border-slate-900/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <Link href={`/teachers/${teacher.slug}`}>View Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
