import { MouseEvent } from 'react';
import DropdownIcon from '@icons/DropdownIcon';

interface Props {
  onClick: () => void;
  expanded: boolean;
}
function DropdownButton({ onClick, expanded = false }: Props) {
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (expanded && document.activeElement === e.currentTarget) {
      e.currentTarget.blur();
    }
    onClick();
  };

  return (
    <button
      onClick={(e) => clickHandler(e)}
      aria-label={'Open/close dropdown menu'}
      aria-pressed={expanded}
      role="button"
    >
      <DropdownIcon expanded={expanded} />
    </button>
  );
}
export default DropdownButton;
