import { Button } from '@/components/ui/button';

const NavLink = ({ text }: { text: string }) => {
  return (
    <Button variant="link" className="cursor-pointer">
      {text}
    </Button>
  );
};

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)] flex h-[80px] items-center justify-between w-full px-[8rem]">
      <div className="flex gap-[32px] items-start justify-center">
        <NavLink text="דף הבית" />
        <NavLink text="הפנטהאוז" />
        <NavLink text="גלריה" />
        <NavLink text="יצירת קשר" />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-['Source_Serif_Pro',serif] font-semibold text-[24px] text-[var(--color-primary)] tracking-[2.4px]">
            BLUE MARINE
          </p>
          <p className="font-['Source_Serif_Pro',serif] font-normal text-[14px] text-[var(--color-secondary-dark)] tracking-[2.8px]">
            PALACE OF BRIDES
          </p>
        </div>
      </div>
    </div>
  );
};
