import type { AboutContent } from "@/lib/types/about"

export const aboutContent: AboutContent = {
  mission: {
    title: "Our Mission",
    description:
      "To make authentic Quran education accessible to every Muslim, regardless of location or background. We connect students with qualified teachers who nurture both recitation excellence and a deep love for the Book of Allah.",
  },
  vision: {
    title: "Our Vision",
    description:
      "A world where every Muslim can read, understand, and live by the Quran. We envision Quranify as the trusted global platform for structured, personalized Islamic learning — rooted in tradition and powered by technology.",
  },
  whyChoose: {
    title: "Why Choose Quranify",
    description:
      "We combine scholarly excellence with modern convenience to deliver a learning experience that is effective, flexible, and spiritually enriching.",
    features: [
      {
        icon: "graduation-cap",
        title: "Qualified Scholars",
        description:
          "Huffaz, Aalims, and Muftis with years of teaching experience and recognized certifications.",
      },
      {
        icon: "user",
        title: "Personalized Learning",
        description:
          "One-to-one and small group options tailored to your pace, goals, and schedule.",
      },
      {
        icon: "sun",
        title: "Flexible Scheduling",
        description:
          "Classes available across time zones with timings that fit your daily routine.",
      },
      {
        icon: "hand-heart",
        title: "Holistic Approach",
        description:
          "Beyond recitation — duas, Sunnah, and Islamic studies for complete spiritual growth.",
      },
    ],
  },
  learningMethod: {
    title: "Our Learning Method",
    description:
      "A proven four-step approach that ensures steady progress and lasting retention.",
    steps: [
      {
        title: "Assessment & Placement",
        description:
          "We evaluate your current level and match you with the right teacher and course.",
      },
      {
        title: "Structured Curriculum",
        description:
          "Follow a clear syllabus with milestones, homework, and regular progress reviews.",
      },
      {
        title: "Live Interactive Sessions",
        description:
          "Engage in real-time classes with immediate feedback and personalized guidance.",
      },
      {
        title: "Continuous Revision",
        description:
          "Built-in revision cycles ensure what you learn stays with you for life.",
      },
    ],
  },
  globalStudents: {
    title: "Students Around the World",
    description:
      "Families and individuals from dozens of countries trust Quranify for their Quran education. Our online platform breaks geographical barriers while preserving the warmth of traditional teaching.",
    stats: [
      { value: "5,000+", label: "Active Students" },
      { value: "30+", label: "Countries" },
      { value: "120+", label: "Expert Teachers" },
      { value: "4.9", label: "Average Rating" },
    ],
  },
  cta: {
    title: "Begin Your Quran Journey Today",
    description:
      "Join thousands of students who have transformed their relationship with the Quran through Quranify.",
    primaryLabel: "Start Free Trial",
    primaryHref: "/contact#free-trial",
    secondaryLabel: "Explore Courses",
    secondaryHref: "/courses",
  },
}
