export const teachingSteps = [
  { step: "Step 1", title: "Assessment", description: "Evaluate the student's current level to build a tailored learning path." },
  { step: "Step 2", title: "Personal Learning Plan", description: "Create a structured plan focusing on Quran, Tajweed and Islamic studies." },
  { step: "Step 3", title: "Regular Live Classes", description: "Deliver real-time sessions with teacher feedback and guided practice." },
  { step: "Step 4", title: "Practice & Homework", description: "Reinforce learning with practical exercises and revision tasks." },
  { step: "Step 5", title: "Monthly Progress Review", description: "Measure improvement and refine the plan for continued growth." },
]

export function TeachingMethod() {
  return (
    <section className="mt-12 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Our Teaching Method</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Clear steps for student success
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A premium pathway that blends assessment, live guidance and continuous progress review.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {teachingSteps.map((item, index) => (
            <div
              key={item.step}
              className="group rounded-[1.75rem] border border-slate-900/8 bg-[linear-gradient(145deg,#ffffff_0%,#fffdf8_100%)] p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
                <span className="font-semibold">{index + 1}</span>
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">{item.step}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
