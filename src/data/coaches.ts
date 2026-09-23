export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: 'Strength' | 'HIIT' | 'Yoga' | 'Nutrition' | 'Recovery';
  experienceYears: number;
  image: string;
  bio: string;
  quote: string;
  certifications: string[];
  services: {
    title: string;
    description: string;
    duration: string;
    focus: string;
  }[];
  availability: string[];
}

export const COACHES: Coach[] = [
  {
    id: 'coach-marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Strength & Conditioning',
    specialty: 'Strength',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    bio: 'Former collegiate powerlifting coach specializing in bar speed, neuromuscular adaptation, and injury-proof biomechanics. Has coached over 40 national-level athletes.',
    quote: 'Strength is not an accident. It is the calculated sum of disciplined volume and relentless technique.',
    certifications: ['CSCS (NSCA)', 'USAW Level 2', 'Precision Nutrition L1'],
    services: [
      {
        title: 'Barbell Biomechanics Assessment',
        description: 'Comprehensive high-speed video analysis of squat, bench, and deadlift bar paths with corrective mobility drills.',
        duration: '60 min',
        focus: 'Form optimization & kinetic chain balance'
      },
      {
        title: 'Power & Hypertrophy Periodization',
        description: 'Personalized 12-week block programming tailored to your structural leverages and recovery capacity.',
        duration: 'Ongoing 1-on-1',
        focus: 'Peak strength & muscle cross-sectional area'
      }
    ],
    availability: ['Mon, Wed, Fri: 6:00 AM - 1:00 PM', 'Tue, Thu: 3:00 PM - 8:00 PM']
  },
  {
    id: 'coach-elena-rostova',
    name: 'Elena Rostova',
    role: 'Director of HIIT & Metabolic Conditioning',
    specialty: 'HIIT',
    experienceYears: 9,
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    bio: 'Ex-gymnast and CrossFit Games regional competitor known for grueling lactate threshold workouts and precision interval pacing that torches fat while preserving lean tissue.',
    quote: 'When your mind wants to quit, your nervous system is only at 40% capacity. We train the grit.',
    certifications: ['CrossFit Level 3 Trainer', 'EXOS Performance Specialist', 'NASM CPT'],
    services: [
      {
        title: 'Anaerobic Threshold Calibration',
        description: 'Heart-rate-zone dialed intervals using SkiErgs, assault bikes, kettlebells, and plyometrics.',
        duration: '45 min',
        focus: 'VO2 Max elevation & EPOC metabolic burn'
      },
      {
        title: 'Athletic Agility & Speed Camp',
        description: 'Multi-directional footwork drills, deceleration control, and reactive sprint mechanics.',
        duration: '60 min',
        focus: 'Fast-twitch muscle recruitment'
      }
    ],
    availability: ['Mon - Fri: 7:00 AM - 12:00 PM', 'Sat: 8:00 AM - 2:00 PM']
  },
  {
    id: 'coach-kai-sundqvist',
    name: 'Kai Sundqvist',
    role: 'Mobility & Athletic Yoga Master',
    specialty: 'Yoga',
    experienceYears: 10,
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialist in kinetic chain release, fascial tension therapy, and athletic vinyasa designed specifically for heavy lifters and tight musculature.',
    quote: 'A body that cannot bend will inevitably break under load. Mobility is your structural insurance.',
    certifications: ['E-RYT 500', 'FRC (Functional Range Conditioning)', 'FMS Level 2'],
    services: [
      {
        title: 'Heavy Lifter Mobility Decompression',
        description: 'Targeted shoulder capsule, thoracic spine, and hip capsule unlocking protocols using loaded passive stretches.',
        duration: '50 min',
        focus: 'Joint longevity & deep tissue restoration'
      },
      {
        title: 'Breathwork & Nervous System Reset',
        description: 'Down-regulation breath protocols for parasympathetic recovery after heavy central nervous system fatigue.',
        duration: '30 min',
        focus: 'Cortisol reduction & sleep optimization'
      }
    ],
    availability: ['Tue, Thu: 8:00 AM - 2:00 PM', 'Sun: 9:00 AM - 3:00 PM']
  },
  {
    id: 'coach-sarah-chen',
    name: 'Dr. Sarah Chen, RD',
    role: 'Chief Sports Dietitian & Biochemist',
    specialty: 'Nutrition',
    experienceYears: 11,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Doctor of Clinical Nutrition and sports biochemist. Crafts individualized micronutrient matrices, bloodwork-guided fuel strategies, and contest-prep peaking plans.',
    quote: 'You cannot out-train a chaotic biochemistry. We treat food as molecular code for physical adaptation.',
    certifications: ['Registered Dietitian (RD)', 'CSSD (Board Certified Sports Dietetics)', 'PhD Nutritional Sciences'],
    services: [
      {
        title: 'Metabolic Fingerprint & Bloodwork Audit',
        description: 'Comprehensive analysis of lipid panels, fasting insulin, testosterone/estrogen ratios, and hormonal biomarkers.',
        duration: '75 min',
        focus: 'Cellular optimization & recovery rate'
      },
      {
        title: 'Targeted Macro & Nutrient Timing Blueprint',
        description: 'Exact intra-workout carb protocols, amino acid cycling, and anti-inflammatory whole-food meal architecture.',
        duration: 'Ongoing 1-on-1',
        focus: 'Body recomposition & sustained glycogen delivery'
      }
    ],
    availability: ['Mon, Wed, Thu: 9:00 AM - 5:00 PM']
  },
  {
    id: 'coach-damon-cross',
    name: 'Damon Cross',
    role: 'Director of Biohacking & Recovery',
    specialty: 'Recovery',
    experienceYears: 8,
    image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=800&q=80',
    bio: 'Former sports physiologist specializing in contrast water therapy, infrared photobiomodulation, hyperbaric oxygen, and neuromuscular dry cupping.',
    quote: 'Recovery is the actual anabolic window. The harder you break down in the gym, the smarter you must rebuild.',
    certifications: ['B.S. Exercise Physiology', 'Certified Contrast Hydrotherapist', 'CES (Corrective Exercise)'],
    services: [
      {
        title: 'Contrast Hydrotherapy Protocol',
        description: 'Supervised 42°F cold plunge immersion cycles alternated with 180°F infrared heat shock therapy.',
        duration: '45 min',
        focus: 'Systemic inflammation flush & mitochondrial boost'
      },
      {
        title: 'Percussive & Pneumatic Compression Session',
        description: 'Full lower-limb NormaTec 2.0 pulse compression combined with targeted hypervolt fascial release.',
        duration: '40 min',
        focus: 'Lymphatic drainage & DOMS reduction'
      }
    ],
    availability: ['Tue - Sat: 10:00 AM - 7:00 PM']
  }
];
