import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Activity, Dumbbell, Users } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onTrialClick }) => {
  // Live members training counter simulation (realistic small fluctuation)
  const [liveCount, setLiveCount] = useState(148);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + delta;
        return next < 120 ? 128 : next > 180 ? 162 : next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Dark Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="IronPulse Fitness strength training floor"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom brightness-[0.38] contrast-125"
        />
        {/* Measured dark scrim for WCAG AA 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,85,0,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Live Training Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md mb-6 shadow-inner text-xs font-medium text-neutral-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Live Floor Status:</span>
            <span className="font-mono tabular-nums font-bold text-white">
              {liveCount} Athletes
            </span>
            <span className="text-neutral-400">training right now</span>
          </motion.div>

          {/* Marquee Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.08] text-balance mb-6"
          >
            UNLEASH RAW POWER.{' '}
            <span className="text-gradient-orange block mt-1">
              ENGINEER YOUR PEAK.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance"
          >
            A 25,000 sq ft luxury athletic sanctuary featuring Olympic lifting platforms,
            contrast bio-recovery suites, and world-class coaches guided by modern AI intelligence.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all duration-200 glow-orange flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Memberships</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onTrialClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 hover:text-white border border-white/15 rounded-xl backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-5 h-5 text-orange-500" />
              <span>Book Free 7-Day Trial</span>
            </button>
          </motion.div>

          {/* Trust markers adjacency banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                12,400+
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">Athletes Trained</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                25,000
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">Sq Ft Premium Space</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                28
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">Master Coaches</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                4.9 / 5.0
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">Verified Member Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
