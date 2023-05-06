import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  vertical?: boolean;
  header?: ReactNode;
}
function Shelf({ children, title, vertical, header }: Props) {
  const orientation = vertical
    ? ''
    : 'grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7';

  return (
    <section aria-label={title}>
      <header className="flex items-center justify-between px-2 py-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        {header ?? null}
      </header>
      <div className={`grid gap-4 ${orientation}`}>{children}</div>
    </section>
  );
}
export default Shelf;
