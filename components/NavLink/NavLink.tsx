import { ReactNode } from 'react';
import Link from 'next/link';

export interface NavLinkProps {
  href: string;
  active: boolean;
  text?: string;
  children?: ReactNode;
}

function NavLink({ href, active, text, children }: NavLinkProps) {
  const activeStyle = active ? 'active font-bold' : '';

  return (
    <Link href={href}>
      <a
        className={`lg:flex lg:items-center lg:gap-2 ${activeStyle} transition-colors hover:text-primary-focus`}
        aria-label={`go to ${text} page`}
      >
        {children}
        {text && <p>{text}</p>}
      </a>
    </Link>
  );
}
export default NavLink;
