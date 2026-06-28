import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the trial class work?",
    answer:
      "Every new student receives one complimentary trial class. During this session, our teacher will assess your level and discuss your learning goals. After the trial, we'll finalize your personalized learning plan and pricing based on your needs.",
  },
  {
    question: "What are the available class timings?",
    answer:
      "Classes are available across all major time zones. You can choose timings that fit your daily routine. Our flexible scheduling ensures you can learn around your commitments.",
  },
  {
    question: "Do you use Google Meet for classes?",
    answer:
      "Yes, all our live classes are conducted through Google Meet. This platform is secure, reliable and works seamlessly on desktop, tablet and mobile devices. You simply need an internet connection.",
  },
  {
    question: "What languages do teachers speak?",
    answer:
      "Our teachers are fluent in multiple languages including Urdu, English and Arabic. They can teach in your preferred language to ensure clear communication and better learning outcomes.",
  },
  {
    question: "How are payments verified?",
    answer:
      "We offer multiple secure payment methods including bank transfer, JazzCash, Easypaisa and Meezan Bank. All transactions are verified before class scheduling begins. Payment is finalized after the trial discussion.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600">Quick answers to common questions about our courses and platform.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group rounded-[1.4rem] border border-slate-900/8 bg-white shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)]">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-950">
                  {faq.question}
                  <ChevronDown className="transition group-open:rotate-180" size={20} />
                </summary>
                <div className="border-t border-slate-900/8 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
