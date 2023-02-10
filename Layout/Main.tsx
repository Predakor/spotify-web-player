import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className="row-span- h-screen overflow-auto px-4">{children}</main>
  );
}
export default Main;
