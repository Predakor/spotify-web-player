import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  vertical?: boolean;
}
function Shelf({ children, title, vertical }: Props) {
  const orientation = vertical ? '' : ' auto-cols-fr grid-flow-col';
  return (
    <section aria-label={title}>
      <h2 className="py-4 text-3xl font-semibold">{title}</h2>
      <div className={`grid gap-4 ${orientation}`}>{children}</div>
    </section>
  );
}
export default Shelf;
