import React, { useState } from 'react';
import { Flame, MapPin, Phone, Mail, Clock, Instagram, Youtube, Twitter, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 text-2xl font-bold font-display text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
                <Flame className="w-5 h-5 fill-current" />
              </span>
              <span>
                IRON<span className="text-orange-500">PULSE</span>
              </span>
            </a>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mb-6">
              A high-performance training ground designed for lifters, competitive athletes, and health pioneers.
              Calibrated plates, science-guided recovery, and 24/7 AI programming.
            </p>

            {/* Newsletter Subscription */}
            <div className="max-w-sm">
              <span className="text-white font-bold text-xs uppercase tracking-wider block mb-2">
                Join The IronPulse Dispatch
              </span>
              <p className="text-[11px] text-neutral-400 mb-2">
                Weekly workout protocols, science-backed recovery research, and member priority announcements.
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="athlete@domain.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You are on the athlete dispatch list!</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  All Services & Classes
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-orange-400 transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-orange-400 transition-colors">
                  Master Coaches
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-400 transition-colors">
                  Facility Atmosphere
                </a>
              </li>
              <li>
                <a href="#ai-coach" className="hover:text-orange-400 transition-colors">
                  AI Fitness Coach (n8n)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Operations */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Operating Hours
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-neutral-300 font-semibold block">Monday – Friday</span>
                <span className="font-mono text-neutral-400">5:00 AM – 11:00 PM</span>
              </div>
              <div>
                <span className="text-neutral-300 font-semibold block">Saturday & Sunday</span>
                <span className="font-mono text-neutral-400">6:00 AM – 10:00 PM</span>
              </div>
              <div>
                <span className="text-neutral-300 font-semibold block">Recovery Suite</span>
                <span className="font-mono text-neutral-400">Open 24/7 for Black Card</span>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Placeholder Card */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Club Location
            </h4>
            <div className="rounded-xl bg-[#111111] border border-white/10 p-3.5 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-neutral-300 text-[11px] leading-relaxed">
                  <strong>IronPulse Flagship HQ</strong>
                  <br />
                  450 Ironworks Boulevard, Suite 100
                  <br />
                  Metropolis, CA 90210
                </div>
              </div>

              {/* Visual Map Graphic / Directions Link */}
              <div className="relative rounded-lg overflow-hidden h-24 bg-neutral-900 border border-white/5 flex items-center justify-center text-center p-2 group cursor-pointer hover:border-orange-500/40 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:8px_8px] opacity-70" />
                <div className="relative z-10">
                  <span className="text-[11px] font-bold text-white block group-hover:text-orange-400 transition-colors">
                    Interactive Map & Parking
                  </span>
                  <span className="text-[9px] text-neutral-400">Complimentary 2hr subterranean garage</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-white/5 text-[11px]">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <a href="tel:+18005557857" className="hover:text-white transition-colors">
                  +1 (800) 555-PULSE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-neutral-400">
            © {new Date().getFullYear()} IronPulse Fitness, LLC. All rights reserved. Built for champions.
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <a href="#" className="hover:text-orange-400 transition-colors p-1" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors p-1" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors p-1" aria-label="X Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <span className="text-neutral-600">·</span>
            <a href="#privacy" className="hover:text-white text-[11px]">Privacy Policy</a>
            <a href="#terms" className="hover:text-white text-[11px]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
