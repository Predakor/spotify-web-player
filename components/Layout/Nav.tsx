import UserAccount from '@components/UserAccount/UserAccount';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

function NavLink({ href, children }: { href: string; children?: ReactNode }) {
  const path = useRouter().pathname;
  const isActivePage = path === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActivePage ? 'text-primary-500' : ''
        } hover:text-primary-600 transition-colors `}
      >
        {children}
      </a>
    </Link>
  );
}

function Nav() {
  return (
    <nav className="flex gap-1 items-center text-xl ">
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/playlist'}>Playlist</NavLink>
      <NavLink href={'/stats'}>Stats</NavLink>
      <UserAccount />
    </nav>
  );
}
export default Nav;
