"use client";

import { useEffect, useRef } from 'react';
import { Page } from '@/components/Page';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MapPin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ContactFAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const faq = faqRef.current;
    const map = mapRef.current;
    const contactInfo = contactInfoRef.current;

    if (!section || !faq || !map || !contactInfo) return;

    // FAQ animation - slide from left
    gsap.fromTo(faq,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Map animation - fade and scale
    gsap.fromTo(map,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Contact info animation - slide from right
    gsap.fromTo(contactInfo,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
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
      question: 'מה כלול בהשכרת הפנטהאוז לכלה ולמלוות?',
      answer: 'ההשכרה כוללת סלון מרווח ומעוצב, מרפסת עם נוף לים, פינות ישיבה נוחות, כורסת כלה, מערכת שמע, ארוחת בוקר עשירה בהתאמה אישית, וסידור בלונים מעוצב. הכל מאובזר ומוכן להעניק לך יום בלתי נשכח.'
    },
    {
      question: 'האם אפשרות להוסיף שירותי עיצוב נוספים?',
      answer: 'בהחלט! ניתן להוסיף שירותי עיצוב נוספים כגון עיצוב פרחים, תאורה מיוחדת, קישוטים אישיים, ותוספות מפתיעות נוספות. נשמח להתאים עבורך חבילה אישית בהתאם לסגנון ולחזון שלך ליום המיוחד.'
    },
    {
      question: 'מה מספר האנשים שניתן לארח?',
      answer: 'הפנטהאוז מתאים לארח את הכלה ועד 8-10 מלוות באווירה נעימה ומרווחת. המרחב מאפשר לכולן ליהנות מנוחות מהסלון, המרפסת ופינות ההתארגנות השונות.'
    },
    {
      question: 'האם קיימת חניה זמינה במקום?',
      answer: 'כן, יש חניה זמינה בסביבה הקרובה לבניין. המיקום הנוח מאפשר גישה נוחה עם אפשרויות חניה ברחוב ובחניונים סמוכים.'
    }
  ];

  return (
    <Page ref={sectionRef} className="gap-8 md:gap-12 relative">
      {/* Section Title */}
      <div className="relative z-10 text-center mb-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2" dir="auto">
          שאלות נפוצות ויצירת קשר
        </h2>
        <p className=" md:text-lg text-[var(--color-primary-light)]" dir="auto">
          כל המידע שאת צריכה במקום אחד
        </p>
      </div>

      {/* FAQ and Map - Side by Side */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full items-start">
        {/* FAQ Section */}
        <div ref={faqRef}>
          <div className="rounded-3xl p-6 md:p-8">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-[var(--color-primary-light)]/30 border-b last:border-b-0"
                >
                  <AccordionTrigger className="text-[16px] md:text-[18px] text-[var(--color-primary)] text-right hover:no-underline font-semibold py-4 hover:text-[var(--color-secondary)] transition-colors">
                    <span dir="auto" className="text-right w-full">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] md:text-[16px] text-[var(--color-primary-light)] text-right pb-4">
                    <p dir="auto" className="leading-[24px] md:leading-[28px]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Map Container */}
        <div ref={mapRef}>
          <div className="rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.8945!2d34.6384!3d31.8082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7c8e8e8e8e8%3A0x1234567890abcdef!2sExodus%20St%2030%2C%20Ashdod!5e0!3m2!1sen!2sil!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blue Marine Penthouse Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Info - Full Width Below */}
      <div ref={contactInfoRef} className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          {/* Phone */}
          <a
            href="tel:+972503586949"
            className="flex items-center gap-3 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg md:text-xl font-medium" dir="ltr">050-358-6949</span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-[var(--color-primary-light)]/30"></div>

          {/* Address */}
          <a
            href="https://maps.google.com/?q=Exodus+30+Ashdod+Israel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg md:text-xl font-medium" dir="auto">אקסודוס 30, אשדוד</span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-[var(--color-primary-light)]/30"></div>

          {/* Email */}
          <a
            href="mailto:info@bluemarine.co.il"
            className="flex items-center gap-3 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-lg md:text-xl font-medium" dir="ltr">info@bluemarine.co.il</span>
          </a>
        </div>
      </div>
    </Page>
  );
};
