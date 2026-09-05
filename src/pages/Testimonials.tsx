import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import { testimonials, type Testimonial, type TestimonialCategory } from '@/data/testimonials';
import { cn } from '@/lib/utils';

type FilterOption = {
  key: TestimonialCategory;
  label: string;
};

const FILTER_OPTIONS: FilterOption[] = [
  { key: 'all', label: 'All Reviews' },
  { key: 'student', label: 'Students' },
  { key: 'professional', label: 'Working Women' },
  { key: 'parent', label: 'Parents & Families' },
  { key: 'senior', label: 'Senior Citizens' },
  { key: 'community', label: 'Community' },
];

function TestimonialPageCard({ item }: { item: Testimonial }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white p-7 text-left",
        "border border-stone-200/80 hover:border-pink-300/80",
        "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(225,44,108,0.14)]",
        "transition-all duration-300 hover:-translate-y-1"
      )}
    >
      <div>
        {/* Rating and category tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
            <span className="ml-1.5 text-xs font-semibold text-slate-700">5.0</span>
          </div>

          <span className="inline-flex items-center text-[11px] font-medium tracking-wide text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-1 rounded-full">
            {item.tag}
          </span>
        </div>

        {/* Clean text without quotation marks or apostrophes */}
        <p className="text-[15px] sm:text-[15.5px] leading-relaxed text-slate-700 mb-6 font-normal">
          {item.text}
        </p>
      </div>

      {/* Passenger Info & Monogram Avatar */}
      <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <div
              className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm tracking-tight border bg-gradient-to-br shadow-inner",
                item.avatarGradient,
                item.avatarTextColor
              )}
            >
              {item.initials}
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm"
              title="Verified Rider"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-sm text-slate-900 truncate">
              {item.name}
            </h3>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {item.role}
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-1 text-[11px] text-slate-500 bg-stone-100/90 px-2.5 py-1 rounded-md border border-stone-200/60">
          <MapPin className="w-3 h-3 text-slate-400" />
          <span className="max-w-[100px] truncate">{item.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<TestimonialCategory>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === 'all') return testimonials;
    return testimonials.filter((t) => t.category === activeFilter);
  }, [activeFilter]);

  const displayedTestimonials = useMemo(() => {
    if (showAll || filteredTestimonials.length <= 9) {
      return filteredTestimonials;
    }
    return filteredTestimonials.slice(0, 9);
  }, [filteredTestimonials, showAll]);

  return (
    <>
      <section className="section page-header-section bg-[#FAF8F5] relative overflow-hidden pt-28 pb-20 border-b border-stone-200/70">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-semibold tracking-wider uppercase text-rose-700">
                Community Stories
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Stories of <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Trust & Safety</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Real experiences from students, daily working commuters, and parents across Kolhapur who rely on GatiGo for safe, verified travel.
            </p>

            <p className="text-marathi text-base sm:text-lg font-medium" style={{ color: 'var(--color-accent)' }}>
              "तुमचा विश्वास, आमची ताकद"
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-xs">
                <span className="flex text-amber-400 text-sm">★★★★★</span>
                <span className="font-semibold text-slate-800">4.9 / 5</span>
                <span className="text-slate-400">Rating</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-800">100%</span>
                <span className="text-slate-500">Verified Drivers</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
                <span className="font-semibold text-slate-800">10,000+</span>
                <span className="text-slate-500">Safe Rides Completed</span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {FILTER_OPTIONS.map((filter) => {
              const count =
                filter.key === 'all'
                  ? testimonials.length
                  : testimonials.filter((t) => t.category === filter.key).length;

              if (count === 0) return null;

              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  onClick={() => {
                    setActiveFilter(filter.key);
                    setShowAll(false);
                  }}
                  className={cn(
                    "cursor-pointer px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 border",
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 hover:text-slate-900 border-stone-200 hover:border-stone-300 shadow-2xs"
                  )}
                >
                  <span>{filter.label}</span>
                  <span
                    className={cn(
                      "text-[11px] px-1.5 py-0.5 rounded-full",
                      isActive ? "bg-white/20 text-white" : "bg-stone-100 text-slate-500"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Responsive, Spacious Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {displayedTestimonials.map((item) => (
                <TestimonialPageCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show more button if needed */}
          {filteredTestimonials.length > 9 && (
            <div className="mt-12 text-center flex flex-col items-center justify-center gap-3">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-50 text-slate-800 text-sm font-semibold border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 active:scale-98"
              >
                <span>
                  {showAll
                    ? "Show Less"
                    : `Show All ${filteredTestimonials.length} Stories`}
                </span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </button>
              <p className="text-xs text-slate-400">
                Showing {displayedTestimonials.length} of {filteredTestimonials.length} genuine rider reviews
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Feedback Call to Action */}
      <section className="section bg-white py-16 sm:py-20 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4 text-rose-600">
                <Heart className="w-6 h-6 fill-rose-500/20" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Had a Safe Journey with GatiGo?
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto mb-6 leading-relaxed">
                Your feedback inspires our women and partner drivers and helps more families travel with complete peace of mind.
              </p>
              <a
                href="https://wa.me/919876543210?text=I%20want%20to%20share%20my%20feedback!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Share Your Feedback on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
