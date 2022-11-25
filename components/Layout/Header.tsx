import { useSelector } from 'react-redux';
import { selectInView } from '@store/scrollSlice';
import Nav from './Nav';

function Header() {
  const inView = useSelector(selectInView);
  return (
    <header
      className={`sticky top-0 p-4 ${
        inView ? 'bg-none' : 'bg-primary-400'
      } z-10 transition-colors`}
    >
      <Nav />
    </header>
  );
}
export default Header;
