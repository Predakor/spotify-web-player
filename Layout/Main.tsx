import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <main className="px-4">{children}</main>;
}
export default Main;
