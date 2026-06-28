import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CourseCard({ course }: { course: { id: string; title: string; description: string; icon?: React.ReactNode } }) {
  return (
    <article className="group rounded-[1.4rem] border border-slate-900/8 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
          {course.icon || <div className="h-5 w-5 rounded-sm bg-gold/60" />}
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-slate-950">{course.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{course.description}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button asChild variant="ghost" className="px-3 py-2 text-sm font-medium text-primary hover:underline">
          <Link href={`/courses/${course.id}`}>Learn More <ArrowRight className="ml-2 size-4" /></Link>
        </Button>

        <Button asChild size="sm" className="ml-auto rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm">
          <Link href="#trial">Book Free Trial</Link>
        </Button>
      </div>
    </article>
  )
}
