import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className="flex min-h-screen flex-col gap-2 px-4">{children}</main>
  );
}
export default Main;
