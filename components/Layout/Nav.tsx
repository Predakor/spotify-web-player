import NavLink from '@components/NavLink/NavLink';
import {
  MdHomeFilled,
  MdOutlineLibraryMusic,
  MdOutlineAnalytics,
  MdOutlineSearch,
} from 'react-icons/md';

function Nav() {
  return (
    <nav className="flex flex-col gap-1 p-2 text-2xl ">
      <NavLink href={'/'} text={'Home'}>
        <MdHomeFilled />
      </NavLink>
      <NavLink href={'/playlist'} text={'Playlist'}>
        <MdOutlineLibraryMusic />
      </NavLink>
      <NavLink href={'/stats'} text={'Stats'}>
        <MdOutlineAnalytics />
      </NavLink>
      <NavLink href={'/search'} text={'Search'}>
        <MdOutlineSearch />
      </NavLink>
    </nav>
  );
}
export default Nav;
