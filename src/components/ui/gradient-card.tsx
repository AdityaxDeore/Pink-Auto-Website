import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { BrandImage } from "@/components/ui/brand-image"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "surface-card relative flex flex-col h-full w-full overflow-hidden p-0",
  {
    variants: {
      gradient: {
        pink: "bg-gradient-to-br from-rose-50 via-white to-pink-100/40",
        orange: "bg-gradient-to-br from-orange-50 via-white to-amber-100/40",
        gray: "bg-gradient-to-br from-slate-50 via-white to-slate-100/50",
        purple: "bg-gradient-to-br from-violet-50 via-white to-indigo-100/40",
        green: "bg-gradient-to-br from-emerald-50 via-white to-teal-100/40",
      },
    },
    defaultVariants: {
      gradient: "gray",
    },
  }
)

const badgeStyles = {
  pink: "bg-rose-500/10 text-rose-700 ring-rose-200/80",
  orange: "bg-orange-500/10 text-orange-700 ring-orange-200/80",
  gray: "bg-slate-500/10 text-slate-700 ring-slate-200/80",
  purple: "bg-violet-500/10 text-violet-700 ring-violet-200/80",
  green: "bg-emerald-500/10 text-emerald-700 ring-emerald-200/80",
}

const imageOverlays = {
  pink: "from-rose-950/80 via-rose-900/30 to-transparent",
  orange: "from-orange-950/80 via-orange-900/30 to-transparent",
  gray: "from-slate-950/80 via-slate-900/30 to-transparent",
  purple: "from-violet-950/80 via-violet-900/30 to-transparent",
  green: "from-emerald-950/80 via-emerald-900/30 to-transparent",
}

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string
  badgeColor: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
  imageUrl: string
  imageFallback?: string
  featured?: boolean
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      className,
      gradient = "gray",
      badgeText,
      badgeColor,
      title,
      description,
      ctaText,
      ctaHref,
      imageUrl,
      imageFallback,
      featured = false,
      ...props
    },
    ref
  ) => {
    const tone = gradient ?? "gray"

    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className="h-full group"
        ref={ref}
      >
        <div
          className={cn(
            cardVariants({ gradient }),
            "surface-card-interactive",
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "relative overflow-hidden",
              featured ? "h-56 sm:h-64 lg:h-72" : "h-48 sm:h-52"
            )}
          >
            <BrandImage
              src={imageUrl}
              fallback={imageFallback}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={cn("absolute inset-0 bg-gradient-to-t", imageOverlays[tone])} />
            <div
              className={cn(
                "absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 backdrop-blur-md",
                badgeStyles[tone]
              )}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>
          </div>

          <div className="z-10 flex flex-col flex-1 p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-3">
              {title}
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed flex-1">
              {description}
            </p>
            <a
              href={ctaHref}
              className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    )
  }
)
GradientCard.displayName = "GradientCard"

export { GradientCard, cardVariants }