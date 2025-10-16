"use client";

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ text, onClick, href, isMobile }: { text: string; onClick?: () => void; href?: string; isMobile?: boolean }) => {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        <Button
          variant="link"
          className={`cursor-pointer ${isMobile ? 'text-lg font-medium' : ''} ${isActive ? 'text-[var(--color-secondary)] underline underline-offset-4' : ''}`}
        >
          {text}
        </Button>
      </Link>
    );
  }
  return (
    <Button variant="link" className={`cursor-pointer ${isMobile ? 'text-lg font-medium' : ''}`} onClick={onClick}>
      {text}
    </Button>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (isMobileMenuOpen) {
      gsap.to(menu, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      gsap.to(menu, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      });
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)] flex h-16 md:h-20 items-center justify-between w-full px-4 md:px-8 lg:px-[8rem]">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex gap-8 items-start justify-center">
          <NavLink text="דף הבית" href="/" />
          <NavLink text="הפנטהאוז" />
          <NavLink text="גלריה" href="/gallery" />
          <NavLink text="יצירת קשר" />
        </div>

        {/* Logo - Centered on mobile, right side on desktop */}
        <div className="flex gap-4 md:order-last">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="flex flex-col items-center justify-center">
              <p className="font-['Source_Serif_Pro',serif] font-semibold text-lg md:text-2xl text-[var(--color-primary)] tracking-widest">
                BLUE MARINE
              </p>
              <p className="font-['Source_Serif_Pro',serif] font-normal text-xs md:text-sm text-[var(--color-secondary-dark)] tracking-widest opacity-90">
                PALACE OF BRIDES
              </p>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Menu - Hidden on desktop */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-[var(--color-background)] z-40 md:hidden shadow-2xl translate-x-full"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col gap-6 pt-24 px-8">
          <div className="h-11">
            <NavLink text="דף הבית" href="/" onClick={handleNavClick} isMobile />
          </div>
          <div className="h-11">
            <NavLink text="הפנטהאוז" onClick={handleNavClick} isMobile />
          </div>
          <div className="h-11">
            <NavLink text="גלריה" href="/gallery" onClick={handleNavClick} isMobile />
          </div>
          <div className="h-11">
            <NavLink text="יצירת קשר" onClick={handleNavClick} isMobile />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
