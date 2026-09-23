import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    // Direct WhatsApp Web / mobile link with preset inquiry message
    const msg = encodeURIComponent("Hi IronPulse Fitness! I'd like to ask about memberships and trial availability.");
    window.open(`https://wa.me/18005557857?text=${msg}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18005557857';
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Tooltip */}
      {showTooltip && (
        <div className="bg-[#181818] border border-white/15 rounded-2xl p-4 shadow-2xl text-xs text-white max-w-xs animate-fade-in relative mb-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 font-bold text-orange-400 mb-1">
            <MessageCircle className="w-4 h-4" />
            <span>IronPulse Concierge Desk</span>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Have questions about trial passes, guest policies, or locker rentals? Chat with our team in real-time.
          </p>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Direct Phone Call Button */}
        <button
          onClick={handlePhoneClick}
          className="w-12 h-12 rounded-full bg-neutral-900/90 border border-white/15 text-neutral-300 hover:text-white hover:bg-neutral-800 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Call IronPulse Fitness"
          title="Call IronPulse Front Desk"
        >
          <Phone className="w-5 h-5" />
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          className="px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/30 flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer font-bold text-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Chat With Us</span>
        </button>
      </div>
    </div>
  );
};
