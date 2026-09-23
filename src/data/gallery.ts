export interface GalleryItem {
  id: string;
  title: string;
  category: 'Equipment' | 'Classes' | 'Community' | 'Results';
  image: string;
  caption: string;
  stats?: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-eq-1',
    title: 'Olympic Lifting Decks & Eleiko Bars',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    caption: '12 dedicated Olympic platforms with competition-calibrated steel plates and custom oak drop zones.',
    stats: 'Competition Grade',
    aspect: 'wide'
  },
  {
    id: 'gal-cls-1',
    title: 'Lactate Threshold Metcon Studio',
    category: 'Classes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Athletes pacing through anaerobic sprint intervals with real-time biometric telemetry.',
    stats: 'High Intensity',
    aspect: 'tall'
  },
  {
    id: 'gal-com-1',
    title: 'Saturday Morning Community Throwdown',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Members cheering each other across the 50-meter turf track during our monthly open team challenge.',
    stats: '80+ Athletes',
    aspect: 'square'
  },
  {
    id: 'gal-res-1',
    title: 'Alex T. – 16-Week Body Recomposition',
    category: 'Results',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    caption: '-18 lbs fat mass, +6.4 lbs skeletal muscle mass, 405 lb deadlift milestone unlocked.',
    stats: '-11% Body Fat',
    aspect: 'tall'
  },
  {
    id: 'gal-eq-2',
    title: 'Custom Urethane Dumbbells & Cable Towers',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Solid steel custom-milled dumbbells from 5 lbs up to 160 lbs paired with smooth 2:1 ratio cables.',
    stats: '5 to 160 lbs',
    aspect: 'square'
  },
  {
    id: 'gal-cls-2',
    title: 'Athletic Vinyasa & Fascial Mobility',
    category: 'Classes',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Restorative mobility sessions designed to increase thoracic rotation and hip extension for lifters.',
    stats: 'Mobility & Flow',
    aspect: 'wide'
  },
  {
    id: 'gal-eq-3',
    title: 'Finnish Cedar Sauna & Cryo Plunge',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    caption: '195°F dry heat shock therapy adjacent to dual 42°F continuous-circulation cold baths.',
    stats: 'Contrast Therapy',
    aspect: 'wide'
  },
  {
    id: 'gal-res-2',
    title: 'Maya R. – Powerlifting Debut Prep',
    category: 'Results',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    caption: 'Coached by Marcus Vance from zero barbell experience to taking gold in the 63kg regional division.',
    stats: '315 lb Squat PR',
    aspect: 'square'
  }
];
