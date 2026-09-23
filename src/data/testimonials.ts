export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  headline: string;
  content: string;
  rating: number;
  timeWithIronPulse: string;
  metric: string;
  metricLabel: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Jordan Miller',
    role: 'Tech Executive & Triathlete',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    headline: 'Added 55 lbs to my deadlift while reducing resting heart rate to 46 bpm.',
    content: 'IronPulse is on a completely different planet compared to commercial gyms. The equipment quality, the lack of waiting for racks, and Elena’s HIIT coaching prepared me for my first Half-Ironman without burning out.',
    rating: 5,
    timeWithIronPulse: '18 Months Member',
    metric: '+55 lbs',
    metricLabel: 'Compound Total Gain'
  },
  {
    id: 'test-2',
    name: 'Samantha Ross',
    role: 'Architect & Competitive Cross-trainer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    headline: 'The contrast therapy recovery suite cured my chronic knee tendonitis.',
    content: 'I used to take anti-inflammatories just to squat. Marcus reconstructed my ankle dorsiflexion and hip alignment, and doing the infrared sauna followed by cold plunge 3x a week keeps my joints bulletproof.',
    rating: 5,
    timeWithIronPulse: '1 year Member',
    metric: 'Zero Pain',
    metricLabel: 'Patellar Tendon Recovery'
  },
  {
    id: 'test-3',
    name: 'Devin Thorne',
    role: 'Former Collegiate Baseball Athlete',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    headline: 'The atmosphere is intoxicating. Everyone here came to work, not stare at their phones.',
    content: 'You walk through the doors, hear the calibrated plates clanking, and you instantly level up. The AI Coach chat in the member portal also helped me pinpoint why my protein timing was failing during cut phases.',
    rating: 5,
    timeWithIronPulse: '2+ Years Member',
    metric: '-8.5%',
    metricLabel: 'Body Fat in 12 Weeks'
  }
];
