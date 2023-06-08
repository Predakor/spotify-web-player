import { navItemData } from '@utils/navData';
import NavItems from '../NavItems';

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav className="btm-nav static" aria-label="primary">
      <NavItems activePage={pathname} navData={navItemData} />
    </nav>
  );
}
export default MobileNav;
