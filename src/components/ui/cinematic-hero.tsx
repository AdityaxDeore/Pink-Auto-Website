import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { assetUrl, cn } from "@/lib/utils"

const APP_SCREENSHOT = assetUrl("/images/app-screen.webp")

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow: 0 2px 8px color-mix(in srgb, var(--color-foreground) 8%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 55%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
  }

  .text-days {
      line-height: 1.2;
      padding-bottom: 0.15em;
      overflow: visible;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
  }

  .text-brand-display {
      font-family: var(--font-display, "Sora", system-ui, sans-serif);
      color: #1E293B;
      letter-spacing: -0.04em;
      font-weight: 700;
  }

  .text-brand-display span {
      color: #E11D48;
  }

  .premium-depth-card {
      background: #ffffff;
      box-shadow:
          0 20px 50px -24px rgba(15, 23, 42, 0.1),
          0 8px 20px -12px rgba(15, 23, 42, 0.06);
      border: 1px solid #FBCFE8;
      position: relative;
  }

  .card-soft-glow {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      border-radius: inherit;
      background-image: radial-gradient(
          circle at center,
          #FECDD3 0%,
          #FFF1F5 50%,
          transparent 74%
      );
      opacity: 0.58;
      mix-blend-mode: multiply;
  }

  .phone-floor-shadow {
      width: min(280px, 58vw);
      height: 28px;
      border-radius: 9999px;
      background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.12) 0%, transparent 72%);
      filter: blur(10px);
      pointer-events: none;
      z-index: 0;
  }

  .phone-tilt-layer {
      transform-style: preserve-3d;
      transform-origin: center center;
      will-change: transform;
  }

  .phone-backplate {
      position: absolute;
      inset: 0;
      border-radius: 2.75rem;
      background: #09090b;
      transform: translateZ(-14px);
      backface-visibility: hidden;
      box-shadow: 0 24px 48px -16px rgba(15, 23, 42, 0.28);
  }

  .phone-device {
      position: relative;
      z-index: 1;
      background: #09090b;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transform: translateZ(16px);
      box-shadow:
          0 28px 56px -18px rgba(15, 23, 42, 0.28),
          0 12px 24px -10px rgba(15, 23, 42, 0.16);
  }

  .phone-device img {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
  }

  .hero-showcase-grid {
      display: grid;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 1.5rem;
  }

  @media (min-width: 1024px) {
      .hero-showcase-grid {
          grid-template-columns: minmax(0, 1fr) minmax(300px, 360px) minmax(0, 1fr);
          grid-template-rows: 1fr;
          gap: 2rem 2.5rem;
          padding: 2.5rem 2rem;
      }
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.7) 0%, transparent 45%);
      mix-blend-mode: soft-light; transition: opacity 0.3s ease;
  }

  .iphone-bezel-black {
      background: #18181B;
      box-shadow:
          0 20px 40px -16px rgba(0, 0, 0, 0.25),
          0 8px 16px -8px rgba(15, 23, 42, 0.1);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare-light {
      background: linear-gradient(115deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 50%);
  }

  .widget-light {
      background: #FFFFFF;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04);
      border: 1px solid rgba(226, 232, 240, 0.9);
  }

  .floating-ui-badge-light {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      box-shadow:
          0 0 0 1px rgba(226, 232, 240, 0.9),
          0 12px 32px -12px rgba(15, 23, 42, 0.1),
          0 4px 10px rgba(15, 23, 42, 0.05);
  }

  .cta-scene {
      background: #FFFFFF;
  }

  .cta-panel {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid #E2E8F0;
      box-shadow:
          0 20px 50px -20px rgba(15, 23, 42, 0.1),
          0 8px 20px -8px rgba(15, 23, 42, 0.06);
  }

  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #3F3F46 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #52525B 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 277;
      stroke-dashoffset: 277;
      stroke-linecap: round;
  }

  .ride-type-pink {
      background: #FFFFFF;
      border: 1.5px solid #FDA4AF;
      box-shadow: 0 1px 4px rgba(15, 23, 42, 0.04);
  }

  .ride-type-standard {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
  }

  .ride-type-pink-active {
      box-shadow: 0 0 0 2px rgba(251, 113, 133, 0.15);
  }

  .phone-map-img {
      border: 1px solid #E2E8F0;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.8);
  }

  .page-bg-soft {
      background: #fffbfc;
      position: relative;
      isolation: isolate;
  }

  .page-bg-soft::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background-image: radial-gradient(
          circle at center,
          #FECDD3 0%,
          #FFF1F5 48%,
          transparent 74%
      );
      opacity: 0.55;
      mix-blend-mode: multiply;
  }

  .skip-intro-btn {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 60;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-height: 40px;
      padding: 0.4375rem 0.4375rem 0.4375rem 0.875rem;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(148, 163, 184, 0.35);
      color: #475569;
      font-size: 0.8125rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      box-shadow:
          0 1px 2px rgba(15, 23, 42, 0.04),
          0 4px 16px -4px rgba(15, 23, 42, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all 0.2s ease;
      cursor: pointer;
  }

  .skip-intro-btn:hover {
      color: #1E293B;
      border-color: rgba(100, 116, 139, 0.45);
      background: rgba(255, 255, 255, 0.96);
      box-shadow:
          0 2px 4px rgba(15, 23, 42, 0.05),
          0 8px 24px -6px rgba(15, 23, 42, 0.14);
  }

  .skip-intro-btn:focus-visible {
      outline: 2px solid #94A3B8;
      outline-offset: 2px;
  }

  .skip-intro-btn:active {
      transform: scale(0.98);
  }

  .skip-intro-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 9999px;
      background: #F1F5F9;
      color: #475569;
      border: 1px solid rgba(148, 163, 184, 0.3);
      transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .skip-intro-btn:hover .skip-intro-icon {
      transform: translateX(1px);
      background: #E2E8F0;
      color: #334155;
  }

  .scroll-hint {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 55;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: #64748B;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      pointer-events: none;
      animation: scroll-hint-bob 2s ease-in-out infinite;
  }

  .scroll-hint-chevron {
      width: 1.25rem;
      height: 1.25rem;
      border-right: 2px solid #94A3B8;
      border-bottom: 2px solid #94A3B8;
      transform: rotate(45deg);
      margin-top: -0.25rem;
  }

  @keyframes scroll-hint-bob {
      0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
      50% { transform: translateX(-50%) translateY(6px); opacity: 1; }
  }
`

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string
  tagline1?: string
  tagline2?: string
  cardHeading?: string
  cardDescription?: React.ReactNode
  ctaHeading?: string
  ctaDescription?: string
  onComplete?: () => void
}

export function CinematicHero({
  brandName = "Pink Auto",
  tagline1 = "Safe rides,",
  tagline2 = "driven by women.",
  cardHeading = "Safer rides, your way.",
  cardDescription = (
    <>
      Verified women drivers or standard autos.
      <br />
      GPS · SOS · 24×7 support.
    </>
  ),
  ctaHeading = "Ready to ride?",
  ctaDescription = "Women-driven autos & standard bookings in Kolhapur.",
  onComplete,
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const mainCardRef = useRef<HTMLDivElement>(null)
  const mockupWrapperRef = useRef<HTMLDivElement>(null)
  const mockupTiltRef = useRef<HTMLDivElement>(null)
  const scrollProgressRef = useRef(0)
  const tiltTweenRef = useRef<gsap.core.Tween | null>(null)
  const cardLeftRef = useRef<HTMLDivElement>(null)
  const cardRightRef = useRef<HTMLDivElement>(null)
  const ctaWrapperRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>(0)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const completedRef = useRef(false)
  const disposedRef = useRef(false)
  const userScrolledRef = useRef(false)
  const [showSkip, setShowSkip] = useState(true)


  const completeIntro = useCallback(() => {
    if (completedRef.current) return
    completedRef.current = true
    setShowSkip(false)
    document.body.classList.remove("intro-active")
    document.body.style.removeProperty("overflow")
    document.documentElement.style.removeProperty("overflow")

    const st = ScrollTrigger.getById("hero-scroll") ?? scrollTriggerRef.current
    st?.kill(true)
    scrollTriggerRef.current = null
    window.scrollTo(0, 0)

    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
      onComplete?.()
    })
  }, [onComplete])

  const skipToMain = useCallback(() => {
    completeIntro()
  }, [completeIntro])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    if (prefersReducedMotion || !isFinePointer) return

    const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value))

    const resetTilt = () => {
      if (!mockupTiltRef.current) return
      tiltTweenRef.current?.kill()
      tiltTweenRef.current = gsap.to(mockupTiltRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.65,
        ease: "power2.out",
        overwrite: true,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const wrapper = mockupWrapperRef.current
      const tiltEl = mockupTiltRef.current
      const mainCard = mainCardRef.current
      if (!wrapper || !tiltEl || !mainCard) return

      const progress = scrollProgressRef.current
      if (progress < 0.22 || progress > 0.8) {
        resetTilt()
        return
      }

      cancelAnimationFrame(requestRef.current)
      requestRef.current = requestAnimationFrame(() => {
        const cardRect = mainCard.getBoundingClientRect()
        mainCard.style.setProperty("--mouse-x", `${e.clientX - cardRect.left}px`)
        mainCard.style.setProperty("--mouse-y", `${e.clientY - cardRect.top}px`)

        const rect = wrapper.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const xVal = clamp((e.clientX - centerX) / (rect.width * 0.55), 1)
        const yVal = clamp((e.clientY - centerY) / (rect.height * 0.55), 1)

        tiltTweenRef.current?.kill()
        tiltTweenRef.current = gsap.to(tiltEl, {
          rotationY: xVal * 7,
          rotationX: -yVal * 5,
          transformPerspective: 1200,
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          duration: 0.45,
          ease: "power2.out",
          overwrite: true,
        })
      })
    }

    const wrapper = mockupWrapperRef.current
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    wrapper?.addEventListener("mouseleave", resetTilt)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      wrapper?.removeEventListener("mouseleave", resetTilt)
      cancelAnimationFrame(requestRef.current)
      tiltTweenRef.current?.kill()
    }
  }, [])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeIntro()
      return
    }

    disposedRef.current = false
    userScrolledRef.current = false
    completedRef.current = false

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
    document.body.classList.add("intro-active")

    const markUserScroll = () => {
      if (window.scrollY > 20) {
        userScrolledRef.current = true
      }
    }

    window.addEventListener("scroll", markUserScroll, { passive: true })

    const isMobile = window.innerWidth < 768
    const scrollDistance = isMobile ? 2000 : 2500
    let ctx: gsap.Context | undefined

    const setupScrollScene = () => {
      if (disposedRef.current || !containerRef.current) return

      ctx = gsap.context(() => {
        const heroText = heroTextRef.current
        const mainCard = mainCardRef.current
        const mockupWrapper = mockupWrapperRef.current
        const cardLeft = cardLeftRef.current
        const cardRight = cardRightRef.current
        const ctaWrapper = ctaWrapperRef.current
        const gridBg = container.querySelector<HTMLElement>(".bg-grid-theme")
        if (!heroText || !mainCard || !mockupWrapper || !cardLeft || !cardRight || !ctaWrapper) return

        gsap.set(mainCard, { y: window.innerHeight + 200, autoAlpha: 1, visibility: "visible" })
        gsap.set([cardLeft, cardRight, mockupWrapper], { autoAlpha: 0 })
        gsap.set(ctaWrapper, { autoAlpha: 0, scale: 0.98 })

        gsap.set(mockupWrapper, { transformPerspective: 1000, transformStyle: "preserve-3d" })

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            id: "hero-scroll",
            trigger: container,
            start: "top top",
            end: `+=${scrollDistance}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              scrollProgressRef.current = self.progress
              if (disposedRef.current || completedRef.current) return
              if (self.progress < 0.22 || self.progress > 0.8) {
                gsap.to(mockupTiltRef.current, {
                  rotationX: 0,
                  rotationY: 0,
                  duration: 0.35,
                  ease: "power2.out",
                  overwrite: true,
                })
              }
              if (self.progress >= 0.985 && userScrolledRef.current) {
                completeIntro()
              }
            },
          },
        })

        scrollTriggerRef.current = scrollTl.scrollTrigger ?? null

        scrollTl
          .to(
            [heroText, gridBg].filter(Boolean),
            {
              scale: 1.08,
              filter: "blur(8px)",
              autoAlpha: 0.12,
              ease: "power2.inOut",
              duration: 0.8,
              force3D: true,
            },
            0
          )
          .to(mainCard, { y: 0, ease: "power3.inOut", duration: 0.85, force3D: true }, 0)
          .to(
            mainCard,
            { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 0.7 },
            0.05
          )
          .fromTo(
            mockupWrapper,
            {
              y: 180,
              z: -280,
              rotationX: 36,
              rotationY: -18,
              autoAlpha: 0,
              scale: 0.76,
              transformPerspective: 1000,
              transformOrigin: "center center",
            },
            {
              y: 0,
              z: 0,
              rotationX: 0,
              rotationY: 0,
              autoAlpha: 1,
              scale: 1,
              ease: "expo.out",
              duration: 0.95,
              force3D: true,
            },
            "-=0.4"
          )
          .fromTo(cardLeft, { x: -32, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 0.6 }, "-=0.6")
          .fromTo(
            cardRight,
            { x: 32, autoAlpha: 0, scale: 0.9 },
            { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 0.6 },
            "<"
          )
          .to({}, { duration: 0.35 })
          .to({}, { duration: 0.3 })
          .set(heroText, { autoAlpha: 0 })
          .set(ctaWrapper, { autoAlpha: 1 })
          .to({}, { duration: 0.55 })
          .to([mockupWrapper, cardLeft, cardRight], {
            scale: 0.93,
            y: -22,
            z: -110,
            autoAlpha: 0,
            ease: "power3.in",
            duration: 0.75,
            stagger: 0.04,
            force3D: true,
          })
          .to(
            mainCard,
            {
              width: isMobile ? "92vw" : "85vw",
              height: isMobile ? "92vh" : "85vh",
              borderRadius: isMobile ? "32px" : "40px",
              ease: "expo.inOut",
              duration: 1.05,
            },
            "pullback"
          )
          .to(ctaWrapper, { scale: 1, autoAlpha: 1, ease: "expo.inOut", duration: 1.05 }, "pullback")
          .to(mainCard, { y: -window.innerHeight - 300, ease: "power3.in", duration: 1 })
      }, container)

      ScrollTrigger.refresh()
    }

    setupScrollScene()

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener("resize", onResize)

    return () => {
      disposedRef.current = true
      scrollTriggerRef.current = null
      window.removeEventListener("scroll", markUserScroll)
      window.removeEventListener("resize", onResize)
      window.history.scrollRestoration = previousScrollRestoration
      document.body.classList.remove("intro-active")
      ctx?.revert()
    }
  }, [completeIntro])

  return (
    <div
      ref={containerRef}
      className={cn(
        "page-bg-soft relative w-full min-h-screen h-screen overflow-x-hidden flex items-center justify-center text-foreground font-sans antialiased",
        className
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      {showSkip && (
        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <span className="scroll-hint-chevron" />
        </div>
      )}
      {showSkip && (
        <button
          type="button"
          onClick={skipToMain}
          className="skip-intro-btn"
          aria-label="Skip intro and enter main site"
        >
          <span>Enter site</span>
          <span className="skip-intro-icon" aria-hidden="true">
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </button>
      )}
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* Intro taglines */}
      <div
        ref={heroTextRef}
        className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 will-change-transform [transform-style:preserve-3d]"
      >
        <h1 className="text-3d-matte text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days text-silver-matte text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter mb-0 leading-[1.2] pb-2 overflow-visible">
          <span className="inline-block pb-1">{tagline2}</span>
        </h1>
        <p className="mt-8 sm:mt-10 md:mt-12 text-sm sm:text-base text-muted-foreground max-w-md px-2">
          Women-driven autos &amp; standard rides · Kolhapur
        </p>

        <div className="mt-10 sm:mt-14 lg:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4 sm:px-0 pointer-events-auto">
          <a
            href="#download"
            aria-label="Download Pink Auto on the App Store"
            className="btn-modern-light flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-105 shrink-0" fill="currentColor" viewBox="0 0 384 512" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-[-2px]">Download on the</div>
              <div className="text-base sm:text-lg font-bold leading-none tracking-tight">App Store</div>
            </div>
          </a>
          <a
            href="#download"
            aria-label="Get Pink Auto on Google Play"
            className="btn-modern-dark flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-background"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-105 shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="text-left">
              <div className="text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-[-2px]">Get it on</div>
              <div className="text-base sm:text-lg font-bold leading-none tracking-tight">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* Final CTA */}
      <div
        ref={ctaWrapperRef}
        className="cta-wrapper cta-scene absolute inset-0 z-10 flex flex-col items-center justify-center text-center w-full px-4 gsap-reveal pointer-events-auto will-change-transform"
      >
        <div className="cta-panel relative rounded-[2rem] sm:rounded-[2.5rem] px-6 sm:px-12 py-10 sm:py-14 max-w-2xl w-full mx-4">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Kolhapur · Maharashtra
          </p>
          <h2 className="text-brand-display text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight px-1">
            {ctaHeading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#download"
              aria-label="Download Pink Auto on the App Store"
              className="btn-modern-light flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <svg className="w-7 h-7 transition-transform group-hover:scale-105 shrink-0" fill="currentColor" viewBox="0 0 384 512" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Download on the</div>
                <div className="text-lg font-bold leading-tight">App Store</div>
              </div>
            </a>
            <a
              href="#download"
              aria-label="Get Pink Auto on Google Play"
              className="btn-modern-dark flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <svg className="w-6 h-6 transition-transform group-hover:scale-105 shrink-0" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Get it on</div>
                <div className="text-lg font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
          <a
            href="#drivers"
            className="mt-6 inline-block text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Become a driver →
          </a>
        </div>
      </div>

      {/* Main card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-soft-glow" aria-hidden="true" />
          <div className="card-sheen" aria-hidden="true" />

          <div className="hero-showcase-grid relative z-10 max-w-6xl mx-auto px-3 sm:px-5 py-5 sm:py-8 lg:py-0">
            {/* Card copy — left on desktop */}
            <div
              ref={cardLeftRef}
              className="card-left-text gsap-reveal order-2 lg:order-none lg:col-start-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:pr-2"
            >
              <p className="lg:hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-500 mb-2">
                Kolhapur · Maharashtra
              </p>
              <h3
                className="text-slate-900 text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl font-bold mb-2.5 sm:mb-3 tracking-tight text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cardHeading}
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base font-medium leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-[280px] text-pretty">
                {cardDescription}
              </p>
              <div className="hidden lg:flex flex-wrap gap-2 mt-6">
                {["Women drivers", "GPS live", "SOS"].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-rose-100"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Phone — hero center; frame aspect ratio matches screenshot (853×1844) */}
            <div
              ref={mockupWrapperRef}
              className="mockup-scroll-wrapper order-1 lg:order-none lg:col-start-2 relative flex items-center justify-center w-full py-2 sm:py-4 z-10 [transform-style:preserve-3d]"
              style={{ perspective: "1200px" }}
            >
              <div
                ref={mockupTiltRef}
                className="phone-tilt-layer relative z-[1] w-[min(70vw,308px)] sm:w-[min(62vw,326px)] lg:w-[353px] aspect-[853/1844]"
              >
                <div className="phone-backplate" aria-hidden="true" />
                <div className="phone-device w-full h-full overflow-hidden rounded-[2.75rem] ring-[3px] ring-zinc-900">
                  <img
                    src={APP_SCREENSHOT}
                    alt="Pink Auto app"
                    className="block h-full w-full object-cover object-center"
                    width={853}
                    height={1844}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="phone-floor-shadow absolute left-1/2 -translate-x-1/2 bottom-[6%] z-0" aria-hidden="true" />
            </div>

            {/* Brand — right on desktop */}
            <div
              ref={cardRightRef}
              className="card-right-text gsap-reveal order-3 lg:order-none lg:col-start-3 flex flex-col justify-center items-center lg:items-end z-20 w-full lg:pl-2"
            >
              <p className="hidden lg:block text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-500 mb-3 lg:text-right">
                Kolhapur · Maharashtra
              </p>
              <h2 className="text-brand-display text-3xl sm:text-4xl lg:text-[4.25rem] xl:text-[5rem] text-center lg:text-right leading-[1.05]">
                {brandName === "Pink Auto" ? (
                  <>Pink <span>Auto</span></>
                ) : (
                  brandName
                )}
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] text-slate-500 font-medium text-center lg:text-right max-w-[240px] lg:max-w-[260px] hidden sm:block">
                Safe rides for women, students &amp; families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CinematicHero