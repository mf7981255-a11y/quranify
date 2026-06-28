const qualities = [
  "Patience",
  "Respect",
  "Authenticity",
  "Excellence",
  "Consistency",
  "Compassion",
]

export function TeacherQualities() {
  return (
    <section className="mt-12 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Our Values</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Teacher qualities that shape every class
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            The principles guiding our teachers are kindness, knowledge and consistent student support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality) => (
            <div key={quality} className="rounded-[1.5rem] border border-slate-900/8 bg-[linear-gradient(145deg,#ffffff_0%,#fffdf8_100%)] p-6 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">{quality}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
