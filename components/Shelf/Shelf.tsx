import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  vertical?: boolean;
}
function Shelf({ children, title, vertical }: Props) {
  const orientation = vertical
    ? ''
    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7';
  return (
    <section aria-label={title}>
      <h2 className="py-4 text-3xl font-semibold">{title}</h2>
      <div className={`grid gap-4 overflow-clip ${orientation}`}>
        {children}
      </div>
    </section>
  );
}
export default Shelf;
