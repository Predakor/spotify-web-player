import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  const session = useSession();

  if (session.status === 'loading')
    return (
      <main className="flex items-center justify-center w-full h-full">
        <div className="font-bold text-3xl text-primary-700">
          <p className="animate-pulse">Loading</p>
        </div>
      </main>
    );

  if (session.status !== 'authenticated') return null;

  return (
    <>
      <Aside />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
export { Footer, Header };
