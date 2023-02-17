import { MouseEventHandler, ReactNode } from 'react';

export interface CardProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  onClick?: MouseEventHandler;
}

function Card({ children, className, onClick }: CardProps) {
  className ??= '';
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
