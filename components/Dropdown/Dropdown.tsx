import { ReactNode } from 'react';

export interface DropdownProps {
  expanded: boolean;
  children: ReactNode;
  closeFunction?: () => void;
}

function Dropdown({ expanded, children }: DropdownProps) {
  const visible = expanded ? '' : 'hidden';
  return <div className={`${visible}`}>{children}</div>;
}
export default Dropdown;
