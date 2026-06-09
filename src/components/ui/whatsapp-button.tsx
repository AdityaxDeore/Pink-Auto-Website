import { MessageCircle } from "lucide-react"
import { WHATSAPP_BOOK_URL } from "@/lib/site-config"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a ride on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </a>
  )
}