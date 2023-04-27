import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function PageContent({ children }: Props) {
  return <section className="flex flex-col gap-4">{children}</section>;
}

export default PageContent;
