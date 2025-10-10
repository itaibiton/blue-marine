"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  alt: string;
}

const COLLAPSED_WIDTH = 100;
const EXPANDED_FLEX_GROW = 1;
const ANIMATION_DURATION = 0.7;

export const GallerySection = () => {
  const galleryImages: GalleryImage[] = [
    { src: '/gallery/img1.jpg', alt: 'Gallery image 1' },
    { src: '/gallery/img2.jpg', alt: 'Gallery image 2' },
    { src: '/gallery/img3.jpg', alt: 'Gallery image 3' },
    { src: '/gallery/img4.jpg', alt: 'Gallery image 4' },
    { src: '/gallery/img2.jpg', alt: 'Gallery image 5' },
    { src: '/gallery/img6.jpg', alt: 'Gallery image 6' },
    { src: '/gallery/img7.jpg', alt: 'Gallery image 7' },
  ];

  const [expandedIndex, setExpandedIndex] = useState(3); // Middle image expanded by default
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  // Initial setup and scroll animations (runs once on mount)
  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    const images = imagesRef.current.filter(Boolean);

    if (!container || !button || images.length === 0) return;

    // Set initial state for all images
    images.forEach((img, idx) => {
      gsap.set(img, {
        flexGrow: idx === 3 ? EXPANDED_FLEX_GROW : 0,
        flexShrink: 0,
        flexBasis: idx === 3 ? '500px' : `${COLLAPSED_WIDTH}px`,
      });
    });

    // Scroll reveal animation
    gsap.fromTo(
      images,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Button animation
    gsap.fromTo(
      button,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array - runs once on mount

  // Handle expansion animation
  useEffect(() => {
    const images = imagesRef.current.filter(Boolean);
    if (images.length === 0) return;

    // Kill any existing animations
    animationsRef.current.forEach(anim => anim.kill());
    animationsRef.current = [];

    // Animate all images to their new state
    images.forEach((img, idx) => {
      const isExpanded = idx === expandedIndex;

      const animation = gsap.to(img, {
        flexGrow: isExpanded ? EXPANDED_FLEX_GROW : 0,
        flexShrink: 0,
        flexBasis: isExpanded ? '500px' : `${COLLAPSED_WIDTH}px`,
        duration: ANIMATION_DURATION,
        ease: 'power3.inOut',
      });

      animationsRef.current.push(animation);
    });

    return () => {
      animationsRef.current.forEach(anim => anim.kill());
      animationsRef.current = [];
    };
  }, [expandedIndex]);

  const handleImageInteraction = (index: number) => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-[32px] items-center justify-center w-full">
      {/* Desktop Gallery */}
      <div className="hidden md:flex gap-4 w-full h-[400px]">
        {galleryImages.map((item, idx) => (
          <div
            key={idx}
            ref={el => (imagesRef.current[idx] = el)}
            onMouseEnter={() => handleImageInteraction(idx)}
            onClick={() => handleImageInteraction(idx)}
            className="relative rounded-[24px] overflow-hidden cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Mobile Gallery - Horizontal Scroll */}
      <div className="md:hidden w-full overflow-x-auto overflow-y-hidden">
        <div className="flex gap-4 snap-x snap-mandatory pb-2">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-[24px] overflow-hidden flex-shrink-0 w-[280px] h-[350px] snap-center"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          ))}
        </div>
      </div>

      <div ref={buttonRef}>
        <Button variant="default">לגלריה</Button>
      </div>
    </div>
  );
};
