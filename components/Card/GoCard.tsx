import { ReactNode } from 'react';

interface Props {
  title: ReactNode;
  content: ReactNode;
  children: ReactNode;
  onClick: VoidFunction;
}
function GoCard({ title, content, children, onClick }: Props) {
  return (
    <article className="card-compact card bg-base-100" onClick={onClick}>
      <div className="group card-body">
        {children}
        <h2 className="card-title truncate">{title}</h2>
        <span className="flex-1 overflow-clip">{content}</span>
      </div>
    </article>
  );
}
export default GoCard;
