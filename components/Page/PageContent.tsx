import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

function PageContent({ children }: Props) {
  return <section className="flex flex-col gap-4">{children}</section>;
}

export default PageContent;
