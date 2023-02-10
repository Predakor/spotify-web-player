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
  main?: ReactNode;
}

function Layout({ children, extendHeader, main }: LayoutProps) {
  const session = useSession();
  if (session.status === 'loading')
    return (
      <main className="flex h-full w-full items-center justify-center">
        <div className="text-3xl font-bold text-primary-700">
          <p className="animate-pulse">Loading</p>
        </div>
      </main>
    );

  const user = session.data?.user as SpotifyUser;
  return (
    <>
      <Aside className={'row-span-3'} />
      <Header user={user}>{extendHeader}</Header>
      {main ?? <Main className="relative">{children}</Main>}
      <Footer className={'sticky bottom-0 col-span-2'} />
    </>
  );
}
export default Layout;
export { Footer, Header };
