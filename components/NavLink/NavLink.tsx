import Link from 'next/link';

import { ReactNode } from 'react';

export interface NavLinkProps {
  href: string;
  active: boolean;
  text?: string;
  children?: ReactNode;
}

function NavLink({ href, active, text, children }: NavLinkProps) {
  const activeStyle = active ? 'text-primary-500' : '';

  return (
    <Link href={href}>
      <a
        className={`flex items-center gap-4 ${activeStyle} hover:text-primary-600 transition-colors `}
      >
        {children}
        {text && <p>{text}</p>}
      </a>
    </Link>
  );
}
export default NavLink;
