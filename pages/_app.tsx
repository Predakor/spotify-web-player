import { ReactElement, ReactNode } from 'react';
import Layout from 'layout/Layouts/Layout';
import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import '../styles/globals.css';

type anyObject = Record<string, unknown>;
export type NextPageWithLayout<Page = anyObject, IP = Page> = NextPage<
  Page,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
