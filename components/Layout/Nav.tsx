import NavLink from '@components/NavLink/NavLink';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  StatisticIcon,
} from '@icons/NavIcons';
import navData from '@utils/navData';

function IconComponent({ name, active }: { name: string; active: boolean }) {
  const icons: any = {
    HomeIcon: <HomeIcon active={active} />,
    LibraryIcon: <LibraryIcon active={active} />,
    SearchIcon: <SearchIcon active={active} />,
    StatisticIcon: <StatisticIcon active={active} />,
  };
  return icons[name] || null;
}
function Nav() {
  const { pathname } = useRouter();
  return (
    <nav className="flex flex-col gap-2" aria-label="primary">
      {navData.map((data) => {
        const { href, text, icon } = data;
        const active = pathname === href;
        return (
          <NavLink href={href} text={text} active={active} key={text}>
            <IconComponent name={icon || ''} active={active} />
          </NavLink>
        );
      })}
    </nav>
  );
}
export default Nav;
