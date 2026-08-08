import { Fragment, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonialColumns, testimonials, type Testimonial } from "@/data/testimonials"
import { TESTIMONIAL_ACCENT_STYLES } from "@/lib/media"
import { cn } from "@/lib/utils"

type TestimonialsColumnProps = {
  className?: string
  testimonials: readonly Testimonial[]
  duration?: number
  animate?: boolean
}

function TestimonialCard({
  text,
  image,
  name,
  role,
  accent,
  ariaHidden,
}: Testimonial & { ariaHidden?: boolean }) {
  const styles = TESTIMONIAL_ACCENT_STYLES[accent]

  return (
    <motion.div
      role="listitem"
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 400, damping: 22 },
      }}
      className={cn(
        "w-full max-w-[22rem] rounded-[20px] border border-slate-200/70 p-6 sm:p-7 cursor-default select-none overflow-hidden",
        "bg-gradient-to-br shadow-[0_6px_20px_-8px_rgba(15,23,42,0.12)]",
        "transition-shadow hover:shadow-[0_12px_28px_-10px_rgba(15,23,42,0.18)]",
        styles.card,
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/60"
      )}
    >
      <blockquote className="m-0 p-0">
        <Quote className={cn("w-8 h-8 mb-4", styles.quote)} strokeWidth={1.5} />
        <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed m-0">
          &ldquo;{text}&rdquo;
        </p>
        <footer className="flex items-center gap-3.5 mt-6 pt-5 border-t border-white/60">
          <img
            width={48}
            height={48}
            src={image}
            alt={name}
            className={cn("h-12 w-12 rounded-full object-cover ring-2", styles.ring)}
          />
          <div className="min-w-0">
            <cite className="font-semibold not-italic text-[15px] text-slate-900 block truncate">
              {name}
            </cite>
            <span
              className={cn(
                "inline-block mt-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full leading-none",
                styles.pill
              )}
            >
              {role}
            </span>
          </div>
        </footer>
      </blockquote>
    </motion.div>
  )
}

function TestimonialsColumn({
  className,
  testimonials,
  duration = 18,
  animate = true,
}: TestimonialsColumnProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden", className)}>
      <motion.ul
        animate={animate ? { translateY: "-50%" } : undefined}
        transition={
          animate
            ? {
                duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
            : undefined
        }
        role="list"
        className="flex flex-col gap-4 sm:gap-5 pb-5 list-none m-0 p-0"
      >
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {testimonials.map((item, i) => (
              <TestimonialCard
                key={`${copy}-${i}`}
                {...item}
                ariaHidden={copy === 1}
              />
            ))}
          </Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export function TestimonialsMarquee({ className }: { className?: string }) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const [col1, col2, col3] = testimonialColumns

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={cn(
        "scroll-mt-14 sm:scroll-mt-[3.75rem] w-full bg-[var(--color-canvas-soft)] relative overflow-hidden py-20 sm:py-28 flex flex-col items-center justify-center text-center",
        "border-y border-slate-200/60",
        className
      )}
    >
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center justify-center text-center"
        >
          {/* Section Header */}
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center mb-12 sm:mb-14">
            <span className="eyebrow mb-3" style={{ color: 'var(--color-accent)' }}>Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 text-center tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Trusted by <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>women & families</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 text-center max-w-xl mx-auto leading-relaxed">
              Real stories from students, parents, and professionals who ride with Pink Auto every day.
            </p>
          </div>

          {/* Marquee Content */}
          {reduceMotion ? (
            <div role="list" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto w-full justify-center">
              {[col1[0], col2[0], col3[0], col1[1], col2[1], col3[1]].map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </div>
          ) : (
            <div
              className="flex justify-center items-center gap-4 sm:gap-5 mt-2 max-h-[740px] overflow-hidden w-full mx-auto [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
              role="region"
              aria-label="Scrolling testimonials"
            >
              <TestimonialsColumn testimonials={col1} duration={24} />
              <TestimonialsColumn testimonials={col2} className="hidden md:flex" duration={28} />
              <TestimonialsColumn testimonials={col3} className="hidden lg:flex" duration={26} />
            </div>
          )}

          <p className="text-center text-sm text-slate-500 mt-8 font-medium mx-auto">
            <span className="text-teal-600 font-semibold">{testimonials.length}</span> voices from our community
          </p>
        </motion.div>
      </div>
    </section>
  )
}