import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  vertical?: boolean;
  header?: ReactNode;
}
function Shelf({ children, title, vertical, header }: Props) {
  const orientation = vertical ? '' : 'grid-flow-col auto-cols-fr';

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
