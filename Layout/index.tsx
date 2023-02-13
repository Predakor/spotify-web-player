import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { SpotifyUser } from 'types/spotifyUser';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

interface LayoutProps {
  children?: ReactNode;
  extendHeader?: ReactNode;
  header?: ReactNode;
}

function Layout({ children, extendHeader }: LayoutProps) {
  const { status, data } = useSession();
  if (status === 'loading') {
    return (
      <main className="flex h-screen animate-pulse flex-col items-center justify-center">
        <h1 className="text-6xl text-primary-700">Loading</h1>
      </main>
    );
  }

  const user = data?.user as SpotifyUser;
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto] lg:grid-cols-[auto,1fr]">
      <span className="absolute -z-50 h-[70vh] w-full bg-gradient-to-b from-primary-900" />
      <Aside />
      <Header user={user}>{extendHeader}</Header>
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
export { Footer, Header };
