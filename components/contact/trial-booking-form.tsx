"use client"

export function TrialBookingForm() {
  return (
    <section id="trial-form" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950">
              Book Your Free Trial Class
            </h2>
            <p className="mt-3 text-slate-600">Every new student gets one complimentary trial session.</p>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900">Student Name *</label>
                <input type="text" placeholder="Student's name" required className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Parent Name (Optional)</label>
                <input type="text" placeholder="Parent/Guardian name" className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900">Age *</label>
                <input type="number" placeholder="Age" required className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Country *</label>
                <input type="text" placeholder="Your country" required className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900">WhatsApp Number *</label>
                <input type="tel" placeholder="+92..." required className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Preferred Course *</label>
                <select required className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Select a course</option>
                  <option value="qaida">Noorani Qaida</option>
                  <option value="nazra">Nazra Quran</option>
                  <option value="tajweed">Tajweed</option>
                  <option value="hifz">Hifz-ul-Quran</option>
                  <option value="islamic-studies">Islamic Studies</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Preferred Time *</label>
              <input type="text" placeholder="e.g., 7:00 PM - 8:00 PM (Your timezone)" required className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>

            <div className="rounded-[1.4rem] border border-gold/20 bg-gold/5 p-4">
              <p className="text-sm text-slate-700">
                <strong>Important:</strong> Each new student receives one complimentary trial class. After the trial, the learning plan and course fee will be finalized through mutual discussion. We do not mention fixed pricing upfront.
              </p>
            </div>

            <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-0.5 hover:bg-primary/90">
              Book Complimentary Trial
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
