import { ReactNode } from 'react';

interface Props {
  title: string;
  className?: string;
  children?: ReactNode;
}
function ContentShelf({ title, className, children }: Props) {
  return (
    <section className={`grid grid-cols-4 gap-8 ${className}`}>
      <h2 className="col-span-full text-4xl font-bold text-text-important">
        {title}
      </h2>
      {children}
    </section>
  );
}
export default ContentShelf;