import { useState } from "react"
import { cn } from "@/lib/utils"

type BrandImageProps = {
  src: string
  fallback?: string
  alt: string
  className?: string
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
}

export function BrandImage({
  src,
  fallback,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
}: BrandImageProps) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchpriority={fetchPriority}
      className={cn(className)}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback)
      }}
    />
  )
}