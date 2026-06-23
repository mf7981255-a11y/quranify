import type { LucideIconName } from "@/lib/icons"

export interface AboutStat {
  value: string
  label: string
}

export interface AboutFeature {
  icon: LucideIconName
  title: string
  description: string
}

export interface AboutContent {
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
  whyChoose: {
    title: string
    description: string
    features: AboutFeature[]
  }
  learningMethod: {
    title: string
    description: string
    steps: { title: string; description: string }[]
  }
  globalStudents: {
    title: string
    description: string
    stats: AboutStat[]
  }
  cta: {
    title: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}
