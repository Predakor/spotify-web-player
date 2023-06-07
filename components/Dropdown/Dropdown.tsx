import { ReactElement, ReactNode, useRef, useState } from 'react';
import DropdownButton from '@components/Buttons/DropdownButtons';

export interface DropdownProps {
  children: ReactNode;
  className?: string;
  icon?: (active: boolean) => ReactElement;
  customParent?: boolean;
  onClick?: () => void;
}

function Dropdown(props: DropdownProps) {
  const { children, className, icon, customParent } = props;
  const dropdownParent = customParent ? '' : 'dropdown';

  const targetRef = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState(false);

  const blurHandler = () => focus && setFocus(false);
  const focusHandler = () => !focus && setFocus(true);

  return (
    <div
      className={`${dropdownParent} ${className}`}
      onFocus={focusHandler}
      onBlur={blurHandler}
      ref={targetRef}
    >
      <DropdownButton expanded={focus}>{icon && icon(focus)}</DropdownButton>
      <div className={`dropdown-content w-full`}>{children}</div>
    </div>
  );
}

export default Dropdown;
