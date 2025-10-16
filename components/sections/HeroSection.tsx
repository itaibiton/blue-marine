"use client";

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    const cta = ctaRef.current;

    if (!section || !title || !image || !cta) return;

    // Check if mobile (disable parallax on mobile for performance)
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // Image parallax - subtle scale and upward movement (desktop only)
      gsap.to(image, {
        scale: 1.2,
        y: -30, // -1.875rem equivalent
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col w-full min-h-screen relative overflow-hidden">
      {/* Title Section - Smooth typography progression */}
      <div
        ref={titleRef}
        className="flex items-center justify-center pt-20 md:pt-32 pb-6 md:pb-8 px-4 md:px-8 lg:px-32"
      >
        <p className="font-semibold leading-tight text-2xl md:text-4xl lg:text-5xl text-center" dir="auto">
          <span className="text-[var(--color-secondary)]">היום המאושר והמרגש בחייך </span>
          <span className="text-[var(--color-primary)]">מתחיל כאן</span>
        </p>
      </div>

      {/* Full Width Video with Parallax - Progressive height scaling */}
      <div className="relative w-full h-80 md:h-96 lg:h-[35rem] overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CTA Section - Consistent spacing scale */}
      <div
        ref={ctaRef}
        className="flex items-center justify-center py-8 md:py-10 lg:py-12 px-4 md:px-8 lg:px-32"
      >
        <Button size="lg" className="rounded-full px-4 flex items-center gap-2" variant="default" onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}>
          גלי עוד
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};
