import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  onClick: VoidFunction;
  className?: string;
  disabled?: boolean;
  hide?: boolean;
  ariaLabel?: string;
  ariaPressed?: boolean | 'mixed';
  ariaExpanded?: boolean;
  children?: ReactNode;
  stopPrepagation?: boolean;
}

function Button({
  onClick,
  className,
  disabled,
  hide = false,
  children,
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  stopPrepagation,
}: ButtonProps) {
  const visible = hide ? 'invisible' : '';

  const clickHandler = (e: MouseEvent) => {
    if (stopPrepagation) e.stopPropagation();
    onClick();
  };
  return (
    <button
      type="button"
      onClick={(e) => clickHandler(e)}
      className={`button text-2xl ${className} ${visible}`}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
}
export default Button;
