import { navItemData } from '@utils/navData';
import NavItems from './NavItems';

function Nav({ pathname }: { pathname: string }) {
  return (
    <nav className="menu text-2xl" aria-label="primary">
      <NavItems navData={navItemData} activePage={pathname} />
    </nav>
  );
}
export default Nav;
