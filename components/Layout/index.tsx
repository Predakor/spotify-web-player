import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  const session = useSession();
  const router = useRouter();

  if (router.asPath === '/login') return <main>{children}</main>;

  if (session.status === 'loading') return <main>Loading</main>;

  if (session.status !== 'authenticated') return <></>;

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
export { Footer, Nav };
