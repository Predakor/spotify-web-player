import { ReactElement } from 'react';

export interface ToogleButtonProps {
  className?: string;
  onClick?: () => void;
  toogled: boolean;
  children: (active: boolean) => ReactElement;
  ariaLabel: string;
}

function ToogleButton({
  className,
  onClick,
  toogled,
  children,
  ariaLabel,
}: ToogleButtonProps) {
  const active = toogled ? 'text-primary-500' : 'text-text';
  return (
    <button
      type="button"
      className={`button ${active} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={toogled}
    >
      {children(toogled)}
    </button>
  );
}

export default ToogleButton;
