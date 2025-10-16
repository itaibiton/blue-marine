import { ReactNode, forwardRef } from 'react';

interface PageProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  id?: string;
  'data-section'?: string;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children, className = '', fullHeight = true, id, 'data-section': dataSection }, ref) => {
  return (
    <div
      ref={ref}
      id={id}
      data-section={dataSection}
      className={`flex flex-col w-full max-w-full px-4 md:px-8 lg:px-[8rem] overflow-x-hidden ${fullHeight ? 'min-h-screen justify-center' : ''} ${className}`}
    >
      {children}
    </div>
  );
});

Page.displayName = 'Page';
