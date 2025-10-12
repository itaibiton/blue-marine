"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ContactFAQSection } from '@/components/sections/ContactFAQSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[var(--color-background)] flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContactFAQSection />

      <Footer />
    </div>
  );
}
