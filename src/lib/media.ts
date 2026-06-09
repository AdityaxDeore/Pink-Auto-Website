const CHATGPT_WOMEN_PRIMARY =
  "https://chatgpt.com/backend-api/estuary/content?id=file_00000000643072098eec1d1e1074c3f0"

const CHATGPT_ELDERLY =
  "https://chatgpt.com/backend-api/estuary/content?id=file_00000000a26471faa862a555972d70ce"

const CHATGPT_PACKAGES =
  "https://chatgpt.com/backend-api/estuary/content?id=file_00000000266c71faab3b8fbbaf368504"

/** Optimized WebP assets in /public/images — run `npm run optimize-images` after source PNG changes */

export const BRAND_IMAGES = {
  womenPrimary: CHATGPT_WOMEN_PRIMARY,
  womenPrimaryFallback: "/images/rickshaw-pink.jpg",
  firstPin: "/images/hero-alt.jpg",
  chatgptAlt: "/images/chatgpt-alt.jpg",
  chatgptAltFallback: "/images/pin-1.jpg",
  pin1: "/images/pin-1.jpg",
  pin2: "/images/pin-2.jpg",
  rickshawPink: "/images/rickshaw-pink.jpg",
  schoolCollege: "/images/school-college.jpg",
  dailyRides: "/images/daily-rides.jpg",
  elderly: CHATGPT_ELDERLY,
  elderlyFallback: "/images/pin-2.jpg",
  packages: CHATGPT_PACKAGES,
  packagesFallback: "/images/pin-1.jpg",
  bingRickshaw: "/images/rickshaw-pink.jpg",
  bingOffice: "/images/office-commute.jpg",
} as const

export const STORY_IMAGES = {
  womenEmpowerment: BRAND_IMAGES.bingRickshaw,
  communityImpact: BRAND_IMAGES.bingOffice,
  safeCity: BRAND_IMAGES.pin2,
} as const

export const SERVICE_IMAGES = {
  daily: BRAND_IMAGES.dailyRides,
  school: BRAND_IMAGES.schoolCollege,
  office: "/images/office-commute-card.webp",
  womenOnly: "/images/women-rides.webp",
  womenOnlyFallback: BRAND_IMAGES.womenPrimaryFallback,
  senior: "/images/senior-transport.webp",
  seniorFallback: BRAND_IMAGES.elderlyFallback,
  events: "/images/event-packages.webp",
  eventsFallback: BRAND_IMAGES.packagesFallback,
  lateNight: "/images/late-night-safety.webp",
} as const

export const FEATURE_IMAGES = {
  womenDrivers: BRAND_IMAGES.womenPrimary,
  womenDriversFallback: BRAND_IMAGES.womenPrimaryFallback,
  standardRides: BRAND_IMAGES.chatgptAlt,
  standardRidesFallback: BRAND_IMAGES.chatgptAltFallback,
  liveSafety: BRAND_IMAGES.pin2,
  support: "/images/support-24x7.webp",
  supportFallback: BRAND_IMAGES.pin2,
} as const

export const DRIVER_IMAGE = BRAND_IMAGES.chatgptAlt
export const DRIVER_IMAGE_FALLBACK = BRAND_IMAGES.chatgptAltFallback
export const HERO_VISUAL_IMAGE = "/images/hero-visual.webp"
export const HERO_IMAGE = BRAND_IMAGES.womenPrimary
export const HERO_IMAGE_FALLBACK = BRAND_IMAGES.womenPrimaryFallback
export const ABOUT_IMAGE = BRAND_IMAGES.firstPin

const PORTRAIT_POOL = [
  BRAND_IMAGES.firstPin,
  BRAND_IMAGES.pin1,
  BRAND_IMAGES.pin2,
  BRAND_IMAGES.schoolCollege,
  BRAND_IMAGES.dailyRides,
  BRAND_IMAGES.rickshawPink,
] as const

export type TestimonialAccent = "rose" | "violet" | "sky" | "amber" | "emerald" | "fuchsia"

export function portraitForIndex(index: number) {
  return PORTRAIT_POOL[index % PORTRAIT_POOL.length]
}

export function accentFromRole(role: string): TestimonialAccent {
  const r = role.toLowerCase()
  if (r.includes("student")) return "violet"
  if (r.includes("parent") || r.includes("homemaker")) return "rose"
  if (r.includes("senior")) return "amber"
  if (r.includes("ngo") || r.includes("professor") || r.includes("teacher")) return "emerald"
  if (r.includes("engineer") || r.includes("bank") || r.includes("marketing") || r.includes("hr") || r.includes("corporate")) return "sky"
  if (r.includes("entrepreneur") || r.includes("volunteer")) return "fuchsia"
  return "rose"
}

export const TESTIMONIAL_ACCENT_STYLES: Record<
  TestimonialAccent,
  { card: string; ring: string; pill: string; quote: string }
> = {
  rose: {
    card: "from-orange-50/80 via-white to-stone-50/60",
    ring: "ring-orange-200",
    pill: "bg-orange-100 text-orange-800",
    quote: "text-orange-300",
  },
  violet: {
    card: "from-violet-50/90 via-white to-purple-50/40",
    ring: "ring-violet-200",
    pill: "bg-violet-100 text-violet-700",
    quote: "text-violet-300",
  },
  sky: {
    card: "from-sky-50/90 via-white to-blue-50/40",
    ring: "ring-sky-200",
    pill: "bg-sky-100 text-sky-700",
    quote: "text-sky-300",
  },
  amber: {
    card: "from-amber-50/90 via-white to-orange-50/40",
    ring: "ring-amber-200",
    pill: "bg-amber-100 text-amber-800",
    quote: "text-amber-300",
  },
  emerald: {
    card: "from-emerald-50/90 via-white to-teal-50/40",
    ring: "ring-emerald-200",
    pill: "bg-emerald-100 text-emerald-700",
    quote: "text-emerald-300",
  },
  fuchsia: {
    card: "from-indigo-50/80 via-white to-slate-50/60",
    ring: "ring-indigo-200",
    pill: "bg-indigo-100 text-indigo-700",
    quote: "text-indigo-300",
  },
}