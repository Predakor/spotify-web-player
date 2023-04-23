import { MouseEvent, ReactElement } from 'react';
import DropdownIcon from '@icons/DropdownIcon';

interface Props {
  expanded: boolean;
  onClick?: () => void;
  children?: ReactElement;
}

function DropdownButton({ expanded, onClick, children }: Props) {
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const hasFocus = document.activeElement === e.currentTarget;
    if (expanded && hasFocus) {
      e.currentTarget.blur();
    }
    onClick && onClick();
  };

  return (
    <button
      className="button"
      onClick={(e) => clickHandler(e)}
      aria-label={'Open/close dropdown menu'}
      aria-pressed={expanded}
      role="button"
    >
      {children ?? <DropdownIcon expanded={expanded} />}
    </button>
  );
}

export default DropdownButton;
