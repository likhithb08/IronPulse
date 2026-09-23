import React, { useState } from 'react';
import { COACHES, Coach } from '../data/coaches';
import { Award, Calendar, CheckCircle2, ChevronRight, Clock, Star, X } from 'lucide-react';

interface CoachesSectionProps {
  onBookCoach: (coach: Coach) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onBookCoach }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [activeModalCoach, setActiveModalCoach] = useState<Coach | null>(null);

  const specialties = ['All', 'Strength', 'HIIT', 'Yoga', 'Nutrition', 'Recovery'];

  const filteredCoaches = COACHES.filter((coach) => {
    if (selectedSpecialty === 'All') return true;
    return coach.specialty === selectedSpecialty;
  });

  return (
    <section id="coaches" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
              World-Class Mentorship
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mt-2">
              MEET THE MASTER COACHES
            </h2>
            <p className="text-neutral-400 text-base max-w-xl mt-3">
              No generic personal trainers. Our team comprises elite collegiate strength coaches, Olympic lifters,
              and doctorate-level sports nutritionists.
            </p>
          </div>

          {/* Specialty Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-white/10 overflow-x-auto self-start md:self-auto max-w-full">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedSpecialty === spec
                    ? 'bg-orange-600 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoaches.map((coach) => (
            <div
              key={coach.id}
              className="group rounded-2xl bg-[#121212] border border-white/10 hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20" />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] font-mono font-bold text-orange-400">
                    {coach.experienceYears} Yrs Exp
                  </div>
                  <div className="absolute bottom-3 left-5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-orange-400 block mb-0.5">
                      {coach.specialty} Specialist
                    </span>
                    <h3 className="text-xl font-bold font-display text-white">
                      {coach.name}
                    </h3>
                  </div>
                </div>

                {/* Info body */}
                <div className="p-6 pt-3">
                  <p className="text-xs text-neutral-400 font-medium mb-3">
                    {coach.role}
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-5">
                    {coach.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {coach.certifications.slice(0, 2).map((cert, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-white/5 mt-2">
                <button
                  onClick={() => setActiveModalCoach(coach)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-neutral-900 hover:bg-orange-600 border border-white/10 hover:border-orange-500 transition-all flex items-center justify-center gap-2 group-hover:glow-orange-sm cursor-pointer"
                >
                  <span>View Services & Book</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coach Detail Modal */}
      {activeModalCoach && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalCoach(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src={activeModalCoach.image}
                alt={activeModalCoach.name}
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover object-top border-2 border-orange-500/40 shrink-0"
              />
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-orange-400">
                    {activeModalCoach.specialty} Division
                  </span>
                  <span className="text-xs text-neutral-400">· {activeModalCoach.experienceYears} Years Track Record</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activeModalCoach.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5 mb-3">
                  {activeModalCoach.role}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                  {activeModalCoach.certifications.map((c, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="p-4 rounded-xl bg-neutral-900/90 border-l-4 border-orange-500 mb-6 text-xs italic text-neutral-300">
              "{activeModalCoach.quote}"
            </div>

            {/* Biography */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Coaching Methodology
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeModalCoach.bio}
              </p>
            </div>

            {/* Offered Services */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                1-on-1 Services With {activeModalCoach.name}
              </h4>
              <div className="space-y-3">
                {activeModalCoach.services.map((srv, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-900 border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-sm font-bold text-white">{srv.title}</h5>
                      <span className="text-xs font-mono text-orange-400 font-semibold">{srv.duration}</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">{srv.description}</p>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                      <span>Focus: <strong className="text-neutral-300">{srv.focus}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-neutral-400 block mb-0.5">Regular Availability</span>
                <span className="text-neutral-200 font-medium">
                  {activeModalCoach.availability.join(' | ')}
                </span>
              </div>
              <span className="text-emerald-400 font-mono font-medium flex items-center gap-1">
                ● Accepting new clients
              </span>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalCoach(null)}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg text-neutral-300 hover:text-white border border-white/10 hover:bg-neutral-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const c = activeModalCoach;
                  setActiveModalCoach(null);
                  onBookCoach(c);
                }}
                className="px-6 py-2.5 text-xs font-bold rounded-lg bg-orange-600 hover:bg-orange-500 text-white glow-orange-sm transition-all"
              >
                Book Session with {activeModalCoach.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
