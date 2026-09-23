import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, Testimonial } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star, Quote, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
            Verified Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mt-2">
            REAL STORIES. RAW RESULTS.
          </h2>
          <p className="text-neutral-400 text-base mt-3">
            Read from members who made the shift from conventional commercial fitness to athletic mastery.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141414] border border-white/10 p-8 sm:p-12 relative shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Member Profile */}
            <div className="flex flex-col items-center text-center shrink-0">
              <div className="relative mb-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-orange-500/50 shadow-lg"
                />
                <span className="absolute -bottom-2 -right-1 bg-black/80 px-2 py-0.5 rounded-full border border-white/10 text-[10px] font-mono text-emerald-400">
                  Verified
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-display">
                {current.name}
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                {current.role}
              </p>
              <span className="text-[11px] font-mono text-orange-400 mt-1">
                {current.timeWithIronPulse}
              </span>
            </div>

            {/* Testimonial Quote Body */}
            <div className="flex-1 text-center md:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                "{current.headline}"
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 italic">
                "{current.content}"
              </p>

              {/* Quantified Result Metric Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-neutral-900 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-orange-600/20 text-orange-500 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-white block">
                    {current.metric}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {current.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
