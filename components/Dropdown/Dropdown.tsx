import DropdownIcon from '@icons/DropdownIcon';
import { ReactElement, ReactNode, useState } from 'react';

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
  const [expanded, setExpanded] = useState(false);

  return (
    <details
      open={!expanded}
      onClick={() => setExpanded((prev) => !prev)}
      className={`${dropdownParent} ${className}`}
    >
      <summary className="btn-ghost btn-sm btn-circle btn p-0 text-xl">
        <DropdownIcon expanded={expanded} />
      </summary>
      <div className={`dropdown-content w-full`}>{children}</div>
    </details>
  );
}

export default Dropdown;
