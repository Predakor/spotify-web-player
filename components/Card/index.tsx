import { ReactNode } from 'react';

export interface CardProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  onClick?: Function;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div className={` ${className}`} onClick={() => onClick}>
      {children}
    </div>
  );
}
