import type { LucideIcon } from "lucide-react"
import { BrandImage } from "@/components/ui/brand-image"
import { cn } from "@/lib/utils"

type SurfaceCardProps = {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  padding?: "sm" | "md" | "lg"
}

const paddingMap = {
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-7 sm:p-8",
}

export function SurfaceCard({
  children,
  className,
  interactive = false,
  padding = "md",
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "surface-card",
        paddingMap[padding],
        interactive && "surface-card-interactive",
        className
      )}
    >
      {children}
    </div>
  )
}

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  imageUrl?: string
  imageFallback?: string
  iconTone?: "rose" | "emerald" | "violet" | "slate" | "amber" | "sky"
  interactive?: boolean
  featured?: boolean
  className?: string
  hideOverlay?: boolean
  compact?: boolean
}

const imageOverlays = {
  rose: "from-rose-600/75 via-rose-500/35 to-transparent",
  emerald: "from-emerald-600/75 via-emerald-500/35 to-transparent",
  violet: "from-violet-600/75 via-violet-500/35 to-transparent",
  slate: "from-slate-700/75 via-slate-600/35 to-transparent",
  amber: "from-amber-600/75 via-amber-500/35 to-transparent",
  sky: "from-sky-600/75 via-sky-500/35 to-transparent",
}

const iconTones = {
  rose: "bg-white/95 text-rose-600 shadow-sm",
  emerald: "bg-white/95 text-emerald-600 shadow-sm",
  violet: "bg-white/95 text-violet-600 shadow-sm",
  slate: "bg-white/95 text-slate-700 shadow-sm",
  amber: "bg-white/95 text-amber-600 shadow-sm",
  sky: "bg-white/95 text-sky-600 shadow-sm",
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  imageUrl,
  imageFallback,
  iconTone = "rose",
  interactive = true,
  featured = false,
  className,
  hideOverlay = false,
  compact = false,
}: FeatureCardProps) {
  return (
    <SurfaceCard
      interactive={interactive}
      padding="sm"
      className={cn("group h-full flex flex-col overflow-hidden p-0", className)}
    >
      {imageUrl ? (
        <div
          className={cn(
            "relative overflow-hidden",
            compact
              ? featured
                ? "h-40 sm:h-64 lg:h-80"
                : "h-32 sm:h-48"
              : featured
                ? "h-56 sm:h-64 lg:h-80"
                : "h-44 sm:h-48"
          )}
        >
          <BrandImage
            src={imageUrl}
            fallback={imageFallback}
            alt=""
            aria-hidden="true"
            loading={featured ? "eager" : "lazy"}
            fetchPriority={featured ? "high" : undefined}
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
          />
          {!hideOverlay && (
            <div className={cn("absolute inset-0 bg-gradient-to-t", imageOverlays[iconTone])} />
          )}
          <div
            className={cn(
              "absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center",
              iconTones[iconTone]
            )}
          >
            <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "m-6 w-11 h-11 rounded-[14px] flex items-center justify-center",
            iconTones[iconTone]
          )}
        >
          <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
        </div>
      )}
      <div className={cn("flex flex-col flex-1", compact ? "p-4 pt-3.5 sm:p-6 sm:pt-5" : "p-6 pt-5")}>
        <h3
          className={cn(
            "font-semibold text-slate-900 tracking-tight mb-1.5 sm:mb-2",
            compact ? "text-base sm:text-xl" : "text-lg sm:text-xl"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-slate-500 leading-relaxed",
            compact ? "text-xs sm:text-[15px] line-clamp-3 sm:line-clamp-none" : "text-sm sm:text-[15px]"
          )}
        >
          {description}
        </p>
      </div>
    </SurfaceCard>
  )
}

type InlineFeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

type StoryVisualCardProps = {
  title: string
  description: string
  imageUrl: string
  imageFallback?: string
  tone?: "rose" | "emerald" | "violet" | "slate" | "amber" | "sky"
}

export function StoryVisualCard({
  title,
  description,
  imageUrl,
  imageFallback,
  tone = "rose",
}: StoryVisualCardProps) {
  return (
    <SurfaceCard interactive padding="sm" className="group h-full flex flex-col overflow-hidden p-0">
      <div className="relative h-36 sm:h-48 overflow-hidden">
        <BrandImage
          src={imageUrl}
          fallback={imageFallback}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t", imageOverlays[tone])} />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 sm:line-clamp-none">{description}</p>
      </div>
    </SurfaceCard>
  )
}

export function InlineFeatureCard({ icon: Icon, title, description }: InlineFeatureCardProps) {
  return (
    <SurfaceCard interactive className="flex gap-4 sm:gap-5 items-start">
      <div className="shrink-0 w-12 h-12 rounded-[14px] bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 flex items-center justify-center">
        <Icon className="w-6 h-6" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-1.5">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </SurfaceCard>
  )
}