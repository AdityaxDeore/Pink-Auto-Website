import { cn } from "@/lib/utils"

type DownloadButtonsProps = {
  className?: string
  size?: "sm" | "md"
}

export function DownloadButtons({ className, size = "md" }: DownloadButtonsProps) {
  const compact = size === "sm"

  return (
    <div className={cn("flex flex-col sm:flex-row items-stretch sm:items-center gap-3", className)}>
      {/* ── App Store Button ── */}
      <a
        href="#download"
        aria-label="Download Gatigo on the App Store"
        className={cn(
          "inline-flex items-center justify-center gap-3 text-white bg-black rounded-[12px] border border-white/10",
          "transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a1a1a] hover:shadow-lg active:translate-y-0",
          compact ? "px-4 py-2.5 min-w-[148px]" : "px-5 py-3 min-w-[168px]"
        )}
      >
        {/* Apple Logo — proper recognizable shape */}
        <svg className={cn("shrink-0", compact ? "w-5 h-5" : "w-6 h-6")} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left leading-tight">
          <div className={cn("uppercase tracking-[0.08em] text-white/60", compact ? "text-[9px]" : "text-[10px]")}>Download on the</div>
          <div className={cn("font-semibold tracking-tight", compact ? "text-sm" : "text-[15px]")}>App Store</div>
        </div>
      </a>

      {/* ── Google Play Button ── */}
      <a
        href="#download"
        aria-label="Get Gatigo on Google Play"
        className={cn(
          "inline-flex items-center justify-center gap-3 text-white bg-black rounded-[12px] border border-white/10",
          "transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a1a1a] hover:shadow-lg active:translate-y-0",
          compact ? "px-4 py-2.5 min-w-[148px]" : "px-5 py-3 min-w-[168px]"
        )}
      >
        {/* Google Play Triangle Logo — proper recognizable shape */}
        <svg className={cn("shrink-0", compact ? "w-5 h-5" : "w-6 h-6")} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
          <path d="M17.727 8.063L5.21.674a1.003 1.003 0 00-1.6 1.14L13.793 12l-3.183 3.186 7.117 4.751a1 1 0 001.6-1.14l-1.6-10.734z" fill="#34A853"/>
          <path d="M20.544 10.588l-2.817-1.525-3.935 2.937 3.935 2.937 2.817-1.525a1.337 1.337 0 000-2.824z" fill="#FBBC04"/>
          <path d="M3.609 22.186L17.727 15.937l-3.935-3.937L3.61 22.186z" fill="#EA4335"/>
        </svg>
        <div className="text-left leading-tight">
          <div className={cn("uppercase tracking-[0.08em] text-white/60", compact ? "text-[9px]" : "text-[10px]")}>Get it on</div>
          <div className={cn("font-semibold tracking-tight", compact ? "text-sm" : "text-[15px]")}>Google Play</div>
        </div>
      </a>
    </div>
  )
}