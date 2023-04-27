import Link from 'next/link';

export interface NavLinkProps {
  href: string;
  text: string;
  active: boolean;
  activeStyles?: string;
}

function NavLink({ href, text, active, activeStyles = '' }: NavLinkProps) {
  const activeStyle = active ? `active font-bold ${activeStyles}` : '';

  return (
    <Link href={href}>
      <a
        className={`${activeStyle} transition-colors hover:text-primary-focus`}
        aria-label={`go to ${text} page`}
      >
        {text}
      </a>
    </Link>
  );
}
export default NavLink;
