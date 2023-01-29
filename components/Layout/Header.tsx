import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import UserAccount from '@components/UserAccount/UserAccount';
import { selectInView } from '@store/scrollSlice';

export interface HeaderProps {
  className?: string;
  children?: ReactNode;
}
function Header({ className = '', children }: HeaderProps) {
  const inView = useSelector(selectInView);
  const viewStyle = inView ? 'bg-none' : 'bg-primary-400';
  return (
    <header
      className={`sticky top-0 p-4 ${viewStyle} ${className} z-10 transition-colors`}
    >
      {children}
      <UserAccount />
    </header>
  );
}
export default Header;
