import {
  BookMarked,
  BookOpen,
  GraduationCap,
  HandHeart,
  Languages,
  Moon,
  Sparkles,
  Sun,
  Users,
  User,
  type LucideIcon,
} from "lucide-react"

export const iconMap = {
  "book-open": BookOpen,
  "book-marked": BookMarked,
  sparkles: Sparkles,
  languages: Languages,
  "graduation-cap": GraduationCap,
  "hand-heart": HandHeart,
  moon: Moon,
  sun: Sun,
  users: Users,
  user: User,
} as const satisfies Record<string, LucideIcon>

export type LucideIconName = keyof typeof iconMap

export function getIcon(name: LucideIconName): LucideIcon {
  return iconMap[name]
}
