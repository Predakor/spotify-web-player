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
  const session = useSession();
  if (session.status === 'loading')
    return (
      <main className="flex w-full items-center justify-center">
        <div className="text-3xl font-bold text-primary-700">
          <p className="animate-pulse">Loading</p>
        </div>
      </main>
    );

  const user = session.data?.user as SpotifyUser;
  return (
    <div className="grid min-h-fit w-screen max-w-full grid-rows-[auto,1fr] lg:grid-cols-[auto,1fr]">
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
