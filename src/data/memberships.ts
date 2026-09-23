export interface MembershipPlan {
  id: string;
  name: string;
  category: 'Monthly' | 'Quarterly' | 'Annual' | 'Student' | 'Couple';
  monthlyPrice: number;
  annualPricePerMonth?: number;
  billingPeriod: string;
  badge?: string;
  isPopular?: boolean;
  isLimitedOffer?: boolean;
  offerExpiresAt?: string; // ISO string or relative note
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-monthly',
    name: 'Day-to-Day Flex',
    category: 'Monthly',
    monthlyPrice: 89,
    annualPricePerMonth: 69,
    billingPeriod: 'month',
    description: 'Complete gym floor access with no long-term contracts. Ideal for high-flexibility training.',
    features: [
      'Unlimited access to 25,000 sq ft main floor',
      'Eleiko Olympic lifting platforms & calibrated plates',
      'Locker room, towel service & rainfall showers',
      'IronPulse Member Mobile App access',
      '1 Complimentary 3D body scan per quarter'
    ],
    notIncluded: ['Recovery sauna & cold plunge suite', 'Unlimited guest passes'],
    ctaText: 'Start Monthly'
  },
  {
    id: 'plan-quarterly',
    name: 'Peak Performance',
    category: 'Quarterly',
    monthlyPrice: 119,
    annualPricePerMonth: 95,
    billingPeriod: 'billed quarterly',
    badge: 'Special Offer',
    isPopular: true,
    isLimitedOffer: true,
    offerExpiresAt: '2026-12-31T23:59:59',
    description: 'Our most sought-after plan. Full training and recovery amenities for committed athletes.',
    features: [
      'All Day-to-Day Flex features included',
      'Unlimited Infrared Sauna & Cold Plunge access',
      '2 Monthly 1-on-1 Personal Training sessions',
      'Priority booking for HIIT, Metcon & Yoga classes',
      'PulseAI 24/7 personalized workout generator',
      '2 Free guest passes every month'
    ],
    ctaText: 'Claim Special Offer'
  },
  {
    id: 'plan-annual',
    name: 'Black Card Elite',
    category: 'Annual',
    monthlyPrice: 159,
    annualPricePerMonth: 129,
    billingPeriod: 'billed annually',
    badge: 'Best Value',
    description: 'The ultimate VIP fitness experience with complete holistic training, nutrition, and private recovery.',
    features: [
      'Full VIP access to all 4 IronPulse club locations',
      '4 Monthly 1-on-1 elite coach sessions',
      'Dedicated personal locker & premium laundry service',
      'Monthly DEXA body composition & metabolic report',
      'Unlimited recovery suite, NormaTec boots & massage',
      'Exclusive access to athlete masterclasses'
    ],
    ctaText: 'Join Black Card'
  },
  {
    id: 'plan-student',
    name: 'Student Athlete',
    category: 'Student',
    monthlyPrice: 59,
    annualPricePerMonth: 49,
    billingPeriod: 'month',
    badge: 'Valid Student ID',
    description: 'Discounted access for students and collegiate athletes pushing their athletic ceiling.',
    features: [
      'Full gym floor access during off-peak and standard hours',
      'Full use of free weights, turf track & cardio decks',
      'Student study lounge with high-speed fiber Wi-Fi',
      'Monthly open lifting workshops & technique audits',
      'Discounted sports nutrition bar'
    ],
    notIncluded: ['Peak hour private sauna booking'],
    ctaText: 'Verify Student ID'
  },
  {
    id: 'plan-couple',
    name: 'Duo Power Partner',
    category: 'Couple',
    monthlyPrice: 149,
    annualPricePerMonth: 119,
    billingPeriod: 'month for 2 members',
    badge: 'Save 30%',
    description: 'Designed for couples, workout partners, or family members training towards common goals.',
    features: [
      'Complete all-access membership for two individuals',
      'Shared monthly personal trainer joint consultation',
      'Dual access to recovery infrared sauna & plunge lounge',
      'Unlimited group fitness & weekend partner bootcamps',
      'Two branded IronPulse performance shaker kits'
    ],
    ctaText: 'Claim Couple Plan'
  }
];
