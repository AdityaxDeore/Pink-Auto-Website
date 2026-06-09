export const SITE = {
  name: "Pink Auto",
  tagline: "Safe & Reliable Auto Service for Women",
  subtaglines: [
    "Driven by Women, Trusted by Families",
    "Comfort · Safety · Empowerment",
  ],
  location: "Kolhapur, Maharashtra",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@pinkauto.in",
  address: "Rajarampuri, Kolhapur, Maharashtra 416008",
  coords: { lat: 16.704987, lng: 74.243252 },
  serviceRadiusKm: 8,
} as const

export const WHATSAPP_BOOK_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi Pink Auto, I'd like to book a ride in Kolhapur."
)}`

export const WHATSAPP_DRIVER_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi Pink Auto, I'm interested in joining as a driver."
)}`