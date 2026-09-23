/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { MembershipsSection } from './components/MembershipsSection';
import { CoachesSection } from './components/CoachesSection';
import { GallerySection } from './components/GallerySection';
import { AICoachSection } from './components/AICoachSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Coach } from './data/coaches';
import { MembershipPlan } from './data/memberships';

export default function App() {
  // Global modal state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'trial' | 'coach' | 'membership' | 'service'>('trial');
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null);

  // Trigger handlers
  const handleOpenTrialModal = () => {
    setBookingType('trial');
    setSelectedCoach(null);
    setSelectedPlan(null);
    setSelectedServiceTitle(null);
    setIsBookingModalOpen(true);
  };

  const handleBookCoach = (coach: Coach) => {
    setBookingType('coach');
    setSelectedCoach(coach);
    setSelectedPlan(null);
    setSelectedServiceTitle(null);
    setIsBookingModalOpen(true);
  };

  const handleClaimPlan = (plan: MembershipPlan) => {
    setBookingType('membership');
    setSelectedPlan(plan);
    setSelectedCoach(null);
    setSelectedServiceTitle(null);
    setIsBookingModalOpen(true);
  };

  const handleBookService = (serviceName: string) => {
    setBookingType('service');
    setSelectedServiceTitle(serviceName);
    setSelectedCoach(null);
    setSelectedPlan(null);
    setIsBookingModalOpen(true);
  };

  const handleScrollToMemberships = () => {
    const el = document.getElementById('memberships');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 selection:bg-orange-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Cinematic Visuals & Live Floor Stats */}
        <Hero
          onJoinClick={handleScrollToMemberships}
          onTrialClick={handleOpenTrialModal}
        />

        {/* 2. Core Pillars / Why Choose Us */}
        <WhyChooseUs />

        {/* 3. Services & Classes */}
        <ServicesSection onBookService={handleBookService} />

        {/* 4. Memberships & Dynamic Offers */}
        <MembershipsSection onClaimPlan={handleClaimPlan} />

        {/* 5. Master Coaches & Trainers */}
        <CoachesSection onBookCoach={handleBookCoach} />

        {/* 6. Gym Gallery / Atmosphere & Lightbox */}
        <GallerySection />

        {/* 7. AI Fitness Coach (powered by n8n) */}
        <AICoachSection />

        {/* 8. Athlete Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture Modal strictly after 5 seconds of page presence */}
      <LeadCaptureModal />

      {/* Unified Booking Modal for Trial, Coach Sessions, & Plans */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        bookingType={bookingType}
        coachData={selectedCoach}
        planData={selectedPlan}
        serviceTitle={selectedServiceTitle}
      />

      {/* Floating WhatsApp and Phone quick action buttons */}
      <FloatingActions />
    </div>
  );
}
