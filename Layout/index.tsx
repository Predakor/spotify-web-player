import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
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

function Layout({ children, header, extendHeader, main }: LayoutProps) {
  const session = useSession();
  if (session.status === 'loading')
    return (
      <main className="flex items-center justify-center w-full h-full">
        <div className="font-bold text-3xl text-primary-700">
          <p className="animate-pulse">Loading</p>
        </div>
      </main>
    );

  return (
    <>
      <Aside className={'row-span-3'} />
      {header ?? <Header className="sticky top-0">{extendHeader}</Header>}
      {main ?? <Main className="relative">{children}</Main>}
      <Footer className={'sticky bottom-0 col-span-2'} />
    </>
  );
}
export default Layout;
export { Footer, Header };
