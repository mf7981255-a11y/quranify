import Link from "next/link"

export function PrivacyTrust() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950">
            Your Privacy & Trust Matter
          </h2>
          <p className="mt-4 text-slate-600">
            We're committed to protecting your data and providing transparent policies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#" className="rounded-full border border-slate-900/15 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
              Privacy Policy
            </Link>
            <Link href="#" className="rounded-full border border-slate-900/15 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
              Terms & Conditions
            </Link>
            <Link href="#" className="rounded-full border border-slate-900/15 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
