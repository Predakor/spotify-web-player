import { lazy, ReactNode } from 'react';

export interface DropdownProps {
  expanded: boolean;
  className?: string;
  children: ReactNode;
  closeFunction?: () => void;
}

function Dropdown({ expanded, children }: DropdownProps) {
  return <div className={!expanded ? 'invisible' : ''}>{children}</div>;
}
export default Dropdown;
