import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import { wrapper } from 'store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
