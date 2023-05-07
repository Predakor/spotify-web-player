import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stopPrepagation?: boolean;
}

function Button(props: ButtonProps) {
  const { stopPrepagation, className, onClick, ...restProps } = props;

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (stopPrepagation) e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <button
      {...restProps}
      type="button"
      className={`btn-ghost btn text-xl ${className}`}
      onClick={clickHandler}
    />
  );
}
export default Button;
