"use client";

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const ImageModal = ({ isOpen, onClose, images, currentIndex, onNavigate }: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNavigate, onClose]);

  if (!images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none" showCloseButton={false}>
        <VisuallyHidden>
          <DialogTitle>{currentImage.alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={() => onNavigate('prev')}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />

          </button>

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={() => onNavigate('next')}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />

          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
