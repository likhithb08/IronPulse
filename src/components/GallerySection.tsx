import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Equipment' | 'Classes' | 'Community' | 'Results'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs: Array<'All' | 'Equipment' | 'Classes' | 'Community' | 'Results'> = [
    'All',
    'Equipment',
    'Classes',
    'Community',
    'Results',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
              Inside IronPulse
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mt-2">
              FACILITY & ATMOSPHERE
            </h2>
            <p className="text-neutral-400 text-base max-w-xl mt-3">
              Explore our competition-spec training floor, boutique class environments, community culture, and verified athlete transformations.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-white/10 overflow-x-auto self-start md:self-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-orange-600 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#141414] border border-white/5 hover:border-orange-500/40 transition-all duration-300 aspect-[4/3] sm:aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag pill */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-orange-400 border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Hover inspect icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-black/60 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                {item.stats && (
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-0.5">
                    {item.stats}
                  </span>
                )}
                <h4 className="text-sm font-bold text-white leading-snug line-clamp-1 group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-xl bg-neutral-900/80 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
              )
            }
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-orange-600 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
              )
            }
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-orange-600 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main preview container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-2xl px-4">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-xs font-mono font-bold text-orange-400">
                  {filteredItems[lightboxIndex].category}
                </span>
                {filteredItems[lightboxIndex].stats && (
                  <span className="text-xs font-mono text-emerald-400">
                    · {filteredItems[lightboxIndex].stats}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
