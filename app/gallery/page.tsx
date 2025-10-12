"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Page } from '@/components/Page';

export default function GalleryPage() {
  return (
    <div className="bg-[var(--color-background)] flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <Navbar />

      <Page className="gap-8 md:gap-12 py-24 md:py-32" fullHeight={false}>
        {/* Page Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-3" dir="auto">
            גלריית תמונות
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-primary-light)]" dir="auto">
            הצצה לפנטהאוז המדהים שלנו
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="relative z-10 w-full">
          <GalleryGrid />
        </div>
      </Page>

      <Footer />
    </div>
  );
}
