import { lazy, Suspense, useCallback, useEffect, useState } from "react"
import {
  BadgeCheck,
  Clock,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Siren,
  Users,
  Briefcase,
  Calendar,
  Moon,
} from "lucide-react"
import { GradientCard } from "@/components/ui/gradient-card"
import { DownloadButtons } from "@/components/ui/download-buttons"
import { SectionHeading } from "@/components/ui/section-heading"
import { HorizontalScrollRow, ScrollSnapItem } from "@/components/ui/horizontal-scroll-row"
import { FeatureCard, InlineFeatureCard, StoryVisualCard, SurfaceCard } from "@/components/ui/surface-card"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { AboutVisual, SafetyVisual } from "@/components/ui/visual-panel"
import Navbar, { NavbarSpacer } from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SITE, WHATSAPP_BOOK_URL, WHATSAPP_DRIVER_URL } from "@/lib/site-config"
import { BrandImage } from "@/components/ui/brand-image"
import {
  DRIVER_IMAGE,
  DRIVER_IMAGE_FALLBACK,
  FEATURE_IMAGES,
  HERO_VISUAL_IMAGE,
  SERVICE_IMAGES,
  STORY_IMAGES,
} from "@/lib/media"
import { assetUrl, cn } from "@/lib/utils"

const CinematicHero = lazy(() =>
  import("@/components/ui/cinematic-hero").then((m) => ({ default: m.CinematicHero }))
)
const OpenStreetMap = lazy(() =>
  import("@/components/ui/openstreetmap").then((m) => ({ default: m.OpenStreetMap }))
)
const TestimonialsMarquee = lazy(() =>
  import("@/components/ui/testimonials-marquee").then((m) => ({ default: m.TestimonialsMarquee }))
)

const featureCards = [
  {
    gradient: "pink" as const,
    badgeText: "Women-first",
    badgeColor: "#EC4899",
    title: "Women Drivers",
    description: "Choose Pink Auto for verified women drivers — safer rides built for women, students, and families.",
    ctaText: "Book Pink Auto",
    ctaHref: "#download",
    imageUrl: FEATURE_IMAGES.womenDrivers,
    imageFallback: FEATURE_IMAGES.womenDriversFallback,
    featured: true,
  },
  {
    gradient: "gray" as const,
    badgeText: "Everyday rides",
    badgeColor: "#64748B",
    title: "Standard Rides",
    description: "Book regular autos anytime through the same app — quick, affordable trips across the city.",
    ctaText: "Book a ride",
    ctaHref: "#download",
    imageUrl: FEATURE_IMAGES.standardRides,
    imageFallback: FEATURE_IMAGES.standardRidesFallback,
  },
  {
    gradient: "green" as const,
    badgeText: "Always protected",
    badgeColor: "#10B981",
    title: "Live Safety",
    description: "Real-time GPS tracking, SOS alerts, and trip sharing keep you connected on every journey.",
    ctaText: "See safety features",
    ctaHref: "#safety",
    imageUrl: FEATURE_IMAGES.liveSafety,
  },
  {
    gradient: "purple" as const,
    badgeText: "Round the clock",
    badgeColor: "#8B5CF6",
    title: "24×7 Support",
    description: "Our support team is available day and night — help is always one tap away when you need it.",
    ctaText: "Contact support",
    ctaHref: "#contact",
    imageUrl: FEATURE_IMAGES.support,
    imageFallback: FEATURE_IMAGES.supportFallback,
  },
]

const safetyFeatures = [
  { icon: BadgeCheck, title: "Verified drivers", description: "ID-checked women and standard auto drivers." },
  { icon: MapPin, title: "Live GPS tracking", description: "Share your trip and track every route in real time." },
  { icon: Siren, title: "One-tap SOS", description: "Emergency alerts to support and trusted contacts." },
  { icon: ShieldCheck, title: "Driver verification", description: "License, background, and vehicle checks." },
  { icon: Phone, title: "24×7 support", description: "In-app help and phone assistance anytime." },
  { icon: Shield, title: "Safe ride policies", description: "Clear guidelines built for women and families." },
]

const services = [
  {
    icon: Heart,
    title: "Women-only Rides",
    description:
      "Travel confidently with verified women drivers, GPS tracking, emergency support, and a service built specifically around women's safety and comfort.",
    tone: "rose" as const,
    imageUrl: SERVICE_IMAGES.womenOnly,
    imageFallback: SERVICE_IMAGES.womenOnlyFallback,
    featured: true,
    hideOverlay: true,
  },
  {
    icon: MapPin,
    title: "Daily Local Rides",
    description:
      "Quick and affordable rides across the city for shopping, appointments, errands, and everyday travel.",
    tone: "rose" as const,
    imageUrl: SERVICE_IMAGES.daily,
  },
  {
    icon: GraduationCap,
    title: "School & College Pickup",
    description:
      "Safe and dependable transportation for students with trusted drivers and peace of mind for parents.",
    tone: "violet" as const,
    imageUrl: SERVICE_IMAGES.school,
  },
  {
    icon: Briefcase,
    title: "Office Commute",
    description:
      "Reliable daily commute solutions for working professionals with convenient pickup and drop services.",
    tone: "sky" as const,
    imageUrl: SERVICE_IMAGES.office,
  },
  {
    icon: Users,
    title: "Senior Citizen Transport",
    description:
      "Comfortable and assisted rides designed with extra care, patience, and support for elderly passengers.",
    tone: "amber" as const,
    imageUrl: SERVICE_IMAGES.senior,
    imageFallback: SERVICE_IMAGES.seniorFallback,
  },
  {
    icon: Calendar,
    title: "Event & Monthly Packages",
    description:
      "Flexible transportation plans for events, functions, recurring travel, office schedules, and group requirements.",
    tone: "emerald" as const,
    imageUrl: SERVICE_IMAGES.events,
    imageFallback: SERVICE_IMAGES.eventsFallback,
  },
  {
    icon: Moon,
    title: "Late Night Safety Rides",
    description:
      "Secure transportation for women returning home after work, events, classes, or travel, available whenever you need a safe ride.",
    tone: "violet" as const,
    imageUrl: SERVICE_IMAGES.lateNight,
  },
]

const storyCards = [
  {
    title: "Women Empowerment",
    description:
      "Creating employment opportunities and supporting women drivers through safe and sustainable mobility.",
    imageUrl: STORY_IMAGES.womenEmpowerment,
    tone: "emerald" as const,
  },
  {
    title: "Community Impact",
    description:
      "Working with families, schools, organizations, and communities to build safer transportation options.",
    imageUrl: STORY_IMAGES.communityImpact,
    tone: "sky" as const,
  },
  {
    title: "Safe City Movement",
    description:
      "Building a more connected and secure mobility ecosystem for women, students, and families.",
    imageUrl: STORY_IMAGES.safeCity,
    tone: "violet" as const,
  },
]

const serviceAreas = [
  "Rajarampuri",
  "Shahupuri",
  "Tarabai Park",
  "Kasba Bawada",
  "Laxmipur",
  "Rankala",
  "ICS College Road",
  "Guinness Circle",
]

const sectionPad = "px-4 sm:px-6 py-20 sm:py-28"
const sectionAnchor = "scroll-mt-14 sm:scroll-mt-[3.75rem]"

function PrimaryButton({
  href,
  children,
  variant = "whatsapp",
  external,
}: {
  href: string
  children: React.ReactNode
  variant?: "whatsapp" | "ghost" | "dark"
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex h-11 lg:h-12 items-center justify-center px-6 lg:px-8 rounded-full text-[14px] lg:text-[15px] font-semibold tracking-tight transition-all",
        variant === "whatsapp" && "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-[0_4px_14px_-4px_rgba(37,211,102,0.55)]",
        variant === "ghost" && "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50",
        variant === "dark" && "bg-slate-900 text-white hover:bg-black"
      )}
    >
      {children}
    </a>
  )
}

export default function Home() {
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768
    }
    return false
  })

  const handleIntroComplete = useCallback(() => {
    setIntroDone(true)
  }, [])

  useEffect(() => {
    if (introDone) return
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIntroDone(true)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [introDone])

  useEffect(() => {
    if (!introDone) return

    window.scrollTo(0, 0)
    document.body.style.removeProperty("overflow")
    document.documentElement.style.removeProperty("overflow")

    const hash = window.location.hash
    if (!hash) return

    const scrollToHash = () => {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

    requestAnimationFrame(() => requestAnimationFrame(scrollToHash))
  }, [introDone])

  return (
    <>
      {!introDone && (
        <Suspense fallback={<div className="fixed inset-0 z-50 bg-white" aria-hidden />}>
          <CinematicHero onComplete={handleIntroComplete} />
        </Suspense>
      )}

      {introDone && (
      <div
        id="main"
        className="bg-cream scroll-mt-0"
      >
        <Navbar />
        <NavbarSpacer />
        <WhatsAppButton />

        {/* Hero / Download */}
        <section
          id="download"
          className={cn(
            sectionAnchor,
            "section-hero relative overflow-hidden border-b border-slate-200/50",
            "px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24"
          )}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full sm:w-[78%] lg:w-[46%] h-[min(88%,520px)] sm:h-[min(90%,560px)] lg:h-[min(92%,600px)]">
              <img
                src={HERO_VISUAL_IMAGE}
                alt=""
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[72%_28%] sm:object-[76%_32%] lg:object-[88%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f7] from-0% via-[#fdfbf9]/75 via-[28%] to-transparent to-[55%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf9] from-0% via-transparent via-[18%] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f7]/80 from-0% via-transparent via-[12%] to-transparent" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f7] from-0% via-[#fdfbf9]/96 via-[40%] to-transparent to-[58%]" />
            <div className="absolute -top-32 left-[20%] w-[480px] h-[320px] rounded-full bg-orange-200/20 blur-3xl" />
            <div className="absolute -top-20 right-[15%] w-[400px] h-[280px] rounded-full bg-sky-200/20 blur-3xl" />
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-teal-200/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-[1080px] mx-auto">
            <div className="max-w-xl lg:max-w-2xl text-center lg:text-left -mt-1 sm:-mt-2">
              <p className="eyebrow mb-3">{SITE.location}</p>
              <h1 className="text-display font-semibold text-slate-900 text-balance">
                {SITE.tagline}
              </h1>
              <p className="mt-4 sm:mt-5 lg:mt-6 text-lead text-pretty max-w-xl mx-auto lg:mx-0 text-slate-600 lg:text-[1.35rem]">
                <span className="font-medium text-slate-700">Driven by Women</span>
                <span className="text-slate-400">, </span>
                <span className="font-semibold text-slate-800">Trusted by Families</span>
              </p>
              <p className="mt-2.5 lg:mt-3 text-sm sm:text-base lg:text-[17px] font-medium tracking-wide text-slate-500">
                Comfort
                <span className="text-slate-300 mx-1.5">·</span>
                Safety
                <span className="text-slate-300 mx-1.5">·</span>
                Empowerment
              </p>

              <div className="mt-8 flex flex-col items-center lg:items-start gap-5">
                <DownloadButtons className="justify-center lg:justify-start" />
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <PrimaryButton href={WHATSAPP_BOOK_URL} external>
                    Book on WhatsApp
                  </PrimaryButton>
                  <PrimaryButton href="#drivers" variant="ghost">
                    Become a Driver
                  </PrimaryButton>
                </div>
              </div>

              <SurfaceCard
                padding="md"
                className="mt-10 grid grid-cols-3 divide-x divide-slate-200/80"
              >
                {[
                  { value: "100+", label: "Women drivers" },
                  { value: "24×7", label: "Support" },
                  { value: "GPS", label: "Live tracking" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center px-2 sm:px-4 py-1">
                    <div className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </SurfaceCard>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className={cn(sectionPad, sectionAnchor, "relative overflow-hidden border-b border-slate-100 bg-white")}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
            style={{ backgroundImage: `url(${assetUrl("/images/chatgpt-10-09-22.png")})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-[1080px] mx-auto z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AboutVisual className="order-2 lg:order-1" />
              <div className="order-1 lg:order-2 space-y-6">
                <SectionHeading
                  align="left"
                  size="large"
                  eyebrow="About Pink Auto"
                  title="Empowering women on every ride"
                  description={
                    <>
                      <span className="hl hl-rose">Pink Auto</span> is a{" "}
                      <span className="hl hl-rose">women-focused</span> transportation service — offering{" "}
                      <span className="hl hl-amber">safe</span>,{" "}
                      <span className="hl hl-amber">reliable</span>, and{" "}
                      <span className="hl hl-amber">comfortable</span> auto-rickshaw rides while creating{" "}
                      <span className="hl hl-mint">employment</span> for{" "}
                      <span className="hl hl-rose">women drivers</span>.
                    </>
                  }
                  className="max-w-none"
                />
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    We believe every <span className="hl hl-violet">woman</span>,{" "}
                    <span className="hl hl-violet">student</span>, and{" "}
                    <span className="hl hl-violet">family</span> deserves transport they can{" "}
                    <span className="hl hl-amber">trust</span>.{" "}
                    <span className="hl hl-rose">Pink Auto</span> combines{" "}
                    <span className="hl hl-rose">verified women drivers</span>,{" "}
                    <span className="hl hl-sky">standard ride options</span>, and{" "}
                    <span className="hl hl-mint">modern safety technology</span> in one{" "}
                    <span className="hl hl-sky">simple app</span>.
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Our mission is comfort, safety, and empowerment — supporting women commuters, working professionals,
                    parents, senior citizens, and corporate partners across the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-20">
              <SectionHeading
                align="left"
                size="default"
                eyebrow="Built for Safety"
                title="A movement for safer mobility"
                description="Beyond rides — Pink Auto is building employment, community trust, and a safer city for everyone."
                className="mb-6 sm:mb-10 max-w-2xl"
              />
              <HorizontalScrollRow gridClassName="sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                {storyCards.map((card) => (
                  <ScrollSnapItem key={card.title}>
                    <StoryVisualCard {...card} />
                  </ScrollSnapItem>
                ))}
              </HorizontalScrollRow>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={cn(sectionPad, sectionAnchor, "section-warm border-y border-stone-200/80")}>
          <div className="max-w-[1080px] mx-auto">
            <SectionHeading
              size="large"
              eyebrow="Services"
              title="Rides for every need"
              description="From daily commutes to school pickups and event transport — Pink Auto covers your travel needs with flexible options."
              className="mb-8 sm:mb-16"
            />
            <HorizontalScrollRow gridClassName="sm:grid-cols-2 lg:grid-cols-3 sm:gap-5" fadeFrom="stone">
              {services.map(({ tone, featured, imageFallback, hideOverlay, ...service }) => (
                <ScrollSnapItem key={service.title} featured={featured}>
                  <FeatureCard
                    {...service}
                    imageFallback={imageFallback}
                    iconTone={tone}
                    featured={featured}
                    hideOverlay={hideOverlay}
                    compact
                  />
                </ScrollSnapItem>
              ))}
            </HorizontalScrollRow>
          </div>
        </section>

        {/* Why Pink Auto */}
        <section id="features" className={cn(sectionPad, sectionAnchor, "section-lilac border-b border-slate-100")}>
          <div className="max-w-[1080px] mx-auto">
            <SectionHeading
              size="large"
              eyebrow="Why choose us"
              title="Why Pink Auto"
              description="Women-driven autos, standard bookings, and safety features — everything in one app."
              className="mb-12 sm:mb-16"
            />
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {featureCards.map(({ featured, imageFallback, ...card }) => (
                <GradientCard
                  key={card.title}
                  {...card}
                  imageFallback={imageFallback}
                  featured={featured}
                  className={featured ? "sm:col-span-2" : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className={cn(sectionPad, sectionAnchor, "section-mint border-y border-teal-100/60")}>
          <div className="max-w-[1080px] mx-auto">
            <SectionHeading
              size="large"
              eyebrow="Safety first"
              title="Built for your peace of mind"
              description="Every ride includes verification, tracking, and emergency support — designed for women, students, and families."
              className="mb-12 sm:mb-16"
            />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
              <SafetyVisual className="lg:col-span-2 lg:sticky lg:top-24" />
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-5">
                {safetyFeatures.map((feature) => (
                  <InlineFeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage + OSM Map */}
        <section id="coverage" className={cn(sectionPad, sectionAnchor, "section-mist border-b border-slate-100")}>
          <div className="max-w-[1080px] mx-auto">
            <SectionHeading
              size="large"
              eyebrow="Service areas"
              title="Our Coverage Area"
              description="Serving key neighbourhoods across the city — with routes expanding based on demand and driver availability."
              className="mb-12 sm:mb-16"
            />
            <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 items-stretch">
              <div className="lg:col-span-2 flex flex-col gap-5">
                <SurfaceCard padding="lg">
                  <h3 className="text-[16px] font-semibold text-slate-900 mb-5 flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-[12px] bg-sky-50 text-sky-600 ring-1 ring-sky-100 flex items-center justify-center">
                      <MapPin className="w-4 h-4" strokeWidth={2} />
                    </span>
                    Popular areas
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-3">
                    {serviceAreas.map((area) => (
                      <li key={area} className="text-[14px] text-slate-600 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </SurfaceCard>
                <p className="text-[14px] text-slate-400 leading-[1.7] px-1">
                  The map shows our primary service hub and approximate service radius. OpenStreetMap powers live neighbourhood context.
                </p>
              </div>
              <div className="lg:col-span-3">
                <Suspense fallback={<div className="surface-card min-h-[380px] lg:min-h-[440px] animate-pulse bg-slate-100" />}>
                  <OpenStreetMap height="100%" className="min-h-[380px] lg:min-h-[440px]" />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="py-20 sm:py-28 animate-pulse bg-cream" />}>
          <TestimonialsMarquee />
        </Suspense>

        {/* Drivers */}
        <section id="drivers" className={cn(sectionPad, sectionAnchor, "bg-white")}>
          <div className="max-w-[1080px] mx-auto">
            <div className="surface-card rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 p-0 text-white overflow-hidden relative border-0 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45)]">
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative grid lg:grid-cols-2 gap-0 items-stretch">
                <div className="relative min-h-[280px] lg:min-h-full">
                  <BrandImage
                    src={DRIVER_IMAGE}
                    fallback={DRIVER_IMAGE_FALLBACK}
                    alt="Women professionals joining Pink Auto as drivers"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent lg:bg-gradient-to-t lg:from-slate-950/80 lg:via-transparent lg:to-transparent" />
                  <div className="relative p-8 sm:p-11 lg:p-14 flex flex-col justify-end h-full min-h-[280px]">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-200 mb-3">Join us</p>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
                      Drive with Pink Auto
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-md">
                      Join our network of verified women drivers. Flexible hours, fair earnings, and full safety support.
                    </p>
                  </div>
                </div>
                <div className="p-8 sm:p-11 lg:p-14 flex items-center">
                  <div className="rounded-[20px] bg-slate-950/50 backdrop-blur-md ring-1 ring-white/12 p-7 sm:p-9 w-full">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300 mb-2.5">
                      Requirements
                    </p>
                    <h3 className="text-2xl sm:text-[1.75rem] font-semibold text-white tracking-tight leading-tight mb-7">
                      Driver registration
                    </h3>
                    <ul className="space-y-4 mb-9">
                      {["Valid driving license", "Aadhaar verification", "Vehicle details", "Local address verification"].map((item) => (
                        <li key={item} className="flex items-center gap-3.5">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-400/10 ring-1 ring-teal-300/25">
                            <BadgeCheck className="w-4 h-4 text-teal-200" strokeWidth={2.25} />
                          </span>
                          <span className="text-base sm:text-[17px] font-medium text-white/95 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_DRIVER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#25D366] text-white text-base font-semibold tracking-tight shadow-[0_8px_24px_-8px_rgba(37,211,102,0.45)] hover:bg-[#20BD5A] transition-colors"
                    >
                      Apply on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={cn(sectionPad, sectionAnchor, "section-stone border-t border-slate-200/60")}>
          <div className="max-w-[1080px] mx-auto">
            <SectionHeading
              size="large"
              eyebrow="Get in touch"
              title="Contact us"
              description="Office inquiries, partnerships, and ride support — we're here 24×7."
              className="mb-12 sm:mb-16"
            />
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
              <SurfaceCard padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <img src={assetUrl("/logo.png")} alt="Pink Auto" className="w-12 h-12 rounded-xl object-contain" />
                  <h3 className="text-xl font-semibold text-slate-900">Pink Auto</h3>
                </div>
                <ul className="space-y-4 text-base text-slate-600">
                  <li className="flex items-start gap-3.5">
                    <MapPin className="w-[18px] h-[18px] text-sky-600 mt-0.5 shrink-0" strokeWidth={1.75} />
                    {SITE.address}
                  </li>
                  <li className="flex items-center gap-3.5">
                    <Phone className="w-[18px] h-[18px] text-teal-600 shrink-0" strokeWidth={1.75} />
                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-slate-900 transition-colors">
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <Clock className="w-[18px] h-[18px] text-amber-600 shrink-0" strokeWidth={1.75} />
                    24×7 in-app & phone support
                  </li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <PrimaryButton href={WHATSAPP_BOOK_URL} external>
                    WhatsApp
                  </PrimaryButton>
                  <PrimaryButton href={`mailto:${SITE.email}`} variant="ghost">
                    {SITE.email}
                  </PrimaryButton>
                </div>
              </SurfaceCard>
              <Suspense fallback={<div className="surface-card min-h-[300px] lg:min-h-full animate-pulse bg-slate-100" />}>
                <OpenStreetMap height="100%" className="min-h-[300px] lg:min-h-full" />
              </Suspense>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      )}
    </>
  )
}