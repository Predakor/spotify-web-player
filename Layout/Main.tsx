import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main>
      <span className="absolute left-0 -top-20 -z-50 h-[70vh] w-full bg-gradient-to-b from-primary-200" />
      {children}
    </main>
  );
}
export default Main;
