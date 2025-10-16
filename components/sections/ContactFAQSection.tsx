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

    // FAQ animation - smooth fade in with subtle upward movement
    gsap.fromTo(faq,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Map animation - staggered with FAQ
    gsap.fromTo(map,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
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

    // Contact info animation - final element with delay
    gsap.fromTo(contactInfo,
      { opacity: 0, y: 20 },
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
    <Page ref={sectionRef} id="contact" data-section="contact" className="gap-12 md:gap-16 relative pb-12 md:pb-0">
      {/* FAQ and Map - Side by Side Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-full items-start">
        {/* FAQ Section */}
        <div ref={faqRef} className="max-w-full">
          <div className="rounded-3xl p-6 md:p-8 max-w-full">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-[var(--color-primary-light)]/30 border-b last:border-b-0"
                >
                  {/* FAQ question with improved typography */}
                  <AccordionTrigger className="text-base md:text-lg text-[var(--color-primary)] text-right hover:no-underline font-semibold py-4 hover:text-[var(--color-secondary)] transition-colors">
                    <span dir="auto" className="text-right w-full">{item.question}</span>
                  </AccordionTrigger>
                  {/* FAQ answer with relaxed leading for readability */}
                  <AccordionContent className="text-sm md:text-base text-[var(--color-primary-light)] text-right pb-4">
                    <p dir="auto" className="leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Map Container - Progressive height scaling */}
        <div ref={mapRef} className="max-w-full">
          <div className="rounded-3xl overflow-hidden h-96 md:h-[31.25rem] lg:h-[37.5rem] max-w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.8945!2d34.6384!3d31.8082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7c8e8e8e8e8%3A0x1234567890abcdef!2sExodus%20St%2030%2C%20Ashdod!5e0!3m2!1sen!2sil!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, maxWidth: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blue Marine Penthouse Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Info - Full width below map and FAQ */}
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
