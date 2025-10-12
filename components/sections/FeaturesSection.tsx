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
  gradient?: string;
  delay?: number;
  titleColor?: string;
}>(
  ({ emoji, title, description, bgColor, className, gradient, delay = 0, titleColor }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `relative flex flex-col gap-3 md:gap-4 items-center justify-center p-4 md:p-6 overflow-hidden rounded-3xl max-w-full`,
          bgColor || 'bg-white/10 backdrop-blur-sm border border-white/20',
          className
        )}
        style={{
          animationDelay: `${delay}ms`,
          animation: 'fadeInUp 0.8s ease-out forwards'
        }}
      >
        <div className="relative z-10">
          <p className="font-medium text-3xl md:text-4xl lg:text-5xl text-center">
            {emoji}
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-2 md:gap-3 items-center text-center w-full max-w-full">
          <h3 className={cn(
            "font-bold text-lg md:text-xl lg:text-2xl leading-tight",
            titleColor || 'text-primary'
          )} dir="auto">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90" dir="auto">
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

// Add CSS animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

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
    <Page ref={sectionRef} className="gap-8 md:gap-12 relative ">
      <div className="relative z-10 w-full">
        {/* Dynamic bento grid layout */}
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
            gradient="before:from-[var(--color-primary)]/20 before:to-[var(--color-secondary)]/20"
            delay={0}
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
            gradient="before:from-[var(--color-secondary)]/20 before:to-[var(--color-primary)]/20"
            delay={100}
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
            gradient="before:from-[var(--color-secondary-light)]/20 before:to-[var(--color-primary)]/20"
            delay={200}
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
            delay={300}
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
            delay={400}
          />
        </div>
      </div>
    </Page>
  );
};