import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
}

function Grid({ children, title }: Props) {
  return (
    <section aria-label={title}>
      {title && <h2 className="p-2 text-3xl font-semibold">{title}</h2>}

      <div
        className={`grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7`}
      >
        {children}
      </div>
    </section>
  );
}

export default Grid;
