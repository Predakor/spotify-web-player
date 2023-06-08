import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className="flex min-h-screen flex-col gap-2 overflow-y-scroll p-4 px-2 md:px-4">
      {children}
    </main>
  );
}
export default Main;
