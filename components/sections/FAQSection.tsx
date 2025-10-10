"use client";

import { useState, useEffect, useRef, forwardRef } from 'react';
import { Page } from '@/components/Page';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = forwardRef<HTMLDivElement, { question: string; answer?: string; isOpen: boolean; onClick: () => void }>(
  ({ question, answer, isOpen, onClick }, ref) => {
    return (
      <div ref={ref} className="border-[var(--color-primary-light)] border-b border-l-0 border-r-0 border-solid border-t-0 flex flex-col items-start pb-[16px] w-full">
        <button onClick={onClick} className="flex gap-[16px] md:gap-[32px] items-center justify-between w-full hover:opacity-80 transition-opacity">
          <div className="flex flex-col font-medium leading-[0] text-[16px] md:text-[20px] text-[var(--color-primary)] text-right flex-1">
            <p className="leading-[24px] md:leading-[32px] whitespace-normal" dir="auto">
              {question}
            </p>
          </div>
          <div className="relative shrink-0 size-[24px] md:size-[32px]">
            <span className="text-[var(--color-primary)] text-[20px] md:text-[24px]">{isOpen ? '−' : '+'}</span>
          </div>
        </button>
        {isOpen && answer && (
          <div className="flex flex-col font-normal leading-[0] text-[16px] md:text-[20px] text-[var(--color-primary)] text-right mt-2">
            <p className="leading-[24px] md:leading-[32px] whitespace-normal" dir="auto">
              {answer}
            </p>
          </div>
        )}
      </div>
    );
  }
);

FAQItem.displayName = 'FAQItem';

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current.filter(Boolean);

    if (!section || items.length === 0) return;

    // Animate FAQ items with stagger
    gsap.fromTo(items,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
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

  const faqItems = [
    {
      question: 'איפה נמצא הפנטהאוז?',
      answer: 'הפנטהאוז ממוקם ברחוב אקסודוס באשדוד, ממש על קו החוף, עם נוף מרהיב לים.'
    },
    {
      question: 'מה כלול בהשכרת הפנטהאוז לכלה ולמלוות?'
    },
    {
      question: 'האם אפשרות להוסיף שירותי עיצוב נוספים?'
    },
    {
      question: 'מה מספר האנשים שניתן לארח?'
    },
    {
      question: 'האם קיימת חניה זמינה במקום?'
    }
  ];

  return (
    <Page ref={sectionRef} className="gap-[32px] items-end pb-[8px]">
      {faqItems.map((item, idx) => (
        <FAQItem
          key={idx}
          ref={el => itemsRef.current[idx] = el}
          question={item.question}
          answer={item.answer}
          isOpen={openFAQ === idx}
          onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
        />
      ))}
    </Page>
  );
};
