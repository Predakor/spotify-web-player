import { ReactNode } from 'react';

export interface PlaybackButtonProps {
  onClick: VoidFunction;
  disabled: boolean;
  hideDisabled?: boolean;
  children?: ReactNode;
  className?: string;
}

function PlaybackButton({
  onClick,
  disabled,
  hideDisabled,
  children,
  className = '',
}: PlaybackButtonProps) {
  const hide = hideDisabled && disabled ? 'invisible' : '';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${hide} bg-transparent text-secondary-300 first:disabled:text-secondary-700 ${className}`}
    >
      {children}
    </button>
  );
}
export default PlaybackButton;
