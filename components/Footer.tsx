import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-white py-8 px-4 md:px-8 lg:px-[8rem]">
      <div className="flex flex-col gap-6 w-full max-w-full">
        {/* Top Section - Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pb-6 border-b border-white/20">
          <a
            href="/privacy-policy.pdf"
            download
            className="text-white/90 hover:text-white transition-colors text-sm md:text-base"
            dir="auto"
          >
            מדיניות פרטיות
          </a>
          <div className="hidden md:block w-px h-4 bg-white/30"></div>
          <a
            href="/terms-of-use.pdf"
            download
            className="text-white/90 hover:text-white transition-colors text-sm md:text-base"
            dir="auto"
          >
            תנאי שימוש
          </a>
        </div>

        {/* Bottom Section - Developer Credit */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/70">
          <span dir="auto">פותח על ידי</span>
          <a
            href="mailto:info@kohelet.digital"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium"
          >
            <span>Kohelet Digital</span>
            <Mail className="w-3 h-3 md:w-4 md:h-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center text-xs text-white/60">
          <p dir="auto">© {new Date().getFullYear()} Blue Marine. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};
