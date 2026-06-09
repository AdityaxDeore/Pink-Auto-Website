import { Logo } from "@/components/ui/logo"
import { SITE, WHATSAPP_BOOK_URL } from "@/lib/site-config"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Safety", href: "#safety" },
  { label: "Coverage", href: "#coverage" },
  { label: "Drivers", href: "#drivers" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Logo className="w-9 h-9 rounded-[10px]" showWordmark wordmarkClassName="font-semibold text-[15px]" />
            </div>
            <p className="text-[14px] text-slate-500 leading-[1.7] max-w-xs">
              Women-focused auto service in Kolhapur — safe rides, verified drivers, and 24×7 support.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-slate-400 mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-slate-400 mb-4">Contact</h3>
            <ul className="space-y-2.5 text-[14px] text-slate-500">
              <li>{SITE.location}</li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-slate-900 transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-slate-900 transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-slate-400 mb-4">Book a ride</h3>
            <a
              href={WHATSAPP_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center px-5 rounded-full bg-[#25D366] text-white text-[14px] font-semibold hover:bg-[#20BD5A] transition-colors shadow-[0_4px_14px_-4px_rgba(37,211,102,0.45)]"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-slate-400">
          <p>© {new Date().getFullYear()} Pink Auto. All rights reserved.</p>
          <p>Safe rides for women · Kolhapur, Maharashtra</p>
        </div>
      </div>
    </footer>
  )
}