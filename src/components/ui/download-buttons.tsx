import { cn } from "@/lib/utils"

type DownloadButtonsProps = {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "dark" | "light" | "glass"
}

export function DownloadButtons({ className, size = "md", variant = "dark" }: DownloadButtonsProps) {
  const isSm = size === "sm"
  const isLg = size === "lg"

  // Base styling for maximum polish & structural stability
  const baseBtnStyles = cn(
    "relative inline-flex items-center justify-start gap-3.5 rounded-xl font-sans transition-all duration-300 select-none group focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-2 focus:ring-offset-background",
    // Sizing
    isSm ? "px-3.5 py-2 min-w-[145px] h-[46px]" : isLg ? "px-5 py-3.5 min-w-[185px] h-[58px]" : "px-4 py-2.5 min-w-[165px] h-[52px]",
    // Variants
    variant === "dark" && "bg-[#09090b] text-white border border-white/15 hover:border-white/35 hover:bg-[#121215] shadow-md hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 active:translate-y-0",
    variant === "light" && "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    variant === "glass" && "bg-black/40 backdrop-blur-md text-white border border-white/20 hover:border-white/40 hover:bg-black/60 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
  )

  const textSubStyles = cn(
    "uppercase tracking-[0.09em] font-medium leading-none block mb-1",
    variant === "light" ? "text-slate-500" : "text-white/70",
    isSm ? "text-[8.5px]" : isLg ? "text-[10px]" : "text-[9px]"
  )

  const textMainStyles = cn(
    "font-bold tracking-tight leading-none block",
    variant === "light" ? "text-slate-900" : "text-white",
    isSm ? "text-xs" : isLg ? "text-base sm:text-lg" : "text-sm sm:text-[15px]"
  )

  const iconSize = isSm ? "w-5 h-5" : isLg ? "w-7 h-7" : "w-6 h-6"

  return (
    <div className={cn("flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3", className)}>
      {/* ── App Store Button ── */}
      <a
        href="#download"
        aria-label="Download GatiGo on the App Store"
        className={baseBtnStyles}
      >
        {/* Apple Logo — Vector SVG */}
        <svg className={cn("shrink-0 transition-transform duration-300 group-hover:scale-105", iconSize)} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left flex-1 min-w-0">
          <span className={textSubStyles}>Download on the</span>
          <span className={textMainStyles}>App Store</span>
        </div>
      </a>

      {/* ── Google Play Button ── */}
      <a
        href="#download"
        aria-label="Get GatiGo on Google Play"
        className={baseBtnStyles}
      >
        {/* Google Play 4-color Vector SVG */}
        <svg className={cn("shrink-0 transition-transform duration-300 group-hover:scale-105", iconSize)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
          <path d="M17.727 8.063L5.21.674a1.003 1.003 0 00-1.6 1.14L13.793 12l-3.183 3.186 7.117 4.751a1 1 0 001.6-1.14l-1.6-10.734z" fill="#34A853"/>
          <path d="M20.544 10.588l-2.817-1.525-3.935 2.937 3.935 2.937 2.817-1.525a1.337 1.337 0 000-2.824z" fill="#FBBC04"/>
          <path d="M3.609 22.186L17.727 15.937l-3.935-3.937L3.61 22.186z" fill="#EA4335"/>
        </svg>
        <div className="text-left flex-1 min-w-0">
          <span className={textSubStyles}>GET IT ON</span>
          <span className={textMainStyles}>Google Play</span>
        </div>
      </a>
    </div>
  )
}