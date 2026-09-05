import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "GatiGo completely changed how I travel. I feel safe every single evening commute, and my parents finally stopped worrying.",
    name: "Priya Sharma",
    role: "Engineering Student",
    initials: "PS",
  },
  {
    text: "Booking is instant, drivers are verified, and the app is incredibly smooth. This is exactly what we needed in Pune.",
    name: "Rohan Desai",
    role: "Frequent Traveler",
    initials: "RD",
  },
  {
    text: "The live GPS tracking and SOS button give me real peace of mind. I recommend GatiGo to every woman who commutes alone.",
    name: "Anjali Patel",
    role: "College Student",
    initials: "AP",
  },
  {
    text: "Transparent pricing, polite drivers, and zero hassle. GatiGo has transformed how our team travels for work.",
    name: "Vikram Singh",
    role: "Business Owner",
    initials: "VS",
  },
  {
    text: "I have tried many ride apps but nothing comes close to how safe and reliable GatiGo feels. A genuinely trust-worthy service.",
    name: "Sneha Reddy",
    role: "Corporate Executive",
    initials: "SR",
  },
  {
    text: "The drivers are always on time and very professional. The one-tap SOS feature is a game changer for night travel.",
    name: "Kavita Joshi",
    role: "Teacher",
    initials: "KJ",
  },
  {
    text: "Quick to book, clean autos, and a super helpful support team. GatiGo is everything a ride service should be.",
    name: "Neha Gupta",
    role: "Marketing Manager",
    initials: "NG",
  },
  {
    text: "Using GatiGo daily has made my life so much easier. The seamless payment and tracking make every ride worry-free.",
    name: "Siddharth Rao",
    role: "Software Engineer",
    initials: "SR",
  },
  {
    text: "Best auto service in the city. Feels premium, safe, and reliable every single time. Could not recommend it more.",
    name: "Amit Kumar",
    role: "Local Resident",
    initials: "AK",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Card ---
function TestimonialCard({ text, name, role, initials }: Testimonial) {
  return (
    <motion.li
      whileHover={{
        y: -6,
        boxShadow: "0 32px 64px -12px rgba(0,0,0,0.14)",
        transition: { type: "spring", stiffness: 350, damping: 20 },
      }}
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "24px",
        padding: "2.5rem",
        width: "100%",
        listStyle: "none",
        cursor: "default",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}
    >
      {/* Quote mark */}
      <div style={{ fontSize: "3rem", lineHeight: 1, color: "var(--color-accent)", fontFamily: "Georgia, serif", opacity: 0.4, marginBottom: "-0.75rem" }}>
        "
      </div>

      {/* Review text */}
      <p style={{
        fontSize: "1.1rem",
        lineHeight: 1.75,
        color: "#374151",
        margin: 0,
        fontFamily: "var(--font-primary)",
        fontWeight: 400,
      }}>
        {text}
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "#f3f4f6", margin: "0.25rem 0" }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
        {/* Avatar circle with initials */}
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
          border: "2px solid #d1d5db",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "#6b7280",
          flexShrink: 0,
          letterSpacing: "0.05em",
        }}>
          {initials}
        </div>
        <div>
          <div style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#111827",
            fontFamily: "var(--font-primary)",
            lineHeight: 1.3,
          }}>
            {name}
          </div>
          <div style={{
            fontSize: "0.875rem",
            color: "#9ca3af",
            fontFamily: "var(--font-primary)",
            marginTop: "2px",
          }}>
            {role}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

// --- Column ---
function TestimonialsColumn({
  testimonials,
  duration = 15,
  className,
}: {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ overflow: "hidden", flex: 1 }}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          paddingBottom: "1.5rem",
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        {[0, 1].map((rep) => (
          <React.Fragment key={rep}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={`${rep}-${i}`} {...t} />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

// --- Section ---
export default function TestimonialV2() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      style={{
        width: "100%",
        paddingTop: "clamp(3.5rem, 8vw, 7rem)",
        paddingBottom: "clamp(3rem, 6vw, 6rem)",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vw, 4rem)" }}>
          <span style={{
            display: "inline-block",
            border: "1px solid #d1d5db",
            borderRadius: "999px",
            padding: "0.375rem 1.25rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6b7280",
            background: "rgba(243,244,246,0.6)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-primary)",
          }}>
            Testimonials
          </span>

          <h2
            id="testimonials-heading"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#111827",
              fontFamily: "var(--font-heading)",
              margin: "0 0 1.25rem 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            What our riders say
          </h2>

          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#6b7280",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto",
            fontFamily: "var(--font-primary)",
          }}>
            Discover how thousands of women travel safely and confidently across the city.
          </p>
        </div>

        {/* Columns */}
        <div
          role="region"
          aria-label="Scrolling Testimonials"
          style={{
            display: "flex",
            gap: "1.25rem",
            overflow: "hidden",
            maxHeight: "900px",
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={16} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
