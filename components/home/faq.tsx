import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/home/section-header"

const faqs = [
  {
    question: "Who can join Quranify?",
    answer:
      "Quranify welcomes learners of all ages and backgrounds — from children as young as 4 to adults beginning their Quran journey or refining advanced Tajweed skills.",
  },
  {
    question: "How do the free trial sessions work?",
    answer:
      "After signing up, you'll complete a short assessment and be matched with a teacher. You'll receive two complimentary 30-minute live sessions to experience our teaching approach before committing to a plan.",
  },
  {
    question: "What technology do I need?",
    answer:
      "All you need is a device with a stable internet connection, a webcam, and a microphone. Our platform works on desktop, tablet, and mobile browsers — no downloads required.",
  },
  {
    question: "Can I choose my own teacher?",
    answer:
      "We match you based on your goals, level, and schedule preferences. If you'd like a different teacher after your trial, we'll happily arrange a new match at no extra cost.",
  },
  {
    question: "What are the pricing plans?",
    answer:
      "We offer flexible monthly plans starting from $49/month for 2 sessions per week. Family discounts and intensive Hifz packages are also available. Contact us for a personalized quote.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If you're not satisfied within the first 14 days of your paid subscription, we offer a full refund — no questions asked.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before starting your Quran journey with us."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
