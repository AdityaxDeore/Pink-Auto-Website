import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
  align?: "left" | "center"
  headingId?: string
  size?: "default" | "large"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
  headingId,
  size = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        size === "large" ? "max-w-3xl" : "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        id={headingId}
        className={cn(
          "font-semibold tracking-tight text-slate-900 text-balance leading-[1.1]",
          size === "large"
            ? "text-[2rem] sm:text-[2.75rem] lg:text-[3rem]"
            : "text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg text-slate-500 leading-relaxed text-pretty max-w-prose",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}