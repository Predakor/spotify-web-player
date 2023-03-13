import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}
function Shelf({ children, title }: Props) {
  return (
    <section aria-label={title}>
      <h2 className="py-4 text-3xl font-semibold">{title}</h2>
      <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">{children}</div>
    </section>
  );
}
export default Shelf;
