import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Public-folder path with Vite base URL (required for GitHub Pages subpath deploys). */
export function assetUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  const normalized = path.startsWith("/") ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}
