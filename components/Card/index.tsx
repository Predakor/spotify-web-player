import { MouseEventHandler, ReactNode } from 'react';

export interface CardProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  onClick?: MouseEventHandler;
}

function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`group card bg-base-100 focus-within:bg-opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
