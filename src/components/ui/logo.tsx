import logoSrc from "@/assets/logo.png"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  showWordmark?: boolean
  wordmarkClassName?: string
}

export function Logo({ className, showWordmark = false, wordmarkClassName }: LogoProps) {
  return (
    <>
      <img
        src={logoSrc}
        alt="GatiGo"
        className={cn("object-contain shrink-0", className)}
      />
      {showWordmark && (
        <span
          className={cn(
            "font-medium text-[15px] tracking-tight text-slate-900 truncate",
            wordmarkClassName
          )}
        >
          GatiGo
        </span>
      )}
    </>
  )
}

export { logoSrc }