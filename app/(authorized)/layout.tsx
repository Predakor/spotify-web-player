import Layout from '@layout/Layouts';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

function layout({ children }: Props) {
  return <Layout>{children}</Layout>;
}

export default layout;
