"use client";

import { useState, useEffect, useRef } from 'react';
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
    src: '/gallery/img1.jpg',
    alt: 'Gallery image 1',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/img2.jpg',
    alt: 'Gallery image 2',
    span: 'md:col-span-2 md:row-span-2', // Large featured image
  },
  {
    src: '/gallery/img3.jpg',
    alt: 'Gallery image 3',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/img4.jpg',
    alt: 'Gallery image 4',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/img2.jpg',
    alt: 'Gallery image 5',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/img6.jpg',
    alt: 'Gallery image 6',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: '/gallery/img7.jpg',
    alt: 'Gallery image 7',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/gallery/img1.jpg',
    alt: 'Gallery image 8',
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
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full auto-rows-[200px] md:auto-rows-[250px]"
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              'relative overflow-hidden rounded-2xl cursor-pointer group',
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
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Overlay on hover */}
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
