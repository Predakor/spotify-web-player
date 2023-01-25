import UserAccount from '@components/UserAccount/UserAccount';
import { selectInView } from '@store/scrollSlice';
import { useSelector } from 'react-redux';

function Header() {
  const inView = useSelector(selectInView);
  return (
    <header
      className={`sticky top-0 p-4 
      ${inView ? 'bg-none' : 'bg-primary-400'} 
      z-10 transition-colors`}
    >
      <UserAccount />
    </header>
  );
}
export default Header;
