import React from 'react';
import { Award, Shield, Sparkles, Zap, Flame, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Competition-Grade Eleiko Equipment',
      description: 'Zero waiting for squat racks. We provide 12 calibrated Olympic platforms, custom urethane dumbbells to 160 lbs, and Keiser pneumatic resistance machines.',
      metric: '12 Platforms'
    },
    {
      icon: Flame,
      title: 'Contrast Therapy & Bio-Recovery',
      description: 'Accelerate systemic recovery with 195°F cedarwood infrared saunas, 42°F cold immersion plunge pools, and NormaTec 3 pneumatic compression boots.',
      metric: '3x Faster Recovery'
    },
    {
      icon: Zap,
      title: 'AI-Guided Biometric Intelligence',
      description: 'Bridge your training with our n8n-connected AI Fitness Coach. Real-time macro adjustments, sleep/strain feedback, and intelligent periodization at your fingertips.',
      metric: '24/7 Guidance'
    },
    {
      icon: Shield,
      title: 'Elite Certified Master Coaches',
      description: 'Every coach holds accredited CSCS, USAW, or Master Sports Nutrition credentials with a minimum of 7 years of collegiate or competitive coaching.',
      metric: 'Top 1% Mentors'
    }
  ];

  return (
    <section className="py-20 bg-[#0c0c0c] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
            Engineered For Breakthroughs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-2 text-balance">
            WHY ATHLETES CHOOSE IRONPULSE OVER COMMERCIAL GYMS
          </h2>
          <p className="text-neutral-400 text-base mt-3 leading-relaxed">
            Most fitness facilities sell access; we engineer performance. Every square foot is deliberate,
            every bar calibrated, and every recovery protocol tuned for human adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-orange-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-white/10 flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Key Advantage</span>
                  <span className="font-mono font-semibold text-orange-400">{pillar.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
