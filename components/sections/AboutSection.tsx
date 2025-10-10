"use client";

import { GallerySection } from './GallerySection';
import { Page } from '@/components/Page';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLParagraphElement>(null);
  const heading2Ref = useRef<HTMLParagraphElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading1 = heading1Ref.current;
    const heading2 = heading2Ref.current;
    const gallery = galleryRef.current;
    const section = sectionRef.current;

    if (!heading1 || !heading2 || !gallery || !section) return;

    // Set initial state
    gsap.set([heading1, heading2, gallery], { opacity: 1 });

    // Heading 1 animation - fade in and slide up
    gsap.fromTo(heading1,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Heading 2 animation - fade in and slide up with delay
    gsap.fromTo(heading2,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Gallery animation - fade in and scale
    gsap.fromTo(gallery,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reset',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Page ref={sectionRef} className="gap-[4rem] items-center text-center">
      <div>
        <p ref={heading1Ref} className="leading-[64px] text-[40px] text-[var(--color-primary-light)] w-[834px]" dir="auto">
          פנטהאוז משגע בקו ראשון אל מול נוף תכול אינסופי, מרינה וספינות...
        </p>
        <p ref={heading2Ref} className="leading-[40px] text-[24px] text-[var(--color-primary-light)] w-[868px]" dir="auto">
          מחכה לך הסוויטה המלכותית כיאה למלכה כמוך ביום כלולותיה - סלון מרווח ומואר, פינות ישיבה, כורסת כלה ואקססוריז עם ריחות קסומים ואווירה מרגיעה, מרפסת ענקית ופתוחה אל הים הגדול וארוחת בוקר עשירה ומפנקת שיעניקו לך כל מה שכלה צריכה ליום התארגנות מהנה ובלתי נשכח, להיראות במיטבך בצילומים וביום חופתך
        </p>
      </div>
      <div ref={galleryRef}>
        <GallerySection />
      </div>
    </Page>
  );
};
