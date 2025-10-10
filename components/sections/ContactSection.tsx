"use client";

import Image from 'next/image';
import { Page } from '@/components/Page';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const map = mapRef.current;
    const info = infoRef.current;

    if (!section || !map || !info) return;

    // Map animation - fade in and scale
    gsap.fromTo(map,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Contact info animation - slide from right
    gsap.fromTo(info,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Page ref={sectionRef} className="gap-[32px] items-end pb-[8px]">
      <div ref={mapRef} className="h-[398px] relative rounded-[20px] w-full overflow-hidden">
        <Image
          src="/map.jpg"
          alt="Location Map"
          fill
          className="object-cover"
        />
      </div>
      <div ref={infoRef} className="flex flex-col gap-[8px] items-end justify-end w-full">
        <div className="flex flex-col font-medium gap-[8px] items-start leading-[0] text-[20px] text-[var(--color-primary)] text-right">
          <p className="leading-[32px]" dir="auto">
            📞  050 - 358 - 6949
          </p>
          <p className="leading-[32px]" dir="auto">
            📍 אקסודוס 30, אשדוד, ישראל
          </p>
        </div>
      </div>
    </Page>
  );
};
