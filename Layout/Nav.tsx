import NavLink from '@components/NavLink/NavLink';
import {
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  StatisticIcon,
} from '@icons/NavIcons';
import navData from '@utils/navData';

type iconNames = 'HomeIcon' | 'LibraryIcon' | 'SearchIcon' | 'StatisticIcon';
function IconComponent({ name, active }: { name: iconNames; active: boolean }) {
  const icons = {
    HomeIcon: <HomeIcon active={active} />,
    LibraryIcon: <LibraryIcon active={active} />,
    SearchIcon: <SearchIcon active={active} />,
    StatisticIcon: <StatisticIcon active={active} />,
  };
  return icons[name];
}
function Nav({ pathname }: { pathname: string }) {
  return (
    <nav className="menu text-2xl" aria-label="primary">
      {navData.map((data) => {
        const { href, text, icon } = data;
        const active = pathname === href;
        return (
          <NavLink href={href} text={text} active={active} key={text}>
            <IconComponent name={icon} active={active} />
          </NavLink>
        );
      })}
    </nav>
  );
}
export default Nav;
