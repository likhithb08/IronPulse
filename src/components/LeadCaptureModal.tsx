import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';

export const LeadCaptureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Build Muscle',
    contactTime: 'Morning (8am - 12pm)',
  });

  useEffect(() => {
    // Strictly after 5 seconds of page presence:
    // Check if user already dismissed or submitted
    const isDismissed = localStorage.getItem('ironpulse_lead_dismissed');
    if (isDismissed) return;

    const timer = setTimeout(() => {
      const alreadyClosed = localStorage.getItem('ironpulse_lead_dismissed');
      if (!alreadyClosed) {
        setIsOpen(true);
      }
    }, 5000); // Exactly 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('ironpulse_lead_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* OPTIONAL WEBHOOK DISPATCH (e.g. n8n or Formspree)
       await fetch('https://your-n8n-instance/webhook/ironpulse-leads', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
    */

    // Simulate async submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      localStorage.setItem('ironpulse_lead_dismissed', 'true');
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#141414] border border-orange-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden glow-orange">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-orange-400 mb-2">
              <Zap className="w-4 h-4 fill-current" />
              <span>Exclusive Member Invitation</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-snug mb-2">
              CLAIM YOUR FREE 7-DAY ALL-ACCESS TRIAL
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              Experience our competition lifting platforms, group HIIT sessions, and contrast recovery suites. No commitment required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  >
                    <option value="Build Muscle">Build Muscle & Hypertrophy</option>
                    <option value="Lose Weight">Fat Loss & Conditioning</option>
                    <option value="Olympic Lifting">Powerlifting / Strength</option>
                    <option value="Athletic Recovery">Recovery & Longevity</option>
                    <option value="Other">General Fitness & Health</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Preferred Contact Time
                  </label>
                  <select
                    value={formData.contactTime}
                    onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  >
                    <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                    <option value="Afternoon (12pm - 5pm)">Afternoon (12pm - 5pm)</option>
                    <option value="Evening (5pm - 8pm)">Evening (5pm - 8pm)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition-all glow-orange-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Securing Your VIP Pass...</span>
                  ) : (
                    <span>Claim Free 7-Day All-Access Pass</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-neutral-400" />
                  Your information is private and never shared.
                </span>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
                >
                  Maybe later
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-display text-white mb-2">
              Pass Confirmed!
            </h4>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto mb-6 leading-relaxed">
              Welcome, <strong className="text-white">{formData.name}</strong>. Your 7-Day All-Access Pass QR code and orientation packet have been dispatched to <strong className="text-orange-400">{formData.email}</strong>.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
