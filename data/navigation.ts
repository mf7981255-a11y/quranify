import type { FooterLinkGroup, NavLink } from "@/lib/types/navigation"

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/teachers", label: "Teachers" },
  { href: "/contact", label: "Contact" },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { href: "/courses", label: "Courses" },
      { href: "/teachers", label: "Teachers" },
      { href: "/about", label: "How It Works" },
      { href: "/contact#free-trial", label: "Free Trial" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact#faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  },
]

export const footerTagline =
  "Empowering Muslims worldwide to connect with the Quran through expert-led online education."

export const footerQuote =
  "Read in the name of your Lord who created. — Al-Alaq 96:1"
