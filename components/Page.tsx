import { ReactNode, forwardRef } from 'react';

interface PageProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children, className = '', fullHeight = true }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col w-full px-[8rem] ${fullHeight ? 'min-h-screen justify-center' : ''} ${className}`}
    >
      {children}
    </div>
  );
});

Page.displayName = 'Page';
