import { ReactNode } from 'react';

export interface DropdownProps {
  expanded: boolean;
  className?: string;
  children: ReactNode;
  closeFunction?: () => void;
}

function Dropdown({ expanded, children }: DropdownProps) {
  return expanded ? <>{children}</> : null;
}
export default Dropdown;
