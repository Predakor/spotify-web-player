import NavLink from '@components/NavLink/NavLink';
import { navItemData } from '@utils/navData';

function NavItems({ activePage }: { activePage: string }) {
  return (
    <>
      {navItemData.map((data) => {
        const { href, text, Icon } = data;
        const active = activePage === href;
        return (
          <NavLink href={href} text={text} active={active} key={text}>
            <Icon active={active} />
          </NavLink>
        );
      })}
    </>
  );
}

export default NavItems;
