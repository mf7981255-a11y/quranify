"use client"

export function ContactForm() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950">
              Send Us A Message
            </h2>
            <p className="mt-3 text-slate-600">We'll respond to your inquiry within 24 hours.</p>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900">Full Name</label>
                <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Email</label>
                <input type="email" placeholder="your@email.com" className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900">WhatsApp Number</label>
                <input type="tel" placeholder="+92..." className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Country</label>
                <input type="text" placeholder="Your country" className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Purpose</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option value="">Select purpose</option>
                <option value="inquiry">General Inquiry</option>
                <option value="course">Course Information</option>
                <option value="teacher">Teacher Application</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900">Message</label>
              <textarea placeholder="Your message..." rows={4} className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-sm placeholder-slate-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>

            <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-0.5 hover:bg-primary/90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
