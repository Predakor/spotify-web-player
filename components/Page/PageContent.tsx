import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function PageContent({ children, className }: Props) {
  return (
    <section id="mainContent" className={`${className} flex flex-col gap-4`}>
      {children}
    </section>
  );
}

export default PageContent;
