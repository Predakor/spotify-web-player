import { ReactNode } from 'react';

interface Props {
  title: ReactNode;
  className?: string;
  content?: ReactNode;
  children?: ReactNode;
  onClick: VoidFunction;
}

function GoCard({ title, content, children, className = '', onClick }: Props) {
  return (
    <article
      className={`card-hover card-compact card cursor-pointer bg-base-100 duration-150 ${className}`}
      onClick={onClick}
      tabIndex={0}
    >
      <div className="group card-body">
        {children}
        <h2 className="card-title truncate">{title}</h2>
        <span className="line-clamp-2">{content}</span>
      </div>
    </article>
  );
}
export default GoCard;
