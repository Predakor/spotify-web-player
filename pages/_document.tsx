import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="bg-base-300" lang="en" data-theme="forest">
      <Head>
        <meta
          title="Discofy"
          name="description"
          content="Custom spotify web player build using react with next.js "
          lang="en"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
