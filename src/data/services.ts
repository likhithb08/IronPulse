export interface GymService {
  id: string;
  title: string;
  category: 'Personal Training' | 'Group Classes' | 'Online Coaching' | 'Nutrition Plans' | 'Recovery' | 'Corporate Programs';
  tagline: string;
  description: string;
  duration: string;
  pricing: string;
  icon: string; // Lucide icon identifier
  benefits: string[];
  scheduleSnippet: string;
  image: string;
}

export const SERVICES: GymService[] = [
  {
    id: 'service-personal-training',
    title: '1-on-1 Elite Personal Training',
    category: 'Personal Training',
    tagline: 'Customized neuromuscular programming & biometric accountability',
    description: 'Work directly with certified Master Coaches using velocity-based training, 3D motion capture form tracking, and personalized periodization to achieve specific physical milestones.',
    duration: '60 min sessions',
    pricing: 'From $85 / session',
    icon: 'Dumbbell',
    benefits: ['Velocity transducer bar-speed tracking', 'Real-time form correction & mobility primer', 'Bi-weekly DEXA body composition scans'],
    scheduleSnippet: 'Daily 5:00 AM - 10:00 PM (by appointment)',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service-group-classes',
    title: 'High-Octane Group Classes',
    category: 'Group Classes',
    tagline: 'Lactate-threshold HIIT, Olympic lifting & Power Sculpt',
    description: 'Immersive stadium-style studio workouts driven by heart-rate telemetry, state-of-the-art sound systems, and motivating group energy led by master instructors.',
    duration: '45 - 55 min',
    pricing: 'Included in Peak & Black Card',
    icon: 'Users',
    benefits: ['Myzone live heart-rate display screens', 'Capped class sizes (max 18 athletes)', 'Progressive monthly skill focuses'],
    scheduleSnippet: '32 classes weekly: 6am, 7:30am, 12pm, 5:30pm, 7pm',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service-online-coaching',
    title: 'Hybrid & Remote Coaching',
    category: 'Online Coaching',
    tagline: 'Global elite guidance with 24/7 video form audit',
    description: 'Train anywhere with IronPulse custom programming delivered through our mobile app, paired with weekly 1-on-1 coach check-ins and video movement critiques.',
    duration: 'Continuous weekly cycle',
    pricing: '$199 / month',
    icon: 'Smartphone',
    benefits: ['Custom app dashboard with workout logs', 'Sub-24h video lift critique by your coach', 'Synced wearable biometrics (Whoop, Apple, Garmin)'],
    scheduleSnippet: 'Anywhere, 24/7 asynchronous & weekly video call',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service-nutrition-plans',
    title: 'Clinical Sports Nutrition Plans',
    category: 'Nutrition Plans',
    tagline: 'Blood chemistry, hormone optimization & macronutrient cycling',
    description: 'Registered sports dietitians analyze your metabolic baseline, training calendar, and biochemical blood panels to structure an actionable food architecture.',
    duration: '3-Month Protocol',
    pricing: 'From $140 / month',
    icon: 'Apple',
    benefits: ['Comprehensive micronutrient & allergy screening', 'Pre-, intra-, and post-workout fuel recipes', 'Weekly macro adjustment according to weigh-ins'],
    scheduleSnippet: 'Virtual or in-person private consultations',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service-recovery-suite',
    title: 'Biohacking & Recovery Suite',
    category: 'Recovery',
    tagline: 'Infrared sauna, 42°F cold immersion & pneumatic compression',
    description: 'Accelerate muscular repair and lower systemic inflammation in our luxury recovery lounge featuring custom cedar saunas, cold plunge pools, and NormaTec boots.',
    duration: '45 min circuits',
    pricing: 'Day Pass $35 or Unlimited in Elite',
    icon: 'Flame',
    benefits: ['Full-spectrum infrared heat to 195°F', 'Filtered 42°F cold plunge with ozone purification', 'NormaTec 3 compression lounge with zero-gravity chairs'],
    scheduleSnippet: 'Open all gym hours: 5:00 AM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'service-corporate-programs',
    title: 'Corporate High-Performance',
    category: 'Corporate Programs',
    tagline: 'Executive physical resilience and company wellness challenges',
    description: 'Transform your organization’s vitality, cognitive endurance, and camaraderie with curated corporate memberships, on-site metabolic workshops, and executive health retreats.',
    duration: 'Annual corporate contracts',
    pricing: 'Custom tiered packages',
    icon: 'Building2',
    benefits: ['Dedicated account manager & billing portal', 'Quarterly company health metrics and challenges', 'Executive private training blocks'],
    scheduleSnippet: 'Tailored to corporate calendar',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  }
];
