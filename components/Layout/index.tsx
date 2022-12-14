import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  const session = useSession();
  const router = useRouter();

  if (router.asPath === '/login') return <main>{children}</main>;

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
      <main className="flex-1">
        <Header />
        {children}
      </main>
      <aside>
        <Nav />
      </aside>
      <Footer />
    </>
  );
}
export default Layout;
export { Footer, Header };
