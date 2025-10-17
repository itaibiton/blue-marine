"use client";

import * as React from "react";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Mobile-specific hero component - Optimized for mobile viewport
 * Reduced empty space with tighter padding and larger video
 */
function HeroMobile({ ...props }: React.ComponentProps<"div">) {
  const handleScrollToCTA = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div data-slot="hero-mobile" className="flex md:pt-0 flex-col w-full md:justify-center items-center min-h-screen overflow-hidden pt-16" {...props}>
      {/* Video Section - Taller on mobile to fill space */}
      <div className="relative w-full h-[28rem] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Title Section - Tighter spacing for mobile */}
      <div className="flex items-center justify-center pt-12 pb-6 px-4 mt-16 md:mt-0">
        <p className="font-semibold leading-tight text-2xl text-center" dir="auto">
          <span className="text-[var(--color-secondary)]">
            היום המאושר והמרגש בחייך{' '}
          </span>
          <br />
          <span className="text-[var(--color-primary)]">
            מתחיל כאן
          </span>
        </p>
      </div>
      {/* CTA Section - Under the title */}
      <div className="flex items-center justify-center pb-8 px-4">
        <Button
          size="lg"
          className="rounded-full px-4 flex items-center gap-2"
          variant="default"
          onClick={handleScrollToCTA}
        >
          גלי עוד
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
}

/**
 * Desktop-specific hero component - Natural DOM flow
 * Order: Title -> Video -> CTA
 * Includes GSAP parallax animation on video
 */
function HeroDesktop({ ...props }: React.ComponentProps<"div">) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    // Check if mobile (disable parallax on mobile for performance)
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

  const handleScrollToCTA = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={sectionRef}
      data-slot="hero-desktop"
      className="flex flex-col w-full min-h-screen relative overflow-hidden"
      {...props}
    >
      {/* Title Section */}
      <div className="flex items-center justify-center pt-32 pb-8 px-8 lg:px-32">
        <p className="font-semibold leading-tight text-4xl lg:text-5xl text-center" dir="auto">
          <span className="text-[var(--color-secondary)]">
            היום המאושר והמרגש בחייך{' '}
          </span>
          <span className="text-[var(--color-primary)]">
            מתחיל כאן
          </span>
        </p>
      </div>

      {/* Full Width Video with Parallax */}
      <div className="relative w-full h-96 lg:h-[35rem] overflow-hidden">
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
            <source src="/hero-video.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex items-center justify-center py-10 lg:py-12 px-8 lg:px-32">
        <Button
          size="lg"
          className="rounded-full px-4 flex items-center gap-2"
          variant="default"
          onClick={handleScrollToCTA}
        >
          גלי עוד
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
}

/**
 * Main Hero Section orchestrator
 * Conditionally renders mobile or desktop version based on screen size
 * Uses mounted state to prevent hydration mismatches
 */
function Hero({ ...props }: React.ComponentProps<"div">) {
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Set mounted to true after initial render
    setMounted(true);

    // Check initial screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    // Add resize listener for responsive behavior
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  // Render appropriate component based on screen size
  return isMobile ? <HeroMobile {...props} /> : <HeroDesktop {...props} />;
}

export { Hero, HeroMobile, HeroDesktop };
