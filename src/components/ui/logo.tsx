import logoSrc from "@/assets/96b9b8ea-dbd2-4b87-85d0-dd214ab40833 (1).png"
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
        alt="Pink Auto"
        className={cn("object-contain shrink-0", className)}
      />
      {showWordmark && (
        <span
          className={cn(
            "font-medium text-[15px] tracking-tight text-slate-900 truncate",
            wordmarkClassName
          )}
        >
          Pink Auto
        </span>
      )}
    </>
  )
}

export { logoSrc }