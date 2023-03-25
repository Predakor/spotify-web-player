import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction;
  stopPrepagation?: boolean;
}

function Button(props: ButtonProps) {
  const { stopPrepagation, className = '', children, onClick } = props;

  const clickHandler = (e: MouseEvent) => {
    if (stopPrepagation) e.stopPropagation();
    onClick();
  };

  return (
    <button
      {...props}
      type="button"
      className={`button ${className}`}
      onClick={(e) => clickHandler(e)}
    >
      {children}
    </button>
  );
}
export default Button;
