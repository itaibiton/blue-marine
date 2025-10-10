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

    // Check if mobile (disable parallax on mobile)
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // Image parallax - subtle scale and upward movement (desktop only)
      gsap.to(image, {
        scale: 1.2,
        y: -30,
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
      {/* Title Section with Parallax */}
      <div
        ref={titleRef}
        className="flex items-center justify-center pt-[80px] md:pt-[120px] pb-[16px] md:pb-[32px] px-4 md:px-8 lg:px-[8rem]"
      >
        <p className="font-semibold leading-[32px] md:leading-[48px] lg:leading-[64px] text-[24px] md:text-[36px] lg:text-[48px] text-center" dir="auto">
          <span className="text-[var(--color-secondary)]">היום המאושר והמרגש בחייך </span>
          <span className="text-[var(--color-primary)]">מתחיל כאן</span>
        </p>
      </div>

      {/* Full Width Video with Parallax */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden">
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

      {/* CTA Section with Parallax */}
      <div
        ref={ctaRef}
        className="flex items-center justify-center py-[24px] md:py-[36px] lg:py-[48px] px-4 md:px-8 lg:px-[8rem]"
      >
        <Button className='rounded-full px-4 flex items-center gap-2' variant="default">
          גלי עוד
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};
