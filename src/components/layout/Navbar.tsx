import { useEffect, useState } from "react"
import { ArrowDownToLine } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Safety", href: "#safety" },
  { label: "Coverage", href: "#coverage" },
  { label: "Drivers", href: "#drivers" },
  { label: "Contact", href: "#contact" },
]

const NAV_HEIGHT = "h-12 sm:h-14"

const navCtaBase =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all active:scale-[0.98]"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-[background,box-shadow,border-color] duration-300",
          "bg-white/95 backdrop-blur-xl border-b border-slate-200/70",
          scrolled && "shadow-[0_4px_20px_-6px_rgba(15,23,42,0.12)] bg-white/98"
        )}
      >
        <nav className={cn("relative max-w-[1080px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3", NAV_HEIGHT)}>
          <a
            href="#main"
            className="flex items-center gap-2.5 min-w-0 shrink-0 z-10"
            onClick={closeMobile}
          >
            <Logo className="w-9 h-9 rounded-[10px]" showWordmark wordmarkClassName="hidden sm:inline text-[15px] lg:text-base font-medium" />
          </a>

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 z-10">
            <a
              href="#download"
              className={cn(
                navCtaBase,
                "h-8 sm:h-9 lg:h-10 gap-1.5 px-3 sm:px-4 text-[12px] sm:text-[13px] lg:text-[14px]",
                "border border-slate-200/90 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900"
              )}
            >
              <ArrowDownToLine className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-slate-500" strokeWidth={2} />
              <span className="hidden sm:inline">Get the app</span>
              <span className="sm:hidden">App</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100/80 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[90] bg-white/98 backdrop-blur-xl pt-14 px-5 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-1 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3.5 text-[17px] font-medium text-slate-800 border-b border-slate-100"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className={cn(
                navCtaBase,
                "mt-6 h-12 gap-2 border border-slate-200 bg-slate-50 text-slate-700 text-[15px]",
                "hover:bg-slate-100 hover:border-slate-300"
              )}
              onClick={closeMobile}
            >
              <ArrowDownToLine className="w-4 h-4 text-slate-500" strokeWidth={2} />
              Get the app
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export function NavbarSpacer() {
  return <div aria-hidden className={cn("shrink-0", NAV_HEIGHT)} />
}