import { ReactNode } from 'react';

interface Props {
  title: string;
  className?: string;
  children?: ReactNode;
}
function ContentShelf({ title, className = '', children }: Props) {
  return (
    <section
      className={`flex flex-1 flex-col gap-4 ${className}`}
      aria-label={title}
    >
      <h2 className="text-4xl font-bold text-text-important">{title}</h2>
      <div className="carousel basis-2/3 gap-8">{children}</div>
    </section>
  );
}
export default ContentShelf;
