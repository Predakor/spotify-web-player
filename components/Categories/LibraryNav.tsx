import { libraryNavData } from '@utils/navData';
import NavItems from '@layout/Nav/NavItems';
import { useRouter } from 'next/router';

function LibraryNav() {
  const { pathname } = useRouter();

  return (
    <nav className="flex gap-2" aria-label="Library page internal navigation">
      <NavItems navData={libraryNavData} activePage={pathname} />
    </nav>
  );
}
export default LibraryNav;
