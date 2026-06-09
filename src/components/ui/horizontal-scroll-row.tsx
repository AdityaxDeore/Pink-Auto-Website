import { Children, useCallback, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type HorizontalScrollRowProps = {
  children: ReactNode
  className?: string
  gridClassName?: string
  hint?: string
  fadeFrom?: "white" | "stone"
  autoScroll?: boolean
  autoScrollInterval?: number
}

const fadeFromMap = {
  white: "from-white",
  stone: "from-stone",
}

export function HorizontalScrollRow({
  children,
  className,
  gridClassName,
  hint = "Swipe to explore",
  fadeFrom = "white",
  autoScroll = true,
  autoScrollInterval = 4200,
}: HorizontalScrollRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const childCount = Children.count(children)

  const pauseAutoScroll = useCallback((resumeAfterMs = 5000) => {
    pausedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, resumeAfterMs)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || !autoScroll || childCount < 2) return

    const mq = window.matchMedia("(max-width: 639px)")

    const getStep = () => {
      const first = el.children[0] as HTMLElement | undefined
      if (!first) return 0
      return first.offsetWidth + 16
    }

    const advance = () => {
      if (!mq.matches || pausedRef.current) return
      const step = getStep()
      if (step <= 0) return

      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return

      const next = el.scrollLeft + step
      if (next >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollTo({ left: next, behavior: "smooth" })
      }
    }

    const interval = window.setInterval(advance, autoScrollInterval)

    const onTouchStart = () => pauseAutoScroll(6000)
    const onPointerDown = () => pauseAutoScroll(6000)

    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("pointerdown", onPointerDown)

    return () => {
      window.clearInterval(interval)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("pointerdown", onPointerDown)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [autoScroll, autoScrollInterval, childCount, pauseAutoScroll])

  return (
    <div className={className}>
      <p className="sm:hidden mb-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
        <span className="inline-block h-px w-5 bg-slate-200" aria-hidden />
        {autoScroll ? "Auto-scrolls · swipe anytime" : hint}
        <span className="inline-block h-px w-5 bg-slate-200" aria-hidden />
      </p>
      <div className="relative sm:static">
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r to-transparent sm:hidden",
            fadeFromMap[fadeFrom]
          )}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l to-transparent sm:hidden",
            fadeFromMap[fadeFrom]
          )}
          aria-hidden
        />
        <div
          ref={scrollRef}
          onScroll={() => pauseAutoScroll(5000)}
          className={cn(
            "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scroll-smooth",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:overflow-visible sm:snap-none",
            gridClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

type ScrollSnapItemProps = {
  children: ReactNode
  className?: string
  featured?: boolean
}

export function ScrollSnapItem({ children, className, featured }: ScrollSnapItemProps) {
  return (
    <div
      className={cn(
        "snap-center shrink-0",
        featured ? "w-[min(92vw,360px)]" : "w-[min(84vw,300px)]",
        "sm:w-auto sm:shrink sm:snap-align-none",
        featured && "sm:col-span-2 lg:col-span-3",
        className
      )}
    >
      {children}
    </div>
  )
}