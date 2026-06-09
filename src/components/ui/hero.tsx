import { useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Safety", href: "#safety" },
    { label: "Coverage", href: "#coverage" },
    { label: "Drivers", href: "#drivers" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
            <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center text-white font-bold text-base sm:text-lg tracking-[-1px]">
              PA
            </div>
            <span className="font-semibold text-lg sm:text-2xl tracking-[-1px] sm:tracking-[-1.5px] truncate">
              Pink Auto
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:block shrink-0">
            <a
              href="#download"
              className="inline-flex h-12 items-center justify-center px-6 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-black active:scale-[0.985] transition-all"
            >
              Download App
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 shrink-0 flex items-center justify-center text-2xl text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white px-4 sm:px-6 py-5">
            <div className="flex flex-col gap-1 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 py-3 border-b border-slate-50 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-slate-900 text-white font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16 md:pt-20 md:min-h-[100vh] md:flex md:items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-0 pb-12 md:pb-0 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="w-full max-w-[560px] mx-auto md:mx-0 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-xs sm:text-sm font-medium mb-5 sm:mb-6 max-w-full">
                <span className="shrink-0">📍</span>
                <span>Launching in Kolhapur, Maharashtra</span>
              </div>

              {/* Headline */}
              <h1 className="text-[2.125rem] sm:text-[3rem] md:text-[4.25rem] lg:text-[5.75rem] font-semibold tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.5px] leading-[1.05] sm:leading-[1.02] mb-5 sm:mb-6">
                Safe Mobility.
                <br />
                Built for Women.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-8 sm:mb-9">
                Pink Auto is a women-focused mobility platform helping women, students,
                families, and senior citizens travel safely through verified drivers,
                real-time safety features, and dependable transportation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
                <a
                  href="#download"
                  className="inline-flex h-12 sm:h-14 items-center justify-center px-8 sm:px-10 rounded-full bg-pink-600 text-white font-semibold text-sm sm:text-base hover:bg-pink-700 active:scale-[0.985] transition-all shadow-lg shadow-pink-600/20"
                >
                  Download App
                </a>
                <a
                  href="#drivers"
                  className="inline-flex h-12 sm:h-14 items-center justify-center px-8 sm:px-9 rounded-full border-2 border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 active:bg-slate-100 transition-all"
                >
                  Become a Driver
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5 text-sm sm:text-[15px] text-slate-600 max-w-sm mx-auto md:mx-0 md:max-w-none">
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>Verified Drivers</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>GPS Tracking</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>Emergency Support</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>Women-Focused Service</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative flex justify-center md:justify-end w-full mt-2 sm:mt-4 md:mt-0">
              <div className="relative px-6 sm:px-8 md:px-10 py-6 sm:py-4">
                {/* Phone Frame */}
                <div className="relative w-[220px] h-[440px] sm:w-[250px] sm:h-[500px] md:w-[270px] md:h-[540px] bg-slate-950 rounded-[2.75rem] sm:rounded-[3.25rem] p-[8px] sm:p-[10px] shadow-2xl ring-1 ring-slate-800 mx-auto">
                  <div className="w-full h-full bg-white rounded-[2.25rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200 relative">
                    {/* App Header */}
                    <div className="h-10 sm:h-11 bg-white px-3 sm:px-4 flex items-center justify-between border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-pink-600 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold">
                          PA
                        </div>
                        <span className="font-semibold text-xs sm:text-sm">Pink Auto</span>
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500">Kolhapur</div>
                    </div>

                    {/* App Content */}
                    <div className="p-3 sm:p-4">
                      <div className="text-[10px] sm:text-xs uppercase tracking-widest text-pink-600 font-medium mb-1">
                        Good morning, Priya
                      </div>
                      <div className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                        Where are you going?
                      </div>

                      <div className="h-32 sm:h-40 bg-gradient-to-br from-pink-50 via-white to-slate-100 rounded-2xl mb-3 sm:mb-4 relative overflow-hidden border border-slate-100">
                        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_1px)] bg-[length:3px_3px]" />
                        <div className="absolute top-6 left-6 w-3 h-3 bg-pink-600 rounded-full ring-4 ring-pink-200" />
                        <div className="absolute bottom-8 right-8 w-3 h-3 bg-emerald-500 rounded-full ring-4 ring-emerald-200" />
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-2.5 sm:p-3 text-xs sm:text-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Driver arriving</div>
                            <div className="text-emerald-600 text-[10px] sm:text-xs">4 min • Verified</div>
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-500">₹89</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-11 bg-white border-t flex items-center px-3 sm:px-4 text-[9px] sm:text-[10px] text-slate-400">
                      Safety features active
                    </div>
                  </div>
                </div>

                {/* Floating Cards — repositioned for mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-2 left-2 sm:top-0 sm:-left-2 md:-top-3 md:-left-3 bg-white shadow-lg shadow-slate-200 border border-slate-100 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <span className="text-emerald-500">●</span>
                  <span className="font-medium">Ride Confirmed</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-10 right-2 sm:top-8 sm:-right-2 md:top-12 md:-right-4 bg-white shadow-lg shadow-slate-200 border border-slate-100 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <span className="text-emerald-500">●</span>
                  <span className="font-medium">Driver Verified</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-6 left-0 sm:bottom-4 sm:-left-3 md:-bottom-2 md:-left-5 bg-white shadow-lg shadow-slate-200 border border-slate-100 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <span className="text-red-500">●</span>
                  <span className="font-medium">SOS Available</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute bottom-14 right-0 sm:bottom-12 sm:-right-3 md:bottom-10 md:-right-6 bg-white shadow-lg shadow-slate-200 border border-slate-100 rounded-xl sm:rounded-2xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <span className="text-sky-500">●</span>
                  <span className="font-medium">GPS Enabled</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 sm:gap-y-8 border-t border-slate-100 pt-8 sm:pt-10 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">5,000+</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Safe Rides</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">100+</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Drivers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">98%</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">24×7</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}