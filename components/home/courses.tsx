import Link from "next/link"
import { ArrowRight, BookMarked, BookOpen, Languages, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/home/section-header"

const courses = [
  {
    icon: BookOpen,
    title: "Quran Reading (Noorani Qaida)",
    level: "Beginner",
    description:
      "Build a strong foundation in Arabic letters, pronunciation, and basic reading rules from scratch.",
    duration: "3–6 months",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Tajweed Mastery",
    level: "Intermediate",
    description:
      "Perfect your recitation with detailed rules of articulation, elongation, and proper Makharij.",
    duration: "6–12 months",
    popular: true,
  },
  {
    icon: BookMarked,
    title: "Hifz Program",
    level: "All Levels",
    description:
      "Structured memorization with daily revision plans, progress tracking, and teacher accountability.",
    duration: "Ongoing",
    popular: false,
  },
  {
    icon: Languages,
    title: "Quranic Arabic",
    level: "Intermediate",
    description:
      "Understand the language of the Quran — vocabulary, grammar, and tafsir fundamentals.",
    duration: "4–8 months",
    popular: false,
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Courses"
          title="Structured paths for every learner"
          description="Choose a course aligned with your goals. Each program includes live sessions, homework review, and progress reports."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="relative transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              {course.popular && (
                <Badge className="absolute top-4 right-4 border-0 bg-gold text-gold-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <course.icon className="size-5" />
                </div>
                <CardTitle className="font-heading text-lg">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <Badge variant="outline">{course.duration}</Badge>
                </div>
              </CardContent>
              <CardFooter className="border-0 bg-transparent">
                <Button variant="ghost" size="sm" className="px-0" asChild>
                  <Link href="#trial">
                    Enroll Now
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
