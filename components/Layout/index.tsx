import { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
export { Footer, Nav };
