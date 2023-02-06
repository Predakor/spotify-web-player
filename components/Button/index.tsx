import { ReactNode } from 'react';

export interface ButtonProps {
  onClick: VoidFunction;
  className?: string;
  disabled?: boolean;
  hide?: boolean;
  ariaLabel?: string;
  ariaPressed?: boolean | 'mixed';
  ariaExpanded?: boolean;
  children?: ReactNode;
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
}: ButtonProps) {
  const visible = hide ? 'invisible' : '';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className} ${visible}`}
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
