"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ImageModal } from '@/components/ImageModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  alt: string;
  span?: string; // CSS grid span classes
}

// Gallery images from the homepage
const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/gallery-main.JPG',
    alt: 'Main gallery image',
    span: 'md:col-span-2 md:row-span-2', // Large featured image
  },
  {
    src: '/gallery/8a56397e-afbb-4d8c-928f-0b04b0c96a88.JPG',
    alt: 'Gallery image 1',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/906a1380-5a46-45fb-ab2e-0ec08a897128.JPG',
    alt: 'Gallery image 2',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/94dbff9a-5e08-436f-9a85-e2899713e173.JPG',
    alt: 'Gallery image 3',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/ac2508b8-baea-4df6-af78-792090ce5080.JPG',
    alt: 'Gallery image 4',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/adaa698b-9232-4eb3-a83c-c973f8dc7d68.JPG',
    alt: 'Gallery image 5',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/img1.jpg',
    alt: 'Gallery image 6',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: '/gallery/img2.jpg',
    alt: 'Gallery image 7',
    span: 'md:col-span-1 md:row-span-1',
  },
];

export const GalleryGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      {/* Masonry grid with responsive row heights for premium gallery experience */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full auto-rows-[12.5rem] md:auto-rows-[15.625rem]"
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              'relative overflow-hidden rounded-3xl cursor-pointer group',
              'col-span-1 row-span-1',
              image.span
            )}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 48rem) 100vw, (max-width: 64rem) 33vw, 25vw"
            />
            {/* Overlay on hover for visual feedback */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={galleryImages}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />
    </>
  );
};
