import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export interface NavLinkProps {
  href: string;
  text?: string;
  children?: ReactNode;
}

function NavLink({ href, text, children }: NavLinkProps) {
  const path = useRouter().pathname;
  const activeStyle = path === href ? 'text-primary-500' : '';

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
