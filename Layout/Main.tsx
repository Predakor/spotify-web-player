import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  className: string;
}

function Main({ children, className }: MainProps) {
  return (
    <main className={`${className}`}>
      <span className="absolute -top-20 h-[70vh] w-full bg-gradient-to-b from-primary-200 -z-10" />
      {children}
    </main>
  );
}
export default Main;
