import { ReactNode } from 'react';
import Main from 'Layout/Main';

interface Props {
  children: ReactNode;
  extendedHeader?: ReactNode;
}
function UnathorizedLayout({ children, extendedHeader }: Props) {
  return (
    <>
      <nav> Log In</nav>
      <Main>{children}</Main>
      <footer>Log in </footer>
    </>
  );
}
export default UnathorizedLayout;
