import Layout from '@layout/Layouts';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './providers';
import '../styles/globals.css';

export const medadata: Metadata = {
  title: 'Discofy',
  description: 'Custom spotify web player build using react with next.js ',
};

interface Props {
  children: ReactNode;
}

function RooyLayout({ children }: Props) {
  return (
    <html className="bg-base-300" lang="en" data-theme="forest">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>{<Providers>{children}</Providers>}</body>
    </html>
  );
}
export default RooyLayout;
