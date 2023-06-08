import { ReactNode } from 'react';
import Loading from '@layout/Loading';
import { useSession } from 'next-auth/react';
import { SpotifyUser } from 'types/spotifyUser';
import FoterWraper from '../Footer/Footer';
import Header from '../Header';
import AuthorizedLayout from './AuthorizedLayout';
import UnathorizedLayout from './UnathorizedLayout';

interface LayoutProps {
  children?: ReactNode;
  extendHeader?: ReactNode;
  header?: ReactNode;
}

function Layout({ children, extendHeader }: LayoutProps) {
  const { status, data } = useSession();
  if (status === 'loading') return <Loading />;

  if (!data?.user) return <UnathorizedLayout>{children}</UnathorizedLayout>;

  return (
    <AuthorizedLayout
      user={data.user as SpotifyUser}
      extendedHeader={extendHeader}
    >
      {children}
    </AuthorizedLayout>
  );
}

export default Layout;
export { FoterWraper, Header };
