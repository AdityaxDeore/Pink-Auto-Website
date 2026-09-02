import {
  accentFromRole,
  portraitForIndex,
  type TestimonialAccent,
} from "@/lib/media"

export type Testimonial = {
  text: string
  image: string
  name: string
  role: string
  accent: TestimonialAccent
}

const rawTestimonials = [
  {
    name: "Priya Patil",
    role: "Engineering Student",
    text: "As a student, I often return home after evening practicals. My parents were always worried about my commute. Since I started using Gatigo, they can relax knowing I'm travelling with verified drivers and live tracking.",
  },
  {
    name: "Snehal Jadhav",
    role: "Working Professional",
    text: "I commute every day for work. Gatigo has been reliable, punctual, and most importantly, safe. It's refreshing to see a service built specifically around women's needs.",
  },
  {
    name: "Madhuri Kulkarni",
    role: "Parent",
    text: "My daughter uses Gatigo for her college commute. The driver's details, tracking features, and safety-first approach give us confidence every single day.",
  },
  {
    name: "Rutuja Khot",
    role: "Medical Student",
    text: "Hospital duties often end late at night. Gatigo has become my preferred transportation option because I know safety is never treated as an afterthought.",
  },
  {
    name: "Archana Powar",
    role: "School Teacher",
    text: "The professionalism of the drivers and the ease of booking make Gatigo stand out. It feels like a service that genuinely understands local families.",
  },
  {
    name: "Sachin Chougule",
    role: "Parent",
    text: "As a father, nothing matters more than knowing my daughter reaches her destination safely. Gatigo has earned our family's trust.",
  },
  {
    name: "Sonali Desai",
    role: "Bank Employee",
    text: "The rides are comfortable, the drivers are respectful, and the support team is responsive. It's exactly the kind of service women commuters deserve.",
  },
  {
    name: "Vaishnavi Mane",
    role: "Software Engineer",
    text: "I frequently travel between Rajarampuri and Tarabai Park for work. Gatigo has been consistent, dependable, and easy to use from day one.",
  },
  {
    name: "Deepali Salunkhe",
    role: "Professor",
    text: "The focus on safety and women empowerment makes this initiative unique. It's not just another transport service—it's a meaningful step forward for our city.",
  },
  {
    name: "Nikita Gurav",
    role: "College Student",
    text: "The app is simple, the booking process is quick, and I always feel secure during the journey. I recommend it to all my friends.",
  },
  {
    name: "Rekha Chavan",
    role: "NGO Volunteer",
    text: "We often work on women-focused community programs, and Gatigo aligns perfectly with that mission. Safe mobility creates stronger communities.",
  },
  {
    name: "Anjali Kadam",
    role: "HR Executive",
    text: "What impressed me most was the transparency. Knowing who my driver is before the ride starts adds an extra layer of confidence.",
  },
  {
    name: "Vikram Nalawade",
    role: "Corporate Employee",
    text: "I regularly arrange transportation for family members. Gatigo's reliability and safety standards have made it our first choice.",
  },
  {
    name: "Ashwini Mohite",
    role: "Entrepreneur",
    text: "Supporting a local initiative that empowers women while providing excellent service feels like a win for everyone.",
  },
  {
    name: "Pooja Gaikwad",
    role: "MBA Student",
    text: "I was initially drawn by the concept, but the actual service exceeded expectations. Safe, clean, and always professional.",
  },
  {
    name: "Shruti Sawant",
    role: "Commerce Student",
    text: "The live tracking feature is something my parents absolutely love. It makes travelling much less stressful for the whole family.",
  },
  {
    name: "Meena Patankar",
    role: "Senior Citizen",
    text: "The drivers are patient, respectful, and helpful. I feel comfortable using Gatigo for hospital visits and daily errands.",
  },
  {
    name: "Rohini Pawar",
    role: "Marketing Professional",
    text: "A transportation service should make you feel secure the moment you book a ride. Gatigo achieves exactly that.",
  },
  {
    name: "Sanjana Shinde",
    role: "Law Student",
    text: "Late evening classes are no longer a concern. Gatigo has made my daily commute much safer and more convenient.",
  },
  {
    name: "Ujwala Patil",
    role: "Parent & Homemaker",
    text: "The combination of verified drivers, GPS tracking, and responsive support gives families confidence. That's why we trust Gatigo.",
  },
] as const

export const testimonials: Testimonial[] = rawTestimonials.map((item, index) => ({
  ...item,
  image: portraitForIndex(index),
  accent: accentFromRole(item.role),
}))

export const testimonialColumns = [
  testimonials.slice(0, 7),
  testimonials.slice(7, 14),
  testimonials.slice(14, 20),
] as const