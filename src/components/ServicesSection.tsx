import React, { useState } from 'react';
import { SERVICES, GymService } from '../data/services';
import { Dumbbell, Users, Smartphone, Apple, Flame, Building2, ArrowRight, CheckCircle2, X, Clock, Tag } from 'lucide-react';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Users,
  Smartphone,
  Apple,
  Flame,
  Building2,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [selectedService, setSelectedService] = useState<GymService | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Training', 'Classes', 'Recovery & Health'];

  const filteredServices = SERVICES.filter((service) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Training') {
      return service.category === 'Personal Training' || service.category === 'Online Coaching';
    }
    if (activeCategory === 'Classes') {
      return service.category === 'Group Classes' || service.category === 'Corporate Programs';
    }
    if (activeCategory === 'Recovery & Health') {
      return service.category === 'Recovery' || service.category === 'Nutrition Plans';
    }
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
              High-Performance Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mt-2">
              SERVICES & SPECIALTIES
            </h2>
            <p className="text-neutral-400 text-base max-w-xl mt-3">
              From bio-mechanical one-on-one lifting clinics to contrast hydrotherapy and metabolic programming.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1.5 rounded-xl bg-neutral-900 border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Dumbbell;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#121212] border border-white/5 hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400">
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">Investment</span>
                    <span className="text-sm font-bold text-white">{service.pricing}</span>
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors py-2 px-3 rounded-lg hover:bg-orange-500/10 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-white/10 hover:border-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded bg-orange-600/20 text-orange-400 border border-orange-500/30 text-xs font-semibold">
                {selectedService.category}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedService.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm font-medium text-orange-400/90 mb-6">
              {selectedService.tagline}
            </p>

            <div className="rounded-xl overflow-hidden mb-6 border border-white/10">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Key Deliverables & Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-between mb-8">
              <div>
                <span className="text-xs text-neutral-400 block">Typical Schedule</span>
                <span className="text-sm font-semibold text-white">{selectedService.scheduleSnippet}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block">Rate / Tier</span>
                <span className="text-sm font-bold text-orange-400">{selectedService.pricing}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg text-neutral-300 hover:text-white border border-white/10 hover:bg-neutral-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onBookService(s.title);
                }}
                className="px-6 py-2.5 text-xs font-bold rounded-lg bg-orange-600 hover:bg-orange-500 text-white glow-orange-sm transition-all"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
