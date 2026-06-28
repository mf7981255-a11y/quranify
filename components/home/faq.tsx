import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/home/section-header"
import { contactInfo } from "@/data/contact"
import { MessageCircleMore, Phone, Sparkles } from "lucide-react"

const faqs = [
  {
    question: "How do I start learning with Quranify?",
    answer:
      "Book your complimentary trial class, meet your instructor, choose your schedule, and begin your learning journey.",
  },
  {
    question: "How many free trial classes are offered?",
    answer: "Quranify offers only one complimentary trial class.",
  },
  {
    question: "How long is the free trial class?",
    answer:
      "The trial duration is configurable by the academy and may range from 15 to 40 minutes depending on the course.",
  },
  {
    question: "Which platform is used for live classes?",
    answer:
      "Google Meet is our primary teaching platform. Zoom is available as a backup when required.",
  },
  {
    question: "Do you offer One-to-One and Group Classes?",
    answer:
      "Yes. Students may choose either personalized One-to-One learning or Group Classes according to their preference.",
  },
  {
    question: "How are course fees decided?",
    answer:
      "Quranify does not use fixed pricing. Course fees are determined after mutual discussion based on course type, duration, learning goals, and class format.",
  },
  {
    question: "Can students join from any country?",
    answer:
      "Yes. Quranify welcomes students from around the world and supports international learning.",
  },
  {
    question: "What happens after the free trial?",
    answer:
      "After completing the trial class, the Admin reviews the enrollment, confirms the learning plan, agrees on the course fee, and then regular classes begin.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fffdf8_50%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about learning with Quranify."
        />

        <div className="mt-10 rounded-[1.75rem] border border-slate-900/10 bg-white/80 p-3 shadow-[0_25px_90px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-4 lg:p-5">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-[1.25rem] border border-slate-900/10 bg-[#fcfbf7] px-4 shadow-[0_12px_35px_-22px_rgba(15,23,42,0.26)] transition-all duration-300 data-[state=open]:border-primary/25 data-[state=open]:bg-white"
              >
                <AccordionTrigger className="group/faq-trigger py-5 text-left text-base font-semibold text-slate-900 hover:no-underline sm:text-lg">
                  <span className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-gold/15 text-primary transition-transform duration-300 group-hover/faq-trigger:scale-105">
                      <Sparkles className="size-4" />
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-5 text-base leading-8 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-slate-900/10 bg-gradient-to-br from-white via-[#fffdf8] to-[#f7efe2] p-6 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.24)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="size-4" />
                Need guidance?
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Still Have Questions?
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Our team is always ready to help you choose the right learning path.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-full bg-slate-950 px-5 text-sm font-medium text-white shadow-[0_16px_45px_-25px_rgba(15,23,42,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircleMore className="mr-2 size-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-slate-900/15 bg-white/80 px-5 text-sm font-medium text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                <a href="#contact">
                  <Phone className="mr-2 size-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
