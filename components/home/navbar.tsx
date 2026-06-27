"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { BookOpen, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#why", label: "Why Quranify" },
  { href: "#courses", label: "Courses" },
  { href: "#teachers", label: "Teachers" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    document.documentElement.style.scrollBehavior = "smooth"
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/80 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-none"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full px-2 py-1 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-200 hover:scale-105">
            <BookOpen className="size-4.5" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            Quran<span className="text-gold">ify</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 rounded-full border border-border/60 bg-white/70 px-4 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            asChild
          >
            <Link href="#contact">Login</Link>
          </Button>
          <Button
            size="sm"
            className="h-10 rounded-full bg-gold px-4 text-sm font-semibold text-gold-foreground shadow-[0_12px_30px_-12px_rgba(212,175,55,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
            asChild
          >
            <Link href="#trial">Free Trial</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/60 bg-white/75 shadow-sm backdrop-blur-sm"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs border-l border-border/50 bg-background/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-xl text-foreground">
                Quran<span className="text-gold">ify</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button
                variant="outline"
                className="h-11 rounded-full"
                asChild
              >
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button className="h-11 rounded-full bg-gold text-gold-foreground" asChild>
                <Link href="#trial" onClick={() => setOpen(false)}>
                  Free Trial
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
