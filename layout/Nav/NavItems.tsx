import IconLink from '@components/NavLink/IconLink';
import NavLink from '@components/NavLink/NavLink';
import { NavItemData } from '@utils/navData';

interface Props {
  navData: NavItemData[];
  activePage: string;
}

function NavItems({ navData, activePage }: Props) {
  return (
    <>
      {navData.map((data) => {
        const { href, text, Icon } = data;
        const active = activePage === href;
        return Icon ? (
          <IconLink href={href} text={text} active={active} key={text}>
            <Icon active={active} />
          </IconLink>
        ) : (
          <NavLink
            href={href}
            text={text}
            active={active}
            activeStyles="bg-orange"
            key={text}
          />
        );
      })}
    </>
  );
}

export default NavItems;
