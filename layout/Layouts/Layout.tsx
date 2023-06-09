'use client';

import Loading from '@layout/Loading';
import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';
import FoterWraper from '../Footer/Footer';
import Header from '../Header';
import AuthorizedLayout from './AuthorizedLayout';

interface LayoutProps {
  children?: ReactNode;
  extendHeader?: ReactNode;
  header?: ReactNode;
}

function Layout({ children, extendHeader }: LayoutProps) {
  const { status, data } = useSession();
  console.log(data);

  if (status === 'loading') return <Loading />;

  return (
    <AuthorizedLayout extendedHeader={extendHeader}>
      {children}
    </AuthorizedLayout>
  );
}

export default Layout;
export { FoterWraper, Header };
