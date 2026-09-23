import React, { useState, useEffect } from 'react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/memberships';
import { Check, X, Sparkles, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface MembershipsSectionProps {
  onClaimPlan: (plan: MembershipPlan) => void;
}

export const MembershipsSection: React.FC<MembershipsSectionProps> = ({ onClaimPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activeTab, setActiveTab] = useState<'all' | 'individual' | 'specialty'>('all');

  // Flash offer countdown timer: Hours, Minutes, Seconds
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredPlans = MEMBERSHIP_PLANS.filter((plan) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'individual') {
      return plan.category === 'Monthly' || plan.category === 'Quarterly' || plan.category === 'Annual';
    }
    if (activeTab === 'specialty') {
      return plan.category === 'Student' || plan.category === 'Couple';
    }
    return true;
  });

  return (
    <section id="memberships" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mt-2">
            MEMBERSHIP TIERS & OFFERS
          </h2>
          <p className="text-neutral-400 text-base mt-3">
            Choose your commitment level. Every tier grants zero-wait access to our main training floor,
            premium locker amenities, and our proprietary app ecosystem.
          </p>

          {/* Limited Time Flash Offer Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2.5 rounded-xl bg-orange-950/40 border border-orange-500/30 text-xs text-orange-300">
            <span className="flex items-center gap-1.5 font-bold uppercase text-orange-400">
              <Zap className="w-4 h-4 fill-current" />
              Limited-Time Flash Promotion:
            </span>
            <span>$0 Enrollment Fee + Complimentary 3D Body Scan</span>
            <span className="font-mono font-bold bg-black/60 px-2 py-0.5 rounded text-white border border-white/10 tabular-nums">
              Ends in {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* Controls: Billing Cycle Switch & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 max-w-4xl mx-auto">
          {/* Billing Cycle Switch */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-900 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-bold">
                SAVE 20%
              </span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-neutral-900/80 border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Plans
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'individual' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setActiveTab('specialty')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'specialty' ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Student & Couple
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPlans.map((plan) => {
            const price =
              billingCycle === 'annual' && plan.annualPricePerMonth
                ? plan.annualPricePerMonth
                : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#181818] to-[#101010] border-2 border-orange-500 shadow-2xl glow-orange-sm md:-translate-y-2'
                    : 'bg-[#121212] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Badge if available */}
                {plan.badge && (
                  <div className="absolute -top-3 left-8">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-orange-500 text-white shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <h3 className="text-xl font-bold font-display text-white">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase">
                      {plan.category}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-6 min-h-[32px]">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                      ${price}
                    </span>
                    <span className="text-xs text-neutral-400">
                      / month {billingCycle === 'annual' ? '(billed yearly)' : ''}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                      What’s Included:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {plan.notIncluded &&
                      plan.notIncluded.map((notFeat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-500">
                          <X className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                          <span className="line-through">{notFeat}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onClaimPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-orange-600 hover:bg-orange-500 text-white glow-orange-sm'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-neutral-400 mt-2.5">
                    No lock-in contracts · Cancel anytime
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
