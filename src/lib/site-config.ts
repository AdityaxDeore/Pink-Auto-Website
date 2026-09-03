export const SITE = {
  name: "GatiGo",
  tagline: "Safe & Reliable Auto Service for Women",
  subtaglines: [
    "Driven by Women, Trusted by Families",
    "Comfort · Safety · Empowerment",
  ],
  location: "Maharashtra",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@gatigopink.in",
  address: "Rajarampuri, Maharashtra 416008",
  coords: { lat: 16.704987, lng: 74.243252 },
  serviceRadiusKm: 8,
} as const

export const WHATSAPP_BOOK_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi GatiGo, I'd like to book a ride."
)}`

export const WHATSAPP_DRIVER_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi GatiGo, I'm interested in joining as a driver."
)}`