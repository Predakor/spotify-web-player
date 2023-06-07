import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  active: boolean;
  text: string;
  children?: ReactNode;
  hideText?: boolean;
}

function IconLink({ href, active, text, children, hideText }: Props) {
  const activeStyle = active ? 'active font-bold' : '';
  const textClasses = hideText ? 'sr-only' : '';

  return (
    <Link
      href={href}
      className={`${activeStyle} transition hover:text-primary-focus lg:flex lg:items-center lg:gap-2`}
      aria-label={`go to ${text} page`}
    >
      {children}
      <p className={textClasses}>{text}</p>
    </Link>
  );
}

export default IconLink;
