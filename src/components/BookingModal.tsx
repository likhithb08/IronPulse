import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, User, Phone, Mail, Dumbbell, ShieldCheck } from 'lucide-react';
import { Coach } from '../data/coaches';
import { MembershipPlan } from '../data/memberships';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingType: 'trial' | 'coach' | 'membership' | 'service';
  coachData?: Coach | null;
  planData?: MembershipPlan | null;
  serviceTitle?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingType,
  coachData,
  planData,
  serviceTitle,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '10:00 AM - 11:30 AM',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const getTitle = () => {
    if (bookingType === 'coach' && coachData) {
      return `Schedule 1-on-1 with ${coachData.name}`;
    }
    if (bookingType === 'membership' && planData) {
      return `Claim ${planData.name} Plan`;
    }
    if (bookingType === 'service' && serviceTitle) {
      return `Book ${serviceTitle}`;
    }
    return 'Book Your Free 7-Day Trial';
  };

  const getSubtitle = () => {
    if (bookingType === 'coach' && coachData) {
      return `${coachData.role} · ${coachData.specialty} Division`;
    }
    if (bookingType === 'membership' && planData) {
      return `$${planData.monthlyPrice}/mo · ${planData.billingPeriod}`;
    }
    return 'Full access to training floors, Olympic lifting zones & recovery suite.';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-white/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-1">
              <Dumbbell className="w-4 h-4" />
              <span>IronPulse Athletic Registration</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-1">
              {getTitle()}
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              {getSubtitle()}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Taylor Reed"
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
                    placeholder="athlete@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500"
                  >
                    <option value="6:00 AM - 7:30 AM">6:00 AM - 7:30 AM (Early Bird)</option>
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM (Mid-Morning)</option>
                    <option value="1:00 PM - 2:30 PM">1:00 PM - 2:30 PM (Mid-Day)</option>
                    <option value="5:30 PM - 7:00 PM">5:30 PM - 7:00 PM (Evening Peak)</option>
                    <option value="7:30 PM - 9:00 PM">7:30 PM - 9:00 PM (Night Lift)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-neutral-300 block mb-1">
                  Training Notes or Injuries (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Previous shoulder impingement, goal is 500 lb squat, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition-all glow-orange-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? 'Confirming with Reservation Desk...' : 'Confirm Appointment'}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400">
                You will receive an instant SMS reminder and calendar invite with locker access PIN.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-display text-white mb-2">
              Booking Confirmed!
            </h4>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto mb-4 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your session for <strong className="text-orange-400">{formData.date}</strong> at <strong className="text-white">{formData.timeSlot}</strong> is locked in.
            </p>
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/10 text-xs text-neutral-300 max-w-sm mx-auto mb-6">
              Bring lifting shoes or trainers, a water bottle, and a government ID for check-in at the front desk.
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
