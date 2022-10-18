import { getSession, GetSessionParams } from 'next-auth/react';
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

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
