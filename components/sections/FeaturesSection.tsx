"use client";

import { Page } from '@/components/Page';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const FeatureCard = forwardRef<HTMLDivElement, {
  emoji: string;
  title: string;
  description: string;
  bgColor?: string;
  className?: string;
  titleColor?: string;
}>(
  ({ emoji, title, description, bgColor, className, titleColor }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col gap-4 items-center justify-center p-4 md:p-6 overflow-hidden rounded-3xl max-w-full",
          bgColor || 'bg-white/10 backdrop-blur-sm border border-white/20',
          className
        )}
      >
        <div className="relative z-10">
          <p className="font-medium text-3xl md:text-4xl lg:text-5xl text-center">
            {emoji}
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-3 items-center text-center w-full max-w-full">
          {/* Card title with snug leading for better hierarchy */}
          <h3 className={cn(
            "font-bold text-lg md:text-xl leading-snug",
            titleColor || 'text-primary'
          )} dir="auto">
            {title}
          </h3>
          {/* Card description with relaxed leading for readability */}
          <p className="text-sm md:text-base leading-relaxed opacity-90" dir="auto">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * FeaturesSection Component
 *
 * Displays feature cards in a dynamic bento grid layout with stagger animations.
 * Animations are defined in globals.css for better performance and maintainability.
 */
export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    // Create a context for proper cleanup
    const ctx = gsap.context(() => {
      // Animate each feature card with progressive stagger effect
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Page ref={sectionRef} id="features" data-section="features" className="gap-8 md:gap-12 relative">
      <div className="relative z-10 w-full">
        {/* Dynamic bento grid layout with responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-fr max-w-full">
          {/* First row - Location card spans 2 columns */}
          <FeatureCard
            ref={el => {
              cardsRef.current[0] = el;
            }}
            emoji="📍"
            title="מיקום מנצח על קו הים"
            description="נטהאוז שוכן ברחוב אקסודוס המבוקש, ממש על חוף הים של אשדוד, ומציע גישה ישירה לחול ולמים תוך דקות."
            className="col-span-1 md:col-span-2"
          />

          {/* Balcony card spans 2 columns */}
          <FeatureCard
            ref={el => {
              cardsRef.current[1] = el;
            }}
            emoji="🌊"
            title="מרפסת יוקרתית עם נוף לים"
            description="מרפסת הפנטהאוז פונה ישירות לים הפתוח, מזמינה להירגע או להצטלם ברוגע ובריזה משכרת, רגע לפני ההתרגשות."
            className="col-span-1 md:col-span-2"
          />

          {/* Living room card spans 2 columns */}
          <FeatureCard
            ref={el => {
              cardsRef.current[2] = el;
            }}
            emoji="🛋️"
            title="סלון מרוהט ומאובזר"
            description="הסלון המרווח כולל ריהוט יוקרתי ונוח, מערכת שמע, פינות ישיבה אלגנטיות ואבזור מודרני להשלמת חוויית האירוח."
            className="col-span-1 md:col-span-2"
          />

          {/* Breakfast card spans 3 columns */}
          <FeatureCard
            ref={el => {
              cardsRef.current[3] = el;
            }}
            emoji="🥐"
            title="ארוחת בוקר לבחירה"
            description="במהלך השהות בפנטהאוז, כלה והמלוות נהנות מאפשרות להזמין ארוחת בוקר עשירה בהתאמה אישית. ניתן לבחור מתוך מגוון תפריטים – ארוחה חלבית קלאסית עם הגבינות, לחמים, סלטים טריים, מאפים ושתייה חמה/קרה, או אלטרנטיבות טבעוניות/בריאות לפי העדפה."
            bgColor="bg-[rgba(47,75,83,0.95)] text-[var(--color-secondary)] "
            className="col-span-1 md:col-span-3"
            titleColor="text-[var(--color-secondary)]"
          />

          {/* Balloons card spans 3 columns */}
          <FeatureCard
            ref={el => {
              cardsRef.current[4] = el;
            }}
            emoji="🎈"
            title="סידור בלונים ייחודי"
            description="עיצוב חלל הפנטהאוז עם סידור בלונים בהתאמה אישית לצרכים ולסגנון הכלה. ניתן לבחור בין מגוון עיצובים וקומבינציות צבעים, החל מסידורי בלונים קלאסיים בגווני לבן וזהב ועד לעיצובים טרנדיים, קשתות בלונים, בלוני הליום ענקיים ואפילו עיצוב אישי עם שמות, כיתובים או תוספות מפתיעות."
            bgColor="bg-[var(--color-secondary-light)] text-[var(--color-primary)] "
            className="col-span-1 md:col-span-3"
            titleColor="text-[var(--color-primary)]"
          />
        </div>
      </div>
    </Page>
  );
};