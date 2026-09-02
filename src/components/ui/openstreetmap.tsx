import { useEffect, useRef, useState } from "react"
import { SITE } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type OpenStreetMapProps = {
  className?: string
  height?: string
}

export function OpenStreetMap({ className, height = "420px" }: OpenStreetMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<import("leaflet").Map | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    let cancelled = false

    const init = async () => {
      const L = await import("leaflet")
      await import("leaflet/dist/leaflet.css")

      if (cancelled || !mapRef.current) return

      const PINK_MARKER = L.divIcon({
        className: "",
        html: `<div style="width:14px;height:14px;border-radius:50%;background:#E11D48;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.25)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      const map = L.map(mapRef.current, {
        center: [SITE.coords.lat, SITE.coords.lng],
        zoom: 13,
        scrollWheelZoom: false,
        zoomControl: true,
      })

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      L.marker([SITE.coords.lat, SITE.coords.lng], { icon: PINK_MARKER })
        .addTo(map)
        .bindPopup("<strong>Gatigo</strong><br/>Primary service hub")

      L.circle([SITE.coords.lat, SITE.coords.lng], {
        radius: SITE.serviceRadiusKm * 1000,
        color: "#E11D48",
        fillColor: "#FB7185",
        fillOpacity: 0.12,
        weight: 2,
      }).addTo(map)

      mapInstance.current = map
      setReady(true)
    }

    void init()

    return () => {
      cancelled = true
      mapInstance.current?.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <div
      className={cn(
        "surface-card overflow-hidden relative",
        !ready && "animate-pulse bg-slate-100",
        className
      )}
      style={{ height }}
    >
      <div ref={mapRef} className="w-full h-full min-h-[inherit] z-0" />
    </div>
  )
}