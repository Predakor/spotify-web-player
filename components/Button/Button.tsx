import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction;
  stopPrepagation?: boolean;
}

function Button(props: ButtonProps) {
  const { stopPrepagation, className, onClick, ...restProps } = props;

  const clickHandler = (e: MouseEvent) => {
    if (stopPrepagation) e.stopPropagation();
    onClick();
  };

  return (
    <button
      {...restProps}
      type="button"
      className={`btn-ghost btn-circle btn text-xl lg:text-2xl ${className}`}
      onClick={(e) => clickHandler(e)}
    />
  );
}
export default Button;
