import { BrandImage } from "@/components/ui/brand-image"
import { ABOUT_IMAGE, BRAND_IMAGES } from "@/lib/media"
import { cn } from "@/lib/utils"

type VisualPanelProps = {
  className?: string
  variant?: "about" | "safety"
}

export function AboutVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="surface-card overflow-hidden p-0">
        <BrandImage
          src={ABOUT_IMAGE}
          alt="GatiGo community transport"
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
    </div>
  )
}

export function SafetyVisual({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card overflow-hidden p-0 min-h-[320px]", className)}>
      <BrandImage
        src={BRAND_IMAGES.pin1}
        alt="Safe GatiGo rides"
        className="w-full h-full min-h-[320px] object-cover"
      />
    </div>
  )
}

export function VisualPanel({ className, variant = "about" }: VisualPanelProps) {
  if (variant === "safety") return <SafetyVisual className={className} />
  return <AboutVisual className={className} />
}