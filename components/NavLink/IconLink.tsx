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
    <Link href={href}>
      <a
        className={`lg:flex lg:items-center lg:gap-2 ${activeStyle} transition hover:text-primary-focus`}
        aria-label={`go to ${text} page`}
      >
        {children}
        <p className={textClasses}>{text}</p>
      </a>
    </Link>
  );
}

export default IconLink;
