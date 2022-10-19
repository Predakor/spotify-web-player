import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { type } from 'os';
import { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  const session = useSession();
  const router = useRouter();

  if (router.asPath === '/login') return <main>{children}</main>;

  return (
    session.status === 'authenticated' && (
      <>
        <Nav />
        <main>{children}</main>
        <Footer />
      </>
    )
  );
}
export default Layout;
export { Footer, Nav };
