import UserAccount from '@components/UserAccount/UserAccount';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

function NavLink({ href, children }: { href: string; children?: ReactNode }) {
  const path = useRouter().pathname;
  const isActivePage = path === href;
  const activeClass = 'text-green-500';

  return (
    <Link href={href}>
      <a
        className={`${
          isActivePage ? activeClass : ''
        } hover:text-green-600 transition-colors `}
      >
        {children}
      </a>
    </Link>
  );
}

function Nav() {
  return (
    <nav className="flex gap-1 p-1 text-xl">
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/playlist'}>Playlist</NavLink>
      <NavLink href={'/stats'}>Stats</NavLink>

      <UserAccount />
    </nav>
  );
}
export default Nav;
