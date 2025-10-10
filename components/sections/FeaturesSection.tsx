"use client";

import { Page } from '@/components/Page';
import { forwardRef } from 'react';

const FeatureCard = forwardRef<HTMLDivElement, { emoji: string; title: string; description: string; bgColor?: string }>(
  ({ emoji, title, description, bgColor }, ref) => {
    return (
      <div ref={ref} className={`flex flex-1 flex-col gap-[32px] items-center overflow-clip p-[16px] rounded-[20px] ${bgColor || ''}`}>
        <p className="font-medium leading-[48px] text-[48px] text-[var(--color-primary)] text-center w-[283px]">
          {emoji}
        </p>
        <div className="flex flex-col font-medium gap-[16px] items-center text-center w-full">
          <p className="leading-[12px] text-[24px]" dir="auto">
            {title}
          </p>
          <p className="leading-[32px] text-[20px]" dir="auto">
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

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    // Animate each feature card with stagger
    gsap.fromTo(cards,
      { opacity: 0, y: 80, rotateX: -15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.15,
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
    <Page ref={sectionRef} className="gap-[32px] md:gap-[64px] items-start">
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] md:h-[289px] items-start w-full">
        <FeatureCard
          ref={el => cardsRef.current[0] = el}
          emoji="📍"
          title="מיקום מנצח על קו הים"
          description="הפנטהאוז שוכן ברחוב אקסודוס המבוקש, ממש על חוף הים של אשדוד, ומציע גישה ישירה לחול ולמים תוך דקות."
        />
        <FeatureCard
          ref={el => cardsRef.current[1] = el}
          emoji="🌊"
          title="מרפסת יוקרתית עם נוף לים"
          description="מרפסת הפנטהאוז פונה ישירות לים הפתוח, מזמינה להירגע או להצטלם ברוגע ובריזה משכרת, רגע לפני ההתרגשות."
        />
        <FeatureCard
          ref={el => cardsRef.current[2] = el}
          emoji="🛋️"
          title="סלון מרוהט ומאובזר"
          description="הסלון המרווח כולל ריהוט יוקרתי ונוח, מערכת שמע, פינות ישיבה אלגנטיות ואבזור מודרני להשלמת חוויית האירוח."
        />
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] md:h-[390px] items-start w-full">
        <FeatureCard
          ref={el => cardsRef.current[3] = el}
          emoji="🥐"
          title="ארוחת בוקר לבחירה"
          description="במהלך השהות בפנטהאוז, כלה והמלוות נהנות מאפשרות להזמין ארוחת בוקר עשירה בהתאמה אישית. ניתן לבחור מתוך מגוון תפריטים – ארוחה חלבית קלאסית עם הגבינות, לחמים, סלטים טריים, מאפים ושתייה חמה/קרה, או אלטרנטיבות טבעוניות/בריאות לפי העדפה."
          bgColor="bg-[rgba(47,75,83,0.95)] text-[var(--color-secondary)]"
        />
        <FeatureCard
          ref={el => cardsRef.current[4] = el}
          emoji="🎈"
          title="סידור בלונים ייחודי"
          description="עיצוב חלל הפנטהאוז עם סידור בלונים בהתאמה אישית לצרכים ולסגנון הכלה. ניתן לבחור בין מגוון עיצובים וקומבינציות צבעים, החל מסידורי בלונים קלאסיים בגווני לבן וזהב ועד לעיצובים טרנדיים, קשתות בלונים, בלוני הליום ענקיים ואפילו עיצוב אישי עם שמות, כיתובים או תוספות מפתיעות."
          bgColor="bg-[var(--color-secondary-light)] text-[var(--color-primary)]"
        />
      </div>
    </Page>
  );
};
